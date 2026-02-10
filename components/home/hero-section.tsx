"use client"

import { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useSearchParams } from "next/navigation"

type ServiceType = "b2c" | "b2b"

const content = {
  b2c: {
    id: "b2c",
    toggleLabel: "Individuals",
    activeColor: "bg-[#FFC700]",
    textColor: "text-[#FFC700]",
    title: "Clarity When It\nMatters Most.",
    subtitle: "Navigating hearings or asylum processes is stressful enough. We provide dedicated, professional interpreters to ensure your voice is heard and understood with absolute precision.",
    images: [
      { src: "/images/hero/b2c-1.png", alt: "Professional Interpreter", flex: 1.4 },
      { src: "/images/hero/b2c-2.png", alt: "Calm interpreting session", flex: 1 },
      { src: "/images/hero/b2c-3.png", alt: "Interpretation anywhere", flex: 1 },
    ]
  },
  b2b: {
    id: "b2b",
    toggleLabel: "Businesses",
    activeColor: "bg-[#2E1BFF]",
    textColor: "text-[#2E1BFF]",
    title: "Connect Without\nConstraints.",
    subtitle: "Scale your operations and close deals in any language. From technical documents to live negotiations, our boutique team provides the linguistic expertise your business needs to grow.",
    images: [
      { src: "/images/hero/b2b-1.png", alt: "Business Negotiations", flex: 1 },
      { src: "/images/hero/b2b-2.png", alt: "Global Business Scale", flex: 1 },
      { src: "/images/hero/b2b-3.png", alt: "Expert Linguistic Team", flex: 1.4 },
    ]
  }
}

function HeroContent() {
  const searchParams = useSearchParams()
  const [activeType, setActiveType] = useState<ServiceType>("b2c")

  useEffect(() => {
    const icp = searchParams.get("icp")
    if (icp === "b2b") {
      setActiveType("b2b")
    }
  }, [searchParams])

  const current = content[activeType]

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-12 lg:pt-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Custom Toggle */}
          <div className="relative mb-12 flex h-10 w-fit items-center rounded-full bg-gray-100 p-1 inset-shadow-sm border border-black/5">
            <motion.div
              layoutId="active-pill"
              className={`absolute h-8 rounded-full ${current.activeColor} shadow-sm border border-black/5`}
              initial={false}
              animate={{
                x: activeType === "b2c" ? 0 : 100,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{ width: "100px" }}
            />
            <button
              onClick={() => setActiveType("b2c")}
              className={`relative z-10 w-[100px] text-[12px] font-semibold transition-colors duration-200 ${activeType === "b2c" ? "text-white" : "text-gray-400"
                }`}
            >
              Individuals
            </button>
            <button
              onClick={() => setActiveType("b2b")}
              className={`relative z-10 w-[100px] text-[12px] font-semibold transition-colors duration-200 ${activeType === "b2b" ? "text-white" : "text-gray-400"
                }`}
            >
              Businesses
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeType}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 28,
                opacity: { duration: 0.2 }
              }}
              className="flex flex-col items-center"
            >
              <h1 className="max-w-4xl whitespace-pre-line text-4xl font-bold tracking-tight text-black sm:text-4xl lg:text-6xl xl:text-6xl">
                {current.title}
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-gray-500/70 lg:text-lg">
                {current.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-10">
            <Link href="/quote" className="text-sm font-semibold text-black underline underline-offset-8 decoration-gray-200 transition-colors hover:decoration-black">
              Get a quote
            </Link>
            <Button size="lg" className="h-12 rounded-2xl bg-black px-8 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95">
              Book interpreter
            </Button>
          </div>
        </div>

        {/* Dynamic Image Grid */}
        <div className="mt-24 flex h-auto flex-col gap-4 lg:mt-28 lg:h-[550px] lg:flex-row lg:gap-4">
          {[0, 1, 2].map((index) => {
            const activeImg = current.images[index]
            return (
              <motion.div
                key={index}
                layout
                transition={{
                  layout: { type: "spring", stiffness: 350, damping: 35 },
                }}
                className="relative min-h-[300px] overflow-hidden rounded-2xl bg-gray-50 shadow-2xl shadow-black/5 lg:min-h-0"
                style={{ flex: activeImg.flex }}
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.img
                    key={activeImg.src}
                    src={activeImg.src}
                    alt={activeImg.alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function HeroSection() {
  return (
    <Suspense fallback={<div className="h-screen bg-white" />}>
      <HeroContent />
    </Suspense>
  )
}
