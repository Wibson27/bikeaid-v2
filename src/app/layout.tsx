import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bike, Facebook, Twitter, Instagram } from "lucide-react"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BikeAid - Bantuan Darurat Motor 24/7",
  description: "Platform layanan darurat motor on-demand pertama di Indonesia. Cepat, transparan, dan terpercaya.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-300`}>
        <header className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/30 backdrop-blur-lg">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <Bike className="h-7 w-7 text-cyan-400" />
              <span className="text-xl font-bold text-white tracking-wider">
                Bike<span className="text-cyan-400">Aid</span>
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link href="/#services" className="hover:text-cyan-400 transition-colors duration-300" prefetch={false}>
                Layanan
              </Link>
              <Link href="/#pricing" className="hover:text-cyan-400 transition-colors duration-300" prefetch={false}>
                Harga
              </Link>
              <Link href="/#business" className="hover:text-cyan-400 transition-colors duration-300" prefetch={false}>
                Untuk Bisnis
              </Link>
              <Link href="/menjadi-mitra" className="text-cyan-400 font-semibold" prefetch={false}>
                Menjadi Mitra
              </Link>
            </nav>
            <Button
              className="bg-pink-500 text-white shadow-[0_0_10px_theme(colors.pink.500)] hover:bg-pink-600 hover:shadow-[0_0_20px_theme(colors.pink.500)] transition-all duration-300"
              size="sm"
            >
              Download Aplikasi
            </Button>
          </div>
        </header>

        {children}

        <footer className="bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="col-span-2 md:col-span-1">
                <Link href="/" className="flex items-center gap-2 mb-4" prefetch={false}>
                  <Bike className="h-7 w-7 text-cyan-400" />
                  <span className="text-xl font-bold text-white">
                    Bike<span className="text-cyan-400">Aid</span>
                  </span>
                </Link>
                <p className="text-sm text-slate-400">Ketenangan di setiap perjalanan Anda, 24/7.</p>
                <div className="flex gap-4 mt-4">
                  <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors" prefetch={false}>
                    <Facebook />
                  </Link>
                  <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors" prefetch={false}>
                    <Twitter />
                  </Link>
                  <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors" prefetch={false}>
                    <Instagram />
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Perusahaan</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-slate-400 hover:text-cyan-400" prefetch={false}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-slate-400 hover:text-cyan-400" prefetch={false}>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-slate-400 hover:text-cyan-400" prefetch={false}>
                      Karir
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-slate-400 hover:text-cyan-400" prefetch={false}>
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Bantuan</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-slate-400 hover:text-cyan-400" prefetch={false}>
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-slate-400 hover:text-cyan-400" prefetch={false}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-slate-400 hover:text-cyan-400" prefetch={false}>
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Layanan</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/#services" className="text-slate-400 hover:text-cyan-400" prefetch={false}>
                      Servis Ban
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services" className="text-slate-400 hover:text-cyan-400" prefetch={false}>
                      Derek Darurat
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services" className="text-slate-400 hover:text-cyan-400" prefetch={false}>
                      Emergency Start
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services" className="text-slate-400 hover:text-cyan-400" prefetch={false}>
                      Mekanik Ringan
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
              <p>&copy; {new Date().getFullYear()} BikeAid. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <Toaster richColors theme="dark" />
      </body>
    </html>
  )
}
