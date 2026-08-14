"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";

const kodawari = [
  {
    number: "01",
    title: "つながり",
    subtitle: "COMMUNITY",
    image: "/images/bbq.webp",
    alt: "BBQで交流する仲間たち",
    body: "カヌレをきっかけに集まった、学年も学部もバラバラな仲間たち。\n\nふだんはBBQや旅行、スポーツ、カフェ巡りなど、大学生活を一緒に楽しんでいます。気軽に来て、気軽に楽しめる。そんなサークルです。",
    imageLeft: true,
  },
  {
    number: "02",
    title: "学園祭",
    subtitle: "UNIVERSITY FESTIVAL",
    image: "/images/canele-rack.webp",
    alt: "焼き上がったカヌレ",
    body: "学園祭では、カヌレの出店を目指して準備中。\n\nサークル名を冠するからには、カヌレに対しても真剣に向き合いたい。本格的なカヌレをキャンパスに届けることが、私たちの目標です。",
    imageLeft: false,
  },
  {
    number: "03",
    title: "カヌレ",
    subtitle: "CANELÉ DE BORDEAUX",
    image: "/images/canele-trio.webp",
    alt: "カヌレ",
    body: "サークル名の由来は、フランス・ボルドー生まれの伝統菓子「カヌレ」。\n\n外はカリッと中はもっちり、小さいけれど奥が深い。そんなカヌレのように、私たちも学園祭での出店を目標に、楽しみながら挑戦しています。",
    imageLeft: true,
  },
];

export default function ConceptSection() {
  return (
    <section
      id="concept"
      className="py-24 md:py-32 bg-fabric-cream relative stitch-border"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle title="こだわり" subtitle="CONCEPT" />
        </motion.div>

        {/* Philosophy */}
        <motion.blockquote
          className="text-center mt-4 mb-20 md:mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-sm md:text-base leading-loose text-dark-brown/70 whitespace-pre-line">
            {`カヌレの名のもとに集まった仲間と、\n本気で楽しむ大学生活。`}
          </p>
        </motion.blockquote>

        {/* Kodawari Items */}
        <div className="space-y-24 md:space-y-32">
          {kodawari.map((item) => (
            <div
              key={item.number}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
            >
              {/* Image */}
              <motion.div
                className={`md:col-span-7 ${
                  item.imageLeft ? "" : "md:order-2"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="sticker">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={800}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                className={`md:col-span-5 ${
                  item.imageLeft ? "" : "md:order-1"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                {/* Number */}
                <p className="font-playfair text-caramel tracking-[0.3em] text-sm mb-2">
                  {item.number}
                </p>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-dark-brown tracking-wider mb-1">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="font-playfair text-dark-brown/50 text-xs tracking-[0.2em] uppercase mb-4">
                  {item.subtitle}
                </p>

                {/* Caramel Line */}
                <motion.div
                  className="w-8 h-[1px] bg-caramel mb-6"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{ originX: 0 }}
                />

                {/* Body */}
                <p className="text-sm leading-relaxed text-dark-brown/70 whitespace-pre-line">
                  {item.body}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Closing */}
        <motion.div
          className="mt-24 md:mt-32 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-12 h-[1px] bg-dark-brown/20 mx-auto mb-6" />
          <p className="font-playfair text-sm tracking-[0.2em] text-dark-brown/50">
            Canelé
          </p>
        </motion.div>
      </div>
    </section>
  );
}
