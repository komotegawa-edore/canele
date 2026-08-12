import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ConceptSection from "@/components/home/ConceptSection";
import ActivitySection from "@/components/home/ActivitySection";
import NewsSection from "@/components/home/NewsSection";
import GallerySection from "@/components/home/GallerySection";
import InfoSection from "@/components/home/InfoSection";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ConceptSection />
        <ActivitySection />
        <NewsSection />
        <GallerySection />
        <InfoSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
