"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#concept", label: "こだわり" },
  { href: "#activity", label: "活動" },
  { href: "#news", label: "お知らせ" },
  { href: "#gallery", label: "ギャラリー" },
  { href: "/blog", label: "ブログ" },
  { href: "#contact", label: "お問い合わせ" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f0e8]/95 backdrop-blur-sm stitch-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/images/logo.webp"
              alt="Canelé"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest text-dark-brown/70 hover:text-caramel transition-colors font-playfair"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニューを開く"
          >
            <span
              className={`absolute w-6 h-[2px] bg-dark-brown transition-all duration-300 ${
                isOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute w-6 h-[2px] bg-dark-brown transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute w-6 h-[2px] bg-dark-brown transition-all duration-300 ${
                isOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile nav - fullscreen overlay with blur (outside header) */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[#f5f0e8]/80 backdrop-blur-md" />
        <nav className="relative z-10 flex flex-col items-center justify-center h-full gap-2">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-lg tracking-widest text-dark-brown/80 hover:text-caramel transition-all duration-300 font-playfair py-3 ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isOpen ? `${i * 60}ms` : "0ms" }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
