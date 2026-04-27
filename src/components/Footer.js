'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#f7f1ea] text-gray-700 relative">

      {/* MAIN */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 text-center sm:text-left">

          {/* LOGO + DESCRIPCIÓN */}
          <div className="flex flex-col items-center sm:items-start">

            <div className="relative w-32 sm:w-36 md:w-40 h-16 sm:h-18 md:h-20 mb-4 sm:mb-5">
              <Image
                src="/logoo.png"
                alt="Tokio Deco"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xs sm:max-w-sm">
              Tokio Deco es un emprendimiento artesanal donde cada pieza está hecha a mano
              con dedicación, calma y amor por el detalle.
            </p>

            {/* REDES */}
            <div className="flex gap-3 mt-4 sm:mt-5">
              <a
                href="https://instagram.com/tokio_decoar"
                target="_blank"
                className="p-2.5 bg-white rounded-full shadow-sm hover:bg-[#c8a27a] hover:text-white transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* NAVEGACIÓN */}
          <div className="mt-6 sm:mt-0">

            <h3 className="font-serif text-base sm:text-lg mb-4 sm:mb-5 text-gray-800">
              Navegación
            </h3>

            <ul className="space-y-2 sm:space-y-3 text-sm text-gray-600">

              <li>
                <Link href="/" className="hover:text-[#c8a27a] transition">
                  Inicio
                </Link>
              </li>

              <li>
                <Link href="/productos" className="hover:text-[#c8a27a] transition">
                  Productos
                </Link>
              </li>

              <li>
                <Link href="/nosotros" className="hover:text-[#c8a27a] transition">
                  Sobre mí
                </Link>
              </li>

              <li>
                <Link href="/contacto" className="hover:text-[#c8a27a] transition">
                  Contacto
                </Link>
              </li>

            </ul>

          </div>

          {/* CONTACTO */}
          <div className="mt-6 lg:mt-0 text-center sm:text-left">

            <h3 className="font-serif text-base sm:text-lg mb-4 sm:mb-5 text-gray-800">
              Pedidos personalizados
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5 sm:mb-6 max-w-xs mx-auto sm:mx-0">
              Cada pieza puede adaptarse a tu idea. Escribinos y creamos algo único,
              pensado especialmente para vos.
            </p>

            <a
              href="https://wa.me/543834327903?text=Hola!%20Quiero%20hacer%20un%20pedido%20personalizado"
              target="_blank"
              className="inline-block bg-[#c8a27a] text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm hover:bg-[#b68f68] transition shadow-sm"
            >
              Hacer pedido
            </a>

          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-[#e8d8c3]">

        <div className="container mx-auto px-4 sm:px-6 py-5 sm:py-6 text-center text-xs sm:text-sm text-gray-500">

          <p className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
            © {new Date().getFullYear()} Tokio Deco · Hecho con
            <Heart className="w-4 h-4 text-[#c8a27a]" />
          </p>

        </div>

      </div>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/543834327903?text=Hola!%20Quiero%20hacer%20una%20consulta"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 bg-[#25D366] hover:scale-110 transition text-white p-3 sm:p-4 rounded-full shadow-lg"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
        </svg>
      </a>

    </footer>
  );
}