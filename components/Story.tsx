import ImagePlaceholder from "./ImagePlaceholder";

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-32 bg-fabric-cream relative stitch-border stitch-border-top">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="workshop-tag font-playfair mb-4">STORY</span>
          <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown mt-4">
            カヌレの物語
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Image - sticker style */}
          <div className="flex-1 flex justify-center">
            <div className="sticker">
              <ImagePlaceholder
                src="/images/bordeaux-street.png"
                alt="ボルドーの街並み"
                width={600}
                height={400}
                className="w-full max-w-lg"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3 className="text-2xl font-playfair text-dark-brown mb-6">
              ボルドーから届いた、
              <br />
              小さな宝物。
            </h3>
            <div className="space-y-4 text-dark-brown/70 leading-relaxed">
              <p>
                カヌレの正式名称は「カヌレ・ド・ボルドー」。フランス南西部の美しい港町ボルドーで生まれた伝統的な焼き菓子です。
              </p>
              <p>
                その起源は18世紀にまで遡ります。ボルドーのワイン造りでは、ワインの澱を取り除くために大量の卵白が使われていました。残された卵黄を活用しようと、修道院の修道女たちが考案したのがカヌレの始まりと言われています。
              </p>
              <p>
                ワインと共に歩んできたボルドーの歴史が、この小さなお菓子の中に息づいています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
