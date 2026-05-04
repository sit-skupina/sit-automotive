import { Link } from "@tanstack/react-router";

export default function CtaSection() {
  return (
    <section style={{ background: "var(--sit-dark)", padding: "80px 0" }}>
      <div className="container-sit flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
        <div className="max-w-[560px]">
          <h2 className="text-white" style={{ fontSize: 36 }}>Prémiový Mercedes-Benz na jeden hovor.</h2>
          <p className="text-white/65 mt-4 leading-relaxed">
            Krátkodobý nebo dlouhodobý pronájem. Zavolejte nám nebo pošlete zprávu — odpovídáme v pracovní dny do 2 hodin.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link to="/kontakt" className="btn-primary">Rezervovat vůz</Link>
          <a href="tel:+420770129982" className="text-sm text-white/55 hover:text-primary transition-colors text-center">+420 770 129 982</a>
        </div>
      </div>
    </section>
  );
}
