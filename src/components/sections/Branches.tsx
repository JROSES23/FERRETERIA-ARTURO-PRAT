"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Navigation,
  Star,
  CheckCircle2,
} from "lucide-react";
import { branches, type Branch } from "@/data/branches";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function Branches() {
  const [active, setActive] = useState<Branch>(branches[0]);

  return (
    <section id="sucursales" className="py-24 lg:py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-orange-500" />
            <span className="text-orange-600 text-sm font-medium tracking-wide uppercase">
              Ubicaciones
            </span>
            <span className="w-8 h-[1px] bg-orange-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Encuéntranos
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Tres sucursales en La Araucanía para estar siempre cerca de ti.
          </p>
        </motion.div>

        {/* Selector pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {branches.map((branch) => (
            <button
              key={branch.id}
              onClick={() => setActive(branch)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active.id === branch.id
                  ? "text-white"
                  : "bg-white text-gray-500 hover:text-gray-900 border border-gray-200 hover:border-gray-300"
              }`}
            >
              {active.id === branch.id && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-gray-900 rounded-full"
                  transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
                />
              )}
              <span className="relative flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                {branch.shortName}
              </span>
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Info card */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden h-full"
              >
                {/* Header */}
                <div className="bg-gray-950 p-6">
                  <h3 className="text-lg font-bold text-white">
                    {active.name}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-2 text-gray-400 text-sm">
                    <Star className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                    <span>
                      {active.rating} ({active.reviews}{" "}
                      {active.reviews === "1" ? "reseña" : "reseñas"})
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-5">
                  {/* Address */}
                  <div className="flex gap-3">
                    <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
                        Dirección
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {active.address}
                      </p>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="flex gap-3">
                    <Clock className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
                        Horario
                      </p>
                      {active.scheduleText === "Horario por confirmar" ? (
                        <p className="text-sm text-amber-600 italic">
                          Por confirmar
                        </p>
                      ) : (
                        <div className="text-sm text-gray-700 space-y-0.5">
                          {active.scheduleText.split(" | ").map((l, i) => (
                            <p key={i}>{l}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-3">
                    <Phone className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
                        Teléfono
                      </p>
                      <a
                        href={`tel:+${active.phoneRaw}`}
                        className="text-sm text-gray-700 hover:text-orange-600 transition-colors"
                      >
                        {active.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                      Servicios
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {active.services.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center gap-1 text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-full border border-gray-100"
                        >
                          <CheckCircle2 className="w-3 h-3 text-green-500" />
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-2">
                    <a
                      href={active.mapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl text-sm font-semibold transition-colors"
                    >
                      <Navigation className="w-4 h-4" />
                      Cómo llegar
                    </a>
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={`tel:+${active.phoneRaw}`}
                        className="flex items-center justify-center gap-1.5 bg-gray-50 hover:bg-gray-100 text-gray-700 py-2.5 rounded-xl text-xs font-medium transition-colors border border-gray-100"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        Llamar
                      </a>
                      <a
                        href={buildWhatsAppUrl(
                          active.whatsapp,
                          `Hola, consulto por la sucursal ${active.shortName} de Ferretería Arturo Prat.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 bg-green-50 hover:bg-green-100 text-green-700 py-2.5 rounded-xl text-xs font-medium transition-colors border border-green-100"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full min-h-[420px] lg:min-h-full rounded-2xl overflow-hidden border border-gray-200 bg-gray-100"
              >
                <iframe
                  title={`Mapa de ${active.shortName}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(active.mapsQuery)}&output=embed`}
                  className="w-full h-full min-h-[420px] lg:min-h-[580px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
