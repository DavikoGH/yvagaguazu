import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, animate, useInView } from "motion/react";
import { Leaf, Navigation, Trees, Heart, Users, MapPin, CheckCircle, ShieldCheck } from "lucide-react";
import { cn } from "../lib/utils";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO HOME */}
      <section className="relative w-full h-screen flex items-center justify-start overflow-hidden bg-yvaga-dark">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale-[20%]"
          >
             <source src="/videportada.mp4" type="video/mp4" />
             {/* Fallback image */}
             <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2727&auto=format&fit=crop" alt="Bosque Yvaga Guazú" className="w-full h-full object-cover" />
          </video>
          {/* Overlay to improve reading without green tint */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start gap-8 mt-16 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-none"
          >
            {/* Logo */}
            <div className="mb-[6vh] md:mb-8 inline-block">
               <img src="/YvagaGuazuLogoPNG.png" alt="Yvaga Guazú Logo" className="w-[255px] md:w-[325px] lg:w-[372px] drop-shadow-xl scale-[1.13] origin-top-left md:scale-100 md:origin-center" />
            </div>
            
            <h1 className="font-serif text-[21px] sm:text-[25px] md:text-[34px] lg:text-[43px] text-yvaga-white leading-[1.2] md:leading-[1.05] font-medium mb-4 md:mb-6 w-full max-w-none">
              <span className="block whitespace-nowrap overflow-hidden text-ellipsis">Donde la Naturaleza se protege...</span>
              <span className="block text-[#FFD700] text-[26px] sm:text-[30px] md:text-[40px] lg:text-[50px] italic font-bold whitespace-nowrap overflow-hidden text-ellipsis mt-2 md:-mt-1 drop-shadow-md">y tú vuelves a sentirla</span>
            </h1>

            <p className="font-sans text-[18.5px] md:text-[20px] text-yvaga-white/90 leading-relaxed mb-8 md:mb-10 col-span-11 w-11/12">
              Explora 14 hectáreas de exuberante naturaleza con 6.300 árboles inventariados entre forestales, frutales, ornamentales y palmeras y con más de 350 animales rescatados en nuestro centro de custodio.
            </p>

            <motion.button
              onClick={() => navigate('/contacto')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2.5 bg-yvaga-acc text-white px-7 py-3 text-[14px] rounded-full font-sans font-semibold tracking-wide shadow-xl shadow-yvaga-acc/30 hover:bg-yvaga-dark transition-colors"
            >
              <Leaf strokeWidth={2.5} className="w-[18px] h-[18px]" />
              Reserva tu experiencia
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 2. BLOQUE INTRODUCTORIO */}
      <section className="pt-12 pb-20 md:pt-16 md:pb-24 px-6 bg-[#f8f6f0] relative overflow-hidden">
        {/* Subtle texture/decoration */}
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none -translate-y-1/2 translate-x-1/4">
           <Leaf className="w-96 h-96" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <span className="text-[32px] md:text-[40px] font-caveat-brush text-yvaga-sec mb-4">
            MÁS QUE UN PARQUE... ES UNA MISIÓN DE VIDA
          </span>
          
          <div className="w-16 h-[1px] bg-yvaga-sec/30 mb-8 md:mb-10"></div>

          <div className="w-full max-w-4xl mx-auto flex flex-col gap-6 md:gap-8 text-left">
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 group">
              <div className="w-12 h-12 rounded-full bg-white shadow-md border border-yvaga-dark/5 flex items-center justify-center shrink-0 mt-1 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <ShieldCheck className="w-6 h-6 text-yvaga-sec" />
              </div>
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-yvaga-dark">
                En el Parque Ecológico <span className="font-bold">YVAGA GUAZU</span> (Paraíso grande) protegemos y conservamos 14 hectáreas de <span className="text-yvaga-acc italic">NATURALEZA</span> exuberante, integradas por bosques, senderos, jardines y una importante diversidad vegetal.
              </p>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-yvaga-dark/10 to-transparent"></div>

            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 group">
              <div className="w-12 h-12 rounded-full bg-white shadow-md border border-yvaga-dark/5 flex items-center justify-center shrink-0 mt-1 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <Leaf className="w-6 h-6 text-yvaga-sec" />
              </div>
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-yvaga-dark">
                Nuestro propósito es sensibilizar a cada visitante sobre la importancia de la <span className="text-yvaga-acc italic">NATURALEZA</span> inspirando una conexión más profunda con el entorno natural y despertando una nueva forma de <span className="font-semibold underline decoration-yvaga-light underline-offset-8">amarla, valorarla y respetarla</span>.
              </p>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-yvaga-dark/10 to-transparent"></div>

            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 group">
              <div className="w-12 h-12 rounded-full bg-white shadow-md border border-yvaga-dark/5 flex items-center justify-center shrink-0 mt-1 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <Users className="w-6 h-6 text-yvaga-sec" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-serif text-xl md:text-2xl leading-relaxed text-yvaga-dark opacity-90">
                  <span className="font-bold">YVAGA GUAZU</span> (Paraíso grande) es un Parque Ecológico y destino turístico que invita a descubrir la belleza de la <span className="text-yvaga-acc italic">NATURALEZA</span> desde una perspectiva diferente. Un espacio donde la contemplación, la conexión con el entorno y la valoración de nuestros recursos naturales, forman parte de cada experiencia.
                </p>
                <div className="bg-yvaga-sec text-white px-5 py-3 md:px-6 md:py-4 rounded-2xl mt-3 self-start shadow-sm">
                  <p className="font-sans text-base md:text-lg font-medium leading-snug">
                    Aquí, cada visita suma. Cada persona que entra se convierte en parte de nuestra misión.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2.5 CONTADORES DE IMPACTO */}
      <section className="py-16 md:py-24 px-6 bg-yvaga-beige relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Bloque 1 */}
            <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-yvaga-dark/5 flex flex-col items-center text-center hover:-translate-y-1 transition-all duration-300">
              <div className="font-serif text-6xl xl:text-7xl text-yvaga-sec mb-2">
                 <Counter value={14} />
              </div>
              <h3 className="font-sans text-lg md:text-xl font-bold text-yvaga-dark uppercase tracking-wide mb-3">Hectáreas</h3>
              <div className="w-10 h-px bg-yvaga-sec/30 mb-4"></div>
              <p className="font-serif text-yvaga-dark/80 text-lg md:text-xl leading-relaxed">
                Un extraordinario espacio de <span className="text-yvaga-acc italic">NATURALEZA</span> exuberante donde la belleza del bosque invita a descubrir, admirar y disfrutar cada recorrido.
              </p>
            </div>
            
            {/* Bloque 2 */}
            <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-yvaga-dark/5 flex flex-col items-center text-center hover:-translate-y-1 transition-all duration-300">
              <div className="font-serif text-6xl xl:text-7xl text-yvaga-sec mb-2">
                 <Counter value={6300} />
              </div>
              <h3 className="font-sans text-lg md:text-xl font-bold text-yvaga-dark uppercase tracking-wide mb-3">Árboles inventariados</h3>
              <div className="w-10 h-px bg-yvaga-sec/30 mb-4"></div>
              <p className="font-serif text-yvaga-dark/80 text-lg md:text-xl leading-relaxed">
                Árboles extraordinarios resguardan un valioso patrimonio natural vivo.
              </p>
            </div>

            {/* Bloque 3 */}
            <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-yvaga-dark/5 flex flex-col items-center text-center hover:-translate-y-1 transition-all duration-300">
              <div className="font-serif text-6xl xl:text-7xl text-yvaga-sec mb-2">
                 <Counter value={1200} prefix="+" />
              </div>
              <h3 className="font-sans text-lg md:text-xl font-bold text-yvaga-dark uppercase tracking-wide mb-3">Especies de flora</h3>
              <div className="w-10 h-px bg-yvaga-sec/30 mb-4"></div>
              <p className="font-serif text-yvaga-dark/80 text-lg md:text-xl leading-relaxed">
                Una extraordinaria riqueza botánica que inspira admiración en cada recorrido.
              </p>
            </div>

            {/* Bloque 4 */}
            <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-yvaga-dark/5 flex flex-col items-center text-center hover:-translate-y-1 transition-all duration-300">
              <div className="font-serif text-6xl xl:text-7xl text-yvaga-sec mb-2">
                 <Counter value={350} prefix="+" />
              </div>
              <h3 className="font-sans text-lg md:text-xl font-bold text-yvaga-dark uppercase tracking-wide mb-3">Animales rescatados</h3>
              <div className="w-10 h-px bg-yvaga-sec/30 mb-4"></div>
              <p className="font-serif text-yvaga-dark/80 text-lg md:text-xl leading-relaxed">
                Protección, cuidado y bienestar para especies bajo resguardo responsable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TARJETAS “VIVE, SIENTE Y CONECTA” */}
      <section className="min-h-[100dvh] flex flex-col justify-center py-16 md:py-24 px-6 bg-yvaga-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-oregano font-bold text-[42px] md:text-[54px] lg:text-[66px] text-yvaga-dark mb-4">
              Vive, siente y conecta con la naturaleza
            </h2>
            <p className="font-sans text-lg md:text-xl text-yvaga-dark/70 max-w-2xl mx-auto">
              En cada paseo que das en este Parque Ecológico, recibes mucho más de lo que estás buscando.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 perspective-1000 max-w-7xl mx-auto">
            {/* Tarjeta 1 */}
            <FlipCard 
              number="01"
              icon={Leaf}
              title="Conexión real con la naturaleza"
              image="/conexion.jpg"
              backText="YVAGA GUAZU transforma cada visita en una experiencia significativa, donde la majestuosidad de la NATURALEZA inspira, cautiva y deja una huella duradera en quienes la descubren, despertando una profunda admiración por su belleza y un genuino deseo de cuidarla, preservarla y amarla."
            />
            {/* Tarjeta 2 */}
            <FlipCard 
              number="02"
              icon={Navigation}
              title="Experiencias que transforman"
              image="/experiencias.jpg"
              backText="Recorre senderos rodeados de exuberante NATURALEZA, respira aire puro y descubre la extraordinaria belleza de bosques, jardines y paisajes que cautivan los sentidos. Cada visita es una experiencia que inspira admiración, tranquilidad y una nueva forma de valorar el mundo natural que nos rodea."
            />
            {/* Tarjeta 3 */}
            <FlipCard 
              number="03"
              icon={Heart}
              title="Refugio de vida"
              image="/refugio.jpg"
              backText="Experiencias únicas que despiertan tus sentidos al conectar con la NATURALEZA, y dejan huella en tu corazón."
            />
            {/* Tarjeta 4 */}
            <FlipCard 
              number="04"
              icon={Users}
              title="Experiencias para equipos y empresas"
              image="/equipos.jpg"
              backText="Rodeados de exuberante NATURALEZA, los equipos encuentran mucho más que un lugar de encuentro: descubren un espacio que inspira bienestar, fortalece vínculos y crea experiencias memorables."
            />
          </div>
        </div>
      </section>

      {/* 4. BLOQUE DE CONEXIÓN Y MISIÓN */}
      <section className="py-24 px-6 relative bg-yvaga-dark text-yvaga-white overflow-hidden">
        {/* Background Image with heavy overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/arboles_atardecer.jpg"
            alt="Bosque"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="font-caveat-brush text-[31px] md:text-[45px] font-normal max-w-4xl leading-[1.45]">
              "Este es un espacio para detenerte, observar y conectar. Buscamos sensibilizar a cada visitante, despertando respeto, empatía y una nueva forma de relacionarse con la NATURALEZA."
            </p>
          </motion.div>

          <div className="bg-yvaga-white text-yvaga-dark p-8 md:p-12 lg:p-16 rounded-[40px] shadow-2xl max-w-4xl w-full">
            <h3 className="font-oregano font-bold text-[56px] md:text-[68px] mb-6">Únete a nuestra misión</h3>
            <p className="font-sans text-lg text-yvaga-dark/80 mb-12 max-w-2xl mx-auto">
              Nos sostenemos gracias a las personas que creen en la <span className="font-bold text-yvaga-sec">NATURALEZA</span> y deciden amarla. No contamos con apoyo externo, por eso cada visita y cada aporte tuyo contribuyen directamente a proteger nuestro bosque y mantener este refugio activo.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Trees, text: "Protegemos la naturaleza" },
                { icon: Heart, text: "Rescatamos vidas" },
                { icon: ShieldCheck, text: "Cuidamos este refugio" },
                { icon: MapPin, text: "Construimos un futuro mejor" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-yvaga-light/50 flex items-center justify-center text-yvaga-sec scale-110 mb-1 mt-1">
                    <item.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <span className="font-serif text-lg font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center w-full mt-4">
              <Link 
                to="/contacto" 
                className="relative bg-[#0d220e] text-white px-6 md:px-11 py-3 md:py-4 rounded-[50px] w-full sm:w-auto inline-flex items-center justify-center gap-3 md:gap-4 shadow-[0_8px_30px_rgba(0,0,0,0.2)] border border-[#9bc82d]/50 overflow-hidden transform hover:-translate-y-1 hover:shadow-[0_15px_40px_-10px_rgba(155,200,45,0.4)] transition-all duration-300"
              >
                <div className="absolute inset-[2px] rounded-[50px] shadow-[inset_0_4px_12px_1px_rgba(155,200,45,0.9),inset_0_-4px_12px_1px_rgba(155,200,45,0.6)] pointer-events-none border border-[#77a113]/30" />
                
                <Heart className="w-8 h-8 md:w-[37px] md:h-[37px] text-white z-10 flex-shrink-0" strokeWidth={2} />
                
                <div className="flex flex-col items-start z-10 text-left">
                  <span className="font-bold font-sans text-[19px] md:text-[25px] tracking-[0.06em] leading-[1.1] uppercase drop-shadow-md">QUIERO SUMARME</span>
                  <span className="font-sans text-[10px] md:text-[12px] font-medium tracking-[0.14em] text-white/90 uppercase drop-shadow-md">TU APOYO TRANSFORMA VIDAS</span>
                </div>
              </Link>
            </div>

            <div className="mt-14 pt-10 border-t border-yvaga-dark/10 relative flex flex-col justify-center items-center min-h-[180px]">
              <svg width="0" height="0" className="absolute" aria-hidden="true">
                <filter id="brush-roughness">
                  <feTurbulence type="fractalNoise" baseFrequency="0.04 0.1" numOctaves="3" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" />
                </filter>
              </svg>

              <div className="absolute inset-y-0 inset-x-[-20px] md:inset-x-[-50px] flex justify-center items-center pointer-events-none mt-10">
                <div className="w-full h-[150px] md:h-[170px] relative" style={{ filter: "url(#brush-roughness)" }}>
                   <div className="absolute inset-0 bg-[#162f14] transform -rotate-1 scale-y-[0.8] scale-x-[1.05] opacity-90" style={{ clipPath: "polygon(2% 15%, 98% 5%, 100% 50%, 98% 95%, 2% 85%, 0% 50%)" }} />
                   <div className="absolute inset-y-3 inset-x-[-15px] bg-[#1F3D1E] transform rotate-[1deg] scale-x-[1.03] scale-y-[0.85]" style={{ clipPath: "polygon(0% 0%, 99% 10%, 100% 60%, 98% 100%, 2% 90%, 1% 40%)" }} />
                   <div className="absolute inset-y-5 inset-x-[-25px] bg-[#1c381b] transform -rotate-[0.5deg] scale-y-[0.75] scale-x-[1.06]" style={{ clipPath: "polygon(3% 20%, 100% 0%, 98% 45%, 100% 100%, 1% 80%, 0% 55%)" }} />
                </div>
              </div>

              <div className="relative z-10 w-full text-center px-4 mt-2">
                <p className="font-caveat-brush text-[36px] md:text-[42px] font-normal leading-[1.15] drop-shadow-lg">
                  <span className="text-white">"Cada pequeña acción hace una gran diferencia.</span><br />
                  <span className="text-[#AED33C]">Gracias por ser parte de esta misión."</span>
                  <span className="inline-block relative w-8 h-8 md:w-9 md:h-9 ml-3 align-middle -mt-2">
                     <Heart className="absolute inset-0 w-full h-full text-[#AED33C] stroke-[3px]" fill="transparent" />
                     <Heart className="absolute inset-0 w-full h-full text-[#AED33C] stroke-0 transform scale-[0.6] translate-y-[-1px] translate-x-[-1px]" fill="#AED33C" opacity="0.8"/>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* 5. CERTIFICACIÓN GREEN GLOBE */}
      <section className="py-24 px-6 bg-yvaga-white">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
          
          {/* Main Text Centered */}
          <div className="w-full max-w-4xl flex flex-col items-center text-center mb-12">
            <h2 className="font-serif text-[40px] md:text-[52px] text-yvaga-sec mb-4">
              CERTIFICACIÓN INTERNACIONAL GREEN GLOBE
            </h2>
            <h3 className="font-sans text-[23px] md:text-[23px] font-bold text-yvaga-sec/80 mb-6 tracking-wide">
              Somos parte de la élite del turismo sostenible en el mundo.
            </h3>
            
            <p className="text-[20px] md:text-[22px] text-yvaga-sec/90 font-light leading-relaxed">
              En el Parque Ecológico Yvaga GuazU contamos con la certificación internacional Green Globe, uno de los reconocimientos más importantes en sostenibilidad turística a nivel global.
            </p>
          </div>

          {/* Logo & Quote with background Centered */}
          <div className="w-full max-w-4xl relative rounded-[32px] overflow-hidden flex flex-col justify-center items-center p-8 md:p-12 shadow-lg border border-yvaga-sec/10 mb-12">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/fondocertificacion.jpg" 
                alt="Fondo Certificación" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-yvaga-white/80 backdrop-blur-[1px]"></div>
            </div>

            {/* Content over background */}
            <div className="relative z-10 w-full flex flex-col items-center flex-grow justify-center text-center">
              <img src="/greenglobe.png" alt="Green Globe Certification" className="w-48 h-48 md:w-56 md:h-56 object-contain drop-shadow-2xl mb-8" />

              <div className="w-full py-2">
                <h4 className="font-caveat-brush font-normal text-[32px] md:text-[38px] text-yvaga-sec mb-3 tracking-wide leading-tight">MÁS QUE UN RECONOCIMIENTO, ES UNA PROMESA.</h4>
                <p className="font-sans italic font-medium text-[20px] md:text-[22px] text-yvaga-sec/90 leading-relaxed md:px-8">
                  "Esta certificación garantiza que cada experiencia que vivimos contigo protege la biodiversidad, educa y genera conciencia, y contribuye al futuro del planeta."
                </p>
              </div>
            </div>
          </div>

          {/* "primer bioparque" list cards */}
          <div className="bg-white/60 w-full max-w-5xl p-6 md:p-10 rounded-[24px] shadow-sm border border-yvaga-sec/5 mb-14 text-center">
            <p className="font-serif text-[24px] md:text-[26px] font-medium text-yvaga-sec mb-8 leading-relaxed max-w-3xl mx-auto">
              Fuimos el <span className="font-bold underline decoration-2 underline-offset-4">primer bioparque certificado</span> en Latinoamérica y Bolivia, un logro que respalda nuestro compromiso real con:
            </p>
            
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "La conservación", sub: "del medio ambiente" },
                { title: "El bienestar", sub: "animal" },
                { title: "El impacto social", sub: "positivo" },
                { title: "El desarrollo", sub: "sostenible" }
              ].map((item, i) => (
                <li key={i} className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-yvaga-sec/10 text-center">
                  <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-yvaga-sec mb-3" />
                  <span className="font-sans text-[20px] md:text-[22px] font-bold text-yvaga-sec leading-tight mb-1">{item.title}</span>
                  <span className="font-sans text-[16px] md:text-[18px] text-yvaga-sec/70">{item.sub}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Call to action text and button Centered */}
          <div className="flex flex-col items-center text-center gap-6 max-w-2xl">
             <p className="font-sans text-yvaga-sec text-[18px] md:text-[22px] font-medium">
               Cuando visitas Yvaga Guazú, <span className="font-bold">formas parte de su protección.</span>
             </p>
             <button className="bg-yvaga-sec text-white px-10 py-4 md:py-5 rounded-full font-serif font-medium text-[20px] md:text-[22px] hover:bg-yvaga-dark transition-colors w-full sm:w-auto shadow-md">
               Descubre nuestra experiencia sostenible
             </button>
          </div>

        </div>
      </section>
    </div>
  );
}

// Componente Contador Animado
function Counter({ value, prefix = "", suffix = "", duration = 2.5 }: { value: number, prefix?: string, suffix?: string, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate(v) {
          if (ref.current) {
             ref.current.textContent = prefix + Math.floor(v).toLocaleString('es-ES') + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, value, duration, prefix, suffix]);

  return <span ref={ref} className="tabular-nums font-serif">{prefix}0{suffix}</span>;
}

// Helper component for FlipCards
function FlipCard({ number, title, icon: Icon, image, backText }: { number: string, title: string, icon: any, image: string, backText: string }) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  
  return (
    <div 
      className="group h-[340px] md:h-[400px] w-full perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-all duration-700 transform-style-3d ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-black rounded-[24px] overflow-hidden shadow-sm border border-black/5">
          <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-yvaga-white/20 backdrop-blur-md text-yvaga-white border border-yvaga-white/30 flex items-center justify-center">
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <span className="font-sans font-bold text-yvaga-white/70 text-lg md:text-xl drop-shadow-md">{number}</span>
            </div>
            <h3 className="font-serif text-[22px] md:text-[26px] text-yvaga-white leading-tight drop-shadow-lg">{title}</h3>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-yvaga-dark text-yvaga-white border border-yvaga-sec rounded-[24px] p-5 md:p-6 flex flex-col justify-center items-center text-center shadow-md">
           <Icon className="w-8 h-8 md:w-10 md:h-10 text-yvaga-acc mb-3 md:mb-4 opacity-80" />
           <p className="font-serif text-[16px] md:text-[18px] leading-relaxed font-light text-yvaga-white/90">
             {backText}
           </p>
        </div>

      </div>
    </div>
  );
}
