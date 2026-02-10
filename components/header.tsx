"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-black/5 py-3"
          : "bg-transparent py-5"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105 active:scale-95">
          <div className="flex items-center">
            <Image src="/fluentia-logo.png" alt="Logo" width={120} height={18} className="transition-all duration-300" style={{ width: scrolled ? '110px' : '129px' }} />
          </div>
        </Link>

        <div className="flex items-center gap-6 lg:gap-10">
          <Link href="/quote" className="hidden text-sm font-semibold text-black transition-colors hover:text-gray-400 sm:block">
            Get a quote
          </Link>
          <Button asChild className={`rounded-2xl bg-black px-6 text-sm font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95 ${scrolled ? "h-10" : "h-11"}`}>
            <Link href="/booking">Book interpreter</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
