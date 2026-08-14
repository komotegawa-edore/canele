"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { circleInfo } from "@/data/circleInfo";

const heroImages = [
  { src: "/images/canele-trio.webp", alt: "カヌレ" },
  { src: "/images/cafe.webp", alt: "カフェでの交流" },
  { src: "/images/canele-rack.webp", alt: "焼き上がったカヌレ" },
  { src: "/images/hanami.webp", alt: "花見イベント" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background images with crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <Image
            src={heroImages[current].src}
            alt={heroImages[current].alt}
            fill
            sizes="100vw"
            className="object-cover scale-105"
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-[#f5f0e8]/60" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#f5f0e8]/80 via-[#f5f0e8]/40 to-[#f5f0e8]/80" />

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <Image
            src="/images/logo.webp"
            alt="Canelé"
            width={200}
            height={200}
            className="mx-auto w-40 h-40 md:w-52 md:h-52 object-contain"
            priority
          />
        </motion.div>

        <motion.p
          className="font-playfair text-dark-brown/50 tracking-[0.5em] text-xs md:text-sm uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          CANELÉ CIRCLE
        </motion.p>

        <motion.h1
          className="text-sm md:text-base text-dark-brown/70 tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          {circleInfo.catchphrase}
        </motion.h1>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <a
            href="#concept"
            className="inline-block border-2 border-dashed border-caramel/40 text-caramel text-xs tracking-widest px-6 py-3 font-playfair hover:bg-caramel hover:text-white hover:border-solid transition-all duration-300"
          >
            SCROLL
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-dark-brown/0 to-dark-brown/40" />
      </motion.div>
    </section>
  );
}
