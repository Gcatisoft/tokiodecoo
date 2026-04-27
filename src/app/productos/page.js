  'use client';

  import { useState } from 'react';
  import Image from 'next/image';
  import { ShoppingBag, Search, Filter, X } from 'lucide-react';
  import { useCart } from '@/context/CartContext';

  /* 🛍️ PRODUCTOS LOCALES (hasta 10) */
 const productosLocal = [
  { id: 1, nombre: '', precio: 12000, imagen: '/1.jpeg' },
  { id: 2, nombre: '', precio: 14500, imagen: '/2.jpeg' },
  { id: 3, nombre: '', precio: 9800, imagen: '/3.jpeg' },
  { id: 4, nombre: '', precio: 16000, imagen: '/4.jpeg' },
  { id: 5, nombre: '', precio: 11000, imagen: '/5.jpeg' },
  { id: 6, nombre: '', precio: 15000, imagen: '/6.jpeg' },
  { id: 7, nombre: '', precio: 13500, imagen: '/7.jpeg' },
  { id: 8, nombre: '', precio: 12500, imagen: '/4.jpeg' },
];

  export default function ProductosPage() {
    const [busqueda, setBusqueda] = useState('');
    const [mostrarFiltros, setMostrarFiltros] = useState(false);
    const { addToCart } = useCart();

    const limpiarFiltros = () => setBusqueda('');

    /* FILTRO SIMPLE (más limpio estilo boutique) */
    const productosFiltrados = productosLocal.filter((p) =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
      <div className="min-h-screen bg-[#fbf7f2] text-gray-800">

        {/* HEADER */}
        <div className="bg-[#f3ebe3] border-b border-[#e8d8c3]">
          <div className="container mx-auto px-6 py-10 text-center">
            <h1 className="text-4xl font-serif mb-3">Nuestros Productos</h1>
            <p className="text-gray-600">
              Piezas artesanales únicas hechas a mano
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-10">

          {/* BÚSQUEDA */}
          <div className="bg-white rounded-2xl shadow-sm p-5 mb-8">

            <div className="flex flex-col md:flex-row gap-4 items-center">

              <div className="flex-1 relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c8a27a]"
                />
              </div>

              <button
                onClick={() => setMostrarFiltros(!mostrarFiltros)}
                className="md:hidden bg-[#c8a27a] text-white px-5 py-3 rounded-xl flex items-center gap-2"
              >
                <Filter className="w-5 h-5" />
                Filtros
              </button>

              {(busqueda) && (
                <button
                  onClick={limpiarFiltros}
                  className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center gap-2"
                >
                  <X className="w-5 h-5" />
                  Limpiar
                </button>
              )}

            </div>

            {/* Filtros mobile simple */}
            {mostrarFiltros && (
              <div className="mt-4 text-sm text-gray-500">
                Filtros simples activos (versión boutique)
              </div>
            )}

          </div>

          {/* CONTADOR */}
          <p className="text-gray-500 mb-6">
            Mostrando <span className="font-semibold">{productosFiltrados.length}</span> productos
          </p>

          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {productosFiltrados.map((producto) => (
              <ProductCard
                key={producto.id}
                producto={producto}
                onAddToCart={addToCart}
              />
            ))}

          </div>

          {/* VACÍO */}
          {productosFiltrados.length === 0 && (
            <div className="text-center py-20">
              <ShoppingBag className="w-14 h-14 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No se encontraron productos</p>
            </div>
          )}

        </div>
      </div>
    );
  }

  /* PRODUCT CARD TOKIO DECO */
  function ProductCard({ producto, onAddToCart }) {
    const mensaje = encodeURIComponent(
      `Hola! Quiero consultar por: ${producto.nombre}`
    );

    return (
      <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition">

        {/* IMAGE */}
        <div className="relative aspect-square overflow-hidden bg-gray-50">

          {producto.imagen ? (
            <Image
              src={producto.imagen}
              alt={producto.nombre}
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <ShoppingBag className="text-gray-300 w-10 h-10" />
            </div>
          )}

          <span className="absolute top-3 left-3 bg-[#c8a27a]/90 text-white text-xs px-3 py-1 rounded-full">
            Tokio Deco
          </span>

        </div>

        {/* INFO */}
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
              href={`https://wa.me/543834927252?text=${mensaje}`}
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