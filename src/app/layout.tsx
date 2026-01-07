import type { Metadata } from "next"
import { K2D, Readex_Pro } from "next/font/google"
import "./globals.css"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const k2d = K2D({
  variable: "--font-k2d",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800"],
})

const readex = Readex_Pro({
  variable: "--font-readex",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "AMI 2026 – Autonomous Machine Intelligence",
  description:
    "AMI 2026 is an international scientific conference on Autonomous Machine Intelligence.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${k2d.variable} ${readex.variable} antialiased bg-background text-foreground`}
      >
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
