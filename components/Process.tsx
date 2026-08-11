import ImagePlaceholder from "./ImagePlaceholder";

const steps = [
  {
    number: "01",
    title: "生地づくり",
    description:
      "牛乳を温めバターを溶かし、薄力粉・砂糖・卵黄を合わせた生地に加えます。バニラビーンズとラム酒で香りづけし、なめらかになるまで混ぜ合わせます。",
  },
  {
    number: "02",
    title: "寝かせる",
    description:
      "生地を冷蔵庫で最低24時間、できれば48時間じっくり休ませます。この工程が、カヌレ特有のもっちりとした食感を生み出す鍵となります。",
  },
  {
    number: "03",
    title: "型の準備",
    description:
      "銅製のカヌレ型に蜜蝋とバターを丁寧に塗ります。この蜜蝋こそが、あのカリカリの外皮を生み出す秘密です。",
  },
  {
    number: "04",
    title: "焼き上げ",
    description:
      "高温のオーブンで一気に焼き始め、その後温度を下げてじっくりと焼き上げます。深いキャラメル色になるまで、約1時間。外はカリッと、中はしっとりの完成です。",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-fabric relative stitch-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="workshop-tag font-playfair mb-4">PROCESS</span>
          <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown mt-4">
            カヌレができるまで
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Steps */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="space-y-10">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <span className="flex w-12 h-12 rounded-full border-2 border-dashed border-caramel/40 text-caramel font-playfair text-lg items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-dark-brown mb-2">
                      {step.title}
                    </h4>
                    <p className="text-dark-brown/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image - sticker style */}
          <div className="flex-1 flex justify-center order-1 lg:order-2">
            <div className="sticker-alt lg:sticky lg:top-24">
              <ImagePlaceholder
                src="/images/canele-baking.webp"
                alt="カヌレの焼き上がり"
                width={600}
                height={500}
                className="w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
