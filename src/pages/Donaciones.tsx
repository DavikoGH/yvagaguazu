import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Leaf, PawPrint, TreeDeciduous, HandHeart, Sprout, BookOpen, Landmark, CreditCard, BadgeDollarSign, Star, Facebook, Instagram, Phone, X } from "lucide-react";
import { cn } from "../lib/utils";

export default function Donaciones() {
  const [showModal, setShowModal] = useState(false);

  const allDonacionImages = [
    '/donacion_1.jpg', '/donacion_2.jpg', '/donacion_3.jpg', '/donacion_4.jpg',
    '/donacion_5.jpg', '/donacion_6.jpg', '/donacion_7.jpg', '/donacion_8.jpg',
    '/donacion_9.jpg', '/donacion_10.jpg', '/donacion_11.jpg', '/donacion_12.jpg',
    '/donacion_13.jpg', '/donacion_14.jpg', '/donacion_15.jpg', '/donacion_16.jpg',
    '/donacion_17.jpg', '/donacion_18.jpg', '/donacion_19.jpg', '/donacion_20.jpg',
    '/donacion_21.jpg', '/donacion_22.jpg', '/donacion_23.jpg', '/donacion_24.jpg',
    '/donacion_25.jpg'
  ];

  return (
    <div className="bg-[#F9F7F2] min-h-screen">
      {/* SECCIÓN 1: PORTADA "Únete a nuestra misión" */}
      <section className="relative w-full bg-[#0D2012] mt-[80px]">
        {/* Fondo Imagen */}
        <div className="relative w-full">
          <img
            src="/header_donaciones.jpg"
            alt="Animales en Yvaga Guazú"
            className="w-full h-auto block"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d2012]/80 via-[#0d2012]/20 to-black/30 pointer-events-none"></div>
        </div>

        {/* Contenido */}
        <div className="relative w-full flex flex-col justify-center items-center z-10 px-4 md:px-8 py-12 lg:-mt-24">
          <div className="relative z-10 w-full max-w-[1400px] flex flex-col xl:flex-row items-center justify-center gap-6 mt-6 md:mt-0">
             
             {/* CUADRO IZQUIERDO (Desktop) */}
             <div className="hidden xl:flex bg-[#0D2012]/80 rounded-[24px] p-6 lg:p-8 max-w-[280px] shadow-2xl border border-white/10 items-center justify-center mb-0 relative">
               {/* Decoración opcional */}
               <Leaf className="absolute -top-4 w-8 h-8 text-[#A3D152] opacity-80 rotate-12" />
               <p className="font-caveat-brush text-[34px] text-[#E8F5D6] leading-[1.15] text-center tracking-wide">
                 Una pequeña acción hace una gran diferencia.
               </p>
             </div>

             {/* Tarjeta Centrada */}
             <div className="bg-[#0D2012]/80 rounded-[32px] p-6 lg:p-8 max-w-3xl w-full flex flex-col items-center text-center shadow-2xl border border-white/10 flex-shrink-0">
            <h1 className="font-serif text-3xl md:text-5xl text-[#E8F5D6] mb-4 mt-2">
              Únete a nuestra misión
            </h1>
            
            <div className="flex items-center justify-center w-full mb-4 md:mb-6">
              <div className="h-px bg-[#C6E5A8]/30 w-12 md:w-20"></div>
              <Leaf className="w-5 h-5 text-[#A3D152] mx-3 opacity-80" />
              <div className="h-px bg-[#C6E5A8]/30 w-12 md:w-20"></div>
            </div>

            <p className="font-sans text-[18px] md:text-[20px] text-[#D4EAB6] leading-relaxed mb-6 md:mb-8 max-w-2xl">
              Nos sostenemos gracias a las personas que creen en la <strong className="font-bold text-[#E8F5D6]">NATURALEZA</strong> y deciden amarla.<br className="hidden md:block"/>
              No contamos con apoyo externo, por eso cada visita y cada aporte tuyo contribuyen directamente a proteger nuestro bosque y mantener este refugio activo.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full mb-6 md:mb-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-[#C6E5A8]/10 flex items-center justify-center mb-3 text-[#C6E5A8]">
                  <PawPrint className="w-8 h-8 md:w-9 md:h-9" />
                </div>
                <p className="font-sans text-[15px] md:text-[18px] text-[#D4EAB6] font-medium leading-tight text-center">Rescatamos<br/>vidas</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-[#C6E5A8]/10 flex items-center justify-center mb-3 text-[#C6E5A8]">
                  <Sprout className="w-8 h-8 md:w-9 md:h-9" />
                </div>
                <p className="font-sans text-[15px] md:text-[18px] text-[#D4EAB6] font-medium leading-tight text-center">Protegemos<br/>la NATURALEZA</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-[#C6E5A8]/10 flex items-center justify-center mb-3 text-[#C6E5A8]">
                  <TreeDeciduous className="w-8 h-8 md:w-9 md:h-9" />
                </div>
                <p className="font-sans text-[15px] md:text-[18px] text-[#D4EAB6] font-medium leading-tight text-center">Cuidamos<br/>este refugio</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-[#C6E5A8]/10 flex items-center justify-center mb-3 text-[#C6E5A8]">
                  <Heart className="w-8 h-8 md:w-9 md:h-9" fill="currentColor" />
                </div>
                <p className="font-sans text-[15px] md:text-[18px] text-[#D4EAB6] font-medium leading-tight text-center">Construimos<br/>un futuro mejor</p>
              </div>
            </div>

            <a 
              href="https://wa.me/59170248238" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#8EBC3F] hover:bg-[#78A432] text-[#0D2012] font-sans font-bold text-xs md:text-sm tracking-widest px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <Heart className="w-4 h-4" />
              QUIERO SUMARME
            </a>
          </div>

          {/* CUADRO DERECHO (Desktop) */}
          <div className="hidden xl:flex bg-[#0D2012]/80 rounded-[24px] p-6 lg:p-8 max-w-[280px] shadow-2xl border border-white/10 items-center justify-center mb-0 relative">
             <PawPrint className="absolute -top-3 w-8 h-8 text-[#A3D152] opacity-80 rotate-[-12deg]" />
             <p className="font-caveat-brush text-[34px] text-[#E8F5D6] leading-[1.15] text-center tracking-wide">
               Gracias por ser parte de esta misión.
             </p>
          </div>
          </div>

          {/* Versión móvil/tablet de las frases */}
          <div className="xl:hidden mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 px-4 w-full max-w-3xl">
             <div className="bg-[#0D2012]/80 rounded-[24px] p-4 flex-1 shadow-xl border border-white/10 w-full text-center relative overflow-hidden">
                <p className="font-caveat-brush text-[26px] md:text-[30px] text-[#E8F5D6] leading-[1.15] tracking-wide text-balance relative z-10">
                 Una pequeña acción hace una gran diferencia.
               </p>
             </div>
             <div className="bg-[#0D2012]/80 rounded-[24px] p-4 flex-1 shadow-xl border border-white/10 w-full text-center relative overflow-hidden">
                <p className="font-caveat-brush text-[26px] md:text-[30px] text-[#E8F5D6] leading-[1.15] tracking-wide text-balance relative z-10">
                 Gracias por ser parte de esta misión.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: Un refugio para quienes no tienen voz */}
      <section className="relative z-20 bg-[#F9F7F2] rounded-t-[40px] md:rounded-t-[80px] -mt-10 md:-mt-20 pt-16 md:pt-20 pb-24 w-full shadow-[0_-20px_50px_rgba(0,0,0,0.15)] flex flex-col items-center">
        <div className="w-full max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center">
          {/* Foto tucansilueta (Pisa hacia arriba la portada y apegada a la izquierda) */}
          <div className="w-full lg:w-1/2 relative z-30 flex justify-start lg:justify-start -mt-10 sm:-mt-16 md:-mt-20 lg:-mt-[80px] xl:-mt-[120px] 2xl:-mt-[150px]">
            <img 
              src="/tucansilueta.png" 
              alt="Silueta de tucán" 
              className="w-11/12 max-w-[400px] md:max-w-[500px] lg:max-w-[700px] object-contain object-left drop-shadow-2xl relative left-0"
            />
          </div>
          
          {/* Texto y Botón */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start px-6 md:px-12 lg:pl-0 lg:pr-20 mt-8 lg:mt-0 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center gap-4 mb-4">
              <h2 className="font-serif text-3xl md:text-5xl text-yvaga-dark leading-tight">
                Un refugio para<br/>quienes <strong className="font-oregano text-[38px] md:text-[55px] text-[#598420] italic font-bold">no tienen voz</strong>
              </h2>
              <Heart className="w-10 h-10 md:w-12 md:h-12 text-[#598420] opacity-80 lg:mt-auto hidden lg:block" />
            </div>
            <p className="font-sans text-[18px] md:text-[22px] text-yvaga-dark/80 leading-relaxed mt-6 mb-12 max-w-2xl">
              Rescatamos animales que fueron víctimas del maltrato o del abandono. Aquí encuentran un hogar... y tú puedes conocer sus historias.
            </p>

            <button 
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-3 bg-[#598420] hover:bg-[#436715] text-white font-sans text-[20px] px-8 py-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 hover:shadow-xl"
            >
              <PawPrint className="w-5 h-5 fill-current" />
              Conoce a nuestros animales
            </button>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: Tu apoyo hace la diferencia */}
      <section className="w-full relative overflow-hidden bg-yvaga-white">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between min-h-[500px]">
          {/* Text Area */}
          <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 relative z-10 bg-gradient-to-r from-[#F9F7F2] via-[#F9F7F2]/90 to-transparent">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <h2 className="font-serif text-[42px] md:text-[54px] leading-[0.9] text-yvaga-dark">
                Tu apoyo <br className="hidden md:block"/>
                <span className="block font-oregano font-bold italic text-[52px] md:text-[64px] text-[#436715] mt-2">
                  hace la diferencia
                </span>
              </h2>
              <Heart className="w-10 h-10 text-[#436715] self-start mt-2" />
            </div>
            
            <p className="font-sans text-[20px] md:text-[22px] text-yvaga-dark/80 leading-relaxed mb-6">
              Tu visita es importante para nosotros, porque no contamos con ayuda gubernamental ni de instituciones. Nos sostenemos gracias a personas como tu, que creen en la NATURALEZA y en la importancia de protegerla.
            </p>
            <p className="font-sans text-[20px] md:text-[22px] text-yvaga-dark/80 leading-relaxed">
              Y es así que cada donación nos permite seguir cuidando y protegiendo nuestros bosques, seguir rescatando animales y manteniendo este refugio vivo.
            </p>
          </div>

          {/* Image Area */}
          <div className="w-full md:w-1/2 h-[400px] md:h-full md:absolute top-0 right-0 z-0">
             {/* Mask image for a fade effect to left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F9F7F2] to-transparent z-10 hidden md:block"></div>
            <img 
              src="/donaciones_tuapoyo.jpg" 
              alt="Tu apoyo hace la diferencia" 
              className="w-full h-full object-cover object-left"
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: Unidos por la naturaleza (Banner) */}
      <section className="relative py-24 md:py-32 px-6 w-full flex items-center justify-center overflow-hidden bg-white min-h-[400px] md:min-h-[500px]">
        {/* Background Image - Nature */}
        <div className="absolute inset-0 z-0 opacity-90">
          <img 
            src="/fondonaturaleza.jpg" 
            alt="Naturaleza" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Capiguara (Left) */}
        <div className="absolute inset-y-0 left-0 z-0 w-[50%] md:w-[40%] lg:w-[35%] opacity-90">
          <img 
            src="/animal_capiguara_1.jpg" 
            alt="Capiguara" 
            className="w-full h-full object-cover object-right"
            style={{ WebkitMaskImage: 'linear-gradient(to right, black 40%, transparent 100%)', maskImage: 'linear-gradient(to right, black 40%, transparent 100%)' }}
          />
        </div>

        {/* Tucán (Right) */}
        <div className="absolute inset-y-0 right-0 z-0 w-[50%] md:w-[40%] lg:w-[35%] flex justify-end items-center opacity-90">
          <img 
            src="/tucansilueta.png" 
            alt="Tucán" 
            className="h-[90%] md:h-[110%] lg:h-[130%] max-w-none object-contain object-left translate-x-4 md:translate-x-12 translate-y-4 md:translate-y-8"
          />
        </div>

        {/* Radial gradient to create a bright center and fade to the sides */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F9F7F2]/95 via-[#F9F7F2]/80 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Leaf className="w-8 h-8 md:w-10 md:h-10 text-white stroke-[1.5]" />
            <span 
              className="font-sans font-bold text-[46px] md:text-[58px] lg:text-[70px] text-white"
              style={{ textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 0px 1px 0 #000, 1px 0px 0 #000, 0px -1px 0 #000, -1px 0px 0 #000, 0.5rem 0 10px rgba(0,0,0,0.5)" }}
            >
              Unidos por la
            </span>
          </div>
          <h2 
            className="font-caveat-brush text-[70px] md:text-[110px] lg:text-[140px] text-[#15341C] uppercase leading-[0.9] tracking-wide mb-6"
            style={{ textShadow: "2px 2px 0 #5E9C43, -2px -2px 0 #5E9C43, 2px -2px 0 #5E9C43, -2px 2px 0 #5E9C43, 0px 2px 0 #5E9C43, 2px 0px 0 #5E9C43, 0px -2px 0 #5E9C43, -2px 0px 0 #5E9C43, 0.5rem 0 10px rgba(0,0,0,0.5)" }}
          >
            NATURALEZA
          </h2>
          <p 
            className="font-sans text-white text-[20px] md:text-[24px] font-medium max-w-3xl mx-auto mt-6 md:mt-10 tracking-wide drop-shadow-lg"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 0 15px rgba(255,255,255,0.4)" }}
          >
            Gracias a las visitas, compras solidarias y donaciones, <br className="hidden md:block" /> hacemos posible la <span className="font-bold">conservación.</span>
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-[2px] w-12 md:w-20 bg-[#15341C]/30"></div>
            <Leaf className="w-5 h-5 text-[#15341C]" />
            <div className="h-[2px] w-12 md:w-20 bg-[#15341C]/30"></div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: Dona hoy y sé parte del cambio */}
      <section className="bg-[#F9F7F2] py-24 px-6 md:px-12 w-full border-t border-[#3A4E33]/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-14">
            <h2 className="font-serif text-[42px] md:text-[54px] leading-tight text-[#3A4E33] text-center">
              Dona hoy y sé parte del cambio
            </h2>
            <Heart className="w-12 h-12 text-[#598420] opacity-80" />
          </div>

          <div className="flex flex-col gap-16 mb-16">
            
            {/* Tu donación se transforma en: */}
            <div className="flex flex-col items-center w-full">
              <h3 className="font-sans font-bold text-[28px] text-[#3A4E33] mb-8 text-center">Tu donación se transforma en:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                
                <div className="flex flex-col items-center text-center border-l bg-[#3A4E33]/5 rounded-r-xl p-4 border-[#3A4E33]/20 h-full">
                  <Leaf className="w-11 h-11 text-[#598420] mb-4" />
                  <p className="font-sans text-[21px] text-yvaga-dark/80 leading-snug">Mantenimiento y conservación de las 14 hectáreas</p>
                </div>
                
                <div className="flex flex-col items-center text-center border-l bg-[#3A4E33]/5 rounded-r-xl p-4 border-[#3A4E33]/20 h-full">
                  <PawPrint className="w-11 h-11 text-[#598420] mb-4" />
                  <p className="font-sans text-[21px] text-yvaga-dark/80 leading-snug">Alimentación y cuidado de los animales rescatados</p>
                </div>

                <div className="flex flex-col items-center text-center border-l bg-[#3A4E33]/5 rounded-r-xl p-4 border-[#3A4E33]/20 h-full">
                  <BookOpen className="w-11 h-11 text-[#598420] mb-4" />
                  <p className="font-sans text-[21px] text-yvaga-dark/80 leading-snug">Educación ambiental para niños, escuelas y comunidades</p>
                </div>

                <div className="flex flex-col items-center text-center border-l bg-[#3A4E33]/5 rounded-r-xl p-4 border-[#3A4E33]/20 h-full">
                  <HandHeart className="w-11 h-11 text-[#598420] mb-4" />
                  <p className="font-sans text-[21px] text-yvaga-dark/80 leading-snug">Rescate y rehabilitación de animales vulnerables</p>
                </div>

              </div>
            </div>

            {/* Formas de donar */}
            <div className="flex flex-col items-center w-full">
              <h3 className="font-sans font-bold text-[28px] text-[#3A4E33] mb-8 text-center">Formas de donar</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:max-w-4xl mx-auto">
                
                <div className="flex flex-col items-center text-center border-l bg-[#3A4E33]/5 rounded-r-xl p-4 border-[#3A4E33]/20 h-full justify-start">
                  <Landmark className="w-11 h-11 text-[#598420] mb-4" />
                  <p className="font-sans text-[21px] text-yvaga-dark/80 leading-snug">Transferencia bancaria</p>
                </div>

                <div className="flex flex-col items-center text-center border-l bg-[#3A4E33]/5 rounded-r-xl p-4 border-[#3A4E33]/20 h-full justify-start">
                  <CreditCard className="w-11 h-11 text-[#598420] mb-4" />
                  <p className="font-sans text-[21px] text-yvaga-dark/80 leading-snug">Mercado Pago</p>
                </div>

                <div className="flex flex-col items-center text-center border-l bg-[#3A4E33]/5 rounded-r-xl p-4 border-[#3A4E33]/20 h-full justify-start">
                  <BadgeDollarSign className="w-11 h-11 text-[#598420] mb-4" />
                  <p className="font-sans text-[21px] text-yvaga-dark/80 leading-snug">Donaciones internacionales (PayPal)</p>
                </div>

              </div>
            </div>
          </div>

          {/* Cuadro verde: 6 Columnas Centrado Abajo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full mt-10">
            <div className="lg:col-start-4 lg:col-span-6">
              <div className="bg-[#1E3316] rounded-3xl p-8 md:p-10 text-white flex flex-col justify-center h-full shadow-2xl relative overflow-hidden text-center">
                <Leaf className="w-32 h-32 text-white/5 absolute -bottom-8 -right-8 transform rotate-12" />
                <h3 className="font-sans text-xl md:text-[26px] leading-snug mb-8 relative z-10 font-normal">
                  Gracias a ti, podemos seguir <span className="font-oregano italic text-[40px] md:text-[50px] font-bold text-[#A5C05B] block mt-2">protegiendo vidas.</span>
                </h3>
                <a 
                  href="https://wa.me/59170248238"
                  target="_blank"
                  rel="noreferrer" 
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#1E3316] font-sans font-medium py-4 px-8 rounded-xl hover:bg-[#F9F7F2] transition-colors relative z-10 shadow-lg w-max mx-auto text-base md:text-lg"
                >
                  <Heart className="w-5 h-5" />
                  Quiero donar ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: Testimoniales */}
      <section className="bg-[#0D2012] py-24 px-6 md:px-12 w-full overflow-hidden relative font-sans">
        {/* Decoraciones de hojas a los lados */}
        <Leaf className="w-32 h-32 text-[#598420]/5 absolute -left-16 top-10 transform -rotate-45" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-12 items-center text-white relative z-10">
          
          <div className="w-full lg:w-[75%]">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="font-sans text-3xl md:text-4xl font-light">
                Lo que dicen<br/><strong className="font-bold">nuestros visitantes</strong>
              </h2>
              <Heart className="w-10 h-10 text-[#598420]" />
            </div>

            <div className="flex flex-col items-start max-w-md">
              
              {/* Testimonial */}
              <div className="border border-[#598420]/30 rounded-[32px] p-6 lg:p-8 relative w-full">
                <div className="flex flex-col gap-4 mb-6">
                  <div className="flex text-[#FFB800]">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
                <p className="text-white/80 text-[22px] italic leading-relaxed mb-6 font-light">
                  "Profe Profe, nunca pensé que la NATURALEZA fuera tan bella"
                </p>
                <span className="text-[#598420] font-sans text-[18px]">— Estudiante del colegio Alemán (niña)</span>
              </div>

            </div>
          </div>

          <div className="w-full lg:w-[25%] flex flex-col justify-center items-start lg:pl-8">
            <h2 className="font-sans text-3xl md:text-4xl font-light mb-4">
              <strong className="font-bold text-[#8EBC3F]">Visítanos</strong> y sé parte<br/>del cambio
            </h2>
            <div className="flex items-center gap-2 mb-8">
              <Heart className="w-6 h-6 text-[#8EBC3F] opacity-70" />
            </div>
            <p className="text-white/70 text-[18px] md:text-[20px] leading-relaxed mb-8">
              Tu visita ayuda a seguir rescatando, protegiendo y educando.
            </p>
          </div>

        </div>
      </section>

      {/* Modal / Popup de Animales */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#0D2012]/90 backdrop-blur-md"
              onClick={() => setShowModal(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full h-full max-h-[90vh] bg-[#F9F7F2] rounded-[32px] shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Cabecera del Popup */}
            <div className="flex items-center justify-between p-6 lg:p-8 bg-white border-b border-[#2C4A22]/10 z-10 shrink-0 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#8EBC3F]/20 flex items-center justify-center text-[#598420]">
                  <PawPrint className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-[#0D2012] leading-none mb-1">
                    Conoce a nuestros animales
                  </h2>
                  <p className="font-sans text-sm text-[#2C4A22]/70 hidden sm:block">
                    Ellos son la razón de nuestro esfuerzo diario
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="p-3 rounded-full hover:bg-[#F9F7F2] text-[#2C4A22] transition-colors focus:outline-none"
                aria-label="Cerrar"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Contenido / Custom Masonry de 12 columnas */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-[#F9F7F2]">
              {(() => {
                const ImageCard: React.FC<{ src: string, idx: string | number }> = ({ src, idx }) => (
                  <div key={idx} className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-white border border-[#2C4A22]/5">
                    <img 
                      src={src} 
                      alt={`Animal rescatado ${typeof idx === 'string' ? idx : idx + 1}`} 
                      className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-125"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D2012]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-4">
                      <Heart className="w-6 h-6 text-[#8EBC3F] mb-1" />
                    </div>
                  </div>
                );

                const getImg = (name: string) => allDonacionImages.find(src => src.includes(name));
                const largeImgs = {
                  img4: getImg('donacion_4.jpg'),
                  img13: getImg('donacion_13.jpg'),
                  img16: getImg('donacion_16.jpg'),
                  img22: getImg('donacion_22.jpg'),
                  img24: getImg('donacion_24.jpg'),
                  img19: getImg('donacion_19.jpg'),
                  img17: getImg('donacion_17.jpg'),
                  img18: getImg('donacion_18.jpg'),
                  img25: getImg('donacion_25.jpg')
                };

                const regularImages = allDonacionImages.filter(src => 
                  !src.includes('donacion_4.jpg') && 
                  !src.includes('donacion_13.jpg') && 
                  !src.includes('donacion_16.jpg') && 
                  !src.includes('donacion_22.jpg') &&
                  !src.includes('donacion_24.jpg') &&
                  !src.includes('donacion_19.jpg') &&
                  !src.includes('donacion_17.jpg') &&
                  !src.includes('donacion_18.jpg') &&
                  !src.includes('donacion_25.jpg')
                );

                // Distribuimos las fotos restantes estratégicamente para compensar alturas y rellenar vacíos
                const tracks = [
                  regularImages.slice(0, 1),           
                  regularImages.slice(1, 2),           
                  regularImages.slice(2, 3),           
                  regularImages.slice(3, 6),           
                  regularImages.slice(6, 9),           
                  regularImages.slice(9)               
                ];

                const renderCol = (imgs: string[], prefix: string) => imgs.map((src, i) => <ImageCard key={`${prefix}-${i}`} src={src} idx={`${prefix}-${i}`} />);

                return (
                  <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 sm:gap-6 w-full max-w-[1800px] mx-auto items-start">
                    {/* LEFT HALF */}
                    <div className="flex flex-col gap-4 sm:gap-6 lg:col-span-3">
                      {largeImgs.img4 && <ImageCard src={largeImgs.img4} idx="l4" />}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full items-start">
                        <div className="flex flex-col gap-4 sm:gap-6 sm:col-span-1">
                          {largeImgs.img19 && <ImageCard src={largeImgs.img19} idx="l19" />}
                          {largeImgs.img17 && <ImageCard src={largeImgs.img17} idx="l17" />}
                          {largeImgs.img18 && <ImageCard src={largeImgs.img18} idx="l18" />}
                          {largeImgs.img25 && <ImageCard src={largeImgs.img25} idx="l25" />}
                          {renderCol(tracks[0], '0')}
                        </div>
                        <div className="flex flex-col gap-4 sm:gap-6 sm:col-span-2">
                          {largeImgs.img16 && <ImageCard src={largeImgs.img16} idx="l16" />}
                          <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full items-start">
                            <div className="flex flex-col gap-4 sm:gap-6">{renderCol(tracks[1], '1')}</div>
                            <div className="flex flex-col gap-4 sm:gap-6">{renderCol(tracks[2], '2')}</div>
                          </div>
                          {largeImgs.img22 && <ImageCard src={largeImgs.img22} idx="l22" />}
                        </div>
                      </div>
                    </div>

                    {/* RIGHT HALF */}
                    <div className="flex flex-col gap-4 sm:gap-6 lg:col-span-3">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full items-start">
                        <div className="flex flex-col gap-4 sm:gap-6 sm:col-span-2">
                          {largeImgs.img13 && <ImageCard src={largeImgs.img13} idx="l13" />}
                          <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full items-start">
                            <div className="flex flex-col gap-4 sm:gap-6">{renderCol(tracks[3], '3')}</div>
                            <div className="flex flex-col gap-4 sm:gap-6">{renderCol(tracks[4], '4')}</div>
                          </div>
                          {largeImgs.img24 && <ImageCard src={largeImgs.img24} idx="l24" />}
                        </div>
                        <div className="flex flex-col gap-4 sm:gap-6 sm:col-span-1">
                          {renderCol(tracks[5], '5')}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </motion.div>
        </div>
        )}
      </AnimatePresence>

    </div>
  );
}
