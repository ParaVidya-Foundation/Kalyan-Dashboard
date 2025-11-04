"use client"

import dynamic from "next/dynamic"

const HeaderDynamic = dynamic(() => import("./header").then(m => m.Header), { ssr: false })

export default function ClientHeader() {
  return <HeaderDynamic />
}


