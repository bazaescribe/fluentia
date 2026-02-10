import Link from "next/link"
import { ArrowUpRight, FileText, Scale, HeartPulse, Mic2, Video, Globe2 } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Document Translation",
    description: "Contracts, technical manuals, or marketing collateral. We translate your business logic with industry-specific nuance.",
    href: "/services#document",
  },
  {
    icon: Scale,
    title: "Legal & Compliance",
    description: "Certified translations for litigation and immigration. Confidential, precise, and court-ready on your schedule.",
    href: "/services#legal",
  },
  {
    icon: HeartPulse,
    title: "Life Sciences",
    description: "Regulatory-compliant translations for clinical trials and patient care. Accuracy that saves lives and time.",
    href: "/services#medical",
  },
  {
    icon: Mic2,
    title: "Simultaneous Interpretation",
    description: "Live interpretation for conferences and high-stakes negotiations. Your global voice, in real-time.",
    href: "/services#interpretation",
  },
  {
    icon: Video,
    title: "Remote Interpretation",
    description: "On-demand video and phone interpretation. 24/7 access to linguists wherever you have a connection.",
    href: "/services#remote",
  },
  {
    icon: Globe2,
    title: "Localization",
    description: "Go beyond translation. We adapt your software and content for seamless product-market fit globally.",
    href: "/services#localization",
  },
]

export function ServicesSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
              Break language barriers.<br />
              <span className="text-[#2E1BFF]">Scale without borders.</span>
            </h2>
            <p className="mt-6 text-lg text-gray-500/80">
              We provide the linguistic infrastructure for global teams. From legal filings to live negotiations, we ensure nothing gets lost in translation.
            </p>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-black underline underline-offset-8 decoration-gray-200 transition-colors hover:decoration-black"
          >
            All Services
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Services grid */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gray-50 p-8 transition-all hover:bg-gray-100/80"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-black" />
                </div>
                <h3 className="mt-8 text-xl font-bold text-black">
                  {service.title}
                </h3>
                <p className="mt-4 text-pretty text-gray-500/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-black opacity-0 transition-opacity group-hover:opacity-100">
                Learn more
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
