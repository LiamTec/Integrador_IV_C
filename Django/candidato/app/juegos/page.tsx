import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Trophy, Clock, Brain, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function GamesPage() {
  const games = [
    {
      id: "quiz-propuestas",
      title: "Quiz de Propuestas",
      description: "Pon a prueba tu conocimiento sobre las propuestas de los partidos políticos.",
      image: "/images/quiz-game.png",
      icon: <Brain className="h-5 w-5" />,
      difficulty: "Medio",
      time: "5 min",
      players: "1 jugador",
    },
    {
      id: "trivia-candidatos",
      title: "Trivia de Candidatos",
      description: "¿Cuánto sabes sobre los candidatos presidenciales? Demuéstralo en esta trivia.",
      image: "/images/trivia-game.png",
      icon: <Users className="h-5 w-5" />,
      difficulty: "Fácil",
      time: "3 min",
      players: "1 jugador",
    },
    {
      id: "memoria-electoral",
      title: "Memoria Electoral",
      description: "Encuentra las parejas de logos y nombres de partidos en este juego de memoria.",
      image: "/images/memory-game.png",
      icon: <Trophy className="h-5 w-5" />,
      difficulty: "Difícil",
      time: "10 min",
      players: "1-2 jugadores",
    },
    {
      id: "verdadero-falso",
      title: "Verdadero o Falso",
      description: "Identifica si las afirmaciones sobre planes de gobierno son verdaderas o falsas.",
      image: "/images/true-false-game.png",
      icon: <Clock className="h-5 w-5" />,
      difficulty: "Medio",
      time: "4 min",
      players: "1 jugador",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header with back button */}
      <div className="bg-blue-500 text-white py-6">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-white hover:text-blue-100 mb-4">
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Juegos Interactivos</h1>
          <p className="mt-2 text-blue-100">Aprende sobre política peruana de forma divertida y dinámica</p>
        </div>
      </div>

      {/* Games grid */}
      <section className="py-12 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <Link href={`/juegos/${game.id}`} key={game.id} className="block">
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] border border-gray-100 h-full flex flex-col">
                  <div className="relative h-48">
                    <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                      {game.icon}
                      {game.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">{game.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        Dificultad: {game.difficulty}
                      </span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        Tiempo: {game.time}
                      </span>
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                        {game.players}
                      </span>
                    </div>
                    <Button className="w-full">Jugar Ahora</Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Tabla de Clasificación</h2>
              <Button variant="outline">Ver Completa</Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 px-2 text-left">Posición</th>
                    <th className="py-3 px-2 text-left">Usuario</th>
                    <th className="py-3 px-2 text-left">Juegos</th>
                    <th className="py-3 px-2 text-left">Puntos</th>
                    <th className="py-3 px-2 text-left">Nivel</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((position) => (
                    <tr key={position} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-2 font-medium">{position}</td>
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden relative">
                            <Image src="/images/user-placeholder.png" alt="Usuario" fill className="object-cover" />
                          </div>
                          <span>Usuario{position}</span>
                        </div>
                      </td>
                      <td className="py-3 px-2">{20 - position * 2}</td>
                      <td className="py-3 px-2 font-medium">{1000 - position * 100}</td>
                      <td className="py-3 px-2">
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                          Nivel {6 - position}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
