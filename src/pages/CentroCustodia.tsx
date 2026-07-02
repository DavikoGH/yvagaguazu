import React from "react";
import {
  Leaf,
  ShieldCheck,
  Plus,
  Link as LinkIcon,
  TreePine,
  Users,
  Heart,
  Sprout,
  Bird,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function CentroCustodia() {
  return (
    <div className="min-h-screen bg-[#F0EBE1] flex flex-col font-sans text-yvaga-dark">
      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-screen flex items-center bg-[#3B4D2F] lg:py-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Portadita_CentroDeCustodia_saimiri_9.jpg"
            alt="Monito Saimiri Centro de Custodia"
            className="w-full h-full object-cover object-[center_30%] md:object-[center_20%]"
          />
          {/* subtle gradient removed or lightened so black text is visible */}
          <div className="absolute inset-0 bg-white/10 lg:bg-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 lg:py-0 flex flex-col lg:flex-row items-center">
          {/* Spacer column to keep the left side (monkey) visible on desktop */}
          <div className="hidden lg:block lg:w-[45%] xl:w-1/2"></div>

          <div className="w-full lg:w-[55%] xl:w-1/2 lg:pl-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span 
                className="font-oregano text-[58px] md:text-[64px] font-bold text-[#5E9C43] italic leading-[0.9]"
                style={{ textShadow: "2px 2px 0 #1B4D2A, -2px -2px 0 #1B4D2A, 2px -2px 0 #1B4D2A, -2px 2px 0 #1B4D2A, 0px 2px 0 #1B4D2A, 2px 0px 0 #1B4D2A, 0px -2px 0 #1B4D2A, -2px 0px 0 #1B4D2A, 0.5rem 0.5rem 10px rgba(0,0,0,0.5)" }}
              >
                Donde la protección se
                <br />
                transforma en esperanza
              </span>
            </div>
            <p className="text-black text-[18px] md:text-[20px] font-medium leading-relaxed mb-6 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
              En <span className="font-bold">YVAGA GUAZU</span> (Paraíso
              Grande), brindamos refugio, cuidado y nuevas oportunidades a
              animales silvestres que fueron víctimas del tráfico ilegal, el
              mascotismo y otras situaciones que los alejaron de la vida para la
              que nacieron.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-[#A5C05B]/40">
              <div className="flex flex-col py-4 md:py-0 px-0 md:px-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 border-[#1B4D2A] text-[#1B4D2A] mb-2 md:mb-3 bg-[#3B4D2F]/10 backdrop-blur-sm">
                  <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-[#1B4D2A]" />
                </div>
                <h4 className="font-bold uppercase mb-2 tracking-wide text-sm drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] text-black">
                  Protección
                </h4>
                <p className="text-black text-[17px] md:text-[18px] font-medium leading-relaxed drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
                  Entorno seguro y bajo cuidado especializado
                </p>
              </div>
              <div className="flex flex-col py-4 md:py-0 px-0 md:px-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 border-[#1B4D2A] text-[#1B4D2A] mb-2 md:mb-3 bg-[#3B4D2F]/10 backdrop-blur-sm">
                  <Plus className="w-5 h-5 md:w-6 md:h-6 text-[#1B4D2A]" strokeWidth={4} />
                </div>
                <h4 className="font-bold uppercase mb-2 tracking-wide text-sm drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] text-black">
                  Bienestar
                </h4>
                <p className="text-black text-[17px] md:text-[18px] font-medium leading-relaxed drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
                  Atención permanente para su recuperación y desarrollo
                </p>
              </div>
              <div className="flex flex-col py-4 md:py-0 px-0 md:px-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 border-[#1B4D2A] text-[#1B4D2A] mb-2 md:mb-3 bg-[#3B4D2F]/10 backdrop-blur-sm">
                  <Leaf className="w-5 h-5 md:w-6 md:h-6 text-[#1B4D2A]" />
                </div>
                <h4 className="font-bold uppercase mb-2 tracking-wide text-sm drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] text-black">
                  Esperanza
                </h4>
                <p className="text-black text-[17px] md:text-[18px] font-medium leading-relaxed drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
                  Apoyamos su proceso para volver a una vida más natural
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HISTORIAS */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/3">
            <h2 className="font-serif text-[34px] md:text-[40px] text-[#3B4D2F] font-bold uppercase mb-2">
              Historias que merecen UNA
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-oregano text-[40px] md:text-[44px] font-bold text-[#789B3A] italic">
                segunda oportunidad
              </span>
              <Leaf className="w-6 h-6 md:w-8 md:h-8 text-[#789B3A]" />
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Cada animalito que llega es tratado con el mayor cariño y profesionalismo. Al haber tomado el compromiso, recibirlos en nuestro Centro de Custodia es nuestro objetivo darles la MEJOR CALIDAD DE VIDA, aunque merecen estar libres, pero las circunstancias hacen difícil su reintegración a su hábitat natural. La Libertad.
            </p>
            <p className="text-[#3B4D2F] font-bold text-lg leading-relaxed">
              Cada avance representa una nueva oportunidad y una esperanza para
              su futuro.
            </p>
          </div>
          <div className="w-full lg:w-2/3 relative h-[300px] sm:h-[400px] lg:h-[450px]">
            {/* Imagen 1: Capiguara */}
            <div
              className="absolute top-0 h-full overflow-hidden"
              style={{
                left: "0%",
                width: "34%",
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
              }}
            >
              <img
                src="/portadita_capiguara_3.jpg"
                alt="Capiguara"
                className="w-full h-full object-cover object-center scale-[1.2] lg:scale-[1.3] translate-x-[15%]"
              />
            </div>

            {/* Imagen 2: Paraba */}
            <div
              className="absolute top-0 h-full overflow-hidden"
              style={{
                left: "30.4%",
                width: "34%",
                clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
              }}
            >
              <img
                src="/portadita_paraba_1.jpg"
                alt="Paraba"
                className="w-full h-full object-cover object-center scale-105"
              />
            </div>

            {/* Imagen 3: Perezoso */}
            <div
              className="absolute top-0 h-full overflow-hidden"
              style={{
                left: "60.8%",
                width: "39.2%",
                clipPath: "polygon(13% 0, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              <img
                src="/portadita_perezoso_4.jpg"
                alt="Perezoso"
                className="w-full h-full object-cover object-center scale-105 translate-x-[-5%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: NUESTROS HABITANTES */}
      <section className="bg-[#EBECE1] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center mb-12 max-w-3xl">
            <h2 className="font-serif text-[42px] md:text-[50px] text-[#3B4D2F] font-bold uppercase mb-4 flex items-center justify-center gap-3">
              Nuestros Habitantes
            </h2>
            <p className="text-gray-700 text-[24px] leading-relaxed">
              En nuestro Centro de Custodia alberga diversas especies
              silvestres. Cada una de ellas recibe el cuidado y la protección
              que necesita para tener una mejor calidad de vida.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-6 gap-x-4 w-full">
            {/* Habitante Items */}
            {[
              {
                name: "CAPIGUARA",
                img: "/animal_capiguara_1.jpg",
              },
              {
                name: "LORO AMAZÓNICO",
                img: "/animal_loro_1.jpg",
              },
              {
                name: "PARABAS 7 COLORES",
                img: "/animal_paraba_3.jpg",
              },
              {
                name: "TUCANES",
                img: "/animal_tucan_3.jpg",
              },
              {
                name: "TUCANCILLO COLLAREJO",
                img: "/animal_arasari_1.jpg",
              },
              {
                name: "CHUÑA",
                img: "/animal_chunia_4.jpg",
              },
              {
                name: "CACATÚA NINFA",
                img: "/animal_ninfa_2.jpg",
              },
              {
                name: "CORECHI",
                img: "/animal_armadillo_1.jpg",
              },
              {
                name: "OSO PEREZOSO",
                img: "/animal_perezoso.jpg",
              },
              {
                name: "MONITOS SAIMIRIS",
                img: "/animal_saimiri_3.jpg",
              },
            ].map((hab, i) => (
              <div
                key={i}
                className="flex flex-col rounded-[20px] overflow-hidden shadow-lg bg-[#142A0D] group h-full relative"
              >
                {/* Image Section */}
                <div className="w-full relative aspect-[5/4] sm:aspect-square lg:aspect-[5/4] overflow-hidden">
                  <img
                    src={hab.img}
                    alt={hab.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Text Section */}
                <div className="w-full bg-[#1A3011] relative flex items-center p-4 min-h-[5rem] lg:min-h-[4rem]">
                  {/* Floating Icon */}
                  <div className="absolute -top-6 left-4 w-12 h-12 bg-[#1A3011] rounded-full flex items-center justify-center z-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                    <Leaf
                      className="w-6 h-6 text-[#9ACD32]"
                      fill="currentColor"
                    />
                  </div>
                  <span className="font-bold text-white uppercase text-base leading-tight pl-16 pt-1">
                    {hab.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Final Text Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full mt-10">
            <div className="flex flex-col md:flex-row items-center rounded-[20px] overflow-hidden shadow-lg bg-[#2e6b3a] group relative p-6 md:p-8 lg:col-span-8 lg:col-start-3 border-[2px] border-[#9ACD32]/40 gap-6">
              <Heart className="w-8 h-8 md:w-10 md:h-10 text-[#9ACD32] shrink-0" />
              <p className="text-white text-[18px] md:text-[20px] leading-relaxed text-center flex-1 m-0">
                Muchas de estas especies permanecen bajo cuidado especializado,
                mientras que otras viven con mayor libertad dentro de los
                espacios naturales del parque.
              </p>
              <Leaf className="w-10 h-10 md:w-12 md:h-12 text-[#9ACD32] shrink-0" fill="currentColor" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ¿POR QUÉ LOS ANIMALES SILVESTRES NO DEBEN SER MASCOTAS? */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 text-gray-800">
          <div className="w-full md:w-1/3 flex flex-col justify-center">
            <h2 className="font-serif text-2xl md:text-3xl text-[#3B4D2F] font-bold uppercase mb-8 leading-tight">
              ¿Por qué los animales silvestres no deben ser mascotas?
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1">
                  <Heart className="w-6 h-6 text-[#789B3A]" />
                </div>
                <span className="text-[20px] text-gray-700 leading-relaxed font-medium">
                  No están preparados para vivir en cautiverio.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1">
                  <Leaf className="w-6 h-6 text-[#789B3A]" />
                </div>
                <span className="text-[20px] text-gray-700 leading-relaxed font-medium">
                  Su extracción causa daño a la naturaleza y al equilibrio de
                  los ecosistemas.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1">
                  <Shield className="w-6 h-6 text-[#789B3A]" />
                </div>
                <span className="text-[20px] text-gray-700 leading-relaxed font-medium">
                  Detrás de cada animal traficado existe una historia de
                  sufrimiento.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1">
                  <Sprout className="w-6 h-6 text-[#789B3A]" />
                </div>
                <span className="text-[20px] text-gray-700 leading-relaxed font-medium">
                  Promovemos una cultura de respeto, protección y convivencia
                  responsable.
                </span>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <img
              src="/proteger_saimiri_2.jpg"
              alt="Mono Saimiri"
              className="w-full h-full min-h-[400px] object-cover object-[center_top] rounded-[20px] shadow-xl"
            />
          </div>

          <div className="w-full md:w-1/3 flex flex-col justify-center">
            <h2 className="font-serif text-2xl md:text-3xl text-[#3B4D2F] font-bold uppercase mb-2 leading-tight">
              Un refugio rodeado de naturaleza
            </h2>
            <div className="w-12 h-0.5 bg-[#789B3A] mb-6"></div>
            <p className="text-[18px] text-gray-700 leading-relaxed mb-10">
              El Centro de Custodia forma parte de las 14 hectáreas de
              exuberante naturaleza que conforman YVAGA GUAZU. Bosques, árboles
              y senderos brindan un entorno más adecuado para el bienestar de
              las especies bajo nuestro cuidado y permiten que los visitantes
              comprendan la importancia de conservar los ecosistemas que hacen
              posible la vida.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center gap-2">
                <Leaf className="w-8 h-8 text-[#789B3A]" />
                <span className="font-bold text-[#3B4D2F] text-xs uppercase">
                  14 Hectáreas
                  <br />
                  de Naturaleza
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TreePine className="w-8 h-8 text-[#789B3A]" />
                <span className="font-bold text-[#3B4D2F] text-xs uppercase">
                  Bosques
                  <br />
                  Exuberantes
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Users className="w-8 h-8 text-[#789B3A]" />
                <span className="font-bold text-[#3B4D2F] text-xs uppercase">
                  Biodiversidad
                  <br />
                  que inspira
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TU VISITA TAMBIÉN AYUDA */}
      <section className="bg-[#567440] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full lg:w-[35%]">
            <h2 className="font-serif text-3xl lg:text-[32px] xl:text-4xl font-bold uppercase mb-2 whitespace-nowrap">
              Tu visita también ayuda
            </h2>
            <div className="w-12 h-1 bg-[#A5C05B] mb-6"></div>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Cada persona que visita YVAGA GUAZU contribuye directamente al
              mantenimiento de los espacios naturales, al cuidado de los
              animales bajo custodia y a las acciones que realizamos para
              promover el respeto por la fauna silvestre.
            </p>
          </div>

          <div className="w-full lg:w-[45%] grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="flex flex-col items-center text-center px-4 py-4 md:py-0">
              <Heart className="w-10 h-10 text-[#A5C05B] mb-4 flex-shrink-0" />
              <p className="text-[18px] leading-snug">
                Tu apoyo hace posible que sigamos brindando protección y
                bienestar.
              </p>
            </div>
            <div className="flex flex-col items-center text-center px-4 py-4 md:py-0">
              <Leaf className="w-10 h-10 text-[#A5C05B] mb-4 flex-shrink-0" />
              <p className="text-[18px] leading-snug">
                Tu visita es una forma de apoyar la conservación de la fauna
                silvestre.
              </p>
            </div>
            <div className="flex flex-col items-center text-center px-4 py-4 md:py-0">
              <Users className="w-10 h-10 text-[#A5C05B] mb-4 flex-shrink-0" />
              <p className="text-[18px] leading-snug">
                Juntos construimos un futuro mejor para la naturaleza.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[20%] px-4 lg:px-0">
            <div
              className="w-full h-48 lg:h-64 overflow-hidden border-[4px] border-white shadow-xl rounded-none"
              style={{ transform: "skewX(-10deg)" }}
            >
              <img
                src="/proteger_mono_negro_1.jpg"
                alt="Mono Negro"
                className="w-full h-full object-cover"
                style={{ transform: "skewX(10deg) scale(1.15)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CALL TO ACTION */}
      <section className="bg-black py-16 px-6 relative overflow-hidden flex items-center justify-center min-h-[400px]">
        {/* Background Image of Tucán */}
        <div className="absolute inset-0 z-0">
          <img
            src="/proteger_tucan_4.jpg"
            alt="Tucán"
            className="w-full h-full object-cover opacity-80 bg-[#A5C05B]/20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8 justify-between items-center text-white">
          <div className="w-full md:w-1/2">
            <h2 className="font-serif text-3xl md:text-5xl font-bold uppercase mb-2">
              Ayúdanos a proteger
            </h2>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-oregano text-[69px] md:text-[87px] text-[#A5C05B] italic leading-tight">
                sus historias
              </span>
            </div>
            <p className="text-lg text-white/90 mb-6">
              Cada animal resguardado representa una oportunidad para construir
              un futuro mejor para la fauna silvestre.
            </p>
            <p className="font-bold text-xl">
              Te invitamos a conocerlos, descubrir sus historias y sumarte a
              nuestro compromiso con la protección de la naturaleza.
            </p>
          </div>

          <div className="w-full md:w-1/3 bg-[#1A1A1A]/80 backdrop-blur-md border-[5px] border-[#A5C05B]/30 rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl">
            <Users className="w-12 h-12 text-[#A5C05B] mb-4" />
            <h4 className="font-bold uppercase tracking-wide mb-8">
              Ven a visitarnos y sé parte de esta misión de protección y
              esperanza
            </h4>
            <Link
              to="/contacto"
              className="bg-[#A5C05B] text-[#1F3316] font-bold uppercase px-8 py-4 rounded-full w-full mb-6 hover:bg-[#8CA847] transition-colors flex items-center justify-center gap-2"
            >
              Conoce sus historias <Heart className="w-5 h-5 fill-current" />
            </Link>
            <div className="flex items-center justify-center gap-2">
              <span className="font-oregano text-[#A5C05B] text-[34px] leading-tight italic">
                Tu visita ayuda a proteger vidas y conservar la naturaleza
              </span>
              <Leaf className="w-8 h-8 text-[#A5C05B]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
