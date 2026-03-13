"use client";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import Highlight from "@/components/sections/Highlight";
import Benefits from "@/components/sections/Benefits";
import Contact from "@/components/sections/Contact";
import Branches from "@/components/sections/Branches";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Highlight />
        <Benefits />
        <Contact />
        <Branches />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
