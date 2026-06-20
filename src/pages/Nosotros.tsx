import { motion } from "motion/react";
import { Leaf, Trees, Heart, Bird, Bug, Globe, ArrowRight } from "lucide-react";

export default function Nosotros() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* BLOQUE 1 – HERO PORTADA */}
      <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/nosotros_portada.jpg" alt="Portada NOSOTROS" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 w-full flex flex-col items-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="flex flex-col items-center drop-shadow-lg">
              <span className="font-serif text-4xl md:text-5xl lg:text-6xl mb-2 lg:mb-4">
                Conoce nuestra
              </span>
              <span 
                className="font-oregano text-[80px] md:text-[120px] lg:text-[140px] text-[#1B4D2A] font-bold italic leading-none drop-shadow-xl"
                style={{ WebkitTextStroke: "1px white" }}
              >
                HISTORIA
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* BLOQUE 1.5 – HISTORIA TEXTO */}
      <section className="py-24 px-6 bg-yvaga-beige relative overflow-hidden">
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="font-sans text-[16px] md:text-[18px] lg:text-[20px] text-yvaga-dark/90 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 leading-relaxed text-justify">
              <div className="space-y-6 md:space-y-8">
                <p>
                  El parque Ecológico <span className="font-bold">YVAGA GUAZU</span>, que en lengua guaraní significa "Paraíso Grande", nació el 18 de septiembre de 2003 gracias a la visión y pasión de Rebeca Rozenman y Francisco Hubsch, quienes soñaron con crear un espacio donde la NATURALEZA pudiera ser protegida, valorada y compartida con las futuras generaciones.
                </p>
                <p>
                  Lo que alguna vez fue un terreno de campo y monte, con escasa cobertura arbórea, comenzó a transformarse con dedicación, paciencia y un profundo amor por la vida. Árbol tras árbol, sendero tras sendero y especie tras especie, fue tomando forma este extraordinario Parque Ecológico y Jardín Botánico que hoy alberga 14 hectáreas de exuberante NATURALEZA.
                </p>
              </div>
              <div className="space-y-6 md:space-y-8">
                <p>
                  Durante más de dos décadas, Parque Ecológico <span className="font-bold">YVAGA GUAZU</span> ha crecido hasta convertirse en un espacio único donde la conservación, la biodiversidad y la belleza natural conviven en armonía. Miles de árboles, colecciones botánicas, bosques temáticos y paisajes cuidadosamente preservados forman parte de este legado que continúa inspirando a quienes lo visitan.
                </p>
                <p>
                  Más que un parque, somos el reflejo de una visión que demuestra que cuando existe amor por la NATURALEZA, es posible transformar un sueño en un verdadero Paraíso Grande.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* BLOQUE 2 – LO QUE NOS HACE ÚNICOS */}
      <section className="py-24 px-6 bg-yvaga-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="flex items-center gap-2 font-sans text-yvaga-sec font-semibold tracking-widest uppercase text-sm mb-4">
              <Leaf className="w-5 h-5" /> Nuestra propuesta única
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-yvaga-dark mb-6 flex flex-wrap justify-center items-baseline gap-x-3 md:gap-x-4">
              <span>Descubre lo que</span>
              <span className="font-oregano text-[58px] md:text-[88px] text-[#1B4D2A] font-bold italic drop-shadow-md">nos hace únicos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mt-8 text-yvaga-dark">
             {/* Left Text */}
             <div className="order-2 lg:order-1 font-serif text-[14px] lg:text-[18px] leading-relaxed pt-2 lg:col-span-4">
               <p className="mb-5">
                 Somos el primer Parque Ecológico privado del país, desarrollado y sostenido íntegramente gracias al esfuerzo, la visión y el compromiso de sus fundadores y equipo de trabajo. No recibimos ayuda gubernamental ni financiamiento externo para nuestro funcionamiento, lo que convierte cada árbol plantado, cada sendero construido y cada espacio conservado en el resultado de una dedicación constante a la NATURALEZA.
               </p>
               <p className="mb-5 lg:mb-0">
                 Nuestra esencia radica en combinar la conservación de la NATURALEZA con un profundo compromiso por sensibilizar a cada visitante sobre la importancia de protegerla, valorarla y preservarla para las futuras generaciones.
               </p>
             </div>

             {/* Center Image */}
             <div className="order-1 lg:order-2 lg:col-span-4">
               <div 
                 className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] overflow-hidden relative rounded-2xl lg:rounded-none"
                 style={{
                   maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                   WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                 }}
               >
                  <img src="/nosotros_descrubre.jpg" alt="Bosque y refugio vivo" className="w-full h-full object-cover" />
               </div>
             </div>

             {/* Right Text */}
             <div className="order-3 lg:order-3 font-serif text-[12px] lg:text-[16px] leading-relaxed pt-2 lg:col-span-4">
               <p className="mb-5">
                 En nuestras 14 hectáreas de exuberante NATURALEZA conviven miles de árboles, más de 1.200 especies de flora, colecciones botánicas, bosques temáticos, senderos ecológicos y espacios diseñados para el aprendizaje, la contemplación y la conexión con el entorno natural.
               </p>
               <p className="mb-5">
                 A la majestuosidad de nuestros bosques, senderos y colecciones botánicas se suma nuestro Centro de Custodia de fauna silvestre, donde brindamos protección y cuidado a animales que fueron víctimas del tráfico ilegal y el mascotismo, contribuyendo activamente a su bienestar y conservación.
               </p>
               <p>
                 Esta unión entre bosque, biodiversidad, conservación, educación ambiental y bienestar animal convierte a <span className="font-bold">YVAGA GUAZU</span> en un espacio verdaderamente único, donde cada visita inspira admiración, genera conciencia y fortalece el vínculo entre las personas y la NATURALEZA.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 3 – MISIÓN Y VISIÓN */}
      <section className="relative w-full overflow-hidden flex items-center min-h-[700px] lg:min-h-[800px] bg-black">
        {/* Background photo */}
        <div className="absolute inset-0 z-0">
          <img src="/nosotros_nuestroproposito.jpg" alt="Nuestro propósito" className="w-full h-full object-cover object-right lg:object-center" />
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black/90 via-black/80 lg:via-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row justify-between text-white pb-32 lg:pb-20 pt-[80px]">
          {/* Left Column (Text & Cards) */}
          <div className="max-w-2xl flex-shrink-0 z-20">
            {/* Top Tagline */}
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5 text-[#8DC63F]" />
              <span className="font-sans font-bold text-[#8DC63F] uppercase tracking-wider text-sm md:text-base">
                Más que un parque, un compromiso con la vida
              </span>
            </div>

            {/* Title */}
            <h2 className="text-[50px] md:text-[68px] lg:text-[76px] font-bold mb-4 leading-none uppercase drop-shadow-2xl">
              <span className="text-white block font-sans tracking-tight">NUESTRO PROPÓSITO,</span>
              <span className="font-caveat-brush text-[#8DC63F] block tracking-wide mt-2 normal-case">NUESTRO CAMINO</span>
            </h2>

            {/* Subtitle */}
            <p className="font-sans text-[17px] md:text-[20px] font-medium mb-12 max-w-xl leading-relaxed text-gray-200 drop-shadow-md">
              Cada acción que realizamos nace del amor por la naturaleza y del <span className="text-[#8DC63F]">compromiso</span> con las futuras generaciones.
            </p>

            {/* Mission & Vision Cards */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-6 mb-12 lg:mb-0">
              {/* Mision */}
              <div className="flex-1 bg-[#102414]/90 backdrop-blur-md border border-[#3b593f]/50 rounded-2xl p-6 text-center drop-shadow-2xl pt-8 relative mt-6 lg:mt-0">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#8DC63F] rounded-full flex items-center justify-center shadow-lg border-4 border-[#102414]">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-sans font-bold text-[#8DC63F] text-[18px] mb-3 mt-2 uppercase">Nuestra Misión</h3>
                <p className="font-sans text-[14px] md:text-[15px] text-gray-200 leading-relaxed font-light">
                  Generar una conexión real entre el ser humano y la naturaleza, sensibilizando a cada visitante para que valore, respete, proteja y ame nuestro entorno natural.
                </p>
              </div>

              {/* Vision */}
              <div className="flex-1 bg-[#102414]/90 backdrop-blur-md border border-[#3b593f]/50 rounded-2xl p-6 text-center drop-shadow-2xl pt-8 relative mt-6 lg:mt-0">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#8DC63F] rounded-full flex items-center justify-center shadow-lg border-4 border-[#102414]">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-sans font-bold text-[#8DC63F] text-[18px] mb-3 mt-2 uppercase">Nuestra Visión</h3>
                <p className="font-sans text-[14px] md:text-[15px] text-gray-200 leading-relaxed font-light">
                  Lograr que cada persona que nos visita viva la naturaleza con otros ojos y decida amarla, entenderla y cuidarla, generando un impacto positivo en la vida y en el futuro del planeta.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Quote at the bottom) */}
          <div className="mt-12 lg:mt-auto lg:self-end lg:max-w-[420px] w-full flex justify-end z-20">
            <div className="relative p-6 px-8 pt-5 pb-5 bg-gradient-to-r from-[#020502]/80 to-transparent backdrop-blur-sm rounded-l-3xl border-l-[6px] border-[#8DC63F] shadow-2xl">
               <p className="font-caveat-brush text-[24px] md:text-[28px] text-white leading-snug drop-shadow-md text-left inline-block">
                 <span className="text-[#8DC63F] text-3xl leading-none italic font-serif">" </span> 
                 La naturaleza puede vivir sin el hombre, pero el hombre no puede vivir sin <span className="text-[#8DC63F]">la naturaleza.</span>
                 <span className="text-[#8DC63F] text-3xl leading-none italic font-serif"> "</span>
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 4 – DIFERENCIALES */}
      <section className="py-24 px-6 bg-yvaga-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block border border-yvaga-sec text-yvaga-sec px-8 py-3 rounded-full font-sans font-semibold mb-6 tracking-wide text-[21px] bg-yvaga-sec/5">
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
          <img src="/nosotros_paso.jpg" alt="Naturaleza vida" className="w-full h-full object-cover" />
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
           <p className="font-sans text-[20px] md:text-[22px] text-yvaga-dark/70 mb-12 max-w-2xl mx-auto">
             Visítanos, apóyanos y sé parte de este refugio que protege la naturaleza y da esperanza a quienes más lo necesitan.
           </p>

           <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12 border-y border-yvaga-dark/10 py-8">
             <div className="flex flex-col items-center opacity-70">
               <Heart className="w-10 h-10 mb-2 text-yvaga-sec" />
               <span className="font-serif text-lg uppercase tracking-widest">Misión</span>
             </div>
             <div className="flex flex-col items-center opacity-70">
               <Globe className="w-10 h-10 mb-2 text-yvaga-sec" />
               <span className="font-serif text-lg uppercase tracking-widest">Refugio</span>
             </div>
             <div className="flex flex-col items-center opacity-70">
               <Trees className="w-10 h-10 mb-2 text-yvaga-sec" />
               <span className="font-serif text-lg uppercase tracking-widest">Conservación</span>
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
