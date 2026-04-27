'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, ArrowRight, Heart, Sparkles } from 'lucide-react';
import { useCart } from '@/context/CartContext';

/* 🛍️ PRODUCTOS DESDE /public */
const productosLocal = [
  {
    id: 1,
    nombre: '',
    precio: 12000,
    imagen: '/1.jpeg',
  },
  {
    id: 2,
    nombre: '',
    precio: 14500,
    imagen: '/2.jpeg',
  },
  {
    id: 3,
    nombre: '',
    precio: 9800,
    imagen: '/3.jpeg',
  },
  {
    id: 4,
    nombre: '',
    precio: 16000,
    imagen: '/4.jpeg',
  },
];

export default function Home() {
  const { addToCart } = useCart();

  const productosDestacados = productosLocal;
  const loading = false;

  return (
    <div className="bg-[#fbf7f2] text-gray-800">

      {/* HERO */}
      <section className="relative py-24 bg-[#e8d8c3] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/textura.jpg')] bg-cover"></div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-5 tracking-tight">
              Tokio Deco
            </h1>

            <p className="text-lg mb-8 text-gray-700 leading-relaxed max-w-md">
              Artesanía que transforma espacios ✨<br />
              Piezas únicas hechas a mano con calma, textura y esencia natural.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/productos"
                className="bg-[#c8a27a] text-white px-8 py-3 rounded-full hover:scale-105 transition flex items-center justify-center gap-2 shadow-md"
              >
                Explorar colección
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href="https://wa.me/543834327903"
                target="_blank"
                className="border border-[#c8a27a] px-8 py-3 rounded-full hover:bg-[#c8a27a] hover:text-white transition"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.03] transition">
            <Image src="/logoo.png" alt="Tokio Deco" fill className="object-cover" />
          </div>

        </div>
      </section>

      {/* SOBRE */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
            <Image src="/artesana.jpeg" alt="Artesana" fill className="object-cover" />
          </div>

          <div>
            <h2 className="text-4xl font-[Playfair_Display] mb-6 text-gray-800">
              Sobre la artesana
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Detrás de Tokio Deco está <strong>Silvia Obregón</strong>, una artesana que transforma ideas en piezas con alma.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Su camino comenzó entre materiales simples y una conexión profunda con lo natural. Con el tiempo, desarrolló un estilo propio donde cada creación refleja calma y equilibrio.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Cada objeto es trabajado a mano con paciencia y dedicación.
            </p>

            <p className="text-gray-600 italic leading-relaxed">
              Más que productos, crea historias que habitan espacios.
            </p>
          </div>

        </div>
      </section>

      {/* VALORES */}
      <section className="py-20 bg-[#f3ebe3]">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

          <Value icon={<Heart />} title="Hecho con amor" />
          <Value icon={<Sparkles />} title="Diseños únicos" />
          <Value icon={<ShoppingBag />} title="Pedidos personalizados" />

        </div>
      </section>

      {/* PRODUCTOS (SOLO 4) */}
      <section className="py-24">
        <div className="container mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-serif mb-3">
              Productos destacados
            </h2>

            <p className="text-gray-500 mb-6">
              Lo más elegido por nuestros clientes
            </p>

            <p className="text-sm text-gray-400">
              Una selección curada de piezas únicas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {productosDestacados.map((producto) => (
              <ProductCard
                key={producto.id}
                producto={producto}
                onAddToCart={addToCart}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/productos"
              className="inline-block bg-[#c8a27a] text-white px-8 py-3 rounded-full hover:bg-[#b68f68] transition shadow-sm"
            >
              Ver todos
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

/* COMPONENTES */

function Value({ icon, title }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#c8a27a] text-white w-14 h-14 rounded-full flex items-center justify-center mb-5 shadow-sm">
        {icon}
      </div>

      <h3 className="font-serif text-lg">{title}</h3>

      <p className="text-gray-500 text-sm mt-2 max-w-[180px]">
        Creado con dedicación artesanal
      </p>
    </div>
  );
}

function ProductCard({ producto, onAddToCart }) {
  const mensaje = encodeURIComponent(
    `Hola! Quiero consultar por el producto: ${producto.nombre}`
  );

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition">

      <div className="relative aspect-square overflow-hidden">
        {producto.imagen ? (
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            fill
            className="object-cover group-hover:scale-105 transition duration-700"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-50">
            <ShoppingBag className="text-gray-300 w-10 h-10" />
          </div>
        )}

        <span className="absolute top-3 left-3 bg-[#c8a27a]/90 text-white text-xs px-3 py-1 rounded-full">
          Destacado
        </span>
      </div>

      <div className="p-5 flex flex-col">

        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2">
          {producto.nombre}
        </h3>

        <p className="text-[#c8a27a] font-semibold text-lg mb-4">
          ${producto.precio}
        </p>

        <div className="flex gap-2 mt-auto">

          <button
            onClick={() => onAddToCart(producto, 1)}
            className="flex-1 bg-[#c8a27a] text-white py-2 rounded-xl hover:scale-[1.02] transition text-sm"
          >
            Agregar
          </button>

          <a
            href={`https://wa.me/543834327903?text=${mensaje}`}
            target="_blank"
            className="flex-1 text-center border py-2 rounded-xl hover:bg-[#c8a27a] hover:text-white transition text-sm"
          >
            Consultar
          </a>

        </div>
      </div>

    </div>
  );
}