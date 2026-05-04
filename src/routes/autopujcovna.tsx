import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import GroupBanner from "@/components/GroupBanner";
import IncludedSection from "@/components/IncludedSection";
import heroImg from "@/assets/car-hero.png";
import carB180 from "@/assets/car-b180.png";
import carGla from "@/assets/car-gla.png";

export const Route = createFileRoute("/autopujcovna")({
  head: () => ({
    meta: [
      { title: "Autopůjčovna Mercedes-Benz | SIT Automotive" },
      { name: "description", content: "Krátkodobý pronájem vozů Mercedes-Benz v Praze. Přistavení na místo, kompletní pojištění v ceně." },
      { property: "og:title", content: "Autopůjčovna Mercedes-Benz | SIT Automotive" },
      { property: "og:description", content: "Krátkodobý pronájem vozů Mercedes-Benz v Praze." },
    ],
  }),
  component: AutopujcovnaPage,
});

const cars = [
  {
    name: "Mercedes-Benz B 180",
    price: "Již od 890 Kč / den",
    img: carB180,
    features: ["Automatická převodovka", "Klimatizace", "GPS navigace", "Vyhřívaná sedadla", "Česká dálniční známka", "Havarijní pojištění v ceně", "Pojištění dalšího řidiče"],
  },
  {
    name: "Mercedes-Benz GLA 220d 4Matic",
    price: "Již od 990 Kč / den",
    img: carGla,
    features: ["4x4 pohon", "Automatická převodovka", "Klimatizace", "GPS navigace", "Vyhřívaná sedadla", "Česká dálniční známka", "Havarijní pojištění v ceně"],
  },
];

function AutopujcovnaPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative flex items-end" style={{ height: "60vh", minHeight: 400 }}>
        <img src={heroImg} alt="Mercedes-Benz" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.48)" }} />
        <div className="container-sit relative z-10 pb-16 pt-24">
          <span className="text-[11px] font-medium text-primary uppercase tracking-[0.12em]">AUTOPŮJČOVNA</span>
          <h1 className="text-white mt-4 max-w-[700px]">Prémiový Mercedes-Benz na den, víkend nebo týden.</h1>
          <p className="text-white/80 text-lg leading-relaxed mt-4 max-w-[560px]">
            Krátkodobý pronájem vozů Mercedes-Benz v Praze. Přistavení na místo, kompletní pojištění v ceně.
          </p>
          <Link to="/kontakt" className="btn-primary mt-6 inline-flex">Nezávazná rezervace</Link>
        </div>
      </section>

      {/* VOZY */}
      <section className="section-padding">
        <div className="container-sit">
          <h2 className="text-center">Naše vozy</h2>
          <p className="text-center text-text-muted mt-4 max-w-[600px] mx-auto">
            Všechny vozy jsou vybaveny klimatizací, automatickou převodovkou, GPS navigací, vyhřívanými sedadly a českou dálniční známkou.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {cars.map((car) => (
              <div key={car.name} className="border border-border rounded-xl overflow-hidden">
                <div className="h-[220px] bg-bg-secondary">
                  <img src={car.img} alt={car.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-7">
                  <h4>{car.name}</h4>
                  <p className="text-xl font-semibold text-primary mt-2">{car.price}</p>
                  <ul className="mt-4 space-y-2">
                    {car.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-text-muted">
                        <Check size={16} className="text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/kontakt" className="btn-primary w-full mt-5">Rezervovat</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IncludedSection />

      {/* VÍKENDOVÁ AKCE */}
      <section className="section-padding" style={{ background: "#FFFFFF" }}>
        <div className="container-sit">
          <div className="rounded-xl p-8 md:p-10" style={{ background: "var(--sit-dark)" }}>
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">AKČNÍ NABÍDKA</span>
            <h3 className="text-white mt-3 max-w-[560px]">Mercedes-Benz C 180d na víkend za 3 990 Kč.</h3>
            <p className="text-[15px] text-white/60 mt-2 max-w-[480px]">Zapůjčení od pátku do pondělí. Neomezené kilometry. Dálniční známka a GPS navigace v ceně.</p>
            <Link to="/kontakt" className="btn-primary mt-6 inline-flex">Rezervovat víkend</Link>
          </div>
        </div>
      </section>

      {/* KDE NÁS NAJDETE */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-sit">
          <h2 className="text-center">Kde nás najdete</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-xl font-semibold">Kancelář SIT Automotive</h3>
              <div className="mt-4 text-[15px] text-text-muted leading-relaxed space-y-1">
                <p>Českomoravská 142/18, 190 00 Praha 9</p>
                <p>Po–Pá: 9:00–17:00</p>
                <p>Telefon: <a href="tel:+420770129982" className="hover:text-primary transition-colors">+420 770 129 982</a></p>
                <p>E-mail: <a href="mailto:rezervace@sitautomotive.cz" className="hover:text-primary transition-colors">rezervace@sitautomotive.cz</a></p>
              </div>
              <p className="text-sm text-text-muted mt-4">
                Vůz lze vyzvednout a vrátit na naší kanceláři, nebo zajistíme přistavení a vyzvednutí kdekoliv v Praze za poplatek 300 Kč vč. DPH.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.1503904487186!2d14.494972477267765!3d50.102191971527894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9335485c9007%3A0xa5b9aa2456c73f8f!2sSIT%20Automotive!5e0!3m2!1sen!2scz!4v1777904893476!5m2!1sen!2scz"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SIT Automotive mapa"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
      <GroupBanner />
      <Footer />
    </>
  );
}
