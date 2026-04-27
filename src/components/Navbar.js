'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Menu, X, Instagram, User } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Cart from './Cart';

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const { toggleCart, getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <>
      <nav className="bg-[#fdfaf7] border-b sticky top-0 z-40">
        
        {/* MAIN NAVBAR */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <div className="relative w-32 h-16">
                <Image
                  src="/logoo.png"
                  alt="Tokio Deco"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-[#c8a27a] transition">
                Inicio
              </Link>
              <Link href="/productos" className="text-gray-700 hover:text-[#c8a27a] transition">
                Productos
              </Link>
             
              <Link href="/contacto" className="text-gray-700 hover:text-[#c8a27a] transition">
                Contacto
              </Link>
            </div>

            {/* ICONOS */}
            <div className="flex items-center gap-3">

              {/* INSTAGRAM */}
              <a
                href="https://instagram.com/tokio_decoar"
                target="_blank"
                className="p-2 text-gray-600 hover:text-[#c8a27a] transition"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* LOGIN */}
              <Link
                href="/login"
                className="p-2 text-gray-600 hover:text-[#c8a27a] transition"
              >
                <User className="w-5 h-5" />
              </Link>

              {/* CARRITO */}
              <button
                onClick={toggleCart}
                className="relative p-2 text-gray-700 hover:text-[#c8a27a] transition"
              >
                <ShoppingCart className="w-6 h-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#c8a27a] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* MOBILE BUTTON */}
              <button
                onClick={() => setMenuAbierto(!menuAbierto)}
                className="md:hidden p-2 text-gray-700"
              >
                {menuAbierto ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuAbierto && (
          <div className="md:hidden border-t bg-[#fdfaf7]">
            <div className="px-4 py-4 flex flex-col gap-4">

              <Link
                href="/"
                onClick={() => setMenuAbierto(false)}
                className="text-gray-700 hover:text-[#c8a27a]"
              >
                Inicio
              </Link>

              <Link
                href="/productos"
                onClick={() => setMenuAbierto(false)}
                className="text-gray-700 hover:text-[#c8a27a]"
              >
                Productos
              </Link>

              <Link
                href="/nosotros"
                onClick={() => setMenuAbierto(false)}
                className="text-gray-700 hover:text-[#c8a27a]"
              >
                Sobre mí
              </Link>

              <Link
                href="/contacto"
                onClick={() => setMenuAbierto(false)}
                className="text-gray-700 hover:text-[#c8a27a]"
              >
                Contacto
              </Link>

              {/* CTA WHATSAPP */}
              <a
                href="https://wa.me/543834327903?text=Hola!%20Quiero%20hacer%20una%20consulta"
                target="_blank"
                className="mt-2 bg-[#c8a27a] text-white text-center py-2 rounded-lg"
              >
                Hacer pedido
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* CARRITO */}
      <Cart />
    </>
  );
}
