import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GroupBanner from "@/components/GroupBanner";
import IncludedSection from "@/components/IncludedSection";
import ContactSection from "@/components/ContactSection";
import carHero from "@/assets/car-hero.png";
import bmwLogo from "@/assets/BMW.svg";
import mercedesLogo from "@/assets/Mercedes-Logo.svg";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SIT Automotive s.r.o. | Pronájmy vozidel Mercedes-Benz a BMW" },
      {
        name: "description",
        content:
          "Česká firma zabývající se krátkodobým a dlouhodobým pronájmem vozidel prémiových značek Mercedes-Benz a BMW. Praha. Člen skupiny SIT Travel.",
      },
      { property: "og:title", content: "SIT Automotive s.r.o. | Pronájmy vozidel Mercedes-Benz a BMW" },
      { property: "og:description", content: "Krátkodobý a dlouhodobý pronájem vozidel Mercedes-Benz a BMW. Praha." },
      { property: "og:url", content: "https://sitautomotive.cz/" },
      { name: "twitter:title", content: "SIT Automotive s.r.o. | Pronájmy vozidel Mercedes-Benz a BMW" },
      { name: "twitter:description", content: "Krátkodobý a dlouhodobý pronájem vozidel Mercedes-Benz a BMW. Praha." },
    ],
    links: [{ rel: "canonical", href: "https://sitautomotive.cz/" }],
  }),
  component: HomePage,
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRental"],
  name: "SIT Automotive s.r.o.",
  description: "Krátkodobý a dlouhodobý pronájem vozidel Mercedes-Benz a BMW v Praze.",
  url: "https://sitautomotive.cz",
  telephone: "+420606209108",
  email: "pavel.vlk@sitautomotive.cz",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pod rovinou 682/4",
    addressLocality: "Praha 4",
    postalCode: "140 00",
    addressCountry: "CZ",
  },
  areaServed: { "@type": "City", name: "Praha" },
};

function HomePage() {
  // Parallax on hero image
  const heroImgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (heroImgRef.current) {
        heroImgRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.25}px, 0)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-reveal refs
  const revealONas = useReveal();
  const revealPronajmy = useReveal();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="bg-background min-h-screen">
        <Navbar />

        {/* HERO SECTION - Adjusted to 100% monitor height */}
        <section className="relative flex h-screen h-dvh min-h-[600px] items-center overflow-hidden bg-black">
          <div className="absolute inset-0" aria-hidden="true">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="https://cdn.jsdelivr.net/gh/matejboska-dev/sitautomotive-bg-video@main/sitautomotive%20bg%202.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="absolute inset-0 bg-black/[0.52]" aria-hidden="true" />
          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-5 pt-28 pb-10 md:px-8 md:pt-36 md:pb-12">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.18em] text-white/85">
              SIT AUTOMOTIVE S.R.O. · PRAHA
            </span>
            <h1 className="mt-5 max-w-4xl text-[40px] leading-[1.08] text-white md:text-[64px] font-heading font-bold">
              Pronájmy vozidel prémiových značek.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl font-body leading-relaxed">
              Jsme česká firma SIT Automotive s.r.o., která se zabývá krátkodobým a dlouhodobým pronájmem vozidel. Náš vozový park tvoří vozy prémiových značek Mercedes-Benz a BMW.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm hover:bg-[var(--color-primary-hover)] hover:-translate-y-px h-11 px-7 text-[15px] font-semibold rounded-md text-white border-none cursor-pointer text-decoration-none"
              >
                Poslat poptávku
              </a>
              <a
                href="#pronajmy"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-white/0 text-white border-2 border-white/70 hover:bg-white/15 h-11 px-7 text-[15px] font-semibold rounded-md text-decoration-none"
              >
                Vozový park
              </a>
            </div>
            <p className="mt-4 text-xs text-white/65">
              Nezávazná poptávka · Odpovídáme v pracovní dny do 2 hodin
            </p>
          </div>
        </section>

        {/* O NÁS / O SPOLEČNOSTI */}
        <section id="o-nas" className="section-padding bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="container-sit">
            <div ref={revealONas} className="reveal max-w-[840px] mx-auto text-center">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
                O společnosti
              </span>
              <h2 className="mb-8 text-4xl md:text-5xl">SIT Automotive s.r.o.</h2>
              <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-6 font-normal">
                Jsme česká firma zabývající se krátkodobým a dlouhodobým pronájmem vozidel. SIT Automotive s.r.o. patří do holdingu firmy SIT Travel s.r.o., která působí na trhu v cestovním ruchu od roku 1991.
              </p>
              <p className="text-lg md:text-xl text-text-muted leading-relaxed font-normal">
                Náš vozový park tvoří vozy prémiových značek Mercedes-Benz a BMW. Nabídku pronájmu vytvoříme podle vašich individuálních potřeb. Poradíme s výběrem vozu, délkou nájmu nebo rozsahem pojištění.
              </p>
            </div>
          </div>
        </section>

        {/* PRONÁJMY (Single Merged Section with enlarged brand logos and elegant background) */}
        <section id="pronajmy" className="section-padding relative overflow-hidden bg-[#141414] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="container-sit relative z-10">
            <div ref={revealPronajmy} className="reveal text-center max-w-[900px] mx-auto">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
                Vozový park & Nabídka
              </span>
              <h2 className="text-white mb-16 text-4xl md:text-5xl">Pronájmy vozidel</h2>

              {/* Enlarged brand logos */}
              <div className="brand-logos-row flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 mb-16">
                <div className="logo-brand flex flex-col items-center justify-between bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:border-primary/50 transition-all duration-300 w-64 sm:w-72 h-[300px]">
                  <div className="w-36 h-36 flex items-center justify-center my-auto">
                    <img src={mercedesLogo} alt="Mercedes-Benz logo" className="w-full h-full object-contain filter drop-shadow-md" />
                  </div>
                  <div className="h-14 flex items-center justify-center text-center">
                    <h3 className="text-2xl font-semibold tracking-wide text-white leading-tight">Mercedes-Benz</h3>
                  </div>
                </div>

                <div className="logo-brand flex flex-col items-center justify-between bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:border-primary/50 transition-all duration-300 w-64 sm:w-72 h-[300px]">
                  <div className="w-36 h-36 flex items-center justify-center my-auto">
                    <img src={bmwLogo} alt="BMW logo" className="w-full h-full object-contain filter drop-shadow-md" />
                  </div>
                  <div className="h-14 flex items-center justify-center text-center">
                    <h3 className="text-2xl font-semibold tracking-wide text-white leading-tight">BMW</h3>
                  </div>
                </div>
              </div>

              <p className="text-white/80 leading-relaxed text-lg md:text-xl max-w-[700px] mx-auto mb-10">
                Nabídku pronájmu vytvoříme podle vašich individuálních potřeb. Poradíme s výběrem vozu i výběrem možných služeb, délkou pronájmu a rozsahem pojištění. SIT Automotive znamená flexibilitu.
              </p>

              <a href="#kontakt" className="btn-primary px-9 py-4 text-lg font-semibold shadow-xl inline-flex items-center justify-center">
                Poslat poptávku
              </a>
            </div>
          </div>
        </section>

        {/* CO JE V CENĚ */}
        <IncludedSection />

        {/* UNIFIED CONTACT & DEMAND FORM SECTION */}
        <ContactSection id="kontakt" showTitle={true} />

        <GroupBanner />
        <Footer />
      </div>
    </>
  );
}
