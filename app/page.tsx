import Header from "../components/Header";
import Hero from "../components/Hero";
import Story from "../components/Story";
import Texture from "../components/Texture";
import Ingredients from "../components/Ingredients";
import Process from "../components/Process";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <Texture />
        <Ingredients />
        <Process />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
