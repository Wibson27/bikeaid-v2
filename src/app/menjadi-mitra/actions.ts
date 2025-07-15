"use server"

type FormState = {
  message: string
  success: boolean
}

export async function partnerSignupAction(prevState: FormState, formData: FormData) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  const fullName = formData.get("fullName")
  const email = formData.get("email")

  // Basic validation
  if (!fullName || !email) {
    return { message: "Nama Lengkap dan Email wajib diisi.", success: false }
  }

  // In a real app, you would:
  // 1. Validate all fields more thoroughly.
  // 2. Upload files to a blob storage (like Vercel Blob).
  // 3. Save the form data to a database.
  // 4. Send a confirmation email.

  console.log("New Partner Signup:")
  console.log({
    fullName: formData.get("fullName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    city: formData.get("city"),
    experience: formData.get("experience"),
    skills: formData.getAll("skills"),
    ktp: formData.get("ktp") as File,
    sim: formData.get("sim") as File,
    skck: formData.get("skck") as File,
  })

  return {
    message: `Terima kasih, ${fullName}! Pendaftaran Anda telah kami terima. Tim kami akan segera meninjau dan menghubungi Anda melalui email.`,
    success: true,
  }
}
