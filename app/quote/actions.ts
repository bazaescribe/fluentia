"use server"

import { createClient } from "@/lib/supabase/server"

export async function submitQuoteRequest(formData: FormData) {
  const supabase = await createClient()

  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string | null,
    company: formData.get("company") as string | null,
    source_language: formData.get("source_language") as string,
    target_language: formData.get("target_language") as string,
    document_type: formData.get("document_type") as string,
    word_count: parseInt(formData.get("word_count") as string, 10),
    urgency: formData.get("urgency") as string,
    additional_notes: formData.get("details") as string | null,
  }

  // Validate required fields
  if (!data.name || !data.email || !data.source_language || !data.target_language || !data.document_type || !data.word_count || !data.urgency) {
    return { success: false, error: "Please fill in all required fields." }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return { success: false, error: "Please enter a valid email address." }
  }

  const { error } = await supabase.from("quotes").insert([data])

  if (error) {
    console.error("Error submitting quote:", error)
    return { success: false, error: "Failed to submit quote request. Please try again." }
  }

  return { success: true }
}
