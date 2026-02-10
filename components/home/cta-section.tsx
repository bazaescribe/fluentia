import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Translation CTA */}
          <div className="flex flex-col rounded-3xl bg-black p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white lg:text-4xl">
              Translate your impact.
            </h3>
            <p className="mt-6 flex-1 text-lg text-gray-400">
              Precise, industry-specific translations for your most important documents. Fast turnaround, zero compromise on quality.
            </p>
            <div className="mt-10">
              <Button size="lg" asChild className="h-14 w-full rounded-2xl bg-white text-base font-bold text-black hover:bg-gray-100 lg:w-auto">
                <Link href="/quote" className="flex items-center justify-center gap-2">
                  Get a quote
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Interpretation CTA */}
          <div className="flex flex-col rounded-3xl bg-gray-50 p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-black lg:text-4xl">
              Be heard everywhere.
            </h3>
            <p className="mt-6 flex-1 text-lg text-gray-500/80">
              Book certified interpreters for meetings, conferences, or legal proceedings. Available on-site or via high-def video.
            </p>
            <div className="mt-10">
              <Button size="lg" variant="outline" asChild className="h-14 w-full rounded-2xl border-2 border-black bg-transparent text-base font-bold text-black hover:bg-black hover:text-white lg:w-auto">
                <Link href="/booking" className="flex items-center justify-center gap-2">
                  Book interpreter
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
