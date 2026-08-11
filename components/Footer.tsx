import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-16 bg-fabric-dark text-white/60 relative stitch-border-top">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Image
          src="/images/logo.webp"
          alt="Canelé"
          width={120}
          height={40}
          className="h-8 w-auto mx-auto mb-6 brightness-0 invert opacity-80"
        />
        <div className="w-24 mx-auto border-t border-dashed border-white/20 mb-6" />
        <p className="text-sm">
          &copy; 2024 Canelé. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
