import ImagePlaceholder from "./ImagePlaceholder";

const galleryItems = [
  {
    src: "/images/canele-coffee.png",
    alt: "カヌレとコーヒー",
    width: 600,
    height: 400,
    rotate: "sticker",
  },
  {
    src: "/images/canele-lineup.png",
    alt: "並んだカヌレ",
    width: 600,
    height: 400,
    rotate: "sticker-alt",
  },
  {
    src: "/images/canele-table.png",
    alt: "テーブルの上のカヌレ",
    width: 600,
    height: 400,
    rotate: "sticker",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-fabric-cream relative stitch-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="workshop-tag font-playfair mb-4">GALLERY</span>
          <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown mt-4">
            カヌレのある風景
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {galleryItems.map((item, i) => (
            <div key={i} className={item.rotate}>
              <ImagePlaceholder
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="w-full h-auto"
              />
              <p className="text-center text-xs text-dark-brown/40 mt-2 font-playfair tracking-wider">
                {item.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
