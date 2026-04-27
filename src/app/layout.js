import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

export const metadata = {
  title: 'Tokio Deco - Diseño artesanal y decoración',
  description:
    'Tokio Deco es un espacio de diseño artesanal donde cada pieza es única. Objetos decorativos hechos a mano con dedicación y estilo propio.',
  keywords:
    'tokio deco, diseño artesanal, decoración, objetos hechos a mano, artesanía, diseño minimalista',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />

          <main className="min-h-screen">
            {children}
          </main>

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}