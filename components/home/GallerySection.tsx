"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "@/components/common/SectionTitle";

const galleryImages = [
  { src: "/images/canele-trio.webp", alt: "カヌレ" },
  { src: "/images/cafe.webp", alt: "カフェでの交流" },
  { src: "/images/canele-lineup.webp", alt: "並んだカヌレ" },
  { src: "/images/canele-coffee.webp", alt: "カヌレとラテ" },
  { src: "/images/canele-rack.webp", alt: "焼き上がったカヌレ" },
  { src: "/images/hanami.webp", alt: "花見イベント" },
  { src: "/images/canele-table.webp", alt: "テーブルの上のカヌレ" },
  { src: "/images/bbq.webp", alt: "BBQイベント" },
  { src: "/images/campus.webp", alt: "キャンパス" },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-24 md:py-32 bg-fabric relative stitch-border"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle title="ギャラリー" subtitle="GALLERY" />
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {galleryImages.map((image) => (
              <SwiperSlide key={image.src}>
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
