"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";

const newsItems = [
  {
    date: "2024.11.01",
    title: "学園祭出店決定",
    summary:
      "今年の学園祭にてカヌレの販売を行います。数量限定のスペシャルフレーバーもご用意予定です。",
  },
  {
    date: "2024.10.10",
    title: "第1回BBQイベント開催",
    summary:
      "メンバー同士の親睦を深めるBBQイベントを開催しました。カヌレの差し入れも大好評でした。",
  },
  {
    date: "2024.10.01",
    title: "サークル設立のお知らせ",
    summary:
      "カヌレサークル「Canelé」を正式に設立しました。メンバー募集中です。お気軽にお問い合わせください。",
  },
];

export default function NewsSection() {
  return (
    <section
      id="news"
      className="py-24 md:py-32 bg-fabric-cream relative stitch-border"
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle title="お知らせ" subtitle="NEWS" />
        </motion.div>

        {/* News list */}
        <div>
          {newsItems.map((item, i) => (
            <motion.article
              key={item.date + item.title}
              className="py-6 border-b border-caramel/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <time className="text-xs font-playfair text-caramel tracking-wider">
                {item.date}
              </time>
              <h3 className="text-base font-bold text-dark-brown mt-1 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-dark-brown/60 leading-relaxed">
                {item.summary}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
