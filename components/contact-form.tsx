"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { submitContactForm } from "@/app/contact/actions"
import { Check, Loader2, ArrowUpRight } from "lucide-react"

const inquiryTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "enterprise", label: "Enterprise Solutions" },
  { value: "partnership", label: "Partnership" },
  { value: "careers", label: "Careers" },
  { value: "support", label: "Support" },
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setError(null)

    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        setIsSuccess(true)
      } else {
        setError(result.error || "Something went wrong. Please try again.")
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center border border-accent">
          <Check className="h-8 w-8 text-accent" />
        </div>
        <h3 className="mt-8 text-2xl font-medium text-foreground">Message Sent</h3>
        <p className="mt-4 max-w-sm text-muted-foreground">
          Our team will review your message and respond within 24 hours.
        </p>
        <Button className="group mt-8" onClick={() => setIsSuccess(false)}>
          Send Another Message
          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Button>
      </div>
    )
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      {error && (
        <div className="border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive">
          {error}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-xs font-medium uppercase tracking-wider">
            Full Name *
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Jane Smith"
            className="border-border"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-xs font-medium uppercase tracking-wider">
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="jane@company.com"
            className="border-border"
            required
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-xs font-medium uppercase tracking-wider">
            Phone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            className="border-border"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="inquiry_type" className="text-xs font-medium uppercase tracking-wider">
            Inquiry Type *
          </Label>
          <Select name="inquiry_type" required>
            <SelectTrigger id="inquiry_type" className="border-border">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {inquiryTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="text-xs font-medium uppercase tracking-wider">
          Subject *
        </Label>
        <Input
          id="subject"
          name="subject"
          placeholder="How can we help?"
          className="border-border"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-xs font-medium uppercase tracking-wider">
          Message *
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your inquiry..."
          rows={5}
          className="border-border resize-none"
          required
        />
      </div>

      <Button type="submit" size="lg" className="group h-12 w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </>
        )}
      </Button>
    </form>
  )
}
