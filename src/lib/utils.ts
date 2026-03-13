import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildWhatsAppUrl(
  phone: string,
  message: string
): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

export function buildWhatsAppMessage(data: {
  nombre: string;
  telefono: string;
  correo: string;
  sucursal: string;
  mensaje: string;
}): string {
  return `¡Hola! Me contacto desde el sitio web de Ferretería Arturo Prat.

*Nombre:* ${data.nombre}
*Teléfono:* ${data.telefono}
*Correo:* ${data.correo}
*Sucursal de interés:* ${data.sucursal}

*Mensaje:*
${data.mensaje}`;
}
