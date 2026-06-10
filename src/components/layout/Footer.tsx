import { Facebook, Instagram, Youtube, Mail, Smartphone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-yvaga-sec text-yvaga-beige py-16 px-6 border-t border-yvaga-white/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Row 1: Contactos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center justify-items-center">
          
          {/* Column 1 */}
          <div className="flex flex-col items-center gap-4">
            <h4 className="font-serif text-xl tracking-wide text-yvaga-white uppercase">Contacto 1:</h4>
            <div className="w-12 h-px bg-yvaga-white/20"></div>
            <a href="https://wa.me/59176325400" className="flex items-center gap-2 font-sans text-yvaga-white/80 font-light hover:text-yvaga-white transition-colors">
              <Smartphone className="w-5 h-5" />
              <span>+591 76325400</span>
            </a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center gap-4">
            <h4 className="font-serif text-xl tracking-wide text-yvaga-white uppercase">Contacto 2:</h4>
            <div className="w-12 h-px bg-yvaga-white/20"></div>
            <a href="https://wa.me/59177393875" className="flex items-center gap-2 font-sans text-yvaga-white/80 font-light hover:text-yvaga-white transition-colors">
              <Smartphone className="w-5 h-5" />
              <span>+591 773 93875</span>
            </a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center gap-4">
            <h4 className="font-serif text-xl tracking-wide text-yvaga-white uppercase">Contacto 3:</h4>
            <div className="w-12 h-px bg-yvaga-white/20"></div>
            <a href="https://wa.me/59177046125" className="flex items-center gap-2 font-sans text-yvaga-white/80 font-light hover:text-yvaga-white transition-colors">
              <Smartphone className="w-5 h-5" />
              <span>+591 77046125</span>
            </a>
          </div>
        </div>

        {/* Row 2: Redes Sociales & Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center items-start pt-12 border-t border-yvaga-white/10 mt-2">
          
          {/* Column 1: Logo */}
          <div className="flex flex-col items-center justify-center gap-4 h-full">
            <img src="/YvagaGuazuLogoPNG.png" alt="Yvaga Guazú Logo" className="h-[158px] object-contain drop-shadow-md" />
          </div>

          {/* Column 2: Redes Sociales */}
          <div className="flex flex-col items-center gap-4">
            <h4 className="font-serif text-xl tracking-wide text-yvaga-white uppercase">Redes Sociales</h4>
            <div className="w-12 h-px bg-yvaga-white/20"></div>
            <div className="flex flex-col gap-4 font-sans text-yvaga-white/80 font-light items-start">
              <a href="https://www.facebook.com/yvagaguazu" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center gap-4 hover:text-yvaga-white transition-colors group">
                <div className="w-11 h-11 rounded-full bg-yvaga-white/5 border border-yvaga-white/10 flex items-center justify-center text-yvaga-white group-hover:bg-yvaga-dark group-hover:border-yvaga-dark transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </div>
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/oficialyvagaguazu" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center gap-4 hover:text-yvaga-white transition-colors group">
                <div className="w-11 h-11 rounded-full bg-yvaga-white/5 border border-yvaga-white/10 flex items-center justify-center text-yvaga-white group-hover:bg-yvaga-dark group-hover:border-yvaga-dark transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </div>
                <span>Instagram</span>
              </a>
              <a href="https://www.tiktok.com/@yvagaguazu" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex items-center gap-4 hover:text-yvaga-white transition-colors group">
                <div className="w-11 h-11 rounded-full bg-yvaga-white/5 border border-yvaga-white/10 flex items-center justify-center text-yvaga-white group-hover:bg-yvaga-dark group-hover:border-yvaga-dark transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </div>
                <span>TikTok</span>
              </a>
              <a href="mailto:parqueyvagaguazu@hotmail.com" aria-label="Correo Electrónico" className="flex items-center gap-4 hover:text-yvaga-white transition-colors group">
                <div className="w-11 h-11 rounded-full bg-yvaga-white/5 border border-yvaga-white/10 flex items-center justify-center text-yvaga-white group-hover:bg-yvaga-dark group-hover:border-yvaga-dark transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <span>Correo Electrónico</span>
              </a>
            </div>
          </div>

          {/* Column 3: Servicios */}
          <div className="flex flex-col items-center gap-4">
            <h4 className="font-serif text-xl tracking-wide text-yvaga-white uppercase">Servicios</h4>
            <div className="w-12 h-px bg-yvaga-white/20"></div>
            <ul className="flex flex-col gap-4 font-sans text-yvaga-white/80 font-light items-start text-left">
              <li className="h-11 flex items-center hover:text-yvaga-white transition-colors cursor-pointer w-full">Recorridos guiados</li>
              <li className="h-11 flex items-center hover:text-yvaga-white transition-colors cursor-pointer w-full">Restaurante y Snack</li>
              <li className="h-11 flex items-center hover:text-yvaga-white transition-colors cursor-pointer w-full">Vivero con propósito</li>
              <li className="h-11 flex items-center hover:text-yvaga-white transition-colors cursor-pointer w-full">Paisajismos y Jardines</li>
            </ul>
          </div>
        </div>

        {/* Centered Copyright */}
        <div className="pt-8 border-t border-yvaga-white/10 flex justify-center items-center mt-2">
          <p className="opacity-70 text-sm font-sans tracking-wide text-center">
            &copy; 2026 Yvaga Guazú Paraíso Grande
          </p>
        </div>
      </div>
    </footer>
  );
}
