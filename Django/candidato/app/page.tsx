import Link from "next/link"
import Image from "next/image"
import { Search, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PoliticalPartyCard } from "@/components/political-party-card"
import { Footer } from "@/components/footer"

export default function Home() {
  const politicalParties = [
    {
      id: "avanza-pais",
      name: "Avanza País",
      logo: "/images/avanza-pais.png",
      color: "#1E3A8A",
    },
    {
      id: "renovacion-popular",
      name: "Renovación Popular",
      logo: "/images/renovacion-popular.png",
      color: "#0EA5E9",
    },
    {
      id: "fuerza-popular",
      name: "Fuerza Popular",
      logo: "/images/fuerza-popular.png",
      color: "#F97316",
    },
    {
      id: "peru-libre",
      name: "Perú Libre",
      logo: "/images/peru-libre.png",
      color: "#EF4444",
    },
    {
      id: "alianza-progreso",
      name: "Alianza Para El Progreso",
      logo: "/images/alianza-progreso.png",
      color: "#2563EB",
    },
    {
      id: "podemos-peru",
      name: "Podemos Perú",
      logo: "/images/podemos-peru.png",
      color: "#1E40AF",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 bg-white z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="CandiDato Logo" width={40} height={40} className="w-10 h-10" />
            <div>
              <h1 className="text-2xl font-bold text-blue-500">CandiDato</h1>
              <p className="text-xs text-gray-500">Juega. Aprende. Decide por el Perú.</p>
            </div>
          </Link>

          <div className="relative max-w-md w-full mx-4 hidden md:block">
            <Input
              type="search"
              placeholder="Buscar en la página..."
              className="pl-3 pr-10 py-2 rounded-full border-gray-300 bg-gray-100 w-full"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notificaciones</span>
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </Button>
            <Button variant="outline" className="gap-2">
              <User className="h-5 w-5" />
              <span className="hidden sm:inline">Iniciar Sesión</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Conoce, Juega y Decide</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Explora los planes de gobierno, conoce a los candidatos y pon a prueba tus conocimientos sobre la política
            peruana.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-blue-600 hover:bg-gray-100">Jugar Ahora</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Conocer Más
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 flex-grow">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-red-500 mb-12">¿Qué partido político deseas ver?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {politicalParties.map((party) => (
              <PoliticalPartyCard key={party.id} party={party} />
            ))}
          </div>
        </div>
      </section>

      {/* Game Promo Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Juegos Interactivos</h2>
              <p className="text-gray-600 mb-6">
                Pon a prueba tus conocimientos sobre los planes de gobierno y candidatos presidenciales con nuestros
                juegos interactivos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button>Quiz de Propuestas</Button>
                <Button variant="outline">Empareja Candidatos</Button>
                <Button variant="outline">Trivia Electoral</Button>
              </div>
            </div>
            <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-lg">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <Image
                  src="/images/game-preview.png"
                  alt="Juego interactivo"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
