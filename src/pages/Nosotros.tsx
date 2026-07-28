import { motion } from "motion/react";
import { Leaf, Trees, Heart, Bird, Bug, Globe, ArrowRight, Calendar, DoorOpen, Flower2, PawPrint } from "lucide-react";

export default function Nosotros() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* BLOQUE 1 – HERO PORTADA */}
      <section className="relative w-full bg-yvaga-dark mt-[80px]">
        <div className="relative w-full">
          <img src="/header_nosotros.jpg" alt="Portada NOSOTROS" className="w-full h-auto block" />
          {/* Subtle gradient to ensure navbar is visible if needed, but no dark overlay across the whole image as requested */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* BLOQUE 1.5 – HISTORIA TEXTO & COLLAGE */}
      <section className="pt-16 pb-20 px-6 bg-yvaga-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              {/* Left Side: Title and Text */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="mb-6 md:mb-10">
                  <h1 className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-sans text-4xl md:text-5xl lg:text-[54px] text-[#2c5234] font-light tracking-wide">
                      Nuestra
                    </span>
                    <span className="font-oregano text-[60px] md:text-[80px] lg:text-[100px] text-[#1B4D2A] font-bold italic leading-none drop-shadow-sm">
                      historia
                    </span>
                  </h1>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[15px] md:text-[16px] text-yvaga-dark/90 leading-relaxed text-justify">
                  <div className="space-y-6">
                    <p>
                      El Parque Ecológico <span className="font-bold">YVAGA GUAZÚ</span>, que en lengua guaraní significa "Paraíso Grande", nació del sueño de sus fundadores Rebeca Rozenman y Francisco Hubsch, quienes en 1979 iniciaron un extraordinario proyecto de restauración y conservación de la NATURALEZA.
                    </p>
                    <p>
                      Lo que en aquel entonces era un terreno con escasa cobertura vegetal comenzó a transformarse, árbol por árbol, sendero por sendero y especie por especie, gracias a décadas de esfuerzo, dedicación y un profundo compromiso con la vida.
                    </p>
                    <p>
                      Fueron años de trabajo constante para convertir este espacio en un verdadero refugio para la biodiversidad.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <p>
                      Después de más de dos décadas de desarrollo, el parque abrió oficialmente sus puertas al público el 17 de septiembre de 2003, permitiendo que miles de personas conocieran y disfrutaran este gran patrimonio natural.
                    </p>
                    <p>
                      Hoy, con más de 47 años de historia, <span className="font-bold">YVAGA GUAZÚ</span> alberga 14 hectáreas de exuberante NATURALEZA, más de 6.300 árboles inventariados, más de 1.200 variedades de plantas, el orquideario más grande de Bolivia, importantes colecciones botánicas y un Centro de Custodia que protege a cientos de animales silvestres rescatados.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side: Photos Collage */}
              <div className="lg:col-span-7 relative h-[400px] md:h-[500px] lg:h-auto">
                <div className="absolute inset-0 grid grid-cols-12 grid-rows-2 gap-2 md:gap-3 h-full">
                  <div className="col-span-8 row-span-1 overflow-hidden">
                    <img src="/recorrido_1.jpg" alt="Naturaleza" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  </div>
                  <div className="col-span-4 row-span-1 overflow-hidden">
                    <img src="/orquidea_5.jpeg" alt="Orquídeas" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  </div>
                  <div className="col-span-6 row-span-1 overflow-hidden">
                    <img src="/restaurant.jpg" alt="Instalaciones" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  </div>
                  <div className="col-span-3 row-span-1 overflow-hidden">
                    <img src="/animal_paraba_3.jpg" alt="Paraba" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  </div>
                  <div className="col-span-3 row-span-1 overflow-hidden">
                    <img src="/animal_armadillo_1.jpg" alt="Animal" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  </div>
                </div>
              </div>
            </div>

            {/* Middle text banner */}
            <div className="mt-20 md:mt-24 flex flex-col items-center text-center relative px-4">
              <div className="absolute top-0 left-0 text-[#E0C642] opacity-80"><Leaf className="w-12 h-12 -rotate-12" /></div>
              <div className="absolute bottom-0 right-0 text-[#E0C642] opacity-80"><Leaf className="w-12 h-12 rotate-45" /></div>
              
              <h2 className="text-[#3b593f] font-sans font-bold text-2xl md:text-3xl lg:text-[34px] leading-snug uppercase max-w-4xl mx-auto">
                <span className="font-extrabold">YVAGA GUAZÚ</span> es el mejor destino TURÍSTICO, <br />
                <span className="font-oregano normal-case text-[#c8a143] text-4xl md:text-5xl lg:text-[60px] italic">es un regalo para Santa Cruz,</span>
              </h2>
              <p className="mt-4 font-serif text-[16px] md:text-[18px] text-yvaga-dark/80 max-w-3xl mx-auto font-medium">
                un legado de los fundadores Rebeca Rozemman y Francisco Hubsch, <br className="hidden md:block" />
                quienes con amor y visión hicieron posible este Paraíso Grande.
              </p>
            </div>

            {/* Infographic / Icons Section */}
            <div className="mt-20 border-t border-yvaga-dark/10 pt-16">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4 text-center">
                {/* 1 */}
                <div className="flex flex-col items-center">
                  <div className="mb-4 text-[#2c5234]">
                    <Calendar className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-sm uppercase text-yvaga-dark tracking-wide mb-1">Inicio del proyecto</h4>
                  <p className="font-bold text-lg text-yvaga-dark">1979</p>
                </div>
                {/* 2 */}
                <div className="flex flex-col items-center">
                  <div className="mb-4 text-[#2c5234]">
                    <DoorOpen className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-sm uppercase text-yvaga-dark tracking-wide mb-1">Apertura al público</h4>
                  <p className="font-medium text-[13px] text-yvaga-dark/80">17 de septiembre<br/>de 2003</p>
                </div>
                {/* 3 */}
                <div className="flex flex-col items-center">
                  <div className="mb-4 text-[#2c5234]">
                    <Leaf className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-sm uppercase text-yvaga-dark tracking-wide mb-1">Más de</h4>
                  <p className="font-bold text-lg text-yvaga-dark">47 años</p>
                  <p className="font-bold text-sm uppercase text-yvaga-dark">de historia</p>
                </div>
                {/* 4 */}
                <div className="flex flex-col items-center">
                  <div className="mb-4 text-[#2c5234]">
                    <Trees className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-sm uppercase text-yvaga-dark tracking-wide mb-1">14 hectáreas</h4>
                  <p className="font-medium text-[13px] text-yvaga-dark/80 uppercase">de exuberante<br/>naturaleza</p>
                </div>
                {/* 5 */}
                <div className="flex flex-col items-center">
                  <div className="mb-4 text-[#2c5234]">
                    <Flower2 className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-sm uppercase text-yvaga-dark tracking-wide mb-1">El orquideario</h4>
                  <p className="font-bold text-[13px] text-yvaga-dark uppercase">más grande<br/>de Bolivia</p>
                </div>
                {/* 6 */}
                <div className="flex flex-col items-center">
                  <div className="mb-4 text-[#2c5234]">
                    <PawPrint className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-sm uppercase text-yvaga-dark tracking-wide mb-1">Centro de custodia</h4>
                  <p className="font-medium text-[13px] text-yvaga-dark/80">Protegemos a cientos<br/>de animales silvestres</p>
                </div>
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
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 flex flex-wrap justify-center items-baseline gap-x-3 md:gap-x-4">
              <span className="text-[#5e9c43]">Descubre lo que</span>
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
                 A la majestuosidad de nuestro bosque, senderos y colecciones botánicas se suma nuestro Centro de Custodia de fauna silvestre, donde brindamos protección y cuidado a animales que fueron víctimas del tráfico ilegal y el mascotismo, contribuyendo activamente a su bienestar y conservación.
               </p>
               <p>
                 Esta unión entre bosque, biodiversidad, conservación, educación ambiental y bienestar animal convierte a <span className="font-bold">YVAGA GUAZU (Paraíso Grande)</span> en un espacio verdaderamente único, donde cada visita inspira admiración, genera conciencia y fortalece el vínculo entre las personas y la NATURALEZA.
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
              <div className="flex-1 bg-[#102414]/90 backdrop-blur-md border border-[#3b593f]/50 rounded-2xl p-6 text-center drop-shadow-2xl pt-8 relative mt-6 lg:mt-0 h-auto min-h-max">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#8DC63F] rounded-full flex items-center justify-center shadow-lg border-4 border-[#102414]">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-sans font-bold text-[#8DC63F] text-[22px] mb-3 mt-2 uppercase">Nuestra Misión</h3>
                <p className="font-sans text-[18px] md:text-[19px] text-gray-200 leading-relaxed font-light">
                  Generar una conexión real entre el ser humano y la naturaleza, sensibilizando a cada visitante para que valore, respete, proteja y ame nuestro entorno natural.
                </p>
              </div>

              {/* Vision */}
              <div className="flex-1 bg-[#102414]/90 backdrop-blur-md border border-[#3b593f]/50 rounded-2xl p-6 text-center drop-shadow-2xl pt-8 relative mt-6 lg:mt-0 h-auto min-h-max">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#8DC63F] rounded-full flex items-center justify-center shadow-lg border-4 border-[#102414]">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-sans font-bold text-[#8DC63F] text-[22px] mb-3 mt-2 uppercase">Nuestra Visión</h3>
                <p className="font-sans text-[18px] md:text-[19px] text-gray-200 leading-relaxed font-light">
                  Lograr que cada persona que nos visita viva la naturaleza con otros ojos y decida amarla, entenderla y cuidarla, generando un impacto positivo en la vida y en el futuro del planeta.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Quote at the bottom) */}
          <div className="mt-12 lg:mt-auto lg:self-end lg:max-w-[560px] w-full flex justify-end z-20 translate-x-[7%]">
            <div className="relative p-6 px-8 pt-5 pb-5 bg-gradient-to-r from-[#020502]/80 to-transparent backdrop-blur-sm rounded-l-3xl border-l-[6px] border-[#8DC63F] shadow-2xl">
               <p className="font-caveat-brush text-[30px] md:text-[34px] text-white leading-snug drop-shadow-md text-left inline-block">
                 <span className="text-[#8DC63F] text-4xl md:text-5xl leading-none italic font-serif">" </span> 
                 La naturaleza puede vivir sin el hombre, pero el hombre no puede vivir sin <span className="text-[#8DC63F]">la naturaleza.</span>
                 <span className="text-[#8DC63F] text-4xl md:text-5xl leading-none italic font-serif"> "</span>
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 5 – CIERRE VISUAL NOSOTROS */}
      <section className="relative py-32 px-6 overflow-hidden flex items-center justify-center min-h-[70vh]">
        <div className="absolute inset-0 z-0">
          <img src="/huella_bosque.jpg" alt="Naturaleza vida" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-yvaga-dark via-yvaga-dark/50 to-transparent"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 w-full max-w-4xl bg-yvaga-white p-10 md:p-16 rounded-[40px] text-center shadow-2xl"
        >
           <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
             <span className="text-[#5e9c43]">Cada paso que das aquí,</span> <br />
             <span className="font-oregano text-[48px] md:text-[68px] lg:text-[76px] text-[#1B4D2A] font-bold italic drop-shadow-md mt-2 inline-block">deja una huella que transforma</span>
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

        {/* Palmeras Superpuestas */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          <svg viewBox="0 0 1920 2033" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
            <image href="/palmera_silueta_1.png" x="-60" y="643" width="677" height="864" />
            <image href="/palmera_silueta_2.png" x="1175" y="764" width="778" height="941" />
          </svg>
        </div>
      </section>

    </div>
  );
}

