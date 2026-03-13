import {
  Wrench,
  Hammer,
  Paintbrush,
  Droplets,
  Zap,
  Link,
  TreePine,
  Shield,
} from "lucide-react";

export const categories = [
  {
    name: "Herramientas",
    description: "Manuales y eléctricas para todo tipo de trabajo",
    icon: Wrench,
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "Materiales de Construcción",
    description: "Cemento, áridos, fierro y más",
    icon: Hammer,
    color: "from-gray-600 to-gray-800",
  },
  {
    name: "Pinturas",
    description: "Interior, exterior y esmaltes de calidad",
    icon: Paintbrush,
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Gasfitería",
    description: "Tuberías, llaves, conexiones y accesorios",
    icon: Droplets,
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Electricidad",
    description: "Cables, interruptores, enchufes y tableros",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Fijaciones",
    description: "Tornillos, clavos, pernos y anclajes",
    icon: Link,
    color: "from-stone-500 to-stone-700",
  },
  {
    name: "Jardinería",
    description: "Herramientas y accesorios para tu jardín",
    icon: TreePine,
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Seguridad",
    description: "Candados, cerraduras y protección",
    icon: Shield,
    color: "from-red-500 to-rose-600",
  },
];
