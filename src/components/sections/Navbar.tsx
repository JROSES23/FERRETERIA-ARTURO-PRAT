"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/branches";
import { buildWhatsAppUrl } from "@/lib/utils";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#categorias" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
  { label: "Sucursales", href: "#sucursales" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waUrl = buildWhatsAppUrl(
    WHATSAPP_NUMBER,
    "Hola, quiero cotizar productos en Ferretería Arturo Prat."
  );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <div
            className={`w-9 h-9 rounded-lg flex items-center justify-center font-black text-sm transition-colors duration-500 ${
              scrolled
                ? "bg-orange-500 text-white"
                : "bg-white/15 backdrop-blur text-white"
            }`}
          >
            AP
          </div>
          <div className="hidden sm:block">
            <span
              className={`text-[15px] font-semibold tracking-tight transition-colors duration-500 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Arturo Prat
            </span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-300 ${
                scrolled
                  ? "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
        >
          <MessageCircle className="w-4 h-4" />
          Cotizar ahora
        </a>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-5 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-4 bg-orange-500 text-white py-3 rounded-xl text-sm font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                Cotizar por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
