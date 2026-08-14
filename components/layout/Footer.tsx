import Image from "next/image";
import { circleInfo } from "@/data/circleInfo";

export default function Footer() {
  return (
    <footer className="bg-fabric-dark text-white/60 relative stitch-border-top">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo + Name */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.webp"
                alt="Canelé"
                width={120}
                height={40}
                className="h-8 w-auto brightness-0 invert opacity-80"
              />
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              {circleInfo.description}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white/80 mb-4">
              NAVIGATION
            </h3>
            <ul className="space-y-2">
              {[
                { href: "#", label: "トップ" },
                { href: "#concept", label: "こだわり" },
                { href: "#activity", label: "活動" },
                { href: "#news", label: "お知らせ" },
                { href: "#gallery", label: "ギャラリー" },
                { href: "/blog", label: "ブログ" },
                { href: "#contact", label: "お問い合わせ" },
              ].map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: SNS + Contact */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white/80 mb-4">
              CONTACT
            </h3>
            <div className="space-y-2">
              <a
                href={circleInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/50 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href={`mailto:${circleInfo.email}`}
                className="block text-sm text-white/50 hover:text-white transition-colors"
              >
                {circleInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {circleInfo.name}. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
