"use client";

import { MessageCircle, MapPin, Phone } from "lucide-react";
import { branches, WHATSAPP_NUMBER, PHONE_DISPLAY } from "@/data/branches";
import { buildWhatsAppUrl } from "@/lib/utils";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#categorias" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
  { label: "Sucursales", href: "#sucursales" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center font-black text-xs text-white">
                AP
              </div>
              <span className="font-semibold text-white text-[15px]">
                Arturo Prat
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Tu ferretería de confianza en La Araucanía. Herramientas,
              materiales y todo lo que necesitas para tu proyecto.
            </p>
            <a
              href={buildWhatsAppUrl(WHATSAPP_NUMBER, "Hola, me contacto desde el sitio web.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded-full text-xs font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm hover:text-orange-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">
              Sucursales
            </h4>
            <ul className="space-y-3">
              {branches.map((b) => (
                <li key={b.id} className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-300">
                      {b.shortName}
                    </p>
                    <p className="text-xs text-gray-500">
                      {b.address.split(",")[0]}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-orange-500" />
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="text-sm hover:text-white transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-green-500" />
                <a
                  href={buildWhatsAppUrl(WHATSAPP_NUMBER, "Hola")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  WhatsApp directo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Ferretería Arturo Prat. Todos los
            derechos reservados.
          </p>
          <p className="text-xs text-gray-600">La Araucanía, Chile</p>
        </div>
      </div>
    </footer>
  );
}
