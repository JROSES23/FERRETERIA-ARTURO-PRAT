"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { WHATSAPP_NUMBER, PHONE_DISPLAY } from "@/data/branches";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function Hero() {
  const waUrl = buildWhatsAppUrl(
    WHATSAPP_NUMBER,
    "Hola, quiero cotizar productos en Ferretería Arturo Prat."
  );

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-gray-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1920&q=80"
          alt="Herramientas de ferretería profesional"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/70 to-gray-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
          {/* Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-[1px] bg-orange-500" />
                <span className="text-orange-400 text-sm font-medium tracking-wide uppercase">
                  La Araucanía, Chile
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
                Todo para tu
                <br />
                <span className="text-orange-500">obra y hogar</span>
              </h1>

              <p className="mt-6 text-lg lg:text-xl text-gray-300 max-w-lg leading-relaxed font-light">
                Herramientas, materiales de construcción y soluciones para cada
                proyecto. Cotiza rápido, compra fácil y recibe asesoría
                personalizada.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-[15px] transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-0.5"
                >
                  Solicitar cotización
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#categorias"
                  className="inline-flex items-center justify-center gap-2.5 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 rounded-full font-semibold text-[15px] transition-all duration-300"
                >
                  Ver productos
                </a>
              </div>

              {/* Quick info */}
              <div className="mt-14 flex flex-wrap gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-orange-500/70" />
                  <span>3 sucursales</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-orange-500/70" />
                  <span>{PHONE_DISPLAY}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side — feature card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-500/10 rounded-3xl blur-2xl" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                      <span className="text-orange-400 font-bold text-lg">01</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Cotiza en minutos</p>
                      <p className="text-gray-400 text-xs">Envía tu lista por WhatsApp</p>
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-white/10" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                      <span className="text-orange-400 font-bold text-lg">02</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Recibe tu presupuesto</p>
                      <p className="text-gray-400 text-xs">Respuesta rápida y detallada</p>
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-white/10" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                      <span className="text-orange-400 font-bold text-lg">03</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Retira o recibe</p>
                      <p className="text-gray-400 text-xs">En tienda o despacho a domicilio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#fafafa] to-transparent" />
    </section>
  );
}
