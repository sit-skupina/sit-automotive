import { Shield, MapPin, Snowflake, Users, Globe, Navigation } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const items = [
  { icon: Shield, name: "Havarijní pojištění", desc: "Součást každého pronájmu. Spoluúčast 10% min. 10 000 Kč." },
  { icon: MapPin, name: "Dálniční známka ČR", desc: "Česká dálniční známka v každém voze." },
  { icon: Snowflake, name: "Sezónní pneumatiky", desc: "Správné pneumatiky podle ročního období." },
  { icon: Users, name: "Pojištění dalšího řidiče", desc: "Pojištění platí i pro druhého řidiče bez příplatku." },
  { icon: Globe, name: "Vycestování do EU", desc: "Vycestování mimo ČR v rámci EU po předchozím nahlášení." },
  { icon: Navigation, name: "GPS navigace", desc: "Navigace v každém voze jako standard." },
];

export default function IncludedSection() {
  const revealHeading = useReveal();

  return (
    <section className="section-padding" style={{ background: "#FFFFFF" }}>
      <div className="container-sit">
        <div ref={revealHeading} className="reveal text-center mb-14">
          <h2>Vše v ceně. Žádná překvapení.</h2>
          <p className="text-text-muted mt-4 max-w-[480px] mx-auto">
            Ceny pronájmu zahrnují vše potřebné. Platíte jen to, co vidíte.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
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
      className="reveal text-center"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-5">
        <item.icon size={40} strokeWidth={1.25} className="text-primary" />
      </div>
      <h4 className="mb-2 text-[19px]">{item.name}</h4>
      <p className="text-[15px] text-text-muted leading-relaxed">{item.desc}</p>
    </div>
  );
}
