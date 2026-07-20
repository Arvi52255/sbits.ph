// src/app/dev-component-showcase/page.tsx — DELETE before deploying, dev tool only
import { partners } from "@/mock/partners";
import { services } from "@/mock/services";
import {ServiceCard} from "@/components/content/ServiceCard";
import {PartnerGrid} from "@/components/content/PartnerGrid";

import {Button} from "@/components/ui/Button";
import {Badge} from "@/components/ui/Badge";
import {Card} from "@/components/ui/Card";

import HeroSolid from "@/components/hero-drafts/HeroSolid";
import HeroGradient from "@/components/hero-drafts/HeroGradient";
import HeroImage from "@/components/hero-drafts/HeroImage";

export default function DevComponentShowcase() {
  return (
    <div className="space-y-16 p-8">
            <section>
    <h2 className="text-xl font-bold mb-4">Hero — Draft A (Solid)</h2>
    <HeroSolid />
    </section>

    <section>
    <h2 className="text-xl font-bold mb-4">Hero — Draft B (Image)</h2>
    <HeroImage />
    </section>

    <section>
    <h2 className="text-xl font-bold mb-4">Hero — Draft C (Gradient)</h2>
    <HeroGradient />
    </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Buttons</h2>
        <div className="flex gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="teal">Teal</Button>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Badges</h2>
        <div className="flex gap-2">
          <Badge>Default</Badge>
          <Badge variant="teal">Teal</Badge>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Cards</h2>
        <Card>
          <p>Base card content</p>
        </Card>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Service Cards ({services.length})</h2>
        <div className="grid grid-cols-3 gap-4">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Partner Grid ({partners.length})</h2>
        <PartnerGrid partners={partners} />
      </section>
    </div>
  );
}