import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Globe, Languages, ShieldCheck } from "lucide-react"

export function InterpreterCTA() {
  return (
    <section className="bg-white pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F7F7F7] px-8 py-20 lg:px-16 lg:py-24">
          {/* Background Decorative Elements */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FFC700]/10 blur-3xl lg:h-96 lg:w-96" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#2E1BFF]/5 blur-3xl lg:h-96 lg:w-96" />

          <div className="relative flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-black shadow-sm ring-1 ring-black/5">
              <Languages className="h-3 w-3" /> Join Our Team
            </span>

            <h2 className="mt-8 max-w-3xl text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
              Are you a professional <span className="text-gray-400 italic">linguist?</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg text-gray-500/80 lg:text-xl">
              We&apos;re always looking for certified, high-caliber interpreters and translators to join our boutique network. Help us bridge the world&apos;s most important conversations.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-black/60">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-black" />
                <span className="text-sm font-semibold">Certified Only</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-black" />
                <span className="text-sm font-semibold">Global Reach</span>
              </div>
            </div>

            <div className="mt-12">
              <Button size="lg" asChild className="h-14 rounded-2xl bg-black px-10 text-base font-bold text-white transition-transform hover:scale-105 active:scale-95">
                <Link href="/register" className="flex items-center gap-2">
                  Apply as Interpreter
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
