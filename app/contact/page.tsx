import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Fluentia",
  description: "Get in touch with Fluentia for enterprise translation and interpretation services. Contact our global team for inquiries, proposals, or support.",
}

const offices = [
  {
    city: "New York",
    address: "One World Trade Center\nNew York, NY 10007",
    phone: "+1 (212) 555-0100",
  },
  {
    city: "London",
    address: "30 St Mary Axe\nLondon, EC3A 8BF",
    phone: "+44 20 7946 0958",
  },
  {
    city: "Singapore",
    address: "One Raffles Place\nSingapore 048616",
    phone: "+65 6100 0100",
  },
]

const faqItems = [
  {
    question: "How quickly can you provide a translation proposal?",
    answer: "We deliver detailed proposals within 24 hours of receiving your project specifications, including fixed pricing and timeline commitments.",
  },
  {
    question: "What is your standard turnaround time?",
    answer: "Standard projects are delivered within 5-7 business days. Priority (3-4 days) and rush (1-2 days) options are available for time-sensitive requirements.",
  },
  {
    question: "Are your translators and interpreters certified?",
    answer: "All Fluentia linguists hold professional certifications (ATA, NAJIT, ISO 17100) and demonstrate verified subject matter expertise in their specialization areas.",
  },
  {
    question: "Do you provide certified/notarized translations?",
    answer: "Yes. We provide certified translations accepted by courts, government agencies, immigration authorities, and academic institutions worldwide.",
  },
  {
    question: "What quality assurance processes do you follow?",
    answer: "Every project undergoes our TEP process: Translation by a native speaker, Editing by a second linguist, and Proofreading with client-specific quality checks.",
  },
  {
    question: "How do you handle confidential information?",
    answer: "We maintain SOC 2 Type II certification and execute NDAs for all projects. Our systems and processes meet enterprise security requirements including HIPAA compliance.",
  },
]

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-background pb-16 pt-32 lg:pb-24 lg:pt-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              {/* Left column - Info */}
              <div>
                <span className="text-xs font-medium uppercase tracking-widest text-accent">
                  Contact
                </span>
                <h1 className="mt-4 text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
                  Let&apos;s discuss your requirements
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Whether you have questions about our services, need a custom solution, 
                  or want to explore a partnership, our team is ready to help.
                </p>

                {/* Global offices */}
                <div className="mt-12 border-t border-border pt-12">
                  <h2 className="text-sm font-medium uppercase tracking-widest text-foreground">
                    Global Offices
                  </h2>
                  <div className="mt-8 grid gap-8 sm:grid-cols-3">
                    {offices.map((office) => (
                      <div key={office.city}>
                        <h3 className="font-medium text-foreground">{office.city}</h3>
                        <p className="mt-2 whitespace-pre-line text-sm text-muted-foreground">
                          {office.address}
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">{office.phone}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/quote"
                    className="group inline-flex items-center gap-2 border border-foreground bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                  >
                    Request a Proposal
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/booking"
                    className="group inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    Book an Interpreter
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              {/* Right column - Form */}
              <div className="border border-border bg-background p-8 lg:p-10">
                <h2 className="text-xl font-medium text-foreground">Send us a message</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill out the form and we&apos;ll respond within 24 hours.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-muted py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="text-xs font-medium uppercase tracking-widest text-accent">
                FAQ
              </span>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground">
                Common questions
              </h2>
            </div>

            <div className="mt-12 grid gap-px bg-border lg:grid-cols-2">
              {faqItems.map((item) => (
                <div key={item.question} className="bg-background p-8">
                  <h3 className="font-medium text-foreground">{item.question}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
