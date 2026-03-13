"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/branches";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={buildWhatsAppUrl(WHATSAPP_NUMBER, "Hola, me contacto desde el sitio web de Ferretería Arturo Prat.")}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/25 transition-colors"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </motion.a>
  );
}
