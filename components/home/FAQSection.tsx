"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";

const faqs = [
  {
    question: "どんな活動をしていますか？",
    answer:
      "BBQ、旅行、スポーツ、カフェ巡りなど、メンバーの「やりたい！」を形にして自由に活動しています。学園祭ではカヌレの出店も予定しています。",
  },
  {
    question: "初心者でも参加できますか？",
    answer:
      "もちろん大歓迎です！特別なスキルや経験は一切必要ありません。気軽に遊びに来てください。",
  },
  {
    question: "入会方法は？",
    answer:
      "Instagram の DM またはメール（contact@caneleou.jp）からお気軽にご連絡ください。",
  },
  {
    question: "活動頻度は？",
    answer:
      "月に数回、メンバーの都合に合わせてイベントを企画しています。参加は自由なので、自分のペースで楽しめます。",
  },
  {
    question: "費用はかかりますか？",
    answer:
      "会費はありません。BBQや旅行などイベント時の実費のみご負担いただいています。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-dark-brown/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        className="w-full py-5 flex items-center justify-between text-left gap-4"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-sm md:text-base text-dark-brown/80 tracking-wide">
          {question}
        </span>
        <span
          className={`text-caramel text-xl shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-dark-brown/60 leading-relaxed pl-0 md:pl-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-fabric relative stitch-border">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle title="よくある質問" subtitle="FAQ" />
        </motion.div>

        <div className="mt-12">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
