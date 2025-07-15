import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PartnerSignupForm } from "@/components/partner-signup-form"
import { Wallet, Smartphone, LifeBuoy, Map, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BecomePartnerPage() {
  return (
    <main className="w-full min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/motomecha2.png"
            alt="Partner Hero Background"
            fill
            className="object-cover opacity-10 animate-subtle-zoom"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-4">
            Jadilah Pahlawan di Jalanan.
            <br />
            <span className="text-cyan-400 drop-shadow-[0_0_10px_theme(colors.cyan.400)]">
              Bergabung dengan Mitra BikeAid.
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 mb-8">
            Dapatkan penghasilan fleksibel, akses ke teknologi canggih, dan jadilah bagian dari komunitas profesional.
          </p>
          <Link href="#signup-form">
            <Button
              size="lg"
              className="bg-pink-500 text-white shadow-[0_0_15px_theme(colors.pink.500)] hover:bg-pink-600 hover:shadow-[0_0_25px_theme(colors.pink.500)] transition-all duration-300 transform hover:scale-105"
            >
              Daftar Sekarang
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Join Section */}
      <section id="benefits" className="py-20 md:py-32 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Keuntungan Menjadi Mitra BikeAid</h2>
            <div className="mt-4 h-1 w-24 bg-cyan-400 mx-auto shadow-[0_0_15px_theme(colors.cyan.400)]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Wallet className="h-10 w-10 text-cyan-400" />,
                title: "Penghasilan Fleksibel",
                text: "Tentukan jam kerja Anda sendiri. Dapatkan bayaran per-pekerjaan dengan tarif yang kompetitif dan transparan.",
              },
              {
                icon: <Smartphone className="h-10 w-10 text-cyan-400" />,
                title: "Teknologi Canggih",
                text: "Gunakan aplikasi mitra kami untuk menerima pekerjaan, navigasi efisien, dan mengelola pendapatan Anda.",
              },
              {
                icon: <LifeBuoy className="h-10 w-10 text-cyan-400" />,
                title: "Dukungan Penuh",
                text: "Tim kami siap membantu Anda 24/7. Dapatkan akses ke pelatihan, suku cadang, dan komunitas mitra yang solid.",
              },
              {
                icon: <Map className="h-10 w-10 text-cyan-400" />,
                title: "Jangkauan Luas",
                text: "Terhubung dengan ribuan pelanggan di kota Anda. Kami yang akan mencarikan pekerjaan untuk Anda.",
              },
            ].map((benefit) => (
              <Card
                key={benefit.title}
                className="bg-slate-900/50 border-cyan-400/20 shadow-[0_0_20px_rgba(0,255,255,0.1)] text-center"
              >
                <CardHeader>
                  <div className="mx-auto bg-cyan-400/10 p-4 rounded-full w-fit">{benefit.icon}</div>
                  <CardTitle className="text-white mt-4">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400">{benefit.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="py-20 md:py-32 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Persyaratan Menjadi Mitra</h2>
            <div className="mt-4 h-1 w-24 bg-pink-500 mx-auto shadow-[0_0_15px_theme(colors.pink.500)]"></div>
          </div>
          <div className="bg-slate-900 p-8 rounded-lg border border-slate-800">
            <ul className="space-y-4">
              {[
                "KTP & SIM C aktif.",
                "SKCK yang masih berlaku.",
                "Memiliki pengalaman sebagai mekanik motor minimal 2 tahun.",
                "Memiliki smartphone Android.",
                "Bersedia mengikuti pelatihan standar BikeAid.",
              ].map((req) => (
                <li key={req} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-300">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="signup-form" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Formulir Pendaftaran Mitra</h2>
            <p className="mt-2 text-lg text-slate-400">Lengkapi data diri Anda untuk memulai proses pendaftaran.</p>
            <div className="mt-4 h-1 w-24 bg-cyan-400 mx-auto shadow-[0_0_15px_theme(colors.cyan.400)]"></div>
          </div>
          <Card className="bg-slate-900/50 border-slate-800 p-6 md:p-8">
            <PartnerSignupForm />
          </Card>
        </div>
      </section>
    </main>
  )
}
