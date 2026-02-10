"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { submitBookingRequest } from "@/app/booking/actions"
import { Check, Loader2, CalendarIcon, ArrowUpRight } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const languages = [
  "English", "Spanish", "Mandarin", "French", "German", "Japanese", "Korean",
  "Arabic", "Portuguese", "Russian", "Italian", "Dutch", "Polish", "Vietnamese",
  "Thai", "Hindi", "Turkish", "Greek", "Hebrew", "Swedish", "Other"
]

const timeSlots = [
  "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  "05:00 PM", "05:30 PM", "06:00 PM"
]

const durationOptions = [
  { value: "2", label: "2 hours (minimum)" },
  { value: "3", label: "3 hours" },
  { value: "4", label: "4 hours (half day)" },
  { value: "8", label: "8 hours (full day)" },
]

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [date, setDate] = useState<Date>()
  const [interpretationType, setInterpretationType] = useState<string>("remote")

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setError(null)

    if (!date) {
      setError("Please select a date for your booking.")
      setIsSubmitting(false)
      return
    }

    formData.set("date", format(date, "yyyy-MM-dd"))
    formData.set("interpretation_type", interpretationType)

    try {
      const result = await submitBookingRequest(formData)
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
        <h3 className="mt-8 text-2xl font-medium text-foreground">Booking Submitted</h3>
        <p className="mt-4 max-w-sm text-muted-foreground">
          Our scheduling team will confirm availability and send you a confirmation within 24 hours.
        </p>
        <Button className="group mt-8" onClick={() => setIsSuccess(false)}>
          Submit Another Booking
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

      {/* Interpretation Type */}
      <div className="space-y-3">
        <Label className="text-xs font-medium uppercase tracking-wider">
          Interpretation Type *
        </Label>
        <RadioGroup
          value={interpretationType}
          onValueChange={setInterpretationType}
          className="grid gap-4 sm:grid-cols-2"
        >
          <div>
            <RadioGroupItem value="remote" id="remote" className="peer sr-only" />
            <Label
              htmlFor="remote"
              className="flex cursor-pointer flex-col border border-border p-4 transition-colors hover:bg-muted peer-data-[state=checked]:border-foreground peer-data-[state=checked]:bg-muted"
            >
              <span className="font-medium">Remote</span>
              <span className="mt-1 text-sm text-muted-foreground">Video or phone</span>
            </Label>
          </div>
          <div>
            <RadioGroupItem value="onsite" id="onsite" className="peer sr-only" />
            <Label
              htmlFor="onsite"
              className="flex cursor-pointer flex-col border border-border p-4 transition-colors hover:bg-muted peer-data-[state=checked]:border-foreground peer-data-[state=checked]:bg-muted"
            >
              <span className="font-medium">On-site</span>
              <span className="mt-1 text-sm text-muted-foreground">In-person attendance</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-xs font-medium uppercase tracking-wider">
            Full Name *
          </Label>
          <Input id="name" name="name" placeholder="Jane Smith" className="border-border" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-xs font-medium uppercase tracking-wider">
            Work Email *
          </Label>
          <Input id="email" name="email" type="email" placeholder="jane@company.com" className="border-border" required />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-xs font-medium uppercase tracking-wider">
            Phone *
          </Label>
          <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" className="border-border" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company" className="text-xs font-medium uppercase tracking-wider">
            Company
          </Label>
          <Input id="company" name="company" placeholder="Company Name" className="border-border" />
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
                <SelectItem key={lang} value={lang.toLowerCase()}>{lang}</SelectItem>
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
                <SelectItem key={lang} value={lang.toLowerCase()}>{lang}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div className="space-y-2">
          <Label className="text-xs font-medium uppercase tracking-wider">Date *</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start border-border bg-transparent text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "MMM d, yyyy") : "Select"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label htmlFor="time" className="text-xs font-medium uppercase tracking-wider">
            Start Time *
          </Label>
          <Select name="time" required>
            <SelectTrigger id="time" className="border-border">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((time) => (
                <SelectItem key={time} value={time}>{time}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="duration" className="text-xs font-medium uppercase tracking-wider">
            Duration *
          </Label>
          <Select name="duration" required>
            <SelectTrigger id="duration" className="border-border">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {durationOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {interpretationType === "onsite" && (
        <div className="space-y-2">
          <Label htmlFor="location" className="text-xs font-medium uppercase tracking-wider">
            Location/Address *
          </Label>
          <Input
            id="location"
            name="location"
            placeholder="123 Main St, City, State, ZIP"
            className="border-border"
            required={interpretationType === "onsite"}
          />
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="purpose" className="text-xs font-medium uppercase tracking-wider">
          Purpose *
        </Label>
        <Select name="purpose" required>
          <SelectTrigger id="purpose" className="border-border">
            <SelectValue placeholder="Select purpose" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="business_meeting">Business Meeting</SelectItem>
            <SelectItem value="conference">Conference/Event</SelectItem>
            <SelectItem value="legal">Legal/Deposition</SelectItem>
            <SelectItem value="medical">Medical/Healthcare</SelectItem>
            <SelectItem value="education">Education/Training</SelectItem>
            <SelectItem value="government">Government/Immigration</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes" className="text-xs font-medium uppercase tracking-wider">
          Additional Notes
        </Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Describe the context, number of participants, specialized terminology, or any other relevant details..."
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
            Request Booking
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Bookings subject to availability. Confirmation within 24 hours.
      </p>
    </form>
  )
}
