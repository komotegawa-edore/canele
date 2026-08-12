"use client";

import { motion } from "framer-motion";
import { circleInfo } from "@/data/circleInfo";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-fabric relative stitch-border">
      <div className="max-w-2xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="workshop-tag font-playfair mb-4">CONTACT</span>
          <h2 className="text-2xl md:text-3xl font-playfair text-dark-brown tracking-wider mt-4 mb-4">
            お問い合わせ
          </h2>
          <div className="w-24 mx-auto border-t border-dashed border-caramel/30 mb-8" />
          <p className="text-sm text-dark-brown/60 mb-4 leading-relaxed">
            サークルに関するお問い合わせは、
            <br />
            Instagram DMまたはメールにてお気軽にどうぞ。
          </p>
          <p className="text-xs text-dark-brown/40 mb-10">
            ※ 新入部員は随時募集しています。
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href={circleInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-dashed border-caramel bg-caramel text-white px-8 py-3 text-sm tracking-widest font-playfair hover:bg-caramel/90 transition-all duration-300"
          >
            Instagram
          </a>
          <a
            href={`mailto:${circleInfo.email}`}
            className="inline-block border-2 border-dashed border-caramel text-caramel px-8 py-3 text-sm tracking-widest font-playfair hover:bg-caramel hover:text-white transition-all duration-300"
          >
            メールで問い合わせ
          </a>
        </motion.div>
      </div>
    </section>
  );
}
