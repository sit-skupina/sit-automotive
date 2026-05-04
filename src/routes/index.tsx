import { createFileRoute, Link } from "@tanstack/react-router";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import GroupBanner from "@/components/GroupBanner";
import IncludedSection from "@/components/IncludedSection";
import heroImg from "@/assets/1-AMG-S63-2024-review.jpg";
import { Car, Clock, MapPin, ShieldCheck, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SIT Automotive | Prémiová autopůjčovna vozů Mercedes-Benz a BMW" },
      { name: "description", content: "Prestižní autopůjčovna v Praze. Krátkodobý i dlouhodobý pronájem luxusních vozidel bez starostí. Vše potřebné v ceně, profesionální přístup a diskrétnost." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "Prémiové vozy", label: "Výhradně luxusní značky" },
  { value: "Praha", label: "Přistavení vozu na vaši adresu" },
  { value: "Bez starostí", label: "Komplexní pojištění a servis" },
  { value: "Diskrétnost", label: "Profesionální přístup ke klientům" },
];

function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative flex items-center min-h-screen pt-24" style={{ minHeight: 650 }}>
        <img src={heroImg} alt="SIT Automotive prémiové vozy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="container-sit relative z-10">
          <div className="max-w-[720px] backdrop-blur-sm bg-black/20 p-8 md:p-12 rounded-2xl border border-white/10">
            <span className="text-[12px] font-semibold text-primary uppercase tracking-[0.2em] mb-4 block">
              SIT Automotive
            </span>
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
              Prestiž. Spolehlivost. <br className="hidden md:block" /> Bez kompromisů.
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mt-6 mb-8 font-light">
              Specializujeme se na poskytování prémiových vozidel pro klienty, kteří vyžadují špičkový servis a reprezentativní úroveň. Váš komfort je naší prioritou.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/kontakt" className="btn-primary px-8 py-4 text-lg">Kontaktujte nás</Link>
              <a href="#sluzby" className="btn-ghost px-8 py-4 text-lg backdrop-blur-md">Naše služby</a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-dark text-white py-16 border-b border-white/10">
        <div className="container-sit grid grid-cols-2 md:grid-cols-4 gap-y-12">
          {stats.map((s, i) => (
            <div key={i} className="text-center px-4 relative">
              <span className="block text-2xl md:text-3xl font-semibold text-primary leading-tight mb-2">{s.value}</span>
              <span className="text-[14px] text-white/60 tracking-wide uppercase">{s.label}</span>
              {i !== stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT US - O NÁS */}
      <section id="o-nas" className="section-padding bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-dark/5 rounded-full blur-3xl -z-10" />
        
        <div className="container-sit">
          <div className="max-w-[800px] mx-auto text-center">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Představení firmy</span>
            <h2 className="mb-6">Partner pro vaši mobilitu</h2>
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              SIT Automotive přináší na trh autopůjčoven zcela nový standard. Náš vozový park je pečlivě sestaven z vozidel těch nejprestižnějších značek, především Mercedes-Benz a BMW. Neprovozujeme masovou půjčovnu s tisíci vozy. Zakládáme si na individuálním přístupu, maximální diskrétnosti a dokonalém technickém i vizuálním stavu každého vozu.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              Ať už potřebujete reprezentativní vůz na důležitou obchodní schůzku, luxusní svezení na víkend, nebo spolehlivého partnera pro dlouhodobý pronájem celé firemní flotily, jsme tu pro vás. Naší vizitkou je spokojený klient, který se k nám rád vrací.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES - SLUŽBY */}
      <section id="sluzby" className="section-padding bg-bg-secondary relative">
        <div className="container-sit">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Naše portfolio</span>
            <h2>Komplexní řešení mobility</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Služba 1 */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock size={28} className="text-primary" />
              </div>
              <h3 className="mb-4 text-2xl">Krátkodobý pronájem</h3>
              <p className="text-text-muted leading-relaxed mb-8">
                Ideální volba pro víkendové cesty, svatby, služební cesty či situace, kdy potřebujete okamžitě reprezentativní vůz. Zajišťujeme flexibilní předání a absolutní čistotu vozidel.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm font-medium"><ShieldCheck size={18} className="text-primary" /> Plné pojištění</li>
                <li className="flex items-center gap-3 text-sm font-medium"><ShieldCheck size={18} className="text-primary" /> Dálniční známka v ceně</li>
              </ul>
              <Link to="/kontakt" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Poptat pronájem <ChevronRight size={20} />
              </Link>
            </div>

            {/* Služba 2 */}
            <div className="bg-dark text-white rounded-2xl p-8 md:p-10 shadow-xl border border-white/10 hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Car size={28} className="text-white" />
              </div>
              <h3 className="mb-4 text-2xl text-white">Dlouhodobý pronájem</h3>
              <p className="text-white/70 leading-relaxed mb-8">
                Chytrá alternativa k operativnímu leasingu. V jedné měsíční platbě máte zahrnuto naprosto vše – od pojištění až po servis. Věnujte se svému byznysu, my se postaráme o vozy.
              </p>
              <ul className="space-y-3 mb-8 text-white/90">
                <li className="flex items-center gap-3 text-sm font-medium"><ShieldCheck size={18} className="text-primary" /> Fixní měsíční náklad</li>
                <li className="flex items-center gap-3 text-sm font-medium"><ShieldCheck size={18} className="text-primary" /> Kompletní správa vozu</li>
              </ul>
              <Link to="/kontakt" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Zjistit více <ChevronRight size={20} />
              </Link>
            </div>

            {/* Služba 3 */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin size={28} className="text-primary" />
              </div>
              <h3 className="mb-4 text-2xl">VIP Přistavení</h3>
              <p className="text-text-muted leading-relaxed mb-8">
                Šetříme váš čas. Vůz přistavíme přesně na vámi určené místo v rámci Prahy – ať už před vaši kancelář, domů nebo na letiště. Přebírání vozidel je rychlé a efektivní.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm font-medium"><ShieldCheck size={18} className="text-primary" /> Doručení na adresu</li>
                <li className="flex items-center gap-3 text-sm font-medium"><ShieldCheck size={18} className="text-primary" /> Časová flexibilita</li>
              </ul>
              <Link to="/kontakt" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Domluvit přistavení <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CO JE V CENĚ */}
      <IncludedSection />

      {/* KONTAKT PROMO */}
      <section className="section-padding bg-background relative border-t border-border/40">
        <div className="container-sit">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Spojte se s námi</span>
              <h2 className="mb-6">Osobní přístup ke každé poptávce</h2>
              <p className="text-lg text-text-muted leading-relaxed mb-8">
                Naše služby se vždy snažíme přizpůsobit vašim konkrétním požadavkům. Ať už hledáte vůz na jediný den nebo potřebujete sestavit vozový park pro vaši společnost, jsme připraveni vám nabídnout řešení na míru.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-bg-secondary rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-base mb-1">Naše adresa</h4>
                    <p className="text-sm text-text-muted">Pod rovinou 682/4, 140 00 Praha 4</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-bg-secondary rounded-full flex items-center justify-center shrink-0">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-base mb-1">Otevírací doba</h4>
                    <p className="text-sm text-text-muted">Pondělí – Pátek: 9:00 – 17:00</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link to="/kontakt" className="btn-primary">Přejít na kontakt</Link>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/20 h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.7770857317765!2d14.439818815714083!3d50.04018697942203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b910b10f5bd81%3A0xc6c4293f0b2fcf67!2sPod%20Rovinou%20682%2F4%2C%20140%2000%20Praha%204-Kr%C4%8D!5e0!3m2!1sen!2scz!4v1680000000000!5m2!1sen!2scz"
                width="100%"
                height="100%"
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
    </div>
  );
}
