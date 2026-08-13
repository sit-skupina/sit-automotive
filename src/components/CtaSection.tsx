import { Phone } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="bg-dark py-20 border-t border-white/10">
      <div className="container-sit flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="max-w-[620px]">
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            Prémiový Mercedes-Benz nebo BMW na dosah.
          </h2>
          <p className="text-white/70 mt-4 text-lg leading-relaxed">
            Krátkodobý i dlouhodobý pronájem s péčí na míru. Pošlete nám nezávaznou poptávku nebo zavolejte — odpovídáme v pracovní dny do 2 hodin.
          </p>
        </div>
        <div className="flex flex-col gap-4 shrink-0">
          <a href="#kontakt" className="btn-primary py-4 px-8 text-lg font-semibold shadow-lg text-center">
            Poslat poptávku
          </a>
          <a
            href="tel:+420606209108"
            className="flex items-center justify-center gap-2 text-sm text-white/70 hover:text-primary transition-colors text-center font-medium"
          >
            <Phone size={15} className="text-primary" />
            +420 606 209 108
          </a>
        </div>
      </div>
    </section>
  );
}
