import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/nosotros", label: "Nosotros" },
  { path: "/servicios", label: "Servicios" },
  { path: "/donaciones", label: "Donaciones" },
  { path: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Menu - Standard Top Navbar */}
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
                    "font-sans text-[18px] font-medium transition-colors",
                    isActive ? "text-[#C6E5A8]" : "text-white/80 hover:text-white"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn("p-2", "text-white")}
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </nav>

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
              className="absolute top-6 right-6 p-2 text-white"
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
                    "flex items-center gap-4 text-yvaga-white text-3xl font-sans font-light tracking-wide hover:text-yvaga-acc transition-colors",
                    isActive && "text-yvaga-acc"
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
