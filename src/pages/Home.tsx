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
            className="w-full max-w-4xl -translate-y-[10vh]"
          >
            {/* Logo */}
            <div className="mb-[8vh] md:mb-10 inline-block">
               <img src="/YvagaGuazuLogoPNG.png" alt="Yvaga Guazú Logo" className="w-[211px] md:w-[268px] lg:w-[307px] drop-shadow-xl scale-[1.13] origin-top-left md:scale-100 md:origin-center" />
            </div>
            
            <h1 className="font-serif text-[21px] sm:text-[25px] md:text-[34px] lg:text-[43px] text-yvaga-white leading-[1.2] md:leading-[1.05] font-medium mb-4 md:mb-6 w-full max-w-none">
              <span className="block whitespace-nowrap overflow-hidden text-ellipsis">Donde la Naturaleza se protege...</span>
              <span className="block text-yvaga-acc text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] italic font-light whitespace-nowrap overflow-hidden text-ellipsis mt-2 md:-mt-1">y tú vuelves a sentirla</span>
            </h1>

            <p className="font-sans text-[14.5px] md:text-[16px] text-yvaga-white/90 leading-relaxed mb-8 md:mb-10 max-w-2xl">
              Explora 14 hectáreas de vida real, con más de 6.000 especies de árboles y más de 350 animales rescatados que hoy tienen una segunda oportunidad.
            </p>

            <motion.button
              onClick={() => navigate('/contacto')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2.5 bg-yvaga-acc text-white px-7 py-3 text-[14px] rounded-full font-sans font-semibold tracking-wide shadow-xl shadow-yvaga-acc/30 hover:bg-[#68982a] transition-colors md:-translate-y-[2vh]"
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
          <span className="text-sm font-sans font-semibold text-yvaga-sec tracking-[0.2em] uppercase mb-4">
            MÁS QUE UN PARQUE... ES UNA MISIÓN DE VIDA
          </span>
          
          <div className="w-16 h-[1px] bg-yvaga-sec/30 mb-8 md:mb-10"></div>

          <div className="w-full max-w-4xl mx-auto flex flex-col gap-6 md:gap-8 text-left">
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 group">
              <div className="w-12 h-12 rounded-full bg-white shadow-md border border-yvaga-dark/5 flex items-center justify-center shrink-0 mt-1 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <ShieldCheck className="w-6 h-6 text-yvaga-sec" />
              </div>
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-yvaga-dark">
                En <span className="font-bold">YVAGA GUAZU</span> (Paraíso grande) trabajamos día a día para proteger la <span className="text-yvaga-acc italic">NATURALEZA</span> y brindar un refugio seguro a animales que fueron víctimas del maltrato y el abandono.
              </p>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-yvaga-dark/10 to-transparent"></div>

            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 group">
              <div className="w-12 h-12 rounded-full bg-white shadow-md border border-yvaga-dark/5 flex items-center justify-center shrink-0 mt-1 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <Leaf className="w-6 h-6 text-yvaga-sec" />
              </div>
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-yvaga-dark">
                Nuestro propósito es sensibilizar a cada visitante, generar conexión real con la <span className="text-yvaga-acc italic">NATURALEZA</span> y despertar una nueva forma de <span className="font-semibold underline decoration-yvaga-light underline-offset-8">amarla, valorarla y respetarla</span>.
              </p>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-yvaga-dark/10 to-transparent"></div>

            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 group">
              <div className="w-12 h-12 rounded-full bg-white shadow-md border border-yvaga-dark/5 flex items-center justify-center shrink-0 mt-1 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <Users className="w-6 h-6 text-yvaga-sec" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-serif text-xl md:text-2xl leading-relaxed text-yvaga-dark opacity-90">
                  No somos solo un destino turístico. Somos un espacio donde las personas vuelven a sentir, a conectar y a entender que cada acción cuenta.
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
                 <Counter value={6000} prefix="+" />
              </div>
              <h3 className="font-sans text-base md:text-lg font-bold text-yvaga-dark uppercase tracking-wide mb-3">Especies de árboles</h3>
              <div className="w-10 h-px bg-yvaga-sec/30 mb-4"></div>
              <p className="font-serif text-yvaga-dark/80 text-sm md:text-base leading-relaxed">
                Refugio de vida protegido y preservado.
              </p>
            </div>
            
            {/* Bloque 2 */}
            <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-yvaga-dark/5 flex flex-col items-center text-center hover:-translate-y-1 transition-all duration-300">
              <div className="font-serif text-6xl xl:text-7xl text-yvaga-sec mb-2">
                 <Counter value={350} prefix="+" />
              </div>
              <h3 className="font-sans text-base md:text-lg font-bold text-yvaga-dark uppercase tracking-wide mb-3">Animales rescatados</h3>
              <div className="w-10 h-px bg-yvaga-sec/30 mb-4"></div>
              <p className="font-serif text-yvaga-dark/80 text-sm md:text-base leading-relaxed">
                Refugio seguro que les brinda otra oportunidad de vida.
              </p>
            </div>

            {/* Bloque 3 */}
            <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-yvaga-dark/5 flex flex-col items-center text-center hover:-translate-y-1 transition-all duration-300">
              <div className="font-serif text-6xl xl:text-7xl text-yvaga-sec mb-2">
                 <Counter value={600} prefix="+" />
              </div>
              <h3 className="font-sans text-base md:text-lg font-bold text-yvaga-dark uppercase tracking-wide mb-3">Especies de orquídeas</h3>
              <div className="w-10 h-px bg-yvaga-sec/30 mb-4"></div>
              <p className="font-serif text-yvaga-dark/80 text-sm md:text-base leading-relaxed">
                <strong className="block mb-1 text-yvaga-dark">El orquideario más grande de Bolivia</strong>
                Un espacio único donde podrás admirar orquídeas nativas o silvestres llenas de color y vida.
              </p>
            </div>

            {/* Bloque 4 */}
            <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-yvaga-dark/5 flex flex-col items-center text-center hover:-translate-y-1 transition-all duration-300">
              <div className="font-serif text-6xl xl:text-7xl text-yvaga-sec mb-2">
                 <Counter value={20} prefix="+" />
              </div>
              <h3 className="font-sans text-base md:text-lg font-bold text-yvaga-dark uppercase tracking-wide mb-3">Años en bonsáis</h3>
              <div className="w-10 h-px bg-yvaga-sec/30 mb-4"></div>
              <p className="font-serif text-yvaga-dark/80 text-sm md:text-base leading-relaxed">
                <strong className="block mb-1 text-yvaga-dark">Gran colección</strong>
                Obras vivas de la naturaleza que reflejan paciencia, cuidado y tradición.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TARJETAS “VIVE, SIENTE Y CONECTA” */}
      <section className="min-h-[100dvh] flex flex-col justify-center py-16 md:py-24 px-6 bg-yvaga-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-yvaga-dark mb-4">
              Vive, siente y conecta con la naturaleza
            </h2>
            <p className="font-sans text-lg md:text-xl text-yvaga-dark/70 max-w-2xl mx-auto">
              Experiencias que despiertan tus sentidos, generan conexión y dejan huella en tu corazón.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 perspective-1000 max-w-7xl mx-auto">
            {/* Tarjeta 1 */}
            <FlipCard 
              number="01"
              icon={Leaf}
              title="Conexión real con la naturaleza"
              image="/conexion.jpg"
              backText="Aquí no vienes a aprender de memoria… vienes a sentir. Cada recorrido despierta una conexión auténtica con el entorno natural y contigo mismo."
            />
            {/* Tarjeta 2 */}
            <FlipCard 
              number="02"
              icon={Navigation}
              title="Experiencias que transforman"
              image="/experiencias.jpg"
              backText="Recorre senderos vivos, respira aire puro y descubre la biodiversidad en su estado más real. No es turismo… es una experiencia que cambia tu forma de ver la naturaleza."
            />
            {/* Tarjeta 3 */}
            <FlipCard 
              number="03"
              icon={Heart}
              title="Refugio de vida"
              image="/refugio.jpg"
              backText="Más de 350 animales rescatados han encontrado aquí una segunda oportunidad. Cada historia que conoces te conecta con una realidad que muchas veces no se ve."
            />
            {/* Tarjeta 4 */}
            <FlipCard 
              number="04"
              icon={Users}
              title="Experiencias para equipos y empresas"
              image="/equipos.jpg"
              backText="Contamos con espacios naturales ideales para la integración, actividades corporativas y jornadas especiales. Aquí, los equipos salen de la rutina, se conectan con la naturaleza y fortalecen sus relaciones en un entorno diferente, auténtico y lleno de vida."
            />
          </div>
        </div>
      </section>

      {/* 4. BLOQUE DE CONEXIÓN Y MISIÓN */}
      <section className="py-24 px-6 relative bg-yvaga-dark text-yvaga-white overflow-hidden">
        {/* Background Image with heavy overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2670&auto=format&fit=crop"
            alt="Bosque"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-yvaga-dark/80 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="font-serif text-2xl md:text-4xl italic font-light max-w-3xl leading-relaxed">
              "Este es un espacio para detenerte, observar y conectar. Buscamos sensibilizar a cada visitante, despertando respeto, empatía y una nueva forma de relacionarse con la naturaleza."
            </p>
          </motion.div>

          <div className="bg-yvaga-white text-yvaga-dark p-8 md:p-12 lg:p-16 rounded-[40px] shadow-2xl max-w-4xl w-full">
            <h3 className="font-serif text-4xl md:text-5xl mb-6">Únete a nuestra misión</h3>
            <p className="font-sans text-lg text-yvaga-dark/80 mb-12 max-w-2xl mx-auto">
              Nos sostenemos gracias a las personas que creen en la <span className="font-bold text-yvaga-sec">NATURALEZA</span> y deciden amarla. No contamos con apoyo externo, por eso cada visita y cada aporte tuyo contribuyen directamente a proteger nuestro bosque y mantener este refugio activo.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Heart, text: "Rescatamos vidas" },
                { icon: Trees, text: "Protegemos la naturaleza" },
                { icon: ShieldCheck, text: "Cuidamos este refugio" },
                { icon: MapPin, text: "Construimos un futuro mejor" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-yvaga-light/50 flex items-center justify-center text-yvaga-sec">
                    <item.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <span className="font-serif text-lg font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <Link to="/contacto" className="bg-yvaga-dark text-yvaga-white hover:bg-yvaga-sec transition-colors px-10 py-5 rounded-full font-serif text-xl tracking-wide w-full md:w-auto inline-block text-center shadow-md">
              Quiero sumarme
            </Link>

            <div className="mt-10 pt-6 border-t border-yvaga-dark/10">
              <p className="font-serif italic text-yvaga-dark/60 text-lg">
                Cada pequeña acción hace una gran diferencia. Gracias por ser parte de esta misión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CERTIFICACIÓN GREEN GLOBE */}
      <section className="py-24 px-6 bg-[#E8EFE1]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:gap-16 gap-12">
          
          {/* Left Side: Main Text & Cards */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center">
            <h2 className="font-serif text-4xl md:text-5xl text-[#165a5b] mb-4">
              Certificación Internacional Green Globe
            </h2>
            <h3 className="font-sans text-xl md:text-xl font-bold text-[#165a5b]/80 mb-6 uppercase tracking-wide">
              Somos parte de la élite del turismo sostenible en el mundo.
            </h3>
            
            <p className="text-lg md:text-xl text-[#165a5b]/90 mb-10 font-light leading-relaxed">
              En el Parque Ecológico Yvaga Guazú contamos con la certificación internacional Green Globe, uno de los reconocimientos más importantes en sostenibilidad turística a nivel global.
            </p>

            <div className="bg-white p-6 md:p-8 rounded-[24px] shadow-sm border border-[#165a5b]/5 mb-8">
              <p className="font-serif text-lg md:text-xl font-medium text-[#165a5b] mb-6 leading-relaxed">
                Fuimos el <span className="font-bold underline decoration-2 underline-offset-4">primer bioparque certificado</span> en Latinoamérica y Bolivia, un logro que respalda nuestro compromiso real con:
              </p>
              
              <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "La conservación", sub: "del medio ambiente" },
                  { title: "El bienestar", sub: "animal" },
                  { title: "El impacto social", sub: "positivo" },
                  { title: "El desarrollo", sub: "sostenible" }
                ].map((item, i) => (
                  <li key={i} className="flex flex-col items-start p-4 bg-white rounded-xl shadow-sm border border-[#165a5b]/10">
                    <CheckCircle className="w-6 h-6 text-[#165a5b] mb-3" />
                    <span className="font-sans text-sm md:text-base font-bold text-[#165a5b] leading-tight mb-1">{item.title}</span>
                    <span className="font-sans text-xs text-[#165a5b]/70">{item.sub}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col items-start gap-4">
               <p className="font-sans text-[#165a5b] text-base md:text-lg font-medium">
                 Cuando visitas Yvaga Guazú, <span className="font-bold">formas parte de su protección.</span>
               </p>
               <button className="bg-[#165a5b] text-white px-8 py-4 rounded-full font-serif font-medium text-base md:text-lg hover:bg-[#104243] transition-colors w-full sm:w-auto shadow-sm">
                 Descubre nuestra experiencia sostenible
               </button>
            </div>
          </div>

          {/* Right Side: Logo & Quote with background */}
          <div className="w-full lg:w-[40%] relative rounded-[32px] overflow-hidden flex flex-col justify-center p-8 md:p-10 shadow-lg">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/fondocertificacion.jpg" 
                alt="Fondo Certificación" 
                className="w-full h-full object-cover"
              />
              {/* Optional overlay to make text readable in case image is busy */}
              <div className="absolute inset-0 bg-[#E8EFE1]/60 backdrop-blur-[1px]"></div>
            </div>

            {/* Content over background */}
            <div className="relative z-10 w-full flex flex-col items-center flex-grow justify-center">
              <img src="/greenglobe.png" alt="Green Globe Certification" className="w-48 h-48 md:w-56 md:h-56 object-contain drop-shadow-2xl mb-8" />

              <div className="w-full pl-6 py-2 border-l-[4px] border-[#165a5b]">
                <h4 className="font-sans font-bold text-base md:text-lg text-[#165a5b] mb-3 uppercase tracking-wide">Más que un reconocimiento, es una promesa.</h4>
                <p className="font-serif italic text-lg md:text-xl text-[#165a5b]/90 leading-relaxed">
                  "Esta certificación garantiza que cada experiencia que vivimos contigo protege la biodiversidad, educa y genera conciencia, y contribuye al futuro del planeta."
                </p>
              </div>
            </div>
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
           <p className="font-serif text-[18px] md:text-[20px] leading-relaxed font-light text-yvaga-white/90">
             {backText}
           </p>
        </div>

      </div>
    </div>
  );
}
