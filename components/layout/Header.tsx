"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#concept", label: "こだわり" },
  { href: "#activity", label: "活動" },
  { href: "#news", label: "お知らせ" },
  { href: "#gallery", label: "ギャラリー" },
  { href: "#contact", label: "お問い合わせ" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
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

        {/* Mobile menu button - Hamburger with X animation */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          {/* Top line */}
          <span
            className={`block w-6 h-[2px] bg-dark-brown transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          {/* Middle line */}
          <span
            className={`block w-6 h-[2px] bg-dark-brown transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          {/* Bottom line */}
          <span
            className={`block w-6 h-[2px] bg-dark-brown transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile nav - slides down */}
      <nav
        className={`md:hidden bg-[#f5f0e8] border-t border-dashed border-caramel/30 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="flex flex-col py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-6 py-3 text-sm tracking-widest text-dark-brown/70 hover:text-caramel transition-colors font-playfair"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
