import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-[#fbf7f2] text-gray-800">

      {/* HERO */}
      <section className="bg-[#e8d8c3] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/textura.jpg')] bg-cover"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Contacto
          </h1>

          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            Estamos acá para ayudarte a crear algo único ✨
          </p>
        </div>
      </section>

      {/* CONTACTO PRINCIPAL */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8 mb-16">

            {/* WHATSAPP */}
            <a
              href="https://wa.me/543834927252"
              target="_blank"
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition group"
            >
              <div className="bg-[#25D366] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Phone className="w-6 h-6" />
              </div>

              <h3 className="font-serif text-lg mb-1">WhatsApp</h3>
              <p className="text-gray-600 text-sm">+54 383 492-7252</p>
              <p className="text-[#c8a27a] text-sm mt-2">Escribinos →</p>
            </a>

            {/* TELÉFONO */}
            <a
              href="tel:+543834327903"
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition group"
            >
              <div className="bg-[#c8a27a] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Phone className="w-6 h-6" />
              </div>

              <h3 className="font-serif text-lg mb-1">Teléfono</h3>
              <p className="text-gray-600 text-sm">Llamanos directo</p>
              <p className="text-[#c8a27a] text-sm mt-2">Click para llamar →</p>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:tokiodeco@gmail.com"
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition group"
            >
              <div className="bg-[#c8a27a] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Mail className="w-6 h-6" />
              </div>

              <h3 className="font-serif text-lg mb-1">Email</h3>
              <p className="text-gray-600 text-sm break-all">tokiodeco@gmail.com</p>
              <p className="text-[#c8a27a] text-sm mt-2">Escribinos →</p>
            </a>

            {/* HORARIOS */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="bg-[#c8a27a] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>

              <h3 className="font-serif text-lg mb-2">Horarios</h3>
              <p className="text-gray-600 text-sm">Lun a Vie: 9 - 13 / 16 - 20</p>
              <p className="text-gray-600 text-sm">Sábados: 9 - 13</p>
            </div>

          </div>

          {/* SUCURSAL / UBICACIÓN */}
          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex gap-4">
                <div className="bg-[#c8a27a] text-white w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-2xl font-serif mb-2">Tokio Deco Studio</h3>

                  <p className="text-gray-700 mb-3">
                    Catamarca, Argentina
                  </p>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Cada pieza nace acá, en nuestro espacio creativo donde trabajamos de forma artesanal,
                    cuidando cada detalle del proceso.
                  </p>

                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    className="text-[#c8a27a] font-medium hover:underline"
                  >
                    Ver ubicación →
                  </a>
                </div>
              </div>
            </div>

            {/* INSTAGRAM / REDES */}
            <div className="bg-[#f3ebe3] p-8 rounded-2xl">

              <h3 className="text-2xl font-serif mb-4">
                Seguinos
              </h3>

              <p className="text-gray-700 mb-6">
                Mirá nuestros nuevos diseños y procesos artesanales
              </p>

              <a
                href="https://instagram.com"
                target="_blank"
                className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition"
              >
                <Instagram className="w-5 h-5 text-[#c8a27a]" />
                Instagram
              </a>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}