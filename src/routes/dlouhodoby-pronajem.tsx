import { createFileRoute, Link } from "@tanstack/react-router";
import { Wrench, Shield, ShieldCheck, MapPin, Radio, Headphones } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import GroupBanner from "@/components/GroupBanner";
import heroImg from "@/assets/car-hero.png";
import carCla from "@/assets/car-cla.jpg";
import carGlc from "@/assets/car-glc.jpg";

export const Route = createFileRoute("/dlouhodoby-pronajem")({
  head: () => ({
    meta: [
      { title: "Dlouhodobý pronájem Mercedes-Benz | SIT Automotive" },
      { name: "description", content: "Střednědobý i dlouhodobý pronájem Mercedes-Benz s vším v ceně — servis, pojištění, dálniční známka, asistence." },
      { property: "og:title", content: "Dlouhodobý pronájem Mercedes-Benz | SIT Automotive" },
      { property: "og:description", content: "Měsíční pronájem Mercedes-Benz se vším v jedné splátce." },
    ],
  }),
  component: DlouhodobyPronajemPage,
});

const includes = [
  { icon: Wrench, name: "Servis vozu", desc: "Předepsaný servis vozu dle harmonogramu výrobce." },
  { icon: Shield, name: "Povinné ručení", desc: "Zákonné pojištění odpovědnosti za škodu." },
  { icon: ShieldCheck, name: "Havarijní pojištění", desc: "Havarijní pojištění se spoluúčastí 10%." },
  { icon: MapPin, name: "Dálniční poplatky", desc: "Česká dálniční známka a silniční poplatky." },
  { icon: Radio, name: "Poplatek za rádio", desc: "Poplatek za rozhlasové přijímače zahrnut." },
  { icon: Headphones, name: "Non-stop asistence", desc: "Asistenční služba dostupná 24 hodin denně." },
];

const steps = [
  { num: "01", title: "Výběr vozidla", desc: "Zašleme Vám individuální nabídku vozů z naší aktuální flotily." },
  { num: "02", title: "Dokumenty a smlouva", desc: "Zašlete potřebné doklady ke schválení, společně podepíšeme smlouvu." },
  { num: "03", title: "Převzetí vozu", desc: "Po vyřízení administrativy převezmete vůz dle dostupnosti." },
  { num: "04", title: "Vrácení po uplynutí doby", desc: "Po smluveném období vůz vrátíte na dohodnutém místě." },
];

const cars = [
  { name: "Mercedes-Benz CLA Kupé 200 4M", price: "19 790 Kč / měsíc bez DPH", desc: "Sportovní kupé s elegantním designem a pohonem všech kol. Ideální pro denní dojíždění i delší cesty.", img: carCla },
  { name: "Mercedes-Benz GLC SUV 220d 4M", price: "21 490 Kč / měsíc bez DPH", desc: "Prostorné SUV s naftovým motorem a pohonem 4Matic. Komfort pro rodinu i pracovní cesty.", img: carGlc },
];

function DlouhodobyPronajemPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative flex items-end" style={{ height: "60vh", minHeight: 400 }}>
        <img src={heroImg} alt="Mercedes-Benz" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.48)" }} />
        <div className="container-sit relative z-10 pb-16 pt-24">
          <span className="text-[11px] font-medium text-primary uppercase tracking-[0.12em]">DLOUHODOBÝ PRONÁJEM</span>
          <h1 className="text-white mt-4 max-w-[700px]">Prémiový Mercedes-Benz. Vše v jedné měsíční splátce.</h1>
          <p className="text-white/80 text-lg leading-relaxed mt-4 max-w-[560px]">
            Střednědobý i dlouhodobý pronájem s vším v ceně — servis, pojištění, dálniční známka, asistence. Pro firmy i jednotlivce.
          </p>
          <Link to="/kontakt" className="btn-primary mt-6 inline-flex">Poptejte pronájem</Link>
        </div>
      </section>

      {/* CO ZAHRNUJE SPLÁTKA */}
      <section className="section-padding" style={{ background: "var(--sit-bg-secondary)" }}>
        <div className="container-sit">
          <h2 className="text-center">Co zahrnuje měsíční splátka</h2>
          <p className="text-center text-text-muted mt-4 max-w-[520px] mx-auto">
            Standardní splátka zahrnuje vše níže. Rozsah služeb lze individuálně přizpůsobit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 mt-14">
            {includes.map((item) => (
              <div key={item.name} className="text-center">
                <item.icon size={24} strokeWidth={1.5} className="text-primary mx-auto mb-3" />
                <h4 className="mb-1.5">{item.name}</h4>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JAK TO FUNGUJE */}
      <section className="section-padding">
        <div className="container-sit">
          <h2 className="text-center">Čtyři kroky k Vašemu vozu</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-14">
            {steps.map((step) => (
              <div key={step.num}>
                <span className="text-[13px] font-medium text-text-muted">{step.num}</span>
                <h4 className="mt-1 mb-2">{step.title}</h4>
                <p className="text-[15px] text-text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AKTUÁLNÍ NABÍDKA */}
      <section className="section-padding" style={{ background: "var(--sit-bg-secondary)" }}>
        <div className="container-sit">
          <h2 className="text-center">Aktuální nabídka vozů</h2>
          <p className="text-center text-text-muted mt-4 max-w-[520px] mx-auto">
            Nabídky zasíláme individuálně dle aktuální dostupnosti. Kontaktujte nás pro aktuální přehled.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {cars.map((car) => (
              <div key={car.name} className="border border-border rounded-xl overflow-hidden bg-background">
                <div className="h-[220px] bg-bg-secondary">
                  <img src={car.img} alt={car.name} className="w-full h-full object-cover" loading="lazy" width={1024} height={640} />
                </div>
                <div className="p-7">
                  <h4>{car.name}</h4>
                  <p className="text-xl font-semibold text-primary mt-2">{car.price}</p>
                  <p className="text-[15px] text-text-muted leading-relaxed mt-3">{car.desc}</p>
                  <Link to="/kontakt" className="btn-primary w-full mt-5">Poptejte tento vůz</Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-text-muted mt-8">
            Aktuální nabídka se průběžně mění. Pro nejnovější přehled nás kontaktujte přímo.
          </p>
        </div>
      </section>

      <CtaSection />
      <GroupBanner />
      <Footer />
    </>
  );
}
