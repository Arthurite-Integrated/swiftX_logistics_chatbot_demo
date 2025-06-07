import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import LexChatbot from "@/components/lex-chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SwiftX Logistics - Africa's Most Reliable Logistics Service",
  description:
    "Professional airfreight and landfreight services across Africa. Fast, secure, and reliable logistics solutions for your business needs.",
  keywords: "logistics, airfreight, landfreight, shipping, cargo, Africa, Nigeria, SwiftX",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <LexChatbot />
    </html>
  )
}
