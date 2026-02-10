import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Services | Fluentia",
  description: "Enterprise translation and interpretation services including certified document translation, legal and medical expertise, simultaneous interpretation, and global localization.",
}

const translationServices = [
  {
    id: "document",
    number: "01",
    title: "Document Translation",
    description: "Precision translation of corporate documents, technical manuals, and marketing collateral with industry-specific terminology expertise.",
    features: [
      "Corporate communications and reports",
      "Technical documentation and specifications",
      "Marketing and brand content",
      "Financial statements and disclosures",
      "Training materials and e-learning content",
    ],
    pricing: "From $0.12/word",
    turnaround: "3-5 business days",
  },
  {
    id: "legal",
    number: "02",
    title: "Legal Translation",
    description: "Court-certified translations by qualified legal translators with comprehensive understanding of jurisdiction-specific requirements.",
    features: [
      "Contracts and commercial agreements",
      "Litigation and court documents",
      "Patents and IP filings",
      "Immigration and visa documentation",
      "Corporate governance and compliance",
    ],
    pricing: "From $0.18/word",
    turnaround: "5-7 business days",
  },
  {
    id: "medical",
    number: "03",
    title: "Medical & Life Sciences",
    description: "Regulatory-compliant translations by medical professionals for clinical, pharmaceutical, and healthcare documentation.",
    features: [
      "Clinical trial protocols and reports",
      "Regulatory submissions (FDA, EMA)",
      "Medical device documentation",
      "Pharmaceutical labeling and PILs",
      "Patient records and informed consent",
    ],
    pricing: "From $0.22/word",
    turnaround: "5-10 business days",
  },
]

const interpretationServices = [
  {
    id: "simultaneous",
    number: "04",
    title: "Simultaneous Interpretation",
    description: "Real-time interpretation for conferences, board meetings, and high-stakes negotiations by UN-qualified interpreters.",
    features: [
      "Conferences and annual meetings",
      "Board and executive sessions",
      "M&A negotiations and due diligence",
      "Arbitration and mediation",
      "Press conferences and media events",
    ],
    pricing: "From $125/hour",
    turnaround: "Book 2+ weeks ahead",
  },
  {
    id: "remote",
    number: "05",
    title: "Remote Interpretation",
    description: "On-demand video and phone interpretation available 24/7 with sub-60-second connection times across 50+ languages.",
    features: [
      "Video remote interpretation (VRI)",
      "Over-the-phone interpretation (OPI)",
      "24/7/365 availability",
      "Healthcare and emergency services",
      "Customer service and support",
    ],
    pricing: "From $55/hour",
    turnaround: "Immediate availability",
  },
  {
    id: "localization",
    number: "06",
    title: "Localization",
    description: "End-to-end adaptation of digital products, websites, and multimedia for seamless global market entry and local relevance.",
    features: [
      "Website and e-commerce localization",
      "Software and application UI/UX",
      "Multimedia and video content",
      "SEO and digital marketing",
      "Cultural consulting and market adaptation",
    ],
    pricing: "Custom scoping",
    turnaround: "Project-based",
  },
]

const languages = [
  "Spanish", "Mandarin", "French", "German", "Japanese",
  "Korean", "Arabic", "Portuguese", "Russian", "Italian",
  "Dutch", "Polish", "Vietnamese", "Thai", "Hindi",
  "Turkish", "Greek", "Hebrew", "Swedish", "Danish",
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-background pb-16 pt-32 lg:pb-24 lg:pt-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-medium uppercase tracking-widest text-accent">
                Our Services
              </span>
              <h1 className="mt-4 text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
                Language services engineered for enterprise complexity
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                From mission-critical legal translations to real-time interpretation 
                for global events, Fluentia delivers the precision, scalability, 
                and reliability that complex organizations demand.
              </p>
            </div>
          </div>
        </section>

        {/* Translation Services */}
        <section id="translation" className="border-t border-border bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="text-xs font-medium uppercase tracking-widest text-accent">
                  Translation
                </span>
                <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground">
                  Written Translation Services
                </h2>
              </div>
              <Link
                href="/quote"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                Request a proposal
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="mt-12 grid gap-px bg-border lg:grid-cols-3">
              {translationServices.map((service) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="flex flex-col bg-background p-8 lg:p-10"
                >
                  <span className="text-sm font-medium text-accent">{service.number}</span>
                  <h3 className="mt-4 text-xl font-medium text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{service.description}</p>
                  
                  <ul className="mt-8 flex-1 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 border-t border-border pt-6">
                    <div className="flex items-baseline justify-between">
                      <span className="text-lg font-medium text-foreground">{service.pricing}</span>
                      <span className="text-xs text-muted-foreground">{service.turnaround}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interpretation Services */}
        <section id="interpretation" className="bg-muted py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="text-xs font-medium uppercase tracking-widest text-accent">
                  Interpretation
                </span>
                <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground">
                  Live Interpretation Services
                </h2>
              </div>
              <Link
                href="/booking"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                Book an interpreter
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="mt-12 grid gap-px bg-border lg:grid-cols-3">
              {interpretationServices.map((service) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="flex flex-col bg-background p-8 lg:p-10"
                >
                  <span className="text-sm font-medium text-accent">{service.number}</span>
                  <h3 className="mt-4 text-xl font-medium text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{service.description}</p>
                  
                  <ul className="mt-8 flex-1 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 border-t border-border pt-6">
                    <div className="flex items-baseline justify-between">
                      <span className="text-lg font-medium text-foreground">{service.pricing}</span>
                      <span className="text-xs text-muted-foreground">{service.turnaround}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Languages */}
        <section id="languages" className="border-t border-border bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="text-xs font-medium uppercase tracking-widest text-accent">
                  Global Coverage
                </span>
                <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground">
                  50+ languages and counting
                </h2>
                <p className="mt-6 text-muted-foreground">
                  Our network of 500+ certified linguists covers all major world languages 
                  and many specialized regional dialects. Each linguist is native in their 
                  target language with verified subject matter expertise.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                  >
                    Inquire about a specific language
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="border border-border px-4 py-2 text-sm text-foreground"
                  >
                    {lang}
                  </span>
                ))}
                <span className="border border-accent bg-accent/5 px-4 py-2 text-sm font-medium text-accent">
                  +30 more
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-foreground py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-3xl font-medium text-background">
                  Ready to discuss your project?
                </h2>
                <p className="mt-3 text-background/70">
                  Our solutions team will scope your requirements and provide a detailed proposal within 24 hours.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="group h-14 bg-background px-8 text-foreground hover:bg-background/90">
                  <Link href="/quote" className="flex items-center gap-2">
                    Request a Proposal
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="h-14 border-background/30 bg-transparent px-8 text-background hover:bg-background/10 hover:text-background">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
