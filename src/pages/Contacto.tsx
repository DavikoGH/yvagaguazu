import React, { useState } from "react";
import { Leaf, Phone, Mail, Instagram, MessageCircle, MapPin, Sprout, PawPrint, HeartHandshake, Heart, Map, Clock, CalendarCheck, Baby, Users, Search } from "lucide-react";
import { cn } from "../lib/utils";

// Icono simple de TikTok
function TikTokIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

// Icono simple de Facebook
function FacebookIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const faqs = [
  {
    question: "¿Qué es Yvaga Guazú?",
    answer: "Es un parque ecológico dedicado a la conservación de la naturaleza, la sensibilización ambiental y el refugio de animales rescatados.",
    icon: Sprout
  },
  {
    question: "¿Qué hace diferente a Yvaga Guazú de otros parques?",
    answer: "No somos solo un lugar para visitar. Ofrecemos una experiencia de conexión real con la naturaleza, donde puedes conocer más de 6.000 tipos de árboles y descubrir historias de animales que han sido rescatados.",
    icon: Leaf
  },
  {
    question: "¿Qué tipo de animales puedo encontrar en el parque?",
    answer: "Contamos con más de 350 animales rescatados, muchos de ellos provenientes de situaciones de maltrato o abandono.",
    icon: PawPrint
  },
  {
    question: "¿Se puede interactuar con los animales?",
    answer: "La interacción es limitada y siempre responsable, priorizando el bienestar de cada animal.",
    icon: HeartHandshake
  },
  {
    question: "¿Cómo ayudan a los animales rescatados?",
    answer: "Les brindamos un espacio seguro, alimentación, cuidados y la oportunidad de vivir en un entorno adecuado.",
    icon: Heart
  },
  {
    question: "¿Qué incluye el tour ecológico?",
    answer: "Incluye recorridos guiados por el parque, conexión con la biodiversidad y experiencias que permiten sensibilizarte con la naturaleza.",
    icon: Map
  },
  {
    question: "¿Cuánto dura la visita?",
    answer: "El tiempo puede variar, pero generalmente dura entre 1 hora y 45 min. aproximadamente.",
    icon: Clock
  },
  {
    question: "¿Se necesita reserva previa?",
    answer: "No, puedes llegar en los horarios de atención establecidos y también puedes reservar.",
    icon: CalendarCheck
  },
  {
    question: "¿Es apto para niños?",
    answer: "Sí, es una experiencia ideal para familias y niños.",
    icon: Baby
  },
  {
    question: "¿Se pueden realizar actividades para empresas o grupos?",
    answer: "Sí, contamos con espacios ideales para integraciones, actividades extracurriculares y encuentros corporativos.",
    icon: Users
  },
  {
    question: "¿Qué tipo de actividades se pueden hacer?",
    answer: "Dinámicas de grupo, integración de equipos, jornadas de conexión con la naturaleza y actividades personalizadas.",
    icon: Search
  },
  {
    question: "¿Cómo puedo apoyar al parque?",
    answer: "Puedes apoyar visitándonos, realizando una donación o difundiendo nuestra misión.",
    icon: HeartHandshake
  },
  {
    question: "¿Por qué son importantes las donaciones?",
    answer: "No recibimos apoyo externo, por lo que cada aporte nos permite seguir cuidando el parque y protegiendo a los animales rescatados.",
    icon: Leaf
  },
  {
    question: "¿Dónde está ubicado el parque?",
    answer: "Nos encontramos en Santa Cruz, Bolivia.",
    icon: MapPin
  },
  {
    question: "¿Cómo puedo contactarlos?",
    answer: "Puedes escribirnos a través del formulario de la página, redes sociales o WhatsApp.",
    icon: MessageCircle
  },
  {
    question: "¿Cómo puedo ser parte de la misión de Yvaga Guazú?",
    answer: "Visitando el parque, apoyando con donaciones o ayudando a difundir nuestro propósito de proteger la naturaleza.",
    icon: Sprout
  }
];

export default function Contacto() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-yvaga-beige">
      {/* 1. HERO CON IMAGEN */}
      <section className="relative">
        <div className="relative z-0 w-full overflow-hidden">
          <img 
            src="/portada_contacto.jpg?v=2" 
            alt="Contacto" 
            className="w-full h-auto min-h-[100vh] object-cover object-top"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="sticky top-0 left-0 w-full h-[100dvh] flex items-center z-10 pointer-events-auto">
            {/* Overlay to ensure text readability that stays with the text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent -z-10"></div>
            
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
              <div className="w-full grid grid-cols-12">
                <div className="col-span-12 lg:col-span-12">
                  <Leaf className="w-12 h-12 md:w-16 md:h-16 text-yvaga-acc mb-6" />
                  <h1 className="font-serif text-yvaga-white tracking-wide uppercase leading-none">
                    <span className="block text-2xl md:text-3xl font-medium tracking-widest mb-2">Ponte en</span>
                    <span className="block text-6xl md:text-8xl xl:text-9xl font-bold mb-2">Contacto</span>
                    <span className="block font-sans italic text-5xl md:text-7xl xl:text-8xl text-[#FFD700] lowercase tracking-normal">con nosotros</span>
                  </h1>
                  <div className="w-24 h-1 bg-yvaga-acc/50 mt-6 mb-8"></div>
                  <p className="font-sans text-[20.5px] md:text-[22px] text-yvaga-white/90 leading-relaxed col-span-11 w-11/12">
                    Estamos aquí para escucharte, resolver tus dudas y brindarte toda la información que necesites sobre conservación, nuestras actividades y cómo puedes ser parte de esta misión.
                  </p>

                  {/* Redes Sociales en el Hero */}
                  <div className="flex gap-6 mt-12 flex-wrap">
                <a 
                  href="https://www.facebook.com/yvagaguazu" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-yvaga-white/10 border border-yvaga-white/20 rounded-full hover:bg-yvaga-acc hover:border-yvaga-acc hover:text-yvaga-dark transition-all duration-300 text-yvaga-white backdrop-blur-md flex items-center justify-center w-12 h-12"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/oficialyvagaguazu" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-yvaga-white/10 border border-yvaga-white/20 rounded-full hover:bg-yvaga-acc hover:border-yvaga-acc hover:text-yvaga-dark transition-all duration-300 text-yvaga-white backdrop-blur-md flex items-center justify-center w-12 h-12"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.tiktok.com/@yvagaguazu" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-yvaga-white/10 border border-yvaga-white/20 rounded-full hover:bg-yvaga-acc hover:border-yvaga-acc hover:text-yvaga-dark transition-all duration-300 text-yvaga-white backdrop-blur-md flex items-center justify-center w-12 h-12"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:parqueyvagaguazu@hotmail.com" 
                  className="p-3 bg-yvaga-white/10 border border-yvaga-white/20 rounded-full hover:bg-yvaga-acc hover:border-yvaga-acc hover:text-yvaga-dark transition-all duration-300 text-yvaga-white backdrop-blur-md flex items-center justify-center w-12 h-12"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* 3. PREGUNTAS FRECUENTES Y FORMULARIO */}
      <section className="py-24 px-6 bg-yvaga-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* FAQ Accordion */}
          <div className="w-full lg:w-3/5 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-yvaga-sec" />
              <span className="font-sans font-bold text-sm text-yvaga-sec tracking-widest uppercase">Preguntas Frecuentes</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-yvaga-dark mb-6 leading-tight">
              Todo lo que necesitas saber antes de tu visita
            </h2>
            <div className="w-16 h-1 bg-yvaga-sec mb-6"></div>
            <p className="font-sans text-lg text-yvaga-dark/80 mb-4 max-w-2xl">
              Aquí respondemos las dudas más comunes para que tu experiencia en Yvaga Guazú sea inolvidable.
            </p>
            <p className="font-sans text-lg font-bold text-yvaga-sec mb-10 max-w-2xl">
              Conecta, aprende y sé parte de esta misión por la vida.
            </p>
            
            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={cn(
                    "border border-yvaga-dark/10 rounded-2xl overflow-hidden transition-all duration-300",
                    openFaqIndex === idx ? "bg-white shadow-md border-yvaga-dark/20" : "bg-white hover:bg-yvaga-beige/20"
                  )}
                >
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-6 py-5 flex items-start gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-yvaga-sec"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#E8EFE1] flex items-center justify-center shrink-0 mt-0.5">
                      <faq.icon className="w-6 h-6 text-yvaga-sec" />
                    </div>
                    <div className="flex-grow flex justify-between items-center pr-2 pt-2.5">
                      <span className="font-sans font-bold text-[13px] md:text-sm text-yvaga-dark pr-6">{faq.question}</span>
                      <span className="text-yvaga-dark/60 font-light text-3xl leading-none transition-transform duration-300 transform">
                        {openFaqIndex === idx ? "−" : "+"}
                      </span>
                    </div>
                  </button>
                  <div 
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out pl-[88px] pr-6",
                      openFaqIndex === idx ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0 pb-0"
                    )}
                  >
                    <div className="font-sans text-base text-yvaga-dark/70 leading-relaxed pt-2">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Banner "No vienes a ver... vienes a sentir" */}
            <div className="mt-12 md:mt-16 lg:mt-auto bg-[#0D2012] rounded-[32px] overflow-hidden flex flex-col md:flex-row items-stretch shadow-2xl relative">
              {/* Decoración de hojas */}
              <Leaf className="w-6 h-6 md:w-10 md:h-10 text-[#719B36] absolute bottom-4 right-4 opacity-70" />
              
              {/* Columna Izquierda: Texto */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center items-center text-center relative z-10">
                <p className="font-sans italic text-4xl md:text-5xl text-white mb-2">
                  No vienes
                </p>
                <p className="font-sans italic text-4xl md:text-5xl text-white mb-2">
                  a ver...
                </p>
                <p className="font-sans italic text-4xl md:text-5xl text-white mb-2">
                  vienes a
                </p>
                <h3 className="font-sans italic text-6xl md:text-8xl font-bold text-[#8EBC3F]">
                  sentir
                </h3>
              </div>

              {/* Columna Derecha: Foto */}
              <div className="w-full md:w-1/2 p-4 md:p-6 flex items-center justify-center relative z-10">
                <div className="w-full aspect-[4/3] relative transform md:rotate-3 transition-transform hover:rotate-0 duration-500">
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-xl transform -rotate-2"></div>
                  <img 
                    src="/contacto_tortugas.jpg" 
                    alt="Experiencia en la naturaleza" 
                    className="w-full h-full object-cover rounded-xl border-[6px] md:border-8 border-white relative z-10 shadow-lg" 
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Formulario Lateral y Mapa */}
          <div className="w-full lg:w-2/5 flex flex-col gap-8">
            
            {/* Mapa */}
            <div className="w-full h-[300px] md:h-[400px] rounded-[32px] overflow-hidden shadow-xl shadow-yvaga-dark/5 border border-yvaga-dark/5">
              <iframe 
                src="https://maps.google.com/maps?q=Parque%20Ecológico%20Yvaga%20Guazú,%20Santa%20Cruz%20de%20la%20Sierra,%20Bolivia&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Nueva Sección: Tu mensaje es importante */}
            <div className="bg-[#F9F7F2] p-8 rounded-[32px] shadow-xl shadow-yvaga-dark/5 border border-yvaga-dark/5 flex flex-col items-center text-center">
              <h3 className="font-serif text-3xl lg:text-4xl text-yvaga-dark mb-4 tracking-tight">
                Tu mensaje es importante
              </h3>
              <div className="flex items-center justify-center w-full mb-8">
                <div className="h-px bg-yvaga-sec/40 w-12 md:w-20"></div>
                <Leaf className="w-5 h-5 text-yvaga-sec mx-3" />
                <div className="h-px bg-yvaga-sec/40 w-12 md:w-20"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-x-6 gap-y-10 w-full">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#E8EFE1] flex items-center justify-center mb-4">
                    <Leaf className="w-8 h-8 text-[#2C4A22]" />
                  </div>
                  <h4 className="font-sans font-bold text-[#2C4A22] text-sm md:text-base mb-2">Conversemos</h4>
                  <p className="font-sans text-xs md:text-[13px] leading-relaxed text-[#2C4A22]/80">Responderemos tus consultas lo antes posible.</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#E8EFE1] flex items-center justify-center mb-4">
                    <Sprout className="w-8 h-8 text-[#2C4A22]" />
                  </div>
                  <h4 className="font-sans font-bold text-[#2C4A22] text-sm md:text-base mb-2">Te orientamos</h4>
                  <p className="font-sans text-xs md:text-[13px] leading-relaxed text-[#2C4A22]/80">Te ayudamos a planificar tu visita o actividad.</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#E8EFE1] flex items-center justify-center mb-4">
                    <PawPrint className="w-8 h-8 text-[#2C4A22]" />
                  </div>
                  <h4 className="font-sans font-bold text-[#2C4A22] text-sm md:text-base mb-2">Súmate</h4>
                  <p className="font-sans text-xs md:text-[13px] leading-relaxed text-[#2C4A22]/80">Descubre cómo apoyar nuestra misión y hacer la diferencia.</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#E8EFE1] flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-[#2C4A22]" />
                  </div>
                  <h4 className="font-sans font-bold text-[#2C4A22] text-sm md:text-base mb-2">Cuidemos juntos</h4>
                  <p className="font-sans text-xs md:text-[13px] leading-relaxed text-[#2C4A22]/80">Cada acción cuenta para proteger la vida.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-xl shadow-yvaga-dark/5 border border-yvaga-dark/5">
              <h3 className="font-serif text-3xl text-yvaga-dark mb-2">Envíanos un mensaje</h3>
              <p className="font-sans text-yvaga-dark/60 mb-8">Completando este formulario o a través de WhatsApp.</p>
              
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-yvaga-sec">Nombre</label>
                  <input type="text" className="border-b-2 border-yvaga-dark/10 py-3 focus:outline-none focus:border-yvaga-sec transition-colors bg-transparent text-yvaga-dark placeholder:text-yvaga-dark/30" placeholder="Tu nombre completo" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-yvaga-sec">Teléfono</label>
                  <input type="tel" className="border-b-2 border-yvaga-dark/10 py-3 focus:outline-none focus:border-yvaga-sec transition-colors bg-transparent text-yvaga-dark placeholder:text-yvaga-dark/30" placeholder="Tu número de contacto" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-yvaga-sec">Correo</label>
                  <input type="email" className="border-b-2 border-yvaga-dark/10 py-3 focus:outline-none focus:border-yvaga-sec transition-colors bg-transparent text-yvaga-dark placeholder:text-yvaga-dark/30" placeholder="tu@email.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-yvaga-sec">Mensaje</label>
                  <textarea className="border-b-2 border-yvaga-dark/10 py-3 min-h-[120px] resize-none focus:outline-none focus:border-yvaga-sec transition-colors bg-transparent text-yvaga-dark placeholder:text-yvaga-dark/30" placeholder="¿En qué podemos ayudarte?"></textarea>
                </div>
                <button className="mt-6 bg-yvaga-dark hover:bg-yvaga-sec text-white py-4 rounded-xl font-serif text-xl tracking-wide transition-colors shadow-md">
                  Enviar mensaje
                </button>
              </form>
            </div>

            {/* Imagen de seguridad */}
            <div className="w-full rounded-[32px] overflow-hidden shadow-xl shadow-yvaga-dark/5 border border-yvaga-dark/5">
              <img 
                src="/contacto_es_seguro.jpg" 
                alt="Pago Seguro" 
                className="w-full h-auto object-cover" 
              />
            </div>

          </div>
          
        </div>
      </section>

    </div>
  );
}
