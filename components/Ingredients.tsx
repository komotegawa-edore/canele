import ImagePlaceholder from "./ImagePlaceholder";

const ingredients = [
  {
    name: "牛乳",
    description: "生地のベースとなる、コクのある風味の源。",
  },
  {
    name: "卵黄",
    description: "しっとりとした食感とリッチな味わいを生む。",
  },
  {
    name: "バニラ",
    description: "マダガスカル産のバニラビーンズが香りの主役。",
  },
  {
    name: "ラム酒",
    description: "大人の深みを加える、ダークラムの芳醇な香り。",
  },
  {
    name: "蜜蝋",
    description: "銅型に塗ることで、カリッとした外皮を生む秘密。",
  },
  {
    name: "薄力粉・砂糖・バター",
    description: "シンプルな材料が織りなす、繊細な味わい。",
  },
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="py-24 md:py-32 bg-fabric-cream relative stitch-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="workshop-tag font-playfair mb-4">INGREDIENTS</span>
          <h2 className="text-3xl md:text-4xl font-playfair text-dark-brown mt-4">
            こだわりの素材
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
          {/* Image - sticker style */}
          <div className="flex-1 flex justify-center">
            <div className="sticker md:sticky md:top-24">
              <ImagePlaceholder
                src="/images/ingredients.webp"
                alt="カヌレの材料"
                width={600}
                height={400}
                className="w-full max-w-lg"
              />
            </div>
          </div>

          {/* Ingredient list */}
          <div className="flex-1">
            <div className="space-y-8">
              {ingredients.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-dashed border-caramel/40 text-caramel font-playfair text-sm flex items-center justify-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-dark-brown mb-1">
                      {item.name}
                    </h4>
                    <p className="text-dark-brown/60 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
