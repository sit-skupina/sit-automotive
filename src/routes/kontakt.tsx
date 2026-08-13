import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GroupBanner from "@/components/GroupBanner";
import ContactSection from "@/components/ContactSection";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – Pronájem Mercedes-Benz a BMW | SIT Automotive" },
      { name: "description", content: "Kontaktujte SIT Automotive – prémiovou autopůjčovnu Mercedes-Benz a BMW v Praze. Nezávazná poptávka, rezervace pronájmu. Odpovídáme v pracovní dny do 2 hodin." },
      { property: "og:title", content: "Kontakt – Pronájem Mercedes-Benz a BMW | SIT Automotive" },
      { property: "og:description", content: "Kontaktujte SIT Automotive pro pronájem Mercedes-Benz a BMW v Praze. Poptávky vyřizujeme v pracovní dny do 2 hodin." },
      { property: "og:url", content: "https://sitautomotive.cz/kontakt" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kontakt – Pronájem Mercedes-Benz a BMW | SIT Automotive" },
      { name: "twitter:description", content: "Kontaktujte SIT Automotive pro pronájem Mercedes-Benz a BMW v Praze. Odpovídáme do 2 hodin." },
    ],
    links: [
      { rel: "canonical", href: "https://sitautomotive.cz/kontakt" },
    ],
  }),
  component: KontaktPage,
});

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Kontakt – SIT Automotive",
  "url": "https://sitautomotive.cz/kontakt",
  "description": "Kontaktní stránka prémiové autopůjčovny SIT Automotive v Praze.",
  "mainEntity": {
    "@type": ["LocalBusiness", "AutoRental"],
    "name": "SIT Automotive",
    "telephone": "+420606209108",
    "email": "pavel.vlk@sitautomotive.cz",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pod rovinou 682/4",
      "addressLocality": "Praha 4",
      "postalCode": "140 00",
      "addressCountry": "CZ"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  }
};

function KontaktPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-12 bg-bg-secondary border-b border-border">
        <div className="container-sit">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            SIT Automotive s.r.o.
          </span>
          <h1 className="text-4xl md:text-5xl font-bold">Kontakt & Poptávka pronájmu</h1>
          <p className="text-text-muted text-lg mt-3">
            Pod rovinou 682/4, 140 00 Praha 4 · Tel: +420 606 209 108
          </p>
        </div>
      </section>

      {/* Unified Contact & Form Section */}
      <ContactSection id="kontakt-form" showTitle={false} />

      <GroupBanner />
      <Footer />
    </>
  );
}
