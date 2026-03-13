"use client";

import { motion } from "framer-motion";
import {
  Clock,
  ShieldCheck,
  Users,
  Package,
  MessageSquare,
  MapPin,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Respuesta rápida",
    desc: "Cotizaciones listas en minutos. Sin demoras innecesarias.",
  },
  {
    icon: MapPin,
    title: "Cobertura local",
    desc: "Tres sucursales en La Araucanía, siempre cerca de tu obra.",
  },
  {
    icon: MessageSquare,
    title: "Compra simple",
    desc: "Cotiza y compra por WhatsApp, teléfono o directamente en tienda.",
  },
  {
    icon: Users,
    title: "Asesoría cercana",
    desc: "Te ayudamos a elegir lo correcto para cada tipo de proyecto.",
  },
  {
    icon: Package,
    title: "Variedad de productos",
    desc: "Herramientas, materiales, pinturas, gasfitería y mucho más.",
  },
  {
    icon: ShieldCheck,
    title: "Confianza garantizada",
    desc: "Trabajamos con marcas reconocidas y precios competitivos.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 lg:py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-orange-500" />
              <span className="text-orange-600 text-sm font-medium tracking-wide uppercase">
                Beneficios
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Por qué confiar en nosotros
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Somos una ferretería local que entiende tus necesidades. Rapidez,
              variedad y atención personalizada en cada compra.
            </p>
          </motion.div>

          {/* Right grid */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-orange-50 flex items-center justify-center mb-4 transition-colors duration-300">
                  <b.icon className="w-5 h-5 text-gray-400 group-hover:text-orange-600 transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-gray-900 text-[15px] mb-1.5">
                  {b.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
