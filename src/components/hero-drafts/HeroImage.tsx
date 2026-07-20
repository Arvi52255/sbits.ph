// src/components/Hero.tsx
import Image from "next/image";
import { siteSettings } from "@/mock/siteSettings";

const DEFAULT_HERO_IMAGE = "/images/hero/default-hero.jpg"; // placeholder, needs a real asset

export default function Hero() {
  const { title, subtitle, backgroundImage } = siteSettings.hero;
  const src = backgroundImage || DEFAULT_HERO_IMAGE;

  return (
    <section className="relative min-h-[480px] flex items-center justify-center px-6">
      <Image src={src} alt="" fill className="object-cover -z-10" priority />
      <div className="absolute inset-0 bg-black/40 -z-10" />
      <div className="relative z-10 text-center text-white max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg">{subtitle}</p>
      </div>
    </section>
  );
}