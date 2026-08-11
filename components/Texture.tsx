import ImagePlaceholder from "./ImagePlaceholder";

export default function Texture() {
  return (
    <section id="texture" className="py-24 md:py-32 bg-fabric relative stitch-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="workshop-tag font-playfair mb-4">TEXTURE</span>
          <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown mt-4">
            二つの食感
          </h2>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
          {/* Image - sticker style */}
          <div className="flex-1 flex justify-center">
            <div className="sticker-alt">
              <ImagePlaceholder
                src="/images/canele-cutaway.webp"
                alt="カヌレの断面"
                width={600}
                height={400}
                className="w-full max-w-lg"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3 className="text-2xl font-playfair text-dark-brown mb-6">
              外はカリッと、
              <br />
              中はしっとり。
            </h3>
            <div className="space-y-4 text-dark-brown/70 leading-relaxed">
              <p>
                カヌレ最大の魅力は、その二面性にあります。
              </p>
              <p>
                外側は蜜蝋を塗った銅型で焼き上げることで生まれる、深いキャラメル色の薄いカリカリの皮。一口かじると、その下に広がるのは卵黄とバニラが香る、しっとりもっちりとしたカスタード生地。
              </p>
              <p>
                この対照的な二つの食感のハーモニーこそが、カヌレを唯一無二のお菓子たらしめています。焼きたてのカヌレを割った瞬間に立ち上る、甘く芳醇な香りもまた格別です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
