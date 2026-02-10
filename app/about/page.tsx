import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "About | Fluentia",
  description: "Learn about Fluentia - a modern translation company built by linguists, for businesses that need quality translations without the enterprise overhead.",
}

const leadership = [
  {
    name: "Maria Santos",
    role: "Co-Founder & CEO",
    bio: "Former interpreter turned entrepreneur. Passionate about making quality translation accessible.",
  },
  {
    name: "James Chen",
    role: "Co-Founder & Head of Linguistics",
    bio: "Linguistics background with a focus on building quality-first translation workflows.",
  },
  {
    name: "Anna Müller",
    role: "Head of Operations",
    bio: "Operations specialist who ensures every project runs smoothly from start to finish.",
  },
  {
    name: "Ahmed Hassan",
    role: "Head of Client Success",
    bio: "Dedicated to understanding client needs and delivering exceptional service.",
  },
]

const certifications = [
  "ATA Corporate Member",
  "NAJIT Institutional Member",
  "HIPAA Compliant Workflows",
  "NDA & Confidentiality Agreements",
  "Native Speaker Guarantee",
  "Quality Assurance Process",
]

const milestones = [
  { year: "2023", event: "Founded with a mission to modernize translation" },
  { year: "2023", event: "Completed first 100 projects" },
  { year: "2024", event: "Expanded to 30+ language pairs" },
  { year: "2024", event: "Launched remote interpretation services" },
  { year: "2025", event: "Grew to 50+ certified linguists" },
  { year: "2026", event: "Serving clients across 3 continents" },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-background pb-16 pt-32 lg:pb-24 lg:pt-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <span className="text-xs font-medium uppercase tracking-widest text-accent">
                  About Fluentia
                </span>
                <h1 className="mt-4 text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
                  A modern translation company built for growing businesses
                </h1>
              </div>
              <div className="flex items-end">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Founded in 2023, Fluentia was built to give startups and growing businesses 
                  access to quality translation services without the complexity of enterprise vendors. 
                  Our curated network of certified linguists delivers precision and reliability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="border-t border-border bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-3 lg:gap-8">
              <div>
                <span className="text-xs font-medium uppercase tracking-widest text-accent">
                  Our Mission
                </span>
                <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground">
                  Enabling global success through language excellence
                </h2>
              </div>
              <div className="lg:col-span-2">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  We believe that language should never be a barrier to success. Every translation, 
                  every interpretation session, every localization project represents an opportunity 
                  to connect people, close deals, save lives, or expand into new markets.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Our approach combines deep linguistic expertise with rigorous quality systems and 
                  modern technology. We invest heavily in our linguists, our processes, and our 
                  client relationships&mdash;because excellence in language services demands nothing less.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-foreground py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-background/10">
              {[
                { value: "2+", label: "Years in operation" },
                { value: "50+", label: "Certified linguists" },
                { value: "30+", label: "Languages" },
                { value: "500+", label: "Projects completed" },
              ].map((stat, index) => (
                <div key={stat.label} className={`${index > 0 ? "lg:pl-8" : ""}`}>
                  <div className="text-4xl font-medium text-background lg:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-background/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section id="team" className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="text-xs font-medium uppercase tracking-widest text-accent">
                Leadership
              </span>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground">
                Meet the team behind Fluentia
              </h2>
            </div>

            <div className="mt-16 grid gap-px bg-border lg:grid-cols-4">
              {leadership.map((member) => (
                <div key={member.name} className="bg-background p-8">
                  <div className="h-24 w-24 bg-muted" />
                  <h3 className="mt-6 font-medium text-foreground">{member.name}</h3>
                  <p className="mt-1 text-sm text-accent">{member.role}</p>
                  <p className="mt-4 text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Timeline */}
        <section id="certifications" className="bg-muted py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              {/* Certifications */}
              <div>
                <span className="text-xs font-medium uppercase tracking-widest text-accent">
                  Certifications
                </span>
                <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground">
                  Professional standards you can trust
                </h2>
                <p className="mt-6 text-muted-foreground">
                  We hold ourselves to professional standards and best practices 
                  that ensure quality and confidentiality for every project.
                </p>
                <ul className="mt-8 space-y-4">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex items-center gap-3">
                      <Check className="h-4 w-4 shrink-0 text-accent" />
                      <span className="text-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline */}
              <div>
                <span className="text-xs font-medium uppercase tracking-widest text-accent">
                  Our Journey
                </span>
                <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground">
                  Growing steadily since day one
                </h2>
                <div className="mt-8 space-y-6">
                  {milestones.map((milestone) => (
                    <div key={milestone.year} className="flex gap-6">
                      <span className="w-12 shrink-0 text-sm font-medium text-accent">
                        {milestone.year}
                      </span>
                      <span className="text-foreground">{milestone.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-3xl font-medium text-foreground">
                  Ready to work with us?
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Let our team scope your requirements and demonstrate how Fluentia can support your global operations.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="group h-14 px-8">
                  <Link href="/quote" className="flex items-center gap-2">
                    Request a Proposal
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="h-14 bg-transparent px-8">
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
