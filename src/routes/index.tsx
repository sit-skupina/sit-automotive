import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GroupBanner from "@/components/GroupBanner";
import IncludedSection from "@/components/IncludedSection";
import carHero from "@/assets/car-hero.png";
import bmwLogo from "@/assets/BMW.svg";
import mercedesLogo from "@/assets/Mercedes-Logo.svg";
import { useReveal } from "@/hooks/useReveal";
import mercedesCar from "@/assets/car-c180d.png";
import bmwCar from "@/assets/car-gla.png";
import carB180 from "@/assets/car-b180.png";
import carCla from "@/assets/car-cla.jpg";
import carGlc from "@/assets/car-glc.jpg";
import amgS63 from "@/assets/1-AMG-S63-2024-review.jpg";

export const Route = createFileRoute("/")(
  {
  head: () => ({
    meta: [
      { title: "SIT Automotive s.r.o. | Pronájmy vozidel Mercedes-Benz a BMW" },
      { name: "description", content: "Česká firma zabývající se krátkodobým a dlouhodobým pronájmem vozidel prémiových značek Mercedes-Benz a BMW. Praha. Člen skupiny SIT Travel." },
      { property: "og:title", content: "SIT Automotive s.r.o. | Pronájmy vozidel Mercedes-Benz a BMW" },
      { property: "og:description", content: "Krátkodobý a dlouhodobý pronájem vozidel Mercedes-Benz a BMW. Praha." },
      { property: "og:url", content: "https://sitautomotive.cz/" },
      { name: "twitter:title", content: "SIT Automotive s.r.o. | Pronájmy vozidel Mercedes-Benz a BMW" },
      { name: "twitter:description", content: "Krátkodobý a dlouhodobý pronájem vozidel Mercedes-Benz a BMW. Praha." },
    ],
    links: [
      { rel: "canonical", href: "https://sitautomotive.cz/" },
    ],
  }),
  component: HomePage,
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRental"],
  "name": "SIT Automotive s.r.o.",
  "description": "Krátkodobý a dlouhodobý pronájem vozidel Mercedes-Benz a BMW v Praze.",
  "url": "https://sitautomotive.cz",
  "telephone": "+420606209108",
  "email": "pavel.vlk@sitautomotive.cz",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Pod rovinou 682/4",
    "addressLocality": "Praha 4",
    "postalCode": "140 00",
    "addressCountry": "CZ"
  },
  "areaServed": { "@type": "City", "name": "Praha" }
};


function HomePage() {
  // Parallax on hero image
  const heroImgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (heroImgRef.current) {
        heroImgRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.28}px, 0)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-reveal refs
  const revealONas = useReveal();
  const revealPronajmy = useReveal();
  const revealCTA = useReveal();

  // Car slide-up animation — observe the SECTION (not clipped imgs)
  const [carsVisible, setCarsVisible] = useState(false);
  const carSectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = carSectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setCarsVisible(true); observer.unobserve(el); }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="bg-background min-h-screen">
        <Navbar />

        {/* HERO SECTION */}
        <section className="relative flex items-center min-h-screen pt-24 overflow-hidden" style={{ minHeight: 650 }}>
          <img
            ref={heroImgRef}
            src={carHero}
            alt="SIT Automotive prémiové vozy"
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            style={{ top: "-10%", height: "120%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
          <div className="container-sit relative z-10">
            <div className="max-w-[720px] backdrop-blur-sm bg-black/20 p-8 md:p-12 rounded-2xl border border-white/10">
              <span className="hero-a1 text-[12px] font-semibold text-primary uppercase tracking-[0.2em] mb-4 block">
                SIT Automotive s.r.o.
              </span>
              <h1 className="hero-a2 text-white text-4xl md:text-6xl font-bold leading-tight">
                Pronájmy vozidel prémiových značek
              </h1>
              <p className="hero-a3 text-white/80 text-lg md:text-xl leading-relaxed mt-6 mb-8 font-light">
                Jsme česká firma SIT Automotive s.r.o., která se zabývá krátkodobým a dlouhodobým pronájmem vozidel.
                SIT Automotive s.r.o. patří do holdingu firmy SIT Travel s.r.o., která působí na trhu v cestovním ruchu již 28 let.
                Náš vozový park tvoří vozy prémiových značek Mercedes-Benz a BMW.
              </p>
              <div className="hero-a4 flex flex-wrap gap-4">
                <Link to="/kontakt" className="btn-primary px-8 py-4 text-lg">Kontaktujte nás</Link>
                <a href="#vozovy-park" className="btn-ghost px-8 py-4 text-lg backdrop-blur-md">Vozový park</a>
              </div>
            </div>
          </div>
        </section>

        {/* O NÁS */}
        <section id="o-nas" className="section-padding bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="container-sit">
            <div ref={revealONas} className="reveal max-w-[800px] mx-auto text-center">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">O společnosti</span>
              <h2 className="mb-6">SIT Automotive s.r.o.</h2>
              <p className="text-lg text-text-muted leading-relaxed mb-6">
                Jsme česká firma zabývající se krátkodobým a dlouhodobým pronájmem vozidel.
                SIT Automotive s.r.o. patří do holdingu firmy SIT Travel s.r.o., která působí na trhu
                v cestovním ruchu již 28 let.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                Náš vozový park tvoří vozy prémiových značek Mercedes-Benz a BMW.
                Nabídku pronájmu vytvoříme podle vašich individuálních potřeb. Poradíme s výběrem vozu,
                délkou pronájmu a rozsahem pojištění.
              </p>
            </div>
          </div>
        </section>

        {/* PRONÁJMY */}
        <section ref={carSectionRef} id="vozovy-park" className="section-padding bg-bg-secondary relative overflow-hidden">
          {/* Left side — stacked car cards */}
          <div className="hidden xl:flex absolute left-0 top-1/2 -translate-y-1/2 flex-col gap-3 w-56 pointer-events-none" style={{ zIndex: 0, paddingLeft: 0 }}>
            {[amgS63, mercedesCar, carCla].map((src, i) => (
              <div
                key={i}
                className="rounded-r-2xl overflow-hidden border-y border-r border-border/50 shadow-lg bg-white"
                style={{
                  opacity: carsVisible ? 1 : 0,
                  transform: carsVisible ? 'translateX(0)' : 'translateX(-100%)',
                  transition: `transform 0.9s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.13}s, opacity 0.6s ease ${0.1 + i * 0.13}s`,
                }}
              >
                <img src={src} alt="" className="w-full h-28 object-cover" />
              </div>
            ))}
          </div>

          {/* Right side — stacked car cards */}
          <div className="hidden xl:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-3 w-56 pointer-events-none" style={{ zIndex: 0 }}>
            {[carB180, carGlc, bmwCar].map((src, i) => (
              <div
                key={i}
                className="rounded-l-2xl overflow-hidden border-y border-l border-border/50 shadow-lg bg-white"
                style={{
                  opacity: carsVisible ? 1 : 0,
                  transform: carsVisible ? 'translateX(0)' : 'translateX(100%)',
                  transition: `transform 0.9s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.13}s, opacity 0.6s ease ${0.1 + i * 0.13}s`,
                }}
              >
                <img src={src} alt="" className="w-full h-28 object-cover" />
              </div>
            ))}
          </div>

          <div className="container-sit relative" style={{ zIndex: 1 }}>
            <div ref={revealPronajmy} className="reveal text-center">
              <h2 className="mb-16">Pronájmy vozidel</h2>

              <div className="brand-logos-row flex flex-col sm:flex-row justify-center items-center gap-16 sm:gap-32 mb-14">
                <div className="logo-brand flex flex-col items-center">
                  <div className="w-24 h-24 flex items-center justify-center mb-5">
                    <img src={mercedesLogo} alt="Mercedes-Benz logo" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl font-medium tracking-wide" id="pronajmy">Mercedes-Benz</h3>
                </div>
                <div className="logo-brand flex flex-col items-center">
                  <div className="w-24 h-24 flex items-center justify-center mb-5">
                    <img src={bmwLogo} alt="BMW logo" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl font-medium tracking-wide">BMW</h3>
                </div>
              </div>

              <p className="text-text-muted leading-relaxed text-lg max-w-[600px] mx-auto">
                Nabídku pronájmu vytvoříme podle vašich individuálních potřeb. Poradíme s výběrem vozu
                i výběrem možných služeb, délkou pronájmu a rozsahem pojištění. SIT Automotive znamená flexibilitu.
              </p>
            </div>
          </div>
        </section>

        {/* CO JE V CENĚ */}
        <IncludedSection />

        {/* CTA */}
        <section className="section-padding bg-bg-secondary">
          <div className="container-sit">
            <div ref={revealCTA} className="reveal max-w-[720px] mx-auto text-center">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Pronájmy vozidel</span>
              <h2 className="mb-6">Pronájmy vozidel</h2>
              <p className="text-lg text-text-muted leading-relaxed mb-10">
                Nabídku pronájmu vytvoříme podle vašich individuálních potřeb. Poradíme s výběrem vozu
                i výběrem možných služeb, délkou pronájmu a rozsahem pojištění.
              </p>
              <Link to="/kontakt" className="btn-primary px-8 py-4 text-lg">Kontaktujte nás</Link>
            </div>
          </div>
        </section>

        <GroupBanner />
        <Footer />
      </div>
    </>
  );
}
