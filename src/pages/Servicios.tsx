import { ArrowRight, CheckCircle2, Leaf, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

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

export default function Servicios() {
  return (
    <div className="flex flex-col min-h-screen bg-yvaga-beige">
      
      {/* SECCIÓN HERO: EXPERIENCIAS */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="/portadaservicios.jpg" 
            alt="Vive la experiencia Yvaga Guazú" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-yvaga-dark/50 bg-gradient-to-b from-yvaga-dark/60 via-yvaga-dark/30 to-yvaga-dark/60"></div>
        </div>

        <div className="relative z-10 text-center flex flex-col items-center">
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="w-12 md:w-24 h-[2px] bg-white/60"></span>
            <p className="font-sans font-bold text-sm tracking-widest uppercase text-white flex items-center gap-2 drop-shadow-md">
              <Leaf className="w-5 h-5 text-yvaga-acc" />
              NUESTROS SERVICIOS / EXPERIENCIAS
            </p>
            <span className="w-12 md:w-24 h-[2px] bg-white/60"></span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-4 drop-shadow-lg">
            Vive la experiencia Yvaga Guazú
          </h1>
        </div>
      </section>

      {/* SECCIÓN 1: LISTADO DE SERVICIOS */}
      <section className="py-24 px-6 lg:px-12 w-full max-w-7xl mx-auto flex flex-col justify-center min-h-[100dvh]">
        
        <div className="flex flex-col gap-12 md:gap-14">
          {/* Fila 1: Recorridos Guiados */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3">
              <div className="aspect-[4/3] md:aspect-video lg:aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-lg border border-yvaga-sec/10">
                 <img src="/servicio_guia.jpg" alt="Tour Guiado" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-9 flex flex-col justify-center text-left">
              <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-yvaga-sec mb-1">
                RECORRIDOS GUIADOS
              </h2>
              <h3 className="font-serif text-2xl md:text-3xl text-yvaga-dark mb-4">
                Explora la naturaleza con nosotros
              </h3>
              <p className="font-sans text-base md:text-lg text-yvaga-black/80 leading-relaxed max-w-4xl">
                Recorre nuestras 14 hectáreas a través de recorridos con guías especializados, con quienes podrás descubrir en nuestro bosque y conocer la gran biodiversidad que tenemos en YVAGA GUAZÚ y conectar con la naturaleza de una forma real y consciente.<br/><br/>
                <span className="font-medium text-yvaga-dark">No es solo un recorrido… es una experiencia que transforma tu forma de ver el entorno.</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3">
              <div className="aspect-[4/3] md:aspect-video lg:aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-lg border border-yvaga-sec/10">
                 <img src="/servicio_snack.jpg" alt="Restaurante y Snack" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-9 flex flex-col justify-center text-left">
              <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-yvaga-sec mb-1">
                RESTAURANTE Y SNACK
              </h2>
              <h3 className="font-serif text-2xl md:text-3xl text-yvaga-dark mb-4">
                Disfruta de nuestros sabores en la naturaleza
              </h3>
              <p className="font-sans text-base md:text-lg text-yvaga-black/80 leading-relaxed max-w-4xl">
                Contamos con un restaurant de arquitectura costumbrista donde puedes relajarte, compartir y degustar de deliciosos platos en un entorno natural único.<br/><br/>
                El lugar perfecto para desconectarte del ritmo diario y vivir un momento diferente.
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3">
              <div className="aspect-[4/3] md:aspect-video lg:aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-lg border border-yvaga-sec/10">
                 <img src="/servicio_ventas.jpg" alt="Vivero con Propósito" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-9 flex flex-col justify-center text-left">
              <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-yvaga-sec mb-1">
                VIVERO CON PROPÓSITO
              </h2>
              <h3 className="font-serif text-2xl md:text-3xl text-yvaga-dark mb-4">
                Llévate vida, salva una vida
              </h3>
              <p className="font-sans text-base md:text-lg text-yvaga-black/80 leading-relaxed max-w-4xl">
                Nuestro vivero está lleno de hermosas plantas que puedes llevar contigo para darle vida a tu hogar.<br/><br/>
                Cada compra tiene un propósito mayor:<br/>
                los ingresos del vivero ayudan directamente al cuidado y mantenimiento de YVAGA GUAZÚ y para la alimentación de los más de 300 animales rescatados.
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
      <section className="relative w-full py-24 px-6 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/ventadeplantas.jpg" alt="Fondo vive natural" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-yvaga-dark/30"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto w-full flex justify-center">
          <div className="bg-yvaga-light/80 backdrop-blur-md border border-yvaga-sec/20 p-6 md:p-10 rounded-[2rem] shadow-xl inline-flex items-center justify-center max-w-max">
            <p className="font-serif font-bold text-yvaga-dark text-xl md:text-3xl lg:text-4xl flex items-center gap-4 text-center">
              <Leaf className="w-8 h-8 md:w-10 md:h-10 text-yvaga-sec shrink-0" />
              <span>Cuando compras una planta, estás ayudando a proteger una vida.</span>
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
            <h2 className="font-serif text-4xl md:text-5xl text-yvaga-dark mb-4">Experiencias diseñadas<br/><i className="text-yvaga-acc font-light">para cada grupo</i></h2>
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
                <h3 className="font-serif text-xl font-bold text-yvaga-dark text-center mb-2 uppercase tracking-wide">1. Paquete Empresas</h3>
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
                <h3 className="font-serif text-xl font-bold text-yvaga-dark text-center mb-2 uppercase tracking-wide">2. Paquete Colegios</h3>
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
                <h3 className="font-serif text-xl font-bold text-yvaga-dark text-center mb-2 uppercase tracking-wide">3. Paquetes Grupales</h3>
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
