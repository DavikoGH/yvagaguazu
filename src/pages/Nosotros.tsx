import { motion } from "motion/react";
import { Leaf, Trees, Heart, Bird, Bug, Globe, ArrowRight } from "lucide-react";

export default function Nosotros() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* BLOQUE 1 – HISTORIA */}
      <section className="min-h-[100dvh] flex flex-col justify-center px-6 bg-yvaga-beige relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center w-full">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 flex flex-col justify-center"
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-yvaga-dark mb-6 leading-[1.1]">
                Conoce nuestra historia y compromiso con la naturaleza
              </h1>
              <div className="font-sans text-base md:text-lg text-yvaga-dark/80 space-y-4 md:space-y-6 leading-relaxed">
                <p>
                  <span className="font-bold text-yvaga-dark">YVAGA GUAZU</span> (Paraíso Grande), nació del amor profundo por la naturaleza y de la necesidad urgente de protegerla.
                </p>
                <p>
                  Lo que comenzó como un sueño, hoy es un refugio vivo de más de 14 hectáreas, donde la biodiversidad florece y donde más de <span className="text-yvaga-sec font-semibold">350 animales rescatados</span> han encontrado una segunda oportunidad.
                </p>
                <p>
                  Cada árbol sembrado, cada sendero creado y cada vida salvada forman parte de una misión clara: <span className="italic text-yvaga-dark font-serif text-xl md:text-2xl border-b border-yvaga-acc/40">cuidar lo que aún podemos preservar y devolverle equilibrio a nuestro entorno.</span>
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5] w-full max-w-md lg:max-w-lg mx-auto lg:ml-auto">
                {/* Organic shape mask for the image */}
                <div className="absolute inset-0 bg-yvaga-dark rounded-[60px_24px_60px_24px] md:rounded-[80px_32px_80px_32px] opacity-10 translate-x-3 translate-y-3"></div>
                <img 
                  src="/history.jpg" 
                  alt="Historia de Yvaga Guazú" 
                  className="w-full h-full object-cover rounded-[60px_24px_60px_24px] md:rounded-[80px_32px_80px_32px] shadow-2xl relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* BLOQUE 2 – LO QUE NOS HACE ÚNICOS */}
      <section className="py-24 px-6 bg-yvaga-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="flex items-center gap-2 font-sans text-yvaga-sec font-semibold tracking-widest uppercase text-sm mb-4">
              <Leaf className="w-5 h-5" /> Nuestra propuesta única
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-yvaga-dark mb-6">
              Descubre lo que nos hace únicos
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-8">
             <div className="order-2 lg:order-1 font-serif text-2xl lg:text-3xl text-yvaga-dark leading-relaxed pt-2">
               <p className="mb-6">
                 En <span className="font-bold">YVAGA GUAZU</span> (Paraíso grande), unimos naturaleza, vida y propósito. Somos un refugio vivo que protege la biodiversidad de nuestra flora y da una segunda oportunidad a animales que han sido víctimas del maltrato.
               </p>
               <p className="italic text-yvaga-dark/80">
                 Creamos experiencias que despiertan amor y conciencia por la NATURALEZA.
               </p>
             </div>

             <div className="order-1 lg:order-2">
               <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl relative">
                  <img src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=2576&auto=format&fit=crop" alt="Bosque y refugio vivo" className="w-full h-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-yvaga-dark/90 to-transparent pt-32">
                    <p className="font-sans text-yvaga-white text-lg md:text-xl font-medium">
                      No somos solo un parque, somos un compromiso diario con la vida.
                    </p>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 3 – MISIÓN Y VISIÓN */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 z-0">
          <img src="/misionyvision.jpg" alt="Fondo bosque" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-yvaga-dark/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-24 w-full -translate-y-[15%]">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/60 via-white/30 to-transparent px-4 py-8 md:px-8 md:py-12 rounded-[40px] text-white/80 flex flex-col items-center text-center">
               <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center mb-8">
                 <Leaf className="w-10 h-10 text-white" />
               </div>
               <h3 className="font-serif text-5xl md:text-[44px] font-bold mb-6 tracking-wide uppercase text-white/80 shadow-sm">Nuestra Misión</h3>
               <p className="font-sans font-normal leading-relaxed text-[22px] text-white/80">
                 Generar una conexión real entre el ser humano y la naturaleza, sensibilizando a cada visitante para que valore, respete, proteja y ame el entorno natural.
                 A través de experiencias vivas, buscamos despertar conciencia sobre la importancia de los árboles, la biodiversidad y el equilibrio de la vida, mientras brindamos refugio y cuidado a animales que han sufrido maltrato, ofreciéndoles una segunda oportunidad.
               </p>
            </div>

            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/60 via-white/30 to-transparent px-4 py-8 md:px-8 md:py-12 rounded-[40px] text-white/80 flex flex-col items-center text-center">
               <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center mb-8">
                 <Globe className="w-10 h-10 text-white" />
               </div>
               <h3 className="font-serif text-5xl md:text-[44px] font-bold mb-6 tracking-wide uppercase text-white/80 shadow-sm">Nuestra Visión</h3>
               <p className="font-sans font-normal leading-relaxed text-[22px] text-white/80">
                 Lograr que cada persona que nos visite vea la naturaleza con otros ojos… y decida amarla, entendiendo su valor, su importancia y el impacto que tiene en nuestra vida y en el futuro del planeta.
               </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center border-t border-b border-yvaga-white/20 py-12 -mt-16">
            <p className="font-caveat-brush text-5xl md:text-6xl text-yvaga-white leading-relaxed font-normal py-4">
              "La naturaleza puede vivir sin el hombre,<br className="hidden md:block"/> pero el hombre no puede vivir sin la naturaleza."
            </p>
          </div>
        </div>
      </section>

      {/* BLOQUE 4 – DIFERENCIALES */}
      <section className="py-24 px-6 bg-yvaga-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block border border-yvaga-sec text-yvaga-sec px-6 py-2 rounded-full font-sans font-semibold mb-6 tracking-wide text-sm bg-yvaga-sec/5">
              Porque lo que se ama... se cuida.
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-yvaga-dark mb-12">Detalles que dejan huella</h2>
          </div>

          {/* Zig zag list of differentials */}
          <div className="flex flex-col gap-12">
             <DifferentialCard 
               icon={Trees}
               title="Más de 6.000 especies de árboles"
               desc="Un entorno lleno de vida donde puedes descubrir la riqueza natural en cada recorrido."
             />
             <DifferentialCard 
               icon={Heart}
               title="Refugio de más de 350 animales rescatados"
               desc="Brindamos un hogar seguro a animales que han sufrido maltrato o abandono, dándoles una segunda oportunidad."
             />
             <DifferentialCard 
               icon={Bird}
               title="El orquideario más grande de Bolivia"
               desc="Un espacio único donde podrás admirar más de 600 especies de orquídeas nativas o silvestres, llenas de color, belleza y vida."
             />
             <DifferentialCard 
               icon={Bug} // Leaf/Bug metaphor for bonsai/small nature
               title="Gran colección de bonsáis con más de 20 años"
               desc="Un sector especial con verdaderas obras vivas de la naturaleza, que reflejan paciencia, cuidado y tradición."
             />
             <DifferentialCard 
               icon={Leaf}
               title="Experiencias que sensibilizan"
               desc="Más que visitar, aquí conectas, sientes y desarrollas una nueva forma de ver, valorar y amar la NATURALEZA."
             />
          </div>
        </div>
      </section>

      {/* BLOQUE 5 – CIERRE VISUAL NOSOTROS */}
      <section className="relative py-32 px-6 overflow-hidden flex items-center justify-center min-h-[70vh]">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2676&auto=format&fit=crop" alt="Naturaleza vida" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-yvaga-dark via-yvaga-dark/50 to-transparent"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 w-full max-w-4xl bg-yvaga-white p-10 md:p-16 rounded-[40px] text-center shadow-2xl"
        >
           <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-yvaga-dark mb-6">
             Cada paso que das aquí, deja una huella que transforma.
           </h2>
           <p className="font-sans text-lg md:text-xl text-yvaga-dark/70 mb-12 max-w-2xl mx-auto">
             Visítanos, apóyanos y sé parte de este refugio que protege la naturaleza y da esperanza a quienes más lo necesitan.
           </p>

           <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12 border-y border-yvaga-dark/10 py-8">
             <div className="flex flex-col items-center opacity-70">
               <Heart className="w-8 h-8 mb-2 text-yvaga-sec" />
               <span className="font-serif text-sm uppercase tracking-widest">Misión</span>
             </div>
             <div className="flex flex-col items-center opacity-70">
               <Globe className="w-8 h-8 mb-2 text-yvaga-sec" />
               <span className="font-serif text-sm uppercase tracking-widest">Refugio</span>
             </div>
             <div className="flex flex-col items-center opacity-70">
               <Trees className="w-8 h-8 mb-2 text-yvaga-sec" />
               <span className="font-serif text-sm uppercase tracking-widest">Conservación</span>
             </div>
           </div>

           <button className="bg-yvaga-dark text-white hover:bg-yvaga-sec px-10 py-5 rounded-full font-serif text-xl tracking-wide transition-colors">
             Sé parte de nuestra misión
           </button>
        </motion.div>
      </section>

    </div>
  );
}

function DifferentialCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-yvaga-dark/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="w-16 h-16 rounded-full bg-yvaga-light flex items-center justify-center shrink-0">
        <Icon className="w-8 h-8 text-yvaga-dark" />
      </div>
      <div>
        <h3 className="font-serif text-2xl md:text-3xl text-yvaga-dark mb-3 leading-tight">{title}</h3>
        <p className="font-sans text-lg text-yvaga-dark/70">{desc}</p>
      </div>
    </div>
  )
}
