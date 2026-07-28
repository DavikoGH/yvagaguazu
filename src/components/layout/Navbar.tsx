import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/nosotros", label: "Nosotros" },
  { path: "/servicios", label: "Servicios" },
  { path: "/centro-custodia", label: "Centro de Custodia" },
  { path: "/donaciones", label: "Donaciones" },
  { path: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Menu - Conditional based on route */}
      {!isHome ? (
        <header className="fixed top-0 left-0 right-0 z-50 h-[80px]">
          {/* Main top strip */}
          <div className="absolute top-0 left-0 right-0 h-[80px] bg-yvaga-dark shadow-md" />
          
          {/* Logo container that extends down */}
          <div className="absolute top-0 left-0 bg-yvaga-dark rounded-br-[40px] md:rounded-br-[60px] pl-4 md:pl-8 pr-8 md:pr-12 pb-6 pt-3 shadow-lg flex items-start min-h-[110px] md:min-h-[130px]">
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
              <img 
                src="/YvagaGuazuLogoPNG-Horizontal.png" 
                alt="Yvaga Guazú Logo" 
                className="w-48 md:w-64 object-contain" 
              />
            </NavLink>
          </div>

          {/* Links Container */}
          <div className="relative z-10 flex items-center justify-end h-[80px] px-6 md:px-12 w-full max-w-[1600px] mx-auto">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "font-sans text-[15px] lg:text-[16px] font-medium transition-all relative py-1",
                      isActive ? "text-[#C6E5A8]" : "text-white/90 hover:text-white"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div 
                        layoutId="nav-indicator-non-home"
                        className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-[#C6E5A8]"
                      />
                    )}
                  </NavLink>
                );
              })}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-white hover:text-[#C6E5A8] transition-colors focus:outline-none"
              >
                <Menu className="w-8 h-8" />
              </button>
            </div>
          </div>
        </header>
      ) : (
        <nav
          className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            scrolled ? "bg-yvaga-dark/95 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
          )}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
            <div className="flex items-center">
              {/* Logo placeholder if needed */}
              <span className={cn("font-serif text-2xl font-bold", scrolled ? "text-white" : "text-white")}>
                {/* Optional logo text */}
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      "font-sans text-[18px] font-medium transition-colors relative py-1",
                      isActive ? "text-[#C6E5A8]" : "text-white/80 hover:text-white"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-white hover:text-yvaga-acc transition-colors focus:outline-none"
              >
                <Menu className="w-8 h-8" />
              </button>
            </div>
          </div>
        </nav>
      )}

      {/* Mobile Menu Overflow */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-yvaga-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 px-6"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-yvaga-acc transition-colors focus:outline-none"
            >
              <X className="w-8 h-8" />
            </button>
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-4 text-yvaga-white text-3xl font-sans font-light tracking-wide hover:text-[#C6E5A8] transition-colors",
                    isActive && "text-[#C6E5A8]"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
