import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Document Translation", href: "/services#document" },
    { name: "Legal & Compliance", href: "/services#legal" },
    { name: "Life Sciences", href: "/services#medical" },
    { name: "Interpretation", href: "/services#interpretation" },
    { name: "Localization", href: "/services#localization" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Join the Team", href: "/register" },
    { name: "Careers", href: "/careers" },
    { name: "LinkedIn", href: "https://linkedin.com" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Security", href: "/security" },
  ],
}

const languages = [
  "Spanish", "Mandarin", "French", "German", "Japanese",
  "Korean", "Arabic", "Portuguese", "Russian"
]

export function Footer() {
  return (
    <footer className="bg-white border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Brand column */}
          <div className="max-w-xs">
            <Link href="/" className="inline-block transition-transform hover:scale-105 active:scale-95">
              <Image
                src="/fluentia-logo.png"
                alt="Fluentia"
                width={140}
                height={35}
                className="h-7 w-auto"
              />
            </Link>
            <p className="mt-8 text-lg font-medium leading-relaxed text-black">
              Linguistic infrastructure for the world&apos;s most ambitious teams.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              hello@fluentia.com
            </p>
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 lg:gap-24">
            <div>
              <h3 className="text-sm font-bold text-black">Services</h3>
              <ul className="mt-6 space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 transition-colors hover:text-black"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-black">Company</h3>
              <ul className="mt-6 space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 transition-colors hover:text-black"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden sm:block">
              <h3 className="text-sm font-bold text-black">Legal</h3>
              <ul className="mt-6 space-y-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 transition-colors hover:text-black"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Languages section */}
        <div className="mt-20 border-t border-black/5 pt-12">
          <div className="flex flex-wrap gap-2 lg:gap-3">
            {languages.map((lang) => (
              <span
                key={lang}
                className="rounded-full bg-gray-50 px-4 py-2 text-xs font-semibold text-gray-500 ring-1 ring-black/5"
              >
                {lang}
              </span>
            ))}
            <Link
              href="/services"
              className="rounded-full bg-black px-4 py-2 text-xs font-semibold text-white transition-transform hover:scale-105"
            >
              +30 more
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-0">
          <p className="text-xs font-medium text-gray-400">
            &copy; {new Date().getFullYear()} Fluentia. All rights reserved. Built for global scale.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://linkedin.com"
              className="text-xs font-bold text-black transition-opacity hover:opacity-70"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
