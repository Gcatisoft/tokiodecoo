import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, Users, Star, Award } from 'lucide-react';

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-[#fbf7f2] text-gray-800">

      {/* HERO */}
      <section className="bg-[#e8d8c3] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/textura.jpg')] bg-cover"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Nuestra Historia
          </h1>

          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            Creaciones hechas a mano que nacen del amor por lo simple, lo natural y lo único ✨
          </p>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/artesana.jpeg"
              alt="Tokio Deco"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-serif mb-6">
              Hola, soy Silvia
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">

              <p>
                Tokio Deco nació de la necesidad de crear con las manos, de volver a lo simple y a lo auténtico.
                Empecé trabajando con materiales naturales, explorando formas y texturas que transmitan calma.
              </p>

              <p>
                Con el tiempo, cada pieza se convirtió en una expresión personal: bolsos, objetos y detalles únicos
                hechos uno a uno, sin producción masiva.
              </p>

              <p>
                Hoy cada creación sigue ese mismo principio: tiempo, dedicación y amor por el proceso artesanal.
              </p>

              <p className="italic text-gray-600">
                No hacemos productos… hacemos piezas con alma.
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* VALORES */}
      <section className="py-20 bg-[#f3ebe3]">
        <div className="container mx-auto px-6">

          <h2 className="text-3xl font-serif text-center mb-12">
            Nuestros valores
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <Value icon={<Heart />} title="Hecho con amor" />
            <Value icon={<Star />} title="Calidad artesanal" />
            <Value icon={<Users />} title="Cercanía" />
            <Value icon={<Award />} title="Diseño único" />

          </div>

        </div>
      </section>

      {/* HISTORIA CORTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl text-center">

          <h2 className="text-3xl font-serif mb-6">
            Un proceso lento y consciente
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Cada pieza de Tokio Deco es pensada, cortada y terminada a mano.
            No hay dos iguales, porque cada una nace en un momento distinto, con una energía distinta.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#e8d8c3] text-center relative overflow-hidden">

        <div className="absolute inset-0 opacity-20 bg-[url('/textura.jpg')] bg-cover"></div>

        <div className="relative z-10 container mx-auto px-6">

          <h2 className="text-3xl font-serif mb-6">
            Descubrí nuestras creaciones
          </h2>

          <p className="mb-8 text-gray-700">
            Cada pieza cuenta una historia diferente
          </p>

          <Link
            href="/productos"
            className="inline-flex items-center gap-2 bg-[#c8a27a] text-white px-8 py-4 rounded-full hover:bg-[#b68f68] transition"
          >
            Ver productos
            <ArrowRight className="w-5 h-5" />
          </Link>

        </div>

      </section>

    </div>
  );
}

/* COMPONENTE VALUE */
function Value({ icon, title }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#c8a27a] text-white w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-sm">
        {icon}
      </div>
      <h3 className="font-serif text-lg">{title}</h3>
      <p className="text-gray-500 text-sm mt-2 max-w-[180px]">
        Artesanía con identidad propia
      </p>
    </div>
  );
}