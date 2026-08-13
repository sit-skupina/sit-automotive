import { Shield, Wrench, MapPin, Snowflake, Globe, LifeBuoy } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const items = [
  {
    icon: Shield,
    name: "Pojištění vozu",
    desc: "Součást každého nájmu je pojištění vozu. Podmínky nastavíme individuálně.",
  },
  {
    icon: Wrench,
    name: "Servis vozu",
    desc: "Předepsaný servis výrobcem je vždy zahrnutý v našich splátkách.",
  },
  {
    icon: MapPin,
    name: "Dálniční známka ČR",
    desc: "Česká dálniční známka je zahrnuta v každém nájmu.",
  },
  {
    icon: Snowflake,
    name: "Sezónní pneumatiky",
    desc: "Na přání zákazníka zahrneme do nájmu zimní pneumatiky i s přezutím a uskladněním.",
  },
  {
    icon: Globe,
    name: "Cestování v rámci EU",
    desc: "Cestování v rámci EU je zahrnuté v nájmu, mimo EU po předchozím nahlášení.",
  },
  {
    icon: LifeBuoy,
    name: "Asistenční služby",
    desc: "V ceně nájmu jsou zahrnuty asistenční služby Mercedes-Benz a Direct pojišťovny.",
  },
];

export default function IncludedSection() {
  const revealHeading = useReveal();

  return (
    <section className="section-padding bg-white">
      <div className="container-sit">
        <div ref={revealHeading} className="reveal text-center mb-14">
          <h2>Vše v ceně. Žádná překvapení.</h2>
          <p className="text-text-muted mt-4 max-w-[500px] mx-auto text-lg">
            Ceny pronájmu zahrnují vše potřebné pro bezstarostnou jízdu. Platíte jen to, co sjednáme.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <IncludedItem key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IncludedItem({ item, index }: { item: typeof items[0]; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal p-8 rounded-2xl border border-border/50 bg-bg-secondary/40 hover:bg-bg-secondary hover:border-primary/40 transition-all duration-300 shadow-sm"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
        <item.icon size={32} strokeWidth={1.5} className="text-primary" />
      </div>
      <h4 className="mb-3 text-xl font-semibold text-dark">{item.name}</h4>
      <p className="text-base text-text-muted leading-relaxed">{item.desc}</p>
    </div>
  );
}
