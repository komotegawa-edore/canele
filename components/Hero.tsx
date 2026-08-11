import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-fabric relative stitch-border">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="workshop-tag font-playfair mb-6">
              CANELÉ DE BORDEAUX
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-dark-brown leading-tight mb-6">
              小さなお菓子に、
              <br />
              大きな物語。
            </h1>
            <p className="text-dark-brown/60 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              フランス・ボルドー生まれの伝統菓子。
              <br />
              外はカリッと、中はしっとり。
              <br />
              小さな一粒に詰まった、味わいの物語。
            </p>
            <div className="mt-10">
              <a
                href="#story"
                className="inline-block border-2 border-dashed border-caramel text-caramel px-8 py-3 text-sm tracking-widest font-playfair hover:bg-caramel hover:text-white hover:border-solid transition-all"
              >
                DISCOVER
              </a>
            </div>
          </div>

          {/* Image - sticker style */}
          <div className="flex-1 flex justify-center">
            <div className="sticker-alt">
              <Image
                src="/images/canele.webp"
                alt="カヌレ"
                width={500}
                height={500}
                className="w-64 md:w-80 lg:w-96 h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
