import { Shield, MapPin, Snowflake, Users, Globe, Navigation } from "lucide-react";

const items = [
  { icon: Shield, name: "Havarijní pojištění", desc: "Součást každého pronájmu. Spoluúčast 10% min. 10 000 Kč." },
  { icon: MapPin, name: "Dálniční známka ČR", desc: "Česká dálniční známka v každém voze." },
  { icon: Snowflake, name: "Sezónní pneumatiky", desc: "Správné pneumatiky podle ročního období." },
  { icon: Users, name: "Pojištění dalšího řidiče", desc: "Pojištění platí i pro druhého řidiče bez příplatku." },
  { icon: Globe, name: "Vycestování do EU", desc: "Vycestování mimo ČR v rámci EU po předchozím nahlášení." },
  { icon: Navigation, name: "GPS navigace", desc: "Navigace v každém voze jako standard." },
];

export default function IncludedSection() {
  return (
    <section className="section-padding" style={{ background: "var(--sit-bg-secondary)" }}>
      <div className="container-sit">
        <h2 className="text-center">Vše v ceně. Žádná překvapení.</h2>
        <p className="text-center text-text-muted mt-4 max-w-[480px] mx-auto">
          Ceny pronájmu zahrnují vše potřebné. Platíte jen to, co vidíte.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 mt-14">
          {items.map((item) => (
            <div key={item.name} className="text-center">
              <item.icon size={24} strokeWidth={1.5} className="text-primary mx-auto mb-3" />
              <h4 className="mb-1.5">{item.name}</h4>
              <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
