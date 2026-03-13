"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Send,
  MessageCircle,
  CheckCircle2,
  Loader2,
  ArrowRight,
} from "lucide-react";
import { branches, WHATSAPP_NUMBER } from "@/data/branches";
import { buildWhatsAppUrl, buildWhatsAppMessage } from "@/lib/utils";

const schema = z.object({
  nombre: z.string().min(2, "Ingresa tu nombre"),
  telefono: z
    .string()
    .min(8, "Ingresa un teléfono válido")
    .regex(/^[+\d\s()-]+$/, "Formato inválido"),
  correo: z.string().email("Correo electrónico inválido"),
  sucursal: z.string().min(1, "Selecciona una sucursal"),
  mensaje: z.string().min(5, "Describe lo que necesitas"),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { sucursal: branches[0].shortName },
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const onWhatsApp = () => {
    const data = getValues();
    const msg = buildWhatsAppMessage(data);
    window.open(buildWhatsAppUrl(WHATSAPP_NUMBER, msg), "_blank");
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3.5 rounded-xl border text-sm transition-all duration-200 outline-none ${
      hasError
        ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/10"
        : "border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
    }`;

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top CTA band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-950 rounded-3xl p-8 sm:p-12 lg:p-16 mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Cotización rápida por WhatsApp
            </h2>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Envíanos tu lista de materiales y te armamos el presupuesto
              completo. Respuesta directa y sin complicaciones.
            </p>
            <a
              href={buildWhatsAppUrl(
                WHATSAPP_NUMBER,
                "Hola, quiero cotizar materiales."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 mt-6 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
            >
              <MessageCircle className="w-4 h-4" />
              Abrir WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Form section */}
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-orange-500" />
              <span className="text-orange-600 text-sm font-medium tracking-wide uppercase">
                Contacto
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Envíanos tu solicitud
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Completa el formulario con los detalles de tu proyecto o lista de
              materiales. También puedes enviar todo directamente por WhatsApp.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 text-sm text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <span>Respuesta en menos de una hora en horario laboral</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <span>Presupuesto detallado sin compromiso</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <span>Atención personalizada por especialistas</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-[#fafafa] rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    placeholder="Juan Pérez"
                    {...register("nombre")}
                    className={inputClass(!!errors.nombre)}
                  />
                  {errors.nombre && (
                    <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    placeholder="+56 9 1234 5678"
                    {...register("telefono")}
                    className={inputClass(!!errors.telefono)}
                  />
                  {errors.telefono && (
                    <p className="text-red-500 text-xs mt-1">{errors.telefono.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Correo electrónico
                </label>
                <input
                  id="correo"
                  type="email"
                  placeholder="juan@ejemplo.cl"
                  {...register("correo")}
                  className={inputClass(!!errors.correo)}
                />
                {errors.correo && (
                  <p className="text-red-500 text-xs mt-1">{errors.correo.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="sucursal" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Sucursal de interés
                </label>
                <select
                  id="sucursal"
                  {...register("sucursal")}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 outline-none transition-all"
                >
                  {branches.map((b) => (
                    <option key={b.id} value={b.shortName}>
                      {b.shortName}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Mensaje o lista de materiales
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  placeholder="Detalla los productos o materiales que necesitas..."
                  {...register("mensaje")}
                  className={`${inputClass(!!errors.mensaje)} resize-none`}
                />
                {errors.mensaje && (
                  <p className="text-red-500 text-xs mt-1">{errors.mensaje.message}</p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 disabled:opacity-50 text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
                >
                  {status === "loading" ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</>
                  ) : status === "success" ? (
                    <><CheckCircle2 className="w-4 h-4" /> Enviado correctamente</>
                  ) : (
                    <><Send className="w-4 h-4" /> Enviar cotización</>
                  )}
                </button>
                <button
                  type="button"
                  onClick={onWhatsApp}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  Enviar por WhatsApp
                </button>
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center">
                  Error al enviar. Intenta de nuevo o usa WhatsApp.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
