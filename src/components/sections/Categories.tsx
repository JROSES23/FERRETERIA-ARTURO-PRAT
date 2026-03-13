"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Wrench,
  Hammer,
  Paintbrush,
  Droplets,
  Zap,
  Link2,
  TreePine,
  Shield,
} from "lucide-react";

const categories = [
  {
    name: "Herramientas",
    desc: "Manuales y eléctricas",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=400&q=80",
  },
  {
    name: "Construcción",
    desc: "Cemento, áridos, fierro",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
  },
  {
    name: "Pinturas",
    desc: "Interior y exterior",
    icon: Paintbrush,
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&q=80",
  },
  {
    name: "Gasfitería",
    desc: "Tuberías y conexiones",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&q=80",
  },
  {
    name: "Electricidad",
    desc: "Cables e interruptores",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80",
  },
  {
    name: "Fijaciones",
    desc: "Tornillos y anclajes",
    icon: Link2,
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&q=80",
  },
  {
    name: "Jardinería",
    desc: "Herramientas de jardín",
    icon: TreePine,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80",
  },
  {
    name: "Seguridad",
    desc: "Candados y cerraduras",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80",
  },
];

export default function Categories() {
  return (
    <section id="categorias" className="py-24 lg:py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-orange-500" />
            <span className="text-orange-600 text-sm font-medium tracking-wide uppercase">
              Productos
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Todo lo que necesitas,
            <br className="hidden sm:block" />
            en un solo lugar
          </h2>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            Amplio stock en cada una de nuestras sucursales. Encuentra la
            solución para tu proyecto, obra o reparación.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-36 sm:h-44 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">
                    <cat.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-sm">
                  {cat.name}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
