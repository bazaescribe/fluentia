"use server"

import { createClient } from "@/lib/supabase/server"

export async function submitContactForm(formData: FormData) {
  const supabase = await createClient()

  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string | null,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  }

  // Validate required fields
  if (!data.name || !data.email || !data.subject || !data.message) {
    return { success: false, error: "Please fill in all required fields." }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return { success: false, error: "Please enter a valid email address." }
  }

  const { error } = await supabase.from("contacts").insert([data])

  if (error) {
    console.error("Error submitting contact form:", error)
    return { success: false, error: "Failed to send message. Please try again." }
  }

  return { success: true }
}
