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
import { submitQuoteRequest } from "@/app/quote/actions"
import { Check, Loader2, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const languages = [
  "English", "Spanish", "Mandarin", "French", "German", "Japanese", "Korean",
  "Arabic", "Portuguese", "Russian", "Italian", "Dutch", "Polish", "Vietnamese",
  "Thai", "Hindi", "Turkish", "Greek", "Hebrew", "Swedish", "Other"
]

const documentTypes = [
  "Corporate Communications",
  "Legal Documents",
  "Medical/Clinical",
  "Technical Documentation",
  "Marketing Content",
  "Financial Reports",
  "Regulatory Filings",
  "Software/UI Strings",
  "Other"
]

const urgencyOptions = [
  { value: "standard", label: "Standard (5-7 business days)" },
  { value: "priority", label: "Priority (3-4 business days)" },
  { value: "rush", label: "Rush (1-2 business days)" },
]

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setError(null)

    try {
      const result = await submitQuoteRequest(formData)
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
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center border border-accent">
          <Check className="h-8 w-8 text-accent" />
        </div>
        <h3 className="mt-8 text-2xl font-medium text-foreground">Request Submitted</h3>
        <p className="mt-4 max-w-sm text-muted-foreground">
          Our solutions team will review your project and deliver a detailed proposal within 24 hours.
        </p>
        <Button className="group mt-8" onClick={() => setIsSuccess(false)}>
          Submit Another Request
          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Button>
      </div>
    )
  }

  return (
    <form action={handleSubmit} className="space-y-8">
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
            Work Email *
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
          <Label htmlFor="company" className="text-xs font-medium uppercase tracking-wider">
            Company
          </Label>
          <Input
            id="company"
            name="company"
            placeholder="Company Name"
            className="border-border"
          />
        </div>
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
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="source_language" className="text-xs font-medium uppercase tracking-wider">
            Source Language *
          </Label>
          <Select name="source_language" required>
            <SelectTrigger id="source_language" className="border-border">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang} value={lang.toLowerCase()}>
                  {lang}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="target_language" className="text-xs font-medium uppercase tracking-wider">
            Target Language *
          </Label>
          <Select name="target_language" required>
            <SelectTrigger id="target_language" className="border-border">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang} value={lang.toLowerCase()}>
                  {lang}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="document_type" className="text-xs font-medium uppercase tracking-wider">
            Document Type *
          </Label>
          <Select name="document_type" required>
            <SelectTrigger id="document_type" className="border-border">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {documentTypes.map((type) => (
                <SelectItem key={type} value={type.toLowerCase().replace(/ /g, "_")}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="word_count" className="text-xs font-medium uppercase tracking-wider">
            Word Count (est.) *
          </Label>
          <Input
            id="word_count"
            name="word_count"
            type="number"
            placeholder="10,000"
            min="1"
            className="border-border"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="urgency" className="text-xs font-medium uppercase tracking-wider">
          Timeline *
        </Label>
        <Select name="urgency" required>
          <SelectTrigger id="urgency" className="border-border">
            <SelectValue placeholder="Select timeline" />
          </SelectTrigger>
          <SelectContent>
            {urgencyOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="details" className="text-xs font-medium uppercase tracking-wider">
          Project Details
        </Label>
        <Textarea
          id="details"
          name="details"
          placeholder="Describe your project, including any specific terminology, formatting requirements, or certification needs..."
          rows={4}
          className="border-border resize-none"
        />
      </div>

      <Button type="submit" size="lg" className="group h-14 w-full text-base" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Submit Request
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        By submitting, you agree to our{" "}
        <Link href="/privacy" className="underline hover:text-foreground">
          privacy policy
        </Link>
        . Response within 24 hours.
      </p>
    </form>
  )
}
