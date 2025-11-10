import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle, Vec3 } from 'ogl';

interface OrbProps {
  hue?: number;
  hoverIntensity?: number;
  rotateOnHover?: boolean;
  forceHoverState?: boolean;
}

export default function Orb({
  hue = 0,
  hoverIntensity = 0.2,
  rotateOnHover = true,
  forceHoverState = false
}: OrbProps) {
  const ctnDom = useRef<HTMLDivElement>(null);

  const vert = /* glsl */ `
    precision highp float;
    attribute vec2 position;
    attribute vec2 uv;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

  const frag = /* glsl */ `
    precision highp float;

    uniform float iTime;
    uniform vec3 iResolution;
    uniform float hue;
    uniform float hover;
    uniform float rot;
    uniform float hoverIntensity;
    varying vec2 vUv;

    vec3 rgb2yiq(vec3 c) {
      float y = dot(c, vec3(0.299, 0.587, 0.114));
      float i = dot(c, vec3(0.596, -0.274, -0.322));
      float q = dot(c, vec3(0.211, -0.523, 0.312));
      return vec3(y, i, q);
    }
    
    vec3 yiq2rgb(vec3 c) {
      float r = c.x + 0.956 * c.y + 0.621 * c.z;
      float g = c.x - 0.272 * c.y - 0.647 * c.z;
      float b = c.x - 1.106 * c.y + 1.703 * c.z;
      return vec3(r, g, b);
    }

    vec3 adjustHue(vec3 color, float hueDeg) {
      float hueRad = hueDeg * 3.14159265 / 180.0;
      vec3 yiq = rgb2yiq(color);
      float cosA = cos(hueRad);
      float sinA = sin(hueRad);
      float i = yiq.y * cosA - yiq.z * sinA;
      float q = yiq.y * sinA + yiq.z * cosA;
      yiq.y = i;
      yiq.z = q;
      return yiq2rgb(yiq);
    }

    float snoise3(vec3 p) {
      const float K1 = 0.333333333;
      const float K2 = 0.166666667;
      vec3 i = floor(p + (p.x + p.y + p.z) * K1);
      vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);
      vec3 e = step(vec3(0.0), d0 - d0.yzx);
      vec3 i1 = e * (1.0 - e.zxy);
      vec3 i2 = 1.0 - e.zxy * (1.0 - e);
      vec3 d1 = d0 - (i1 - K2);
      vec3 d2 = d0 - (i2 - K1);
      vec3 d3 = d0 - 0.5;
      vec4 h = max(0.6 - vec4(
        dot(d0, d0),
        dot(d1, d1),
        dot(d2, d2),
        dot(d3, d3)
      ), 0.0);
      vec4 n = h * h * h * h * vec4(
        dot(d0, vec3(0.5, 0.6, 0.7)),
        dot(d1, vec3(0.3, 0.7, 0.9)),
        dot(d2, vec3(0.6, 0.4, 0.8)),
        dot(d3, vec3(0.5, 0.5, 0.5))
      );
      return dot(vec4(20.0), n);
    }

    const vec3 baseColor1 = vec3(0.58, 0.35, 0.95);
    const vec3 baseColor2 = vec3(0.32, 0.75, 0.90);
    const vec3 baseColor3 = vec3(0.12, 0.12, 0.55);
    const float innerRadius = 0.6;

    vec4 draw(vec2 uv) {
      vec3 color1 = adjustHue(baseColor1, hue);
      vec3 color2 = adjustHue(baseColor2, hue);
      vec3 color3 = adjustHue(baseColor3, hue);

      float len = length(uv);
      float n = snoise3(vec3(uv * 0.6, iTime * 0.3)) * 0.5 + 0.5;

      float fade = smoothstep(1.1, innerRadius * 0.8, len);
      vec3 col = mix(color3, mix(color1, color2, n), fade);
      col *= 1.0 - len * 0.6; // reduce outer glow
      
      // Softer edges and less intense glow
      col = pow(col, vec3(1.1));
      col = clamp(col, 0.0, 1.0);

      return vec4(col, 0.9 - len * 0.4); // subtle transparency
    }

    void main() {
      vec2 fragCoord = vUv * iResolution.xy;
      vec2 center = iResolution.xy * 0.5;
      float size = min(iResolution.x, iResolution.y);
      vec2 uv = (fragCoord - center) / size * 2.0;
      
      uv *= 1.0 + hover * hoverIntensity * 0.08;
      float angle = rot;
      float s = sin(angle);
      float c = cos(angle);
      uv = vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y);

      gl_FragColor = draw(uv);
    }
  `;

  useEffect(() => {
    const container = ctnDom.current;
    if (!container) return;

    const renderer = new Renderer({ alpha: true, premultipliedAlpha: false });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    container.appendChild(gl.canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vert,
      fragment: frag,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Vec3(0, 0, 0) },
        hue: { value: hue },
        hover: { value: 0 },
        rot: { value: 0 },
        hoverIntensity: { value: hoverIntensity },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      program.uniforms.iResolution.value.set(width, height, width / height);
    }
    window.addEventListener("resize", resize);
    resize();

    let targetHover = 0;
    let currentRot = 0;
    const rotationSpeed = 0.3;
    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const uvX = ((x - rect.width / 2) / rect.width) * 2;
      const uvY = ((y - rect.height / 2) / rect.height) * 2;
      targetHover = Math.sqrt(uvX * uvX + uvY * uvY) < 0.8 ? 1 : 0;
    };

    container.addEventListener("mousemove", handleMouseMove);
    const handleMouseLeave = () => (targetHover = 0);
    container.addEventListener("mouseleave", handleMouseLeave);

    let rafId: number;
    let isMounted = true;
    const update = (t: number) => {
      if (!isMounted) return;
      rafId = requestAnimationFrame(update);
      const dt = (t - lastTime) * 0.001;
      lastTime = t;

      program.uniforms.iTime.value = t * 0.001;
      const effectiveHover = forceHoverState ? 1 : targetHover;
      program.uniforms.hover.value += (effectiveHover - program.uniforms.hover.value) * 0.1;

      if (rotateOnHover && effectiveHover > 0.5) {
        currentRot += dt * rotationSpeed;
      }
      program.uniforms.rot.value = currentRot;

      renderer.render({ scene: mesh });
    };
    update(0);

    return () => {
      isMounted = false;
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener("resize", resize);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
        // Safely remove canvas if it exists
        if (gl.canvas && gl.canvas.parentNode === container) {
          try {
            container.removeChild(gl.canvas);
          } catch (e) {
            // Canvas already removed or container detached
            console.debug('Canvas cleanup:', e);
          }
        }
      }
      // Safely lose WebGL context
      try {
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      } catch (e) {
        // Context already lost
        console.debug('WebGL context cleanup:', e);
      }
    };
  }, [hue, hoverIntensity, rotateOnHover, forceHoverState]);

  return <div ref={ctnDom} className="w-full h-full" />;
}
