import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ConceptSection from "@/components/home/ConceptSection";
import ActivitySection from "@/components/home/ActivitySection";
import NewsSection from "@/components/home/NewsSection";
import type { NewsItem } from "@/components/home/NewsSection";
import GallerySection from "@/components/home/GallerySection";
import InfoSection from "@/components/home/InfoSection";
import FAQSection from "@/components/home/FAQSection";
import ContactCTA from "@/components/home/ContactCTA";
import { getNewsList } from "@/lib/microcms";

export default async function Home() {
  const { contents } = await getNewsList(3);

  const news: NewsItem[] = contents.map((item) => ({
    date: new Date(item.publishedAt).toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).replace(/\//g, "."),
    title: item.title,
    summary: item.summary,
  }));

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ConceptSection />
        <ActivitySection />
        <NewsSection news={news} />
        <GallerySection />
        <InfoSection />
        <FAQSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
