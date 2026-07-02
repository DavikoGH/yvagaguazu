import { ArrowRight, CheckCircle2, Leaf, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const PhotoGallery = ({ images }: { images: string[] }) => {
  const loopImages = [...images, ...images, ...images];
  
  return (
    <div className="w-full mt-10 overflow-hidden relative">
      <div className="flex animate-scroll w-max gap-4 pb-2">
        {loopImages.map((src, i) => (
          <div key={i} className="flex-shrink-0 w-64 h-48 md:w-80 md:h-56 rounded-2xl overflow-hidden shadow-sm border border-yvaga-sec/10 group">
            <img src={src} alt={`Galería ${i}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" />
          </div>
        ))}
      </div>
       <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-yvaga-beige to-transparent pointer-events-none"></div>
       <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-yvaga-beige to-transparent pointer-events-none"></div>
    </div>
  );
};

const AccordionGallery = ({ images, title }: { images: string[], title: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col items-center mt-2 mb-2">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col items-center justify-center p-4 group outline-none"
      >
        <span className="text-xs md:text-sm font-sans tracking-widest uppercase text-yvaga-sec/80 mb-2 group-hover:text-yvaga-sec transition-colors font-semibold">
          {isOpen ? 'Ocultar galería' : title}
        </span>
        <ChevronDown 
          className={`w-8 h-8 text-yvaga-sec/60 group-hover:text-yvaga-sec transition-all duration-300 ${isOpen ? 'rotate-180' : 'animate-bounce'}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full overflow-hidden"
          >
            <PhotoGallery images={images} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const heroImages = [
  "/restaurant_1.jpg",
  "/restaurant_2.jpg",
  "/restaurant_3.jpg"
];

export default function Servicios() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-yvaga-beige">
      
      {/* SECCIÓN HERO: EXPERIENCIAS */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6">
        <div className="absolute inset-0 z-0 bg-yvaga-dark overflow-hidden">
          <AnimatePresence>
            <motion.img 
              key={currentHeroIndex}
              src={heroImages[currentHeroIndex]} 
              alt="Vive la experiencia Yvaga Guazú" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>

        <div className="relative z-20 text-center flex flex-col items-center -translate-y-[15vh]">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="w-12 md:w-24 h-[2px] bg-white/60"></span>
            <p className="font-sans font-bold text-sm tracking-widest uppercase text-white flex items-center gap-2 drop-shadow-md">
              <Leaf className="w-5 h-5 text-yvaga-acc" />
              NUESTROS SERVICIOS / EXPERIENCIAS
            </p>
            <span className="w-12 md:w-24 h-[2px] bg-white/60"></span>
          </div>
          <h1 className="text-center mb-4 flex flex-col items-center justify-center -space-y-2">
            <span className="font-caveat-brush text-[#8DC63F] tracking-wide uppercase text-[63px] md:text-[75px] lg:text-[87px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] leading-[0.9]">
              Vive la experiencia
            </span>
            <span 
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight drop-shadow-xl leading-[0.9]"
            >
              Yvaga Guazu
            </span>
          </h1>
        </div>
      </section>

      {/* SECCIÓN 1: LISTADO DE SERVICIOS */}
      <section className="py-24 px-6 lg:px-12 w-full max-w-7xl mx-auto flex flex-col justify-center min-h-[100dvh]">
        
        <div className="flex flex-col gap-12 md:gap-14">
          {/* Fila 1: Recorridos Guiados */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] md:aspect-video lg:aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-lg border border-yvaga-sec/10">
                 <img src="/servicios_recorrido.jpg" alt="Tour Guiado" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <h2 className="font-sans text-base md:text-[17px] font-bold uppercase tracking-wider text-yvaga-sec mb-2">
                RECORRIDOS GUIADOS
              </h2>
              <h3 className="font-serif text-3xl md:text-4xl text-yvaga-dark mb-4">
                Explora la naturaleza con nosotros
              </h3>
              <p className="font-sans text-[19px] md:text-[22px] text-yvaga-black/80 leading-relaxed max-w-4xl">
                Recorre las 14 hectáreas del Parque Ecológico YVAGA GUAZÚ acompañado por guías especializados que compartirán contigo la historia, la biodiversidad y los secretos de nuestro bosque.<br/><br/>
                <span className="font-bold text-yvaga-dark">No es solo un recorrido… es una experiencia que transforma tu forma de ver el entorno.</span>
              </p>
            </div>
          </div>

          <AccordionGallery title="Explorando la naturaleza" images={[
            '/recorrido_1.jpg',
            '/recorrido_2.jpg',
            '/recorrido_3.jpg',
            '/recorrido_4.jpg',
            '/recorrido_5.jpg',
            '/recorrido_6.jpg',
            '/recorrido_7.jpg',
            '/recorrido_8.jpg',
            '/recorrido_9.jpg'
          ]} />

          <div className="w-full h-px bg-yvaga-sec/10 mt-6"></div>

          {/* Fila 2: Restaurante y Snack */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] md:aspect-video lg:aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-lg border border-yvaga-sec/10">
                 <img src="/servicios_restaurant.jpg" alt="Restaurante y Snack" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <h2 className="font-sans text-base md:text-[17px] font-bold uppercase tracking-wider text-yvaga-sec mb-2">
                RESTAURANTE Y SNACK
              </h2>
              <h3 className="font-serif text-3xl md:text-4xl text-yvaga-dark mb-4">
                Sabores que se disfrutan mejor en la NATURALEZA
              </h3>
              <p className="font-sans text-[19px] md:text-[22px] text-yvaga-black/80 leading-relaxed max-w-4xl">
                Vive una experiencia gastronómica única en nuestro restaurante, con un menú especial a la carta preparado por un chef profesional y rodeado de exuberante NATURALEZA.<br/><br/>
                <span className="font-bold">El lugar perfecto para desconectarte del ritmo diario y vivir un momento diferente.</span>
              </p>
            </div>
          </div>

          <AccordionGallery title="Disfrutando los sabores" images={[
            '/comida_1.jpg',
            '/comida_2.jpg',
            '/comida_3.jpg',
            '/comida_4.jpg',
            '/comida_5.jpg',
            '/comida_6.jpg',
            '/comida_7.jpg',
            '/comida_8.jpg',
            '/comida_9.jpg'
          ]} />

          <div className="w-full h-px bg-yvaga-sec/10 mt-6"></div>

          {/* Fila 3: Vivero con Propósito */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] md:aspect-video lg:aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-lg border border-yvaga-sec/10">
                 <img src="/servicios_vivero.jpg" alt="Vivero con Propósito" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <h2 className="font-sans text-base md:text-[17px] font-bold uppercase tracking-wider text-yvaga-sec mb-2">
                VIVERO CON PROPÓSITO
              </h2>
              <h3 className="font-serif text-3xl md:text-4xl text-yvaga-dark mb-4">
                Llévate vida y protege la vida
              </h3>
              <p className="font-sans text-[19px] md:text-[22px] text-yvaga-black/80 leading-relaxed max-w-4xl">
                Descubre un vivero único con más de 1.200 variedades de plantas ornamentales, exóticas, nativas, de interior y exterior, cuidadosamente seleccionadas para llenar de vida y color tu hogar, jardín, oficina, empresa, condominio o cualquier espacio que desees transformar con la belleza de la NATURALEZA.<br/><br/>
                <span className="font-bold">Y lo mejor de todo: cada planta que llevas contribuye directamente al cuidado de nuestro bosque y de más de 350 animales silvestres rescatados. Aquí, cada compra tiene un propósito.</span>
              </p>

            </div>
          </div>

          <AccordionGallery title="Salvando una vida" images={[
            '/planta_2.jpg',
            '/planta_7.jpg',
            '/planta_8.jpg',
            '/planta_9.jpg',
            '/planta_10.jpg',
            '/planta_11.jpg'
          ]} />

        </div>

      </section>

      {/* SECCIÓN BANNER VIVERO */}
      <section className="relative w-full py-36 px-6 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/servicios_plantas.jpg" alt="Fondo vive natural" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-yvaga-dark/30"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto w-full flex justify-center">
          <div className="bg-yvaga-light/80 backdrop-blur-md border border-yvaga-sec/20 p-6 md:p-10 rounded-[2rem] shadow-xl inline-flex items-center justify-center max-w-max">
            <p className="font-serif font-bold text-xl md:text-3xl lg:text-4xl flex items-center gap-4 text-center">
              <Leaf className="w-8 h-8 md:w-10 md:h-10 text-yvaga-sec shrink-0" />
              <span className="flex flex-wrap justify-center items-baseline gap-x-2">
                <span className="text-[#8DC63F] text-[25px] md:text-[35px] lg:text-[41px]">Cuando compras una planta,</span>
                <span className="font-oregano text-[40px] md:text-[60px] lg:text-[70px] text-[#1B4D2A] font-bold italic drop-shadow-md">estás ayudando a proteger una vida.</span>
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: PAQUETES PROMOCIONALES */}
      <section className="py-24 px-6 lg:px-12 bg-yvaga-white w-full border-t border-yvaga-sec/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 relative">
            <div className="absolute top-0 right-10 opacity-20 pointer-events-none hidden md:block">
              {/* Decorative leaves */}
              <Leaf className="w-24 h-24 text-yvaga-acc -rotate-45" />
            </div>
            <p className="font-sans font-bold text-sm tracking-widest uppercase text-yvaga-dark w-full justify-center flex items-center gap-2 mb-4">
              <Leaf className="w-4 h-4 text-yvaga-acc" /> NUESTROS PAQUETES PROMOCIONALES
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-yvaga-dark mb-4">Experiencias diseñadas<br/><i className="font-oregano text-yvaga-acc text-[50px] md:text-[62px] font-bold">para cada grupo</i></h2>
            <p className="font-sans text-lg text-yvaga-black/70">
              Elige la opción ideal y vive una experiencia única en la naturaleza.
            </p>
             <div className="flex items-center justify-center gap-2 mt-6 text-yvaga-acc opacity-60">
              <span className="w-8 h-[1px] bg-yvaga-acc/40"></span>
              <Leaf className="w-4 h-4" />
              <span className="w-8 h-[1px] bg-yvaga-acc/40"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tarjeta 1 */}
            <div className="bg-yvaga-white rounded-[2rem] overflow-hidden shadow-xl border border-yvaga-sec/10 flex flex-col group">
              <div className="relative h-64 overflow-hidden">
                <img src="/paquete_empresas.jpg" alt="Paquete Empresas" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" />
                <div className="absolute inset-0 bg-gradient-to-t from-yvaga-dark/50 to-transparent"></div>
              </div>
              <div className="relative pt-14 pb-8 px-8 flex-grow flex flex-col bg-yvaga-white">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-yvaga-sec rounded-full border-4 border-yvaga-white flex items-center justify-center text-white shadow-md z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-yvaga-dark text-center mb-2 uppercase tracking-wide">Paquete Empresas</h3>
                <div className="w-8 h-[2px] bg-yvaga-sec/50 mx-auto mb-4"></div>
                <p className="text-center text-sm md:text-base text-yvaga-black/80 mb-8 min-h-[48px]">
                  Fortalece la conexión de tu equipo en un entorno natural único.
                </p>
                <ul className="space-y-3 mb-8 flex-grow font-sans text-sm md:text-base text-yvaga-dark">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yvaga-acc shrink-0 mt-0.5" />
                    <span>Integración de equipos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yvaga-acc shrink-0 mt-0.5" />
                    <span>Actividades corporativas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yvaga-acc shrink-0 mt-0.5" />
                    <span>Espacios al aire libre</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yvaga-acc shrink-0 mt-0.5" />
                    <span>Bienestar y conexión</span>
                  </li>
                </ul>
                <a href="https://wa.me/59176325400" target="_blank" rel="noopener noreferrer" className="mt-auto w-full py-3 bg-yvaga-sec text-white rounded-full flex items-center justify-between px-6 hover:bg-yvaga-dark transition-colors font-medium">
                  <span>Mas información</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-yvaga-white rounded-[2rem] overflow-hidden shadow-xl border border-yvaga-sec/10 flex flex-col group">
              <div className="relative h-64 overflow-hidden">
                <img src="/paquete_colegios.jpg" alt="Paquete Colegios" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" />
                <div className="absolute inset-0 bg-gradient-to-t from-yvaga-dark/50 to-transparent"></div>
              </div>
              <div className="relative pt-14 pb-8 px-8 flex-grow flex flex-col bg-yvaga-white">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-yvaga-sec rounded-full border-4 border-yvaga-white flex items-center justify-center text-white shadow-md z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-yvaga-dark text-center mb-2 uppercase tracking-wide">Paquete Colegios</h3>
                <div className="w-8 h-[2px] bg-yvaga-sec/50 mx-auto mb-4"></div>
                <p className="text-center text-sm md:text-base text-yvaga-black/80 mb-8 min-h-[48px]">
                  Una experiencia que sensibiliza y conecta a los estudiantes con la naturaleza.
                </p>
                <ul className="space-y-3 mb-8 flex-grow font-sans text-sm md:text-base text-yvaga-dark">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yvaga-acc shrink-0 mt-0.5" />
                    <span>Recorridos guiados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yvaga-acc shrink-0 mt-0.5" />
                    <span>Contacto con biodiversidad</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yvaga-acc shrink-0 mt-0.5" />
                    <span>Experiencia grupal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yvaga-acc shrink-0 mt-0.5" />
                    <span>Actividades al aire libre</span>
                  </li>
                </ul>
                <a href="https://wa.me/59176325400" target="_blank" rel="noopener noreferrer" className="mt-auto w-full py-3 bg-yvaga-sec text-white rounded-full flex items-center justify-between px-6 hover:bg-yvaga-dark transition-colors font-medium">
                  <span>Mas información</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-yvaga-white rounded-[2rem] overflow-hidden shadow-xl border border-yvaga-sec/10 flex flex-col group">
              <div className="relative h-64 overflow-hidden">
                <img src="/paquete_grupales.jpg" alt="Paquetes Grupales" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" />
                <div className="absolute inset-0 bg-gradient-to-t from-yvaga-dark/50 to-transparent"></div>
              </div>
              <div className="relative pt-14 pb-8 px-8 flex-grow flex flex-col bg-yvaga-white">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-yvaga-sec rounded-full border-4 border-yvaga-white flex items-center justify-center text-white shadow-md z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-yvaga-dark text-center mb-2 uppercase tracking-wide">Paquetes Grupales</h3>
                <div className="w-8 h-[2px] bg-yvaga-sec/50 mx-auto mb-4"></div>
                <p className="text-center text-sm md:text-base text-yvaga-black/80 mb-8 min-h-[48px]">
                  Comparte momentos únicos con familia o amigos en un entorno natural.
                </p>
                <ul className="space-y-3 mb-8 flex-grow font-sans text-sm md:text-base text-yvaga-dark">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yvaga-acc shrink-0 mt-0.5" />
                    <span>Tarifas especiales por grupo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yvaga-acc shrink-0 mt-0.5" />
                    <span>Recorridos personalizados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yvaga-acc shrink-0 mt-0.5" />
                    <span>Experiencia compartida</span>
                  </li>
                </ul>
                <a href="https://wa.me/59176325400" target="_blank" rel="noopener noreferrer" className="mt-auto w-full py-3 bg-yvaga-sec text-white rounded-full flex items-center justify-between px-6 hover:bg-yvaga-dark transition-colors font-medium">
                  <span>Mas información</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
