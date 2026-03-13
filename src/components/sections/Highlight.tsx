"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/branches";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function Highlight() {
  const waUrl = buildWhatsAppUrl(
    WHATSAPP_NUMBER,
    "Hola, necesito cotizar materiales para mi proyecto."
  );

  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main highlight block */}
        <div className="grid lg:grid-cols-2 gap-0 bg-gray-950 rounded-3xl overflow-hidden">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-72 lg:h-auto"
          >
            <Image
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
              alt="Atención personalizada en ferretería"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-950/30 hidden lg:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-orange-500" />
              <span className="text-orange-400 text-sm font-medium tracking-wide uppercase">
                Nuestra diferencia
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
              Más que una ferretería,
              <br />
              tu aliado en cada proyecto
            </h2>
            <p className="mt-5 text-gray-400 leading-relaxed">
              Desde reparaciones simples hasta obras completas. Ofrecemos
              asesoría personalizada, stock variado y la atención cercana que
              necesitas. Cotiza tu lista completa y recibe respuesta en minutos.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { value: "3", label: "Sucursales activas" },
                { value: "+1.000", label: "Productos disponibles" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5"
                >
                  <p className="text-3xl font-black text-orange-500">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
              >
                <MessageCircle className="w-4 h-4" />
                Cotizar ahora
              </a>
              <a
                href="#sucursales"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white px-6 py-3.5 rounded-full font-semibold text-sm transition-colors"
              >
                Ver sucursales
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Three value cards below */}
        <div className="grid sm:grid-cols-3 gap-5 mt-8">
          {[
            {
              title: "Cotización rápida",
              desc: "Envía tu lista de materiales y recibe un presupuesto detallado en minutos por WhatsApp.",
            },
            {
              title: "Retiro o despacho",
              desc: "Retira en cualquiera de nuestras sucursales o solicita envío a domicilio en La Araucanía.",
            },
            {
              title: "Asesoría personalizada",
              desc: "Nuestro equipo te orienta para elegir los materiales correctos para tu proyecto.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#fafafa] rounded-2xl p-7 border border-gray-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/30 transition-all duration-500 group"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                <span className="text-orange-600 font-bold text-sm">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
