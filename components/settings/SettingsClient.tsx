"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Globe,
  KeyRound,
  Moon,
  ShieldCheck,
  Lock,
  Database,
  AlertTriangle,
} from "lucide-react";

import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { QuickActionsPanel } from "@/components/dashboard/quick-actions-panel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

/* ------------------------------- OPTIONS ------------------------------ */

const preferenceOptions = [
  { label: "Career focus (10th house)", value: "Career" },
  { label: "Healing & wellness (6th/8th)", value: "Wellness" },
  { label: "Relationships & marriage (7th)", value: "Relationships" },
  { label: "Inner growth & spirituality (12th)", value: "Spirituality" },
];

const motionConfig = { duration: 0.35, ease: [0.16, 1, 0.3, 1] };

/* --------------------------------------------------------------------- */

export default function SettingsClient() {
  const [language, setLanguage] = useState("english");
  const [timezone, setTimezone] = useState("asia/kolkata");
  const [preference, setPreference] = useState(preferenceOptions[0].value);
  const [intent, setIntent] = useState("");
  const [apiVisible, setApiVisible] = useState(false);

  const [notifications, setNotifications] = useState({
    rituals: true,
    tests: true,
    store: false,
    loginAlerts: true,
  });

  const [security, setSecurity] = useState({
    twoFA: false,
    newDeviceAlerts: true,
  });

  /* ------------------------ CLEANER CARD CLASS ------------------------ */

  const cardClass =
    "rounded-3xl border border-yellow-100 bg-gradient-to-b from-yellow-50 to-white p-6 shadow-sm backdrop-blur-xl";

  const rightPanel = (
    <QuickActionsPanel
      actions={[
        {
          icon: ShieldCheck,
          label: "Reset layout",
          description: "Restore clean defaults.",
          actionLabel: "Reset",
        },
        {
          icon: Globe,
          label: "Privacy report",
          description: "Download your privacy summary.",
          actionLabel: "Export",
        },
      ]}
    />
  );

  return (
    <DashboardShell
      title="Settings"
      description="Manage your account & astrologic preferences with a clean experience."
      rightPanel={rightPanel}
    >
      {/* ------------------------------ ACCOUNT ------------------------------ */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={cardClass}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-yellow-700/70">
              Account
            </p>
            <h3 className="font-mono text-xl text-gray-900 mt-1">
              Profile Details
            </h3>
          </div>
          <Globe className="h-5 w-5 text-yellow-500/80" />
        </div>

        {/* Inputs */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <InputGroup label="Full name">
            <Input
              defaultValue="Aarav Desai"
              className="rounded-2xl border-yellow-100 bg-white"
            />
          </InputGroup>

          <InputGroup label="Email">
            <Input
              type="email"
              defaultValue="aarav@kalyan.ai"
              className="rounded-2xl border-yellow-100 bg-white"
            />
          </InputGroup>

          <InputGroup label="Language">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="rounded-2xl border-yellow-100 bg-white">
                <SelectValue placeholder="English" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="hindi">हिंदी</SelectItem>
                <SelectItem value="sanskrit">संस्कृत</SelectItem>
              </SelectContent>
            </Select>
          </InputGroup>

          <InputGroup label="Timezone">
            <Select value={timezone} onValueChange={setTimezone}>
              <SelectTrigger className="rounded-2xl border-yellow-100 bg-white">
                <SelectValue placeholder="Asia/Kolkata" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asia/kolkata">Asia/Kolkata</SelectItem>
                <SelectItem value="europe/london">Europe/London</SelectItem>
                <SelectItem value="america/new_york">
                  America/New York
                </SelectItem>
              </SelectContent>
            </Select>
          </InputGroup>
        </div>

        <div className="mt-6 flex justify-end">
          <Button className="rounded-full bg-yellow-500 text-gray-900 px-6 text-xs">
            Save Profile
          </Button>
        </div>
      </motion.section>

      {/* --------------------------- NOTIFICATIONS --------------------------- */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={cn(cardClass, "space-y-5")}
      >
        <SectionHeading icon={Bell} title="Notifications" subtitle="Reminders & alerts" />

        {[
          {
            key: "rituals",
            title: "Daily rituals",
            desc: "Transit-based reminders & remedies.",
          },
          {
            key: "tests",
            title: "Test reminders",
            desc: "Continue your learning journey.",
          },
          {
            key: "store",
            title: "Store updates",
            desc: "Perfumes, posters, gems & offers.",
          },
          {
            key: "loginAlerts",
            title: "Login alerts",
            desc: "Security notifications for new logins.",
          },
        ].map((item) => (
          <SettingRow
            key={item.key}
            title={item.title}
            desc={item.desc}
            checked={notifications[item.key as keyof typeof notifications]}
            onChange={(checked: boolean) =>
              setNotifications((prev) => ({ ...prev, [item.key]: checked }))
            }
          />
        ))}
      </motion.section>

      {/* ------------------------------ SECURITY ------------------------------ */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={cn(cardClass, "space-y-5")}
      >
        <SectionHeading icon={Lock} title="Security" subtitle="Protection & sessions" />

        <SettingRow
          title="Two-factor authentication"
          desc="Extra security layer for login."
          checked={security.twoFA}
          onChange={(v: boolean) => setSecurity((prev) => ({ ...prev, twoFA: v }))}
        />

        <SettingRow
          title="New device alerts"
          desc="Email alert when logged in from a new device."
          checked={security.newDeviceAlerts}
          onChange={(v: boolean) => setSecurity((prev) => ({ ...prev, newDeviceAlerts: v }))}
        />

        <div className="rounded-2xl border border-yellow-100 bg-yellow-50 p-4 flex items-start gap-3">
          <ShieldCheck className="h-5 w-5 text-yellow-600 mt-0.5" />
          <div>
            <p className="text-xs font-semibold text-gray-900">
              Active sessions
            </p>
            <p className="text-xs text-gray-600">
              Session management coming soon.
            </p>
          </div>
        </div>
      </motion.section>

      {/* --------------------------- DATA MANAGEMENT --------------------------- */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={cn(cardClass, "space-y-6")}
      >
        <SectionHeading icon={KeyRound} title="Data & API" subtitle="Your account archive" />

        <div className="grid gap-4 md:grid-cols-2">
          <CardMini icon={Database} title="Export account data" desc="Download Kundlis, logs & settings.">
            <Button
              variant="outline"
              className="rounded-full border-yellow-200 text-xs text-gray-800"
            >
              Export data
            </Button>
          </CardMini>

          <CardMini
            icon={AlertTriangle}
            title="Delete account"
            desc="This action is permanent."
            danger
          >
            <Button
              variant="outline"
              className="rounded-full border-red-300 text-xs text-red-600 hover:bg-red-100"
            >
              Request deletion
            </Button>
          </CardMini>
        </div>
      </motion.section>
    </DashboardShell>
  );
}

/* ======================================================================= */
/*                           REUSABLE COMPONENTS                            */
/* ======================================================================= */

function InputGroup({ label, children }: any) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.25em] text-gray-500">
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function SectionHeading({ icon: Icon, title, subtitle }: any) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="h-5 w-5 text-yellow-600/80" />
      <div>
        <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500">
          {title}
        </p>
        <h3 className="font-mono text-xl text-gray-900">{subtitle}</h3>
      </div>
    </div>
  );
}

function SettingRow({ title, desc, checked, onChange }: any) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-yellow-100 bg-white p-4">
      <div>
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="text-xs text-gray-600">{desc}</p>
      </div>
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  );
}

function CardMini({ icon: Icon, title, desc, children, danger = false }: any) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-4 flex items-start gap-3",
        danger
          ? "border-red-200 bg-red-50"
          : "border-yellow-100 bg-white"
      )}
    >
      <Icon className={cn("h-5 w-5", danger ? "text-red-500" : "text-yellow-600")} />
      <div>
        <p className="text-xs font-semibold text-gray-900">{title}</p>
        <p className="text-xs text-gray-600">{desc}</p>
        <div className="mt-3">{children}</div>
      </div>
    </div>
  );
}
