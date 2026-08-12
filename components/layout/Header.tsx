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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f0e8]/95 backdrop-blur-sm stitch-border" style={{ zIndex: 50 }}>
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

      {/* Mobile nav - fullscreen overlay with blur */}
      <div
        className={`md:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Blurred backdrop */}
        <div className="absolute inset-0 bg-[#f5f0e8]/80 backdrop-blur-md" />

        {/* Nav links */}
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
    </header>
  );
}
