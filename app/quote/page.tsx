import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteForm } from "@/components/quote-form"

export const metadata: Metadata = {
  title: "Request a Proposal | Fluentia",
  description: "Request a detailed translation proposal with transparent pricing, timeline estimates, and team assignment for your project.",
}

export default function QuotePage() {
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
                  Translation Services
                </span>
                <h1 className="mt-4 text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
                  Request a Proposal
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Share your project details and our solutions team will provide 
                  a comprehensive proposal within 24 hours, including transparent 
                  pricing, timeline, and recommended team composition.
                </p>

                <div className="mt-12 border-t border-border pt-12">
                  <h2 className="text-sm font-medium uppercase tracking-widest text-foreground">
                    What to Expect
                  </h2>
                  <div className="mt-8 space-y-8">
                    {[
                      {
                        step: "01",
                        title: "Submit Your Request",
                        description: "Provide project details including language pair, document type, and timeline requirements."
                      },
                      {
                        step: "02", 
                        title: "Expert Review",
                        description: "Our team analyzes your requirements and assigns optimal linguists based on subject matter expertise."
                      },
                      {
                        step: "03",
                        title: "Receive Your Proposal",
                        description: "Within 24 hours, receive a detailed proposal with fixed pricing, milestone schedule, and quality assurance plan."
                      }
                    ].map((item) => (
                      <div key={item.step} className="flex gap-6">
                        <span className="text-sm font-medium text-accent">{item.step}</span>
                        <div>
                          <h3 className="font-medium text-foreground">{item.title}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 border border-border p-6">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Enterprise clients:</span> For projects 
                    exceeding 100,000 words or requiring dedicated teams, contact our enterprise 
                    solutions team directly at{" "}
                    <a href="mailto:enterprise@fluentia.com" className="text-accent hover:underline">
                      enterprise@fluentia.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Right column - Form */}
              <div className="border border-border bg-background p-8 lg:p-10">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
