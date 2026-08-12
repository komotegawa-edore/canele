"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";

const activities = [
  {
    name: "BBQ・ご飯会",
    description: "みんなで集まって美味しいものを食べる",
    image: "/images/canele-table.webp",
    alt: "交流イベント",
  },
  {
    name: "学園祭出店",
    description: "カヌレ堂と提携した本格出店を目指す",
    image: "/images/canele-lineup.webp",
    alt: "学園祭",
  },
  {
    name: "カフェ巡り",
    description: "おすすめのお店を開拓しに街へ",
    image: "/images/canele-coffee.webp",
    alt: "カフェ巡り",
  },
  {
    name: "季節イベント",
    description: "花見・ハロウィン・クリスマス会など",
    image: "/images/canele-cutaway.webp",
    alt: "季節イベント",
  },
];

export default function ActivitySection() {
  return (
    <section
      id="activity"
      className="py-24 md:py-32 bg-fabric relative stitch-border"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle title="活動紹介" subtitle="ACTIVITY" />
        </motion.div>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {activities.map((item, i) => (
            <motion.div
              key={item.name}
              className="group cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="aspect-square relative overflow-hidden rounded-lg bg-white shadow-sm">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-sm font-bold text-dark-brown mt-3 mb-1 group-hover:text-caramel transition-colors">
                {item.name}
              </h3>
              <p className="text-xs text-dark-brown/60">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
