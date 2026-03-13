export interface Branch {
  id: string;
  name: string;
  shortName: string;
  address: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsapp: string;
  plusCode: string;
  rating: string;
  reviews: string;
  services: string[];
  scheduleText: string;
  mapsQuery: string;
  mapsEmbedUrl: string;
  mapsDirectionsUrl: string;
}

export const branches: Branch[] = [
  {
    id: "padre-las-casas",
    name: "Ferretería Arturo Prat - Padre Las Casas",
    shortName: "Padre Las Casas",
    address:
      "Pleiteado 595, Local 2 y 3, 4850827 Padre las Casas, Padre Las Casas, Araucanía, Chile",
    phoneDisplay: "+56 9 3280 0857",
    phoneRaw: "56932800857",
    whatsapp: "56932800857",
    plusCode: "6CV5+FQ Padre las Casas, Padre Las Casas",
    rating: "4.8",
    reviews: "4",
    services: [
      "Compras en tienda",
      "Retiros en la puerta",
      "Entrega a domicilio",
    ],
    scheduleText:
      "Lunes a Viernes: 9:00 AM - 7:00 PM | Sábado: 9:00 AM - 6:00 PM | Domingo: Cerrado",
    mapsQuery: "Pleiteado 595 Local 2 y 3 Padre Las Casas Araucanía Chile",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.5!2d-72.601!3d-38.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQ2JzEyLjAiUyA3MsKwMzYnMDMuNiJX!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl&q=Pleiteado+595+Padre+Las+Casas+Araucanía+Chile",
    mapsDirectionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Pleiteado+595+Local+2+y+3+Padre+Las+Casas+Araucan%C3%ADa+Chile",
  },
  {
    id: "ziem-temuco",
    name: "Ferretería Arturo Prat - Ziem",
    shortName: "Pueblo Nuevo",
    address: "Ziem 2386, 4780661 Araucanía, Temuco, Araucanía, Chile",
    phoneDisplay: "+56 9 3280 0857",
    phoneRaw: "56932800857",
    whatsapp: "56932800857",
    plusCode: "7CGM+GQ Temuco",
    rating: "5.0",
    reviews: "1",
    services: ["Entrega a domicilio"],
    scheduleText: "Horario por confirmar",
    mapsQuery: "Ziem 2386 Temuco Araucanía Chile",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.5!2d-72.63!3d-38.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQzJzQ4LjAiUyA3MsKwMzcnNDguMCJX!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl&q=Ziem+2386+Temuco+Araucanía+Chile",
    mapsDirectionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Ziem+2386+Temuco+Araucan%C3%ADa+Chile",
  },
  {
    id: "pedro-de-valdivia-temuco",
    name: "Ferretería Arturo Prat - Pedro de Valdivia",
    shortName: "Pedro de Valdivia",
    address:
      "Av. Pedro de Valdivia 01940, 4800091 Cautín, Temuco, Araucanía, Chile",
    phoneDisplay: "+56 9 3280 0857",
    phoneRaw: "56932800857",
    whatsapp: "56932800857",
    plusCode: "79JG+R9 Temuco",
    rating: "5.0",
    reviews: "1",
    services: ["Atención en tienda"],
    scheduleText: "Horario por confirmar",
    mapsQuery: "Av Pedro de Valdivia 01940 Temuco Araucanía Chile",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.5!2d-72.62!3d-38.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQ0JzI0LjAiUyA3MsKwMzcnMTIuMCJX!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl&q=Av+Pedro+de+Valdivia+01940+Temuco+Araucanía+Chile",
    mapsDirectionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Av.+Pedro+de+Valdivia+01940+Temuco+Araucan%C3%ADa+Chile",
  },
];

export const WHATSAPP_NUMBER = "56932800857";
export const PHONE_DISPLAY = "+56 9 3280 0857";
export const PHONE_RAW = "56932800857";
