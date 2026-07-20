// src/components/Hero.tsx
import { siteSettings } from "@/mock/siteSettings";

export default function Hero() {
  const { title, subtitle, backgroundImage } = siteSettings.hero;

  return (
    <section
      className={`relative flex items-center justify-center min-h-[480px] px-6 ${
        !backgroundImage ? "bg-gradient-to-br from-brand-blue via-brand-teal to-brand-charcoal" : ""
      }`}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }
          : undefined
      }
    >
      {backgroundImage && <div className="absolute inset-0 bg-black/40" />}
      <div className="relative z-10 text-center text-white max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg">{subtitle}</p>
      </div>
    </section>
  );
}