export function StatsSection() {
  return (
    <section className="bg-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Moving fast,<br />
              <span className="text-[#FFC700]">delivering quality.</span>
            </h2>
            <p className="mt-6 text-lg text-gray-400">
              We&apos;re a boutique agency with a global reach. We skipped the corporate bloat to focus on what matters: connecting you with the world.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4 lg:gap-x-12">
          {[
            { value: "30+", label: "Languages", sublabel: "And counting" },
            { value: "50+", label: "Linguists", sublabel: "Expert network" },
            { value: "500+", label: "Projects", sublabel: "Delivered perfectly" },
            { value: "100%", label: "Retention", sublabel: "Clients stay for a reason" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-4">
              <div className="text-5xl font-bold tracking-tight text-white lg:text-6xl">
                {stat.value}
              </div>
              <div>
                <div className="text-sm font-bold uppercase tracking-widest text-white">
                  {stat.label}
                </div>
                <div className="mt-1 text-sm text-gray-500">
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
