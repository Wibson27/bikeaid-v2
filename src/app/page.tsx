import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Wrench,
  Smartphone,
  LocateFixed,
  CircleCheck,
  BatteryCharging,
  CircleDotDashed,
  Zap,
  Truck,
  Battery,
  ShieldCheck,
  Cpu,
  Star,
} from "lucide-react"

export default function BikeAidLandingPage() {
  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-300 font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative w-full h-[calc(100vh-4rem)] flex items-center justify-center">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/images/hero4.webp"
              alt="Hero Background"
              fill
              className="object-cover opacity-20 animate-subtle-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
          </div>
          <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white mb-4">
              Motor Mogok di Jalan? <br />
              <span className="text-cyan-400 drop-shadow-[0_0_10px_theme(colors.cyan.400)]">Bantuan Profesional</span>{" "}
              Tiba dalam <span className="text-cyan-400 drop-shadow-[0_0_10px_theme(colors.cyan.400)]">30 Menit.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 mb-8">
              Platform layanan darurat motor on-demand pertama di Indonesia. Cepat, transparan, dan terpercaya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-950 transition-all duration-300 flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                  <path d="M10 2c1 .5 2 2 2 5" />
                </svg>
                Download on the App Store
              </Button>
              <Button
                size="lg"
                className="bg-white text-slate-950 hover:bg-slate-200 transition-all duration-300 flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 20.5v-17A1.5 1.5 0 0 1 4.5 2H13l7 7v11.5a1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 20.5Z" />
                  <path d="m10 12-2 5 5-4-3-4Z" />
                </svg>
                Get it on Google Play
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Hanya 3 Langkah Mudah Saat Darurat</h2>
              <div className="mt-4 h-1 w-24 bg-cyan-400 mx-auto shadow-[0_0_15px_theme(colors.cyan.400)]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-slate-900/50 border-cyan-400/20 shadow-[0_0_20px_rgba(0,255,255,0.1)] text-center">
                <CardHeader>
                  <div className="mx-auto bg-cyan-400/10 p-4 rounded-full w-fit">
                    <Smartphone className="h-10 w-10 text-cyan-400" />
                  </div>
                  <CardTitle className="text-white mt-4">1. Request Bantuan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400">Buka aplikasi, pilih masalah Anda. Lokasi terdeteksi otomatis.</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-900/50 border-cyan-400/20 shadow-[0_0_20px_rgba(0,255,255,0.1)] text-center">
                <CardHeader>
                  <div className="mx-auto bg-cyan-400/10 p-4 rounded-full w-fit">
                    <LocateFixed className="h-10 w-10 text-cyan-400" />
                  </div>
                  <CardTitle className="text-white mt-4">2. Lacak Montir Anda</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400">
                    Pantau lokasi montir secara real-time dan lihat estimasi waktu kedatangan yang akurat.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-900/50 border-cyan-400/20 shadow-[0_0_20px_rgba(0,255,255,0.1)] text-center">
                <CardHeader>
                  <div className="mx-auto bg-cyan-400/10 p-4 rounded-full w-fit">
                    <CircleCheck className="h-10 w-10 text-cyan-400" />
                  </div>
                  <CardTitle className="text-white mt-4">3. Masalah Selesai</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400">
                    Montir profesional mengatasi masalah motor Anda dengan cepat dan transparan.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services & Pricing Section */}
        <section id="pricing" className="py-20 md:py-32 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Layanan Transparan, Harga Pasti</h2>
              <p className="mt-2 text-lg text-slate-400">
                Tidak ada lagi biaya tersembunyi. Anda setujui biayanya sebelum kami bekerja.
              </p>
              <div className="mt-4 h-1 w-24 bg-pink-500 mx-auto shadow-[0_0_15px_theme(colors.pink.500)]"></div>
            </div>

            <div className="max-w-2xl mx-auto mb-12">
              <Card className="bg-gradient-to-br from-cyan-500/20 to-slate-900 border-cyan-400/50 shadow-[0_0_30px_rgba(0,255,255,0.2)]">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">Biaya Diagnosis Tetap</CardTitle>
                  <p className="text-4xl font-bold text-cyan-400 mt-2">Hanya Rp 25.000</p>
                </CardHeader>
                <CardContent className="text-center text-slate-300">
                  <p>Untuk biaya kedatangan, pemeriksaan profesional, dan penawaran harga transparan.</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <BatteryCharging />, name: "Emergency Start", price: "Rp 75.000" },
                { icon: <CircleDotDashed />, name: "Servis Ban", price: "Rp 50.000 - 150.000" },
                { icon: <Zap />, name: "Kelistrikan Dasar", price: "Rp 75.000 - 200.000" },
                { icon: <Wrench />, name: "Mekanik Ringan", price: "Rp 100.000 - 300.000" },
                { icon: <Truck />, name: "Derek Darurat", price: "Rp 50.000 + Tarif Jarak" },
                { icon: <Battery />, name: "Ganti Aki", price: "Rp 60.000 + Harga Aki" },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/50 border-slate-800 hover:border-pink-500/50 transition-colors duration-300"
                >
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="text-pink-500">{service.icon}</div>
                    <CardTitle className="text-white text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl font-bold text-slate-200">{service.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-sm text-slate-500 bg-slate-800/50 inline-block px-3 py-1 rounded-full">
                Layanan malam (21:00-06:00) dikenakan biaya tambahan 50%.
              </p>
            </div>
          </div>
        </section>

        {/* "Untuk Bisnis" Section */}
        <section id="business" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Jaga Armada Bisnis Anda Tetap Produktif</h2>
                <p className="mt-4 text-lg text-slate-400">
                  BikeAid menawarkan paket langganan bulanan untuk bisnis dengan 10+ motor. Dapatkan prioritas layanan,
                  diskon perbaikan, dan laporan terperinci untuk menjaga operasional Anda berjalan lancar.
                </p>
                <Button
                  variant="outline"
                  className="mt-6 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] bg-transparent"
                >
                  Pelajari Paket Bisnis
                </Button>
              </div>
              <div>
                <Image
                  src="/images/armada2.jpg"
                  alt="Bisnis"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl shadow-cyan-500/10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why BikeAid Section */}
        <section id="why-us" className="py-20 md:py-32 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Dibangun Di Atas Kepercayaan & Teknologi</h2>
              <div className="mt-4 h-1 w-24 bg-cyan-400 mx-auto shadow-[0_0_15px_theme(colors.cyan.400)]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-slate-900 p-8 rounded-lg border border-slate-800">
                <div className="flex items-center gap-4 mb-4">
                  <ShieldCheck className="h-8 w-8 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">Jaringan Mekanik Profesional</h3>
                </div>
                <p className="text-slate-400">
                  Kami membangun jaringan mekanik bersertifikasi dengan program pelatihan khusus yang sulit ditiru,
                  memastikan kualitas layanan tertinggi.
                </p>
              </div>
              <div className="bg-slate-900 p-8 rounded-lg border border-slate-800">
                <div className="flex items-center gap-4 mb-4">
                  <Cpu className="h-8 w-8 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">Platform Teknologi Canggih</h3>
                </div>
                <p className="text-slate-400">
                  Algoritma optimasi dispatch, manajemen inventaris, dan data analisis kami memastikan layanan tercepat
                  dan paling efisien.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section id="testimonials" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Apa Kata Mereka yang Sudah Tertolong</h2>
              <div className="mt-4 h-1 w-24 bg-pink-500 mx-auto shadow-[0_0_15px_theme(colors.pink.500)]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Budi Santoso",
                  quote:
                    "Luar biasa cepat! Montirnya datang kurang dari 20 menit pas aki saya soak di tengah malam. Sangat profesional.",
                },
                {
                  name: "Sari Dewi",
                  quote:
                    "Aplikasi yang wajib punya. Harga transparan dari awal, jadi tidak khawatir diketok harga. Ban bocor beres dalam sekejap.",
                },
                {
                  name: "Ahmad Rizki",
                  quote:
                    "Sebagai driver ojol, ini penyelamat hidup. Waktu adalah uang, dan BikeAid benar-benar menghemat waktu saya saat ada masalah.",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/50 border-cyan-400/20 shadow-[0_0_20px_rgba(0,255,255,0.1)] flex flex-col"
                >
                  <CardContent className="pt-6 flex-grow">
                    <p className="text-slate-300 italic">{`"${testimonial.quote}"`}</p>
                  </CardContent>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-t from-slate-950 to-cyan-900/50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Jangan Biarkan Motor Mogok Menghentikan Anda.
            </h2>
            <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Download BikeAid sekarang. Ketenangan di setiap perjalanan, tersedia 24/7 di genggaman Anda.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-pink-500 text-white shadow-[0_0_15px_theme(colors.pink.500)] hover:bg-pink-600 hover:shadow-[0_0_25px_theme(colors.pink.500)] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-lg py-7 px-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                  <path d="M10 2c1 .5 2 2 2 5" />
                </svg>
                App Store
              </Button>
              <Button
                size="lg"
                className="bg-white text-slate-950 hover:bg-slate-200 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-lg py-7 px-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 20.5v-17A1.5 1.5 0 0 1 4.5 2H13l7 7v11.5a1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 20.5Z" />
                  <path d="m10 12-2 5 5-4-3-4Z" />
                </svg>
                Google Play
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
