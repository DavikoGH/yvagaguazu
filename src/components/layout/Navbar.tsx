import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { Home, Users, Map, HeartHandshake, Phone, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { path: "/", label: "Home", icon: Home },
  { path: "/nosotros", label: "Nosotros", icon: Users },
  { path: "/servicios", label: "Servicios", icon: Map },
  { path: "/donaciones", label: "Donaciones", icon: HeartHandshake },
  { path: "/contacto", label: "Contacto", icon: Phone },
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
      {/* Desktop Menu - Floating on Right */}
      <nav
        className={cn(
          "hidden md:flex fixed top-1/2 -translate-y-1/2 right-6 z-50 flex-col gap-4",
        )}
      >
        {NAV_LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "group relative flex items-center p-3 rounded-full bg-yvaga-dark/60 backdrop-blur-md text-yvaga-white border border-yvaga-white/10 shadow-lg hover:bg-yvaga-dark hover:border-yvaga-acc/50 transition-all duration-300",
                  isActive && "bg-yvaga-dark border-yvaga-acc text-yvaga-acc"
                )
              }
            >
              <Icon className="w-5 h-5 relative z-10" />
              <div className="absolute right-full mr-4 bg-yvaga-dark/90 text-white px-4 py-2 rounded-xl backdrop-blur-md border border-white/10 opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-xl">
                <span className="font-sans font-light tracking-wide">{link.label}</span>
              </div>
            </NavLink>
          );
        })}
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-3 bg-yvaga-dark text-white rounded-full shadow-lg backdrop-blur-md border border-white/10"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overflow */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-yvaga-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 px-6"
          >
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              return (
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
                  <Icon className="w-8 h-8 opacity-70" />
                  {link.label}
                </NavLink>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
