import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/logo.png" alt="CandiDato Logo" width={50} height={50} className="w-12 h-12" />
              <span className="text-xl font-bold text-blue-500">CandiDato</span>
            </div>
            <h3 className="font-semibold mb-2">VISITA NUESTRAS REDES</h3>
            <div className="flex gap-4 mt-2">
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">SOBRE NOSOTROS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-500">
                  ¿Quiénes somos?
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-500">
                  ¿Cómo funciona?
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-500">
                  Nuestro equipo
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-500">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">RECURSOS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-500">
                  Planes de gobiernos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-500">
                  Biografía de candidatos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-500">
                  Historia electoral
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-500">
                  Glosario político
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">AYUDA</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-500">
                  F.A.Q.
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-500">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-500">
                  Términos de servicio
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">DESCARGUE NUESTRA APP</h3>
              <Link href="#" className="inline-block">
                <Image
                  src="/images/google-play.png"
                  alt="Google Play"
                  width={150}
                  height={45}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-gray-500">
          © 2024 CANDIDATO. TODOS LOS DERECHOS RESERVADOS.
        </div>
      </div>
    </footer>
  )
}
