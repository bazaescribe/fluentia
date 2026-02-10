const testimonials = [
  {
    quote: "Fluentia helped us close our first international deal. Their legal translation was fast, accurate, and the team genuinely cared about the outcome.",
    author: "Sarah Chen",
    role: "Founder, Meridian Ventures",
  },
  {
    quote: "We needed medical documents translated on a tight deadline. They delivered ahead of schedule with precision that our regulatory team loved.",
    author: "Dr. Michael Rodriguez",
    role: "Medical Director, CareFirst",
  },
  {
    quote: "As a startup expanding fast, we needed a partner who could move at our speed. Fluentia has been exactly that since day one.",
    author: "Emma Thompson",
    role: "Head of Growth, Kinetic Labs",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Trusted by those<br />
            <span className="text-[#2E1BFF]">moving the world.</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="flex flex-col rounded-3xl bg-gray-50 p-10 transition-colors hover:bg-gray-100/80"
            >
              <blockquote className="flex-1 text-lg font-medium leading-relaxed text-black">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-10">
                <div className="font-bold text-black">{testimonial.author}</div>
                <div className="mt-1 text-sm text-gray-500">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
