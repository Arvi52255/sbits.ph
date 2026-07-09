// src/app/dev-image-check/page.tsx — DELETE before deploying, dev tool only
import Image from "next/image";
import { partners } from "@/mock/partners";
import { services } from "@/mock/services";

export default function DevImageCheck() {
  return (
    <div className="p-8 space-y-8">
      <section>
        <h2 className="text-xl font-bold mb-4">Partners ({partners.length})</h2>
        <div className="grid grid-cols-4 gap-4">
          {partners.map((p) => (
            <div key={p.id} className="border p-2 flex items-center gap-2">
              <Image src={p.logo} alt={p.name} width={60} height={30} />
              <span className="text-sm">{p.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-4">Services ({services.length})</h2>
        <div className="grid grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.id} className="border p-2 flex items-center gap-2">
              <Image src={s.icon} alt={s.title} width={40} height={40} />
              <span className="text-sm">{s.title}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}