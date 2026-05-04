import { createFileRoute, Link } from "@tanstack/react-router";
import { Car, CalendarCheck, Shield, MapPin, Snowflake, Users, Globe, Navigation, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import GroupBanner from "@/components/GroupBanner";
import IncludedSection from "@/components/IncludedSection";
import heroImg from "@/assets/car-hero.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SIT Automotive | Prémiová autopůjčovna Mercedes-Benz Praha" },
      { name: "description", content: "Krátkodobý i dlouhodobý pronájem vozů Mercedes-Benz v Praze. Přistavení na místo, kompletní pojištění v ceně, bez skrytých poplatků." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "Mercedes-Benz", label: "Výhradně prémiová značka" },
  { value: "Praha", label: "Přistavení kdekoliv po Praze" },
  { value: "100%", label: "Pojištění v ceně pronájmu" },
  { value: "24/7", label: "Online rezervace kdykoliv" },
];

const reviews = [
  { text: "Půjčili jsme si vůz na dovolenou s rodinou. Úžasný zážitek, vůz byl v perfektní kondici a vše proběhlo hladce.", name: "Alena", role: "Klientka" },
  { text: "Skvělý vůz, skvělá akce na víkend. Přistavení proběhlo přesně jak bylo domluveno. Mohu jen doporučit.", name: "Lukáš", role: "Klient" },
  { text: "Vůz na víkend do hor s kamarády — velmi pohodlný a prostorný. Nemůžeme si na nic stěžovat. Doporučujeme.", name: "Jana", role: "Klientka" },
  { text: "Zajistili mi pronájem vysněné značky za výhodnou splátku. Férové jednání, vše šlo rychle a bez problémů.", name: "Karel", role: "Klient" },
  { text: "Rychlé jednání, testovací jízda, zařízené financování — za pár dní jsem mohl jezdit. Skvělá zkušenost.", name: "Matouš", role: "Klient" },
  { text: "S dlouhodobým pronájmem jsem spokojená. Veškeré služby zahrnuty ve splátce, mohu se věnovat podnikání.", name: "Lenka", role: "Klientka" },
];

const steps = [
  { num: "01", title: "Zavolejte nebo napište", desc: "Kontaktujte nás telefonicky na +420 770 129 982 nebo e-mailem na rezervace@sitautomotive.cz. Sdělíte nám termín a preferovaný vůz." },
  { num: "02", title: "Potvrdíme rezervaci", desc: "Rezervaci potvrdíme a domluvíme předání vozu. Vůz lze vyzvednout v naší kanceláři nebo přistavit na adresu v Praze za 300 Kč." },
  { num: "03", title: "Jedete", desc: "Přejímáte vůz, podepíšete předávací protokol a můžete vyrazit. Vrácení na stejném místě nebo po domluvě." },
];

function HomePage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative flex items-center min-h-screen" style={{ minHeight: 600 }}>
        <img src={heroImg} alt="Mercedes-Benz" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.48)" }} />
        <div className="container-sit relative z-10 pt-24">
          <div className="max-w-[680px]">
            <span className="text-[11px] font-medium text-primary uppercase tracking-[0.12em]">
              PRÉMIOVÁ AUTOPŮJČOVNA · PRAHA · MERCEDES-BENZ
            </span>
            <h1 className="text-white mt-4">Prémiový Mercedes-Benz. Na den, víkend nebo celý rok.</h1>
            <p className="text-white/80 text-xl leading-relaxed mt-6">
              Krátkodobý i dlouhodobý pronájem vozů Mercedes-Benz v Praze. Přistavení na místo, kompletní pojištění v ceně, bez skrytých poplatků.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/autopujcovna" className="btn-primary">Zobrazit vozy</Link>
              <Link to="/dlouhodoby-pronajem" className="btn-ghost">Dlouhodobý pronájem</Link>
            </div>
            <p className="text-white/55 text-[13px] mt-6">
              Přistavení vozu po Praze · Kompletní pojištění v ceně · Po-Pá 9:00–17:00
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "var(--sit-bg-secondary)", padding: "40px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-sit grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center px-6 py-5 md:py-0"
              style={{
                borderRight: i < stats.length - 1 ? "1px solid var(--border)" : undefined,
                borderBottom: i < 2 ? "1px solid var(--border)" : undefined,
              }}
            >
              <span className="block font-heading text-4xl font-bold text-primary leading-none mb-2">{s.value}</span>
              <span className="text-[13px] font-medium text-text-muted">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* DVĚ SLUŽBY */}
      <section className="section-padding">
        <div className="container-sit">
          <h2 className="text-center">Vyberte způsob pronájmu</h2>
          <p className="text-center text-text-muted mt-4 max-w-[520px] mx-auto">
            Krátkodobý pronájem na dny nebo víkendy, nebo dlouhodobý pronájem s vším v ceně. Obojí v prémiové kvalitě Mercedes-Benz.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="flex flex-col rounded-2xl p-10" style={{ border: "2px solid var(--primary)" }}>
              <Car size={32} className="text-primary mb-5" />
              <h3>Autopůjčovna</h3>
              <p className="text-[15px] text-text-muted leading-relaxed flex-1 mt-3">
                Krátkodobý pronájem vozů Mercedes-Benz. Ideální na dovolenou, víkend nebo pracovní cestu. Přistavení po Praze, kompletní pojištění v ceně, navigace v každém voze. Od 890 Kč za den.
              </p>
              <p className="text-sm font-semibold text-primary mt-4">Od 890 Kč / den</p>
              <Link to="/autopujcovna" className="btn-primary mt-6">Zobrazit vozy</Link>
            </div>
            <div className="flex flex-col rounded-2xl p-10 card-sit">
              <CalendarCheck size={32} className="text-primary mb-5" />
              <h3>Dlouhodobý pronájem</h3>
              <p className="text-[15px] text-text-muted leading-relaxed flex-1 mt-3">
                Měsíční pronájem Mercedes-Benz se vším v jedné splátce — servis, pojištění, dálniční známka, asistence. Řešení pro firmy i jednotlivce kteří chtějí prémiový vůz bez starostí.
              </p>
              <p className="text-sm font-semibold text-primary mt-4">Od 19 790 Kč / měsíc bez DPH</p>
              <Link to="/dlouhodoby-pronajem" className="btn-secondary mt-6">Více o pronájmu</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CO JE V CENĚ */}
      <IncludedSection />

      {/* JAK TO FUNGUJE */}
      <section className="section-padding">
        <div className="container-sit">
          <h2 className="text-center">Rezervace za 3 minuty.</h2>
          <p className="text-center text-text-muted mt-4">Žádná složitá administrativa. Vůz máte kdy Vy potřebujete.</p>
          <div className="relative mt-16">
            <div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-px bg-primary" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {steps.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-[15px] mb-8 relative z-10">
                    {step.num}
                  </div>
                  <h4 className="mb-3">{step.title}</h4>
                  <p className="text-[15px] text-text-muted leading-relaxed px-4">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-14">
            <Link to="/kontakt" className="btn-primary">Rezervovat vůz</Link>
          </div>
        </div>
      </section>

      {/* RECENZE */}
      <section className="section-padding" style={{ background: "var(--sit-bg-secondary)", borderTop: "1px solid var(--border)" }}>
        <div className="container-sit">
          <h2 className="text-center">Co říkají naši klienti</h2>
          <div className="flex gap-5 overflow-x-auto mt-12 pb-4 snap-x snap-mandatory">
            {reviews.map((r, i) => (
              <div key={i} className="min-w-[280px] max-w-[300px] shrink-0 snap-start bg-background border border-border rounded-xl p-6 flex flex-col gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-primary fill-primary" />)}
                </div>
                <p className="text-sm text-text leading-relaxed flex-1">{r.text}</p>
                <div>
                  <span className="text-sm font-semibold text-dark">{r.name}</span>
                  <span className="block text-xs text-text-muted">{r.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <GroupBanner />
      <Footer />
    </>
  );
}
