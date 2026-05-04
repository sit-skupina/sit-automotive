import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/ochrana-osobnich-udaju")({
  head: () => ({
    meta: [
      { title: "Ochrana osobních údajů | SIT Automotive" },
      { name: "description", content: "Informace o zpracování a ochraně osobních údajů společností SIT Automotive s.r.o." },
    ],
  }),
  component: OchranaPage,
});

function OchranaPage() {
  return (
    <>
      <Navbar />
      <section style={{ padding: "140px 0 80px" }}>
        <div className="container-sit" style={{ maxWidth: 820 }}>
          <h1 className="font-body text-4xl font-semibold">Ochrana osobních údajů</h1>

          <div className="mt-12 space-y-10 text-base text-text leading-relaxed">
            <div>
              <h2 className="font-body text-[22px] font-semibold mb-4">Správce osobních údajů</h2>
              <p>SIT Automotive s.r.o., Pod rovinou 682/4, 140 00 Praha 4, IČ: 05745136, e-mail: <a href="mailto:rezervace@sitautomotive.cz" className="text-primary hover:underline">rezervace@sitautomotive.cz</a>.</p>
            </div>

            <div>
              <h2 className="font-body text-[22px] font-semibold mb-4">Jaké údaje zpracováváme</h2>
              <p>Jméno, e-mailovou adresu, telefonní číslo a obsah zprávy z kontaktního formuláře.</p>
            </div>

            <div>
              <h2 className="font-body text-[22px] font-semibold mb-4">Účel zpracování</h2>
              <p>Vyřízení Vaší poptávky a rezervace pronájmu vozidla.</p>
            </div>

            <div>
              <h2 className="font-body text-[22px] font-semibold mb-4">Doba uložení</h2>
              <p>Osobní údaje uchováváme po dobu nezbytnou k vyřízení Vašeho požadavku, maximálně však 3 roky od posledního kontaktu.</p>
            </div>

            <div>
              <h2 className="font-body text-[22px] font-semibold mb-4">Vaše práva</h2>
              <p>Máte právo na přístup ke svým osobním údajům, jejich opravu, výmaz, přenositelnost a odvolání souhlasu se zpracováním. Svá práva můžete uplatnit zasláním e-mailu na adresu <a href="mailto:rezervace@sitautomotive.cz" className="text-primary hover:underline">rezervace@sitautomotive.cz</a>.</p>
            </div>

            <div>
              <h2 className="font-body text-[22px] font-semibold mb-4">Kontakt</h2>
              <p>V případě jakýchkoli dotazů ohledně zpracování osobních údajů nás kontaktujte na <a href="mailto:rezervace@sitautomotive.cz" className="text-primary hover:underline">rezervace@sitautomotive.cz</a>.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
