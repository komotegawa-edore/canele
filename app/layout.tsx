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
  title: "Canelé - カヌレサークル",
  description:
    "大学カヌレサークル「Canelé」の公式サイト。フランス伝統菓子カヌレの研究・製造からイベント企画まで、お菓子を通じたコミュニティ活動を行っています。",
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
