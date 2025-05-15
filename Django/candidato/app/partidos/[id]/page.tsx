import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, FileText, User, Users, BarChart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Footer } from "@/components/footer"

export default function PoliticalPartyPage({ params }: { params: { id: string } }) {
  // En una aplicación real, obtendrías estos datos de una API o base de datos
  const party = {
    id: params.id,
    name: "Nombre del Partido",
    logo: "/images/party-placeholder.png",
    color: "#2563EB",
    description:
      "Descripción general del partido político, su historia, ideología y principales propuestas para las próximas elecciones.",
    candidates: {
      president: {
        name: "Nombre del Candidato",
        role: "Candidato a la Presidencia",
        bio: "Abogado y político con experiencia en gestión pública y privada. Ha ocupado diversos cargos en administraciones anteriores.",
        image: "/images/candidate-placeholder.png",
      },
      vicePresidents: [
        {
          name: "Nombre del Vicepresidente 1",
          role: "Primera Vicepresidencia",
          bio: "Profesional con amplia trayectoria en el sector público y experiencia en gestión de políticas sociales.",
          image: "/images/candidate-placeholder.png",
        },
        {
          name: "Nombre del Vicepresidente 2",
          role: "Segunda Vicepresidencia",
          bio: "Economista especializado en desarrollo regional y políticas de inclusión social.",
          image: "/images/candidate-placeholder.png",
        },
      ],
    },
    governmentPlan: {
      mainAxes: [
        "Desarrollo social e inclusión",
        "Crecimiento económico sostenible",
        "Fortalecimiento institucional",
        "Sostenibilidad ambiental",
        "Integración internacional",
      ],
      keyProposals: [
        "Reforma del sistema educativo nacional",
        "Fortalecimiento del sistema de salud pública",
        "Plan de reactivación económica post-pandemia",
        "Lucha contra la corrupción y reforma judicial",
        "Descentralización y desarrollo regional",
      ],
    },
    history: {
      foundation: "Año de fundación",
      ideology: "Ideología política",
      milestones: [
        "Fundación del partido",
        "Primera participación electoral",
        "Representación en el Congreso",
        "Participación en gobiernos anteriores",
        "Renovación y cambios en la dirigencia",
      ],
    },
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header with party info */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-500 mb-4">
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-32 h-32 relative">
              <Image
                src={party.logo || "/placeholder.svg"}
                alt={`Logo de ${party.name}`}
                fill
                className="object-contain"
              />
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold">{party.name}</h1>
              <p className="mt-2 text-gray-600 max-w-2xl">{party.description}</p>

              <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
                <Button className="gap-2">
                  <FileText className="h-4 w-4" />
                  Plan de Gobierno
                </Button>
                <Button variant="outline" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Compartir
                </Button>
                <Button variant="outline" className="gap-2">
                  <BarChart className="h-4 w-4" />
                  Comparar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content with tabs */}
      <section className="py-8 flex-grow">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="plan" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="plan" className="text-base py-3">
                <FileText className="h-4 w-4 mr-2" />
                Plan de Gobierno
              </TabsTrigger>
              <TabsTrigger value="candidates" className="text-base py-3">
                <User className="h-4 w-4 mr-2" />
                Candidatos
              </TabsTrigger>
              <TabsTrigger value="history" className="text-base py-3">
                <Users className="h-4 w-4 mr-2" />
                Historia
              </TabsTrigger>
            </TabsList>

            <TabsContent value="plan" className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h2 className="text-2xl font-bold mb-6">Plan de Gobierno</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Ejes principales</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {party.governmentPlan.mainAxes.map((axis, index) => (
                        <div key={index} className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                          <span className="inline-block w-8 h-8 bg-blue-500 text-white rounded-full text-center leading-8 font-bold mb-2">
                            {index + 1}
                          </span>
                          <p className="font-medium">{axis}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Propuestas clave</h3>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <ul className="space-y-4">
                        {party.governmentPlan.keyProposals.map((proposal, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="inline-block w-6 h-6 bg-blue-500 text-white rounded-full text-center leading-6 font-bold flex-shrink-0">
                              {index + 1}
                            </span>
                            <span>{proposal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button size="lg" className="gap-2">
                      <FileText className="h-4 w-4" />
                      Descargar Plan de Gobierno Completo
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-semibold mb-4">Pon a prueba tus conocimientos</h3>
                <p className="mb-4">
                  ¿Cuánto sabes sobre las propuestas de {party.name}? Juega y aprende más sobre su plan de gobierno.
                </p>
                <div className="flex gap-4">
                  <Button>Quiz de Propuestas</Button>
                  <Button variant="outline">Verdadero o Falso</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="candidates" className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h2 className="text-2xl font-bold mb-6">Candidatos</h2>

                <div className="space-y-8">
                  {/* Candidato presidencial */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden relative">
                        <Image
                          src={party.candidates.president.image || "/placeholder.svg"}
                          alt={party.candidates.president.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{party.candidates.president.name}</h3>
                        <p className="text-blue-600 font-medium">{party.candidates.president.role}</p>
                        <p className="mt-3 text-gray-700">{party.candidates.president.bio}</p>
                        <Button variant="outline" size="sm" className="mt-4">
                          Ver perfil completo
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Vicepresidentes */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Vicepresidentes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {party.candidates.vicePresidents.map((vp, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-center gap-4">
                          <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden relative flex-shrink-0">
                            <Image src={vp.image || "/placeholder.svg"} alt={vp.name} fill className="object-cover" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{vp.name}</h4>
                            <p className="text-blue-600 text-sm">{vp.role}</p>
                            <p className="text-sm text-gray-700 mt-1">{vp.bio}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-semibold mb-4">Conoce más sobre los candidatos</h3>
                <p className="mb-4">Juega y aprende más sobre los candidatos de {party.name} y sus trayectorias.</p>
                <div className="flex gap-4">
                  <Button>Trivia de Candidatos</Button>
                  <Button variant="outline">Empareja Candidatos</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="history" className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h2 className="text-2xl font-bold mb-6">Historia del Partido</h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Fundación</h3>
                      <p className="text-gray-700">{party.history.foundation}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Ideología</h3>
                      <p className="text-gray-700">{party.history.ideology}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Hitos importantes</h3>
                    <div className="relative border-l-2 border-blue-500 pl-6 ml-3 space-y-6">
                      {party.history.milestones.map((milestone, index) => (
                        <div key={index} className="relative">
                          <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[30px] top-1"></div>
                          <h4 className="font-semibold">Año {2000 + index * 4}</h4>
                          <p className="text-gray-700">{milestone}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-semibold mb-4">Pon a prueba tus conocimientos históricos</h3>
                <p className="mb-4">¿Cuánto sabes sobre la historia de {party.name}? Juega y aprende más.</p>
                <div className="flex gap-4">
                  <Button>Quiz Histórico</Button>
                  <Button variant="outline">Línea de Tiempo</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
