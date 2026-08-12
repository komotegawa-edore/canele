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

const siteUrl = "https://caneleou.jp";
const siteName = "Canelé - カヌレサークル";
const siteDescription =
  "大学カヌレサークル「Canelé」の公式サイト。フランス伝統菓子カヌレの研究・製造からイベント企画まで、お菓子を通じたコミュニティ活動を行っています。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: siteDescription,
  icons: {
    icon: "/images/canele.webp",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/images/ogp.png",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/images/ogp.png"],
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
