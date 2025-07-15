"use client"

import { useActionState, useEffect } from "react"
// Update the import path below to the correct relative path if needed, for example:
import { partnerSignupAction } from "@/app/menjadi-mitra/actions"
// Or ensure that 'actions.ts' exists in 'src/app/menjadi-mitra/' and the path is correct.
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

const initialState = {
  message: "",
  success: false,
}

export function PartnerSignupForm() {
  const [state, formAction, isPending] = useActionState(partnerSignupAction, initialState)

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success("Pendaftaran Berhasil!", {
          description: state.message,
        })
      } else {
        toast.error("Pendaftaran Gagal", {
          description: state.message,
        })
      }
    }
  }, [state])

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-slate-300">
            Nama Lengkap
          </Label>
          <Input
            id="fullName"
            name="fullName"
            required
            className="bg-slate-800 border-slate-700 text-white focus:border-cyan-400"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-slate-300">
            Nomor Telepon
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            className="bg-slate-800 border-slate-700 text-white focus:border-cyan-400"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-slate-300">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          className="bg-slate-800 border-slate-700 text-white focus:border-cyan-400"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="city" className="text-slate-300">
            Kota Domisili
          </Label>
          <Select name="city" required>
            <SelectTrigger className="bg-slate-800 border-slate-700 text-white focus:border-cyan-400">
              <SelectValue placeholder="Pilih Kota" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700 text-white">
              <SelectItem value="jakarta">Jakarta</SelectItem>
              <SelectItem value="bandung">Bandung</SelectItem>
              <SelectItem value="surabaya">Surabaya</SelectItem>
              <SelectItem value="yogyakarta">Yogyakarta</SelectItem>
              <SelectItem value="lainnya">Lainnya</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="experience" className="text-slate-300">
            Pengalaman (Tahun)
          </Label>
          <Input
            id="experience"
            name="experience"
            type="number"
            min="2"
            required
            className="bg-slate-800 border-slate-700 text-white focus:border-cyan-400"
          />
        </div>
      </div>
      <div className="space-y-3">
        <Label className="text-slate-300">Keahlian Utama (Bisa pilih lebih dari satu)</Label>
        <div className="grid grid-cols-2 gap-4">
          {["Ban", "Mesin", "Kelistrikan", "Umum"].map((skill) => (
            <div key={skill} className="flex items-center space-x-2">
              <Checkbox
                id={skill.toLowerCase()}
                name="skills"
                value={skill.toLowerCase()}
                className="border-slate-600 data-[state=checked]:bg-cyan-500 data-[state=checked]:text-white"
              />
              <Label htmlFor={skill.toLowerCase()} className="text-slate-300 font-normal">
                {skill}
              </Label>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="ktp" className="text-slate-300">
            Upload KTP
          </Label>
          <Input
            id="ktp"
            name="ktp"
            type="file"
            required
            className="bg-slate-800 border-slate-700 text-white file:text-slate-300 file:bg-slate-700"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="sim" className="text-slate-300">
            Upload SIM C
          </Label>
          <Input
            id="sim"
            name="sim"
            type="file"
            required
            className="bg-slate-800 border-slate-700 text-white file:text-slate-300 file:bg-slate-700"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="skck" className="text-slate-300">
            Upload SKCK
          </Label>
          <Input
            id="skck"
            name="skck"
            type="file"
            required
            className="bg-slate-800 border-slate-700 text-white file:text-slate-300 file:bg-slate-700"
          />
        </div>
      </div>
      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-pink-500 text-white shadow-[0_0_15px_theme(colors.pink.500)] hover:bg-pink-600 hover:shadow-[0_0_25px_theme(colors.pink.500)] transition-all duration-300 text-lg py-6"
      >
        {isPending ? "Mengirim..." : "Kirim Pendaftaran"}
      </Button>
    </form>
  )
}
