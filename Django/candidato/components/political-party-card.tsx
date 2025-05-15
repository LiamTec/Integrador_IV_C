"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight, Users, FileText, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface PoliticalParty {
  id: string
  name: string
  logo: string
  color: string
}

interface PoliticalPartyCardProps {
  party: PoliticalParty
}

export function PoliticalPartyCard({ party }: PoliticalPartyCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer border"
          style={{
            borderColor: isHovered ? party.color : "transparent",
            transform: isHovered ? "translateY(-5px)" : "none",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="p-6 flex flex-col items-center">
            <div className="w-24 h-24 relative mb-4">
              <Image
                src={party.logo || "/placeholder.svg"}
                alt={`Logo de ${party.name}`}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-center">{party.name}</h3>
            <Button variant="ghost" size="sm" className="mt-4 text-sm gap-1" style={{ color: party.color }}>
              Ver información <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 relative">
              <Image
                src={party.logo || "/placeholder.svg"}
                alt={`Logo de ${party.name}`}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <DialogTitle className="text-2xl">{party.name}</DialogTitle>
              <DialogDescription>Información detallada sobre el partido político</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <Tabs defaultValue="plan">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="plan">
              <FileText className="h-4 w-4 mr-2" />
              Plan de Gobierno
            </TabsTrigger>
            <TabsTrigger value="candidates">
              <User className="h-4 w-4 mr-2" />
              Candidatos
            </TabsTrigger>
            <TabsTrigger value="history">
              <Users className="h-4 w-4 mr-2" />
              Historia
            </TabsTrigger>
          </TabsList>

          <TabsContent value="plan" className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Principales propuestas:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Reforma del sistema educativo nacional</li>
                <li>Fortalecimiento del sistema de salud pública</li>
                <li>Plan de reactivación económica post-pandemia</li>
                <li>Lucha contra la corrupción y reforma judicial</li>
                <li>Descentralización y desarrollo regional</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Ejes principales:</h4>
              <p className="text-gray-700">
                El plan de gobierno de {party.name} se centra en cinco ejes estratégicos: desarrollo social, crecimiento
                económico, fortalecimiento institucional, sostenibilidad ambiental e integración internacional.
              </p>
            </div>

            <Button className="w-full">Descargar Plan de Gobierno Completo</Button>
          </TabsContent>

          <TabsContent value="candidates" className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden relative">
                <Image
                  src="/images/candidate-placeholder.png"
                  alt="Candidato presidencial"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Nombre del Candidato</h4>
                <p className="text-gray-500">Candidato a la Presidencia</p>
                <p className="text-sm text-gray-700 mt-1">
                  Abogado y político con experiencia en gestión pública y privada.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden relative">
                  <Image
                    src="/images/candidate-placeholder.png"
                    alt="Primer vicepresidente"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-medium">Nombre del Vicepresidente</h5>
                  <p className="text-gray-500 text-sm">Primera Vicepresidencia</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden relative">
                  <Image
                    src="/images/candidate-placeholder.png"
                    alt="Segundo vicepresidente"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-medium">Nombre del Vicepresidente</h5>
                  <p className="text-gray-500 text-sm">Segunda Vicepresidencia</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <p className="text-gray-700">
              {party.name} es un partido político peruano fundado en [año de fundación]. A lo largo de su historia, ha
              participado en diversos procesos electorales y ha mantenido una posición [ideológica] en el espectro
              político del país.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Hitos importantes:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Fundación del partido</li>
                <li>Primera participación electoral</li>
                <li>Representación en el Congreso</li>
                <li>Participación en gobiernos anteriores</li>
                <li>Renovación y cambios en la dirigencia</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between mt-4">
          <Button variant="outline">Comparar con otros partidos</Button>
          <Button>Jugar y aprender más</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
