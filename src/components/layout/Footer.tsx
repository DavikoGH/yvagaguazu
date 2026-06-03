import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-yvaga-sec text-yvaga-beige py-16 px-6 border-t border-yvaga-white/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Main Footer Content - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center">
          
          {/* Column 1: WhatsApp */}
          <div className="flex flex-col items-center gap-4">
            <h4 className="font-serif text-xl tracking-wide text-yvaga-white uppercase">WhatsApp</h4>
            <div className="w-12 h-px bg-yvaga-white/20"></div>
            <ul className="flex flex-col gap-3 font-sans text-yvaga-white/80 font-light">
              <li className="hover:text-yvaga-white transition-colors">+591 76325400</li>
              <li className="hover:text-yvaga-white transition-colors">+591 77393875</li>
              <li className="hover:text-yvaga-white transition-colors">+591 72602379</li>
            </ul>
          </div>

          {/* Column 2: Redes Sociales */}
          <div className="flex flex-col items-center gap-4">
            <h4 className="font-serif text-xl tracking-wide text-yvaga-white uppercase">Redes Sociales</h4>
            <div className="w-12 h-px bg-yvaga-white/20"></div>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/yvagaguazu" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-11 h-11 rounded-full bg-yvaga-white/5 border border-yvaga-white/10 flex items-center justify-center text-yvaga-white hover:bg-yvaga-dark hover:border-yvaga-dark transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/oficialyvagaguazu" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-full bg-yvaga-white/5 border border-yvaga-white/10 flex items-center justify-center text-yvaga-white hover:bg-yvaga-dark hover:border-yvaga-dark transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@yvagaguazu" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-11 h-11 rounded-full bg-yvaga-white/5 border border-yvaga-white/10 flex items-center justify-center text-yvaga-white hover:bg-yvaga-dark hover:border-yvaga-dark transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a href="mailto:parqueyvagaguazu@hotmail.com" aria-label="Correo Electrónico" className="w-11 h-11 rounded-full bg-yvaga-white/5 border border-yvaga-white/10 flex items-center justify-center text-yvaga-white hover:bg-yvaga-dark hover:border-yvaga-dark transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 3: Servicios */}
          <div className="flex flex-col items-center gap-4">
            <h4 className="font-serif text-xl tracking-wide text-yvaga-white uppercase">Servicios</h4>
            <div className="w-12 h-px bg-yvaga-white/20"></div>
            <ul className="flex flex-col gap-3 font-sans text-yvaga-white/80 font-light">
              <li className="hover:text-yvaga-white transition-colors cursor-pointer">Recorridos guiados</li>
              <li className="hover:text-yvaga-white transition-colors cursor-pointer">Restaurante y Snack</li>
              <li className="hover:text-yvaga-white transition-colors cursor-pointer">Vivero con propósito</li>
            </ul>
          </div>

        </div>

        {/* Centered Copyright */}
        <div className="pt-8 border-t border-yvaga-white/10 flex justify-center items-center">
          <p className="opacity-70 text-sm font-sans tracking-wide text-center">
            &copy; 2026 Yvaga Guazú Paraíso Grande
          </p>
        </div>
      </div>
    </footer>
  );
}
