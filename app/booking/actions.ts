"use server"

import { createClient } from "@/lib/supabase/server"

export async function submitBookingRequest(formData: FormData) {
  const supabase = await createClient()

  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    company: formData.get("company") as string | null,
    interpretation_type: formData.get("interpretation_type") as string,
    source_language: formData.get("source_language") as string,
    target_language: formData.get("target_language") as string,
    session_date: formData.get("date") as string,
    session_time: formData.get("time") as string,
    duration_hours: parseInt(formData.get("duration") as string, 10),
    location: formData.get("location") as string | null,
    additional_notes: formData.get("notes") as string | null,
  }

  // Validate required fields
  if (!data.name || !data.email || !data.phone || !data.source_language || !data.target_language || !data.session_date || !data.session_time || !data.duration_hours) {
    return { success: false, error: "Please fill in all required fields." }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return { success: false, error: "Please enter a valid email address." }
  }

  // For on-site interpretation, location is required
  if (data.interpretation_type === "onsite" && !data.location) {
    return { success: false, error: "Please provide a location for on-site interpretation." }
  }

  const { error } = await supabase.from("bookings").insert([data])

  if (error) {
    console.error("Error submitting booking:", error)
    return { success: false, error: "Failed to submit booking request. Please try again." }
  }

  return { success: true }
}
