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
const siteName = "Canelé（カヌレ）| 大阪大学のサークル";
const siteDescription =
  "大阪大学のサークル「Canelé（カヌレ）」公式サイト。BBQや旅行、スポーツなど自由に楽しむ学生サークルです。学園祭ではカヌレの出店も予定しています。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | Canelé - 大阪大学サークル",
  },
  description: siteDescription,
  icons: {
    icon: "/images/canele.webp",
  },
  alternates: {
    canonical: siteUrl,
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Canelé（カヌレ）",
      url: siteUrl,
      logo: `${siteUrl}/images/logo.webp`,
      sameAs: ["https://www.instagram.com/canele_circle/"],
      parentOrganization: {
        "@type": "CollegeOrUniversity",
        name: "大阪大学",
      },
    },
    {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${playfair.variable} ${notoSerifJP.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-noto antialiased">{children}</body>
    </html>
  );
}
