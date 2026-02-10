import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/booking-form"

export const metadata: Metadata = {
  title: "Book an Interpreter | Fluentia",
  description: "Schedule a certified interpreter for meetings, conferences, depositions, and events. Available on-site or remotely in 50+ languages.",
}

const pricingTiers = [
  { type: "Remote Interpretation", rate: "From $55/hour", note: "Video or phone" },
  { type: "On-site Interpretation", rate: "From $95/hour", note: "Travel included within city" },
  { type: "Conference Interpretation", rate: "From $150/hour", note: "Simultaneous equipment available" },
  { type: "Legal/Medical Specialist", rate: "From $125/hour", note: "Certified specialists" },
]

export default function BookingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-background pb-16 pt-32 lg:pb-24 lg:pt-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              {/* Left column - Info */}
              <div>
                <span className="text-xs font-medium uppercase tracking-widest text-accent">
                  Interpretation Services
                </span>
                <h1 className="mt-4 text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
                  Schedule an Interpreter
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Book a certified interpreter for your meeting, conference, 
                  legal proceeding, or event. Available on-site or via secure 
                  video connection in 50+ languages.
                </p>

                <div className="mt-12 border-t border-border pt-12">
                  <h2 className="text-sm font-medium uppercase tracking-widest text-foreground">
                    Pricing Guide
                  </h2>
                  <div className="mt-6 space-y-4">
                    {pricingTiers.map((tier) => (
                      <div key={tier.type} className="flex items-baseline justify-between border-b border-border pb-4">
                        <div>
                          <span className="font-medium text-foreground">{tier.type}</span>
                          <span className="ml-2 text-sm text-muted-foreground">({tier.note})</span>
                        </div>
                        <span className="text-foreground">{tier.rate}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-sm text-muted-foreground">
                    Final pricing depends on language pair, duration, and specialization. 
                    Minimum booking is 2 hours.
                  </p>
                </div>

                <div className="mt-12 border border-accent/20 bg-accent/5 p-6">
                  <h3 className="font-medium text-foreground">Urgent Requests</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    For interpretation needed within 24 hours, please contact our 
                    scheduling team directly at{" "}
                    <a href="tel:+12125550100" className="font-medium text-accent hover:underline">
                      +1 (212) 555-0100
                    </a>
                    {" "}or email{" "}
                    <a href="mailto:urgent@fluentia.com" className="font-medium text-accent hover:underline">
                      urgent@fluentia.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Right column - Form */}
              <div className="border border-border bg-background p-8 lg:p-10">
                <BookingForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
