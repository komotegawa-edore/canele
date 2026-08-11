import type { Metadata } from "next";
import { Playfair_Display, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Canelé - 小さなお菓子に、大きな物語。",
  description:
    "フランス・ボルドー生まれの伝統菓子カヌレの魅力をお届けします。外はカリッと、中はしっとり。小さな一粒に詰まった歴史と味わいの物語。",
  icons: {
    icon: "/images/canele.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${playfair.variable} ${notoSerifJP.variable}`}>
      <body className="font-noto antialiased">{children}</body>
    </html>
  );
}
