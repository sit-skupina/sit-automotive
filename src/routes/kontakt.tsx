import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GroupBanner from "@/components/GroupBanner";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt | SIT Automotive" },
      { name: "description", content: "Kontaktujte SIT Automotive. Rezervace, dotazy na pronájem Mercedes-Benz. Odpovídáme v pracovní dny do 2 hodin." },
      { property: "og:title", content: "Kontakt | SIT Automotive" },
      { property: "og:description", content: "Kontaktujte SIT Automotive pro pronájem Mercedes-Benz v Praze." },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", interest: "", dates: "", message: "", gdpr: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Děkujeme za Vaši poptávku! Budeme Vás kontaktovat v pracovní dny do 2 hodin.");
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{ background: "var(--sit-dark)", padding: "120px 0 80px" }}>
        <div className="container-sit">
          <h1 className="text-white" style={{ fontSize: 48 }}>Kontaktujte nás.</h1>
          <p className="text-white/65 text-lg mt-4">
            Rezervace, dotazy na pronájem, nebo jen si chtějte popovídat o vozech. Odpovídáme v pracovní dny do 2 hodin.
          </p>
        </div>
      </section>

      {/* KONTAKT */}
      <section className="section-padding">
        <div className="container-sit grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="text-[28px] font-semibold font-body">Zavolejte nebo napište.</h2>

            <div className="mt-8 space-y-5">
              <div className="p-6 rounded-lg" style={{ background: "var(--sit-bg-secondary)", border: "1px solid var(--border)" }}>
                <h4 className="text-base font-semibold">SIT Automotive s.r.o.</h4>
                <p className="text-sm text-text-muted">Rezervace a informace</p>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-text-muted"><Phone size={15} className="text-primary" /><a href="tel:+420770129982" className="hover:text-primary transition-colors">+420 770 129 982</a></div>
                  <div className="flex items-center gap-2 text-text-muted"><Phone size={15} className="text-primary" /><a href="tel:+420606209108" className="hover:text-primary transition-colors">+420 606 209 108</a></div>
                  <div className="flex items-center gap-2 text-text-muted"><Mail size={15} className="text-primary" /><a href="mailto:rezervace@sitautomotive.cz" className="hover:text-primary transition-colors">rezervace@sitautomotive.cz</a></div>
                  <div className="flex items-center gap-2 text-text-muted"><MapPin size={15} className="text-primary" />Pod rovinou 682/4, 140 00 Praha 4</div>
                  <div className="flex items-center gap-2 text-text-muted"><Clock size={15} className="text-primary" />Po–Pá: 9:00–17:00</div>
                </div>
                <p className="text-xs text-text-muted mt-3">IČ: 05745136 · DIČ: CZ05745136</p>
              </div>

              <div className="p-6 rounded-lg" style={{ background: "var(--sit-bg-secondary)", border: "1px solid var(--border)" }}>
                <h4 className="text-base font-semibold">Kancelář — výdej vozů</h4>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-text-muted"><MapPin size={15} className="text-primary" />Českomoravská 142/18, 190 00 Praha 9</div>
                  <div className="flex items-center gap-2 text-text-muted"><Clock size={15} className="text-primary" />Po–Pá: 9:00–17:00</div>
                </div>
                <p className="text-[13px] text-text-muted mt-2">Vozy lze vyzvednout a vrátit na této adrese, nebo zajistíme přistavení po Praze za 300 Kč.</p>
              </div>
            </div>

            <div className="mt-6 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.1503904487186!2d14.494972477267765!3d50.102191971527894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9335485c9007%3A0xa5b9aa2456c73f8f!2sSIT%20Automotive!5e0!3m2!1sen!2scz!4v1777904893476!5m2!1sen!2scz"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SIT Automotive mapa"
              />
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="border border-border rounded-2xl p-8 md:p-10">
              <h3 className="text-[22px] font-semibold mb-6">Nezávazná poptávka</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-text-muted mb-1.5">Jméno a příjmení *</label>
                  <input className="input-sit" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-muted mb-1.5">Telefon *</label>
                  <input className="input-sit" type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-xs font-medium text-text-muted mb-1.5">E-mail *</label>
                <input className="input-sit" type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
              <div className="mt-4">
                <label className="block text-xs font-medium text-text-muted mb-1.5">Mám zájem o *</label>
                <select className="input-sit" required value={formData.interest} onChange={(e) => setFormData({...formData, interest: e.target.value})}>
                  <option value="">Vyberte...</option>
                  <option>Krátkodobý pronájem</option>
                  <option>Dlouhodobý pronájem</option>
                  <option>VIP Přistavení vozu</option>
                  <option>Obecný dotaz</option>
                </select>
              </div>
              <div className="mt-4">
                <label className="block text-xs font-medium text-text-muted mb-1.5">Termín nebo doba pronájmu</label>
                <input className="input-sit" placeholder="Např. 15.–17. 6. 2025 nebo od července" value={formData.dates} onChange={(e) => setFormData({...formData, dates: e.target.value})} />
              </div>
              <div className="mt-4">
                <label className="block text-xs font-medium text-text-muted mb-1.5">Zpráva</label>
                <textarea className="input-sit" style={{ minHeight: 100 }} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
              </div>
              <label className="flex items-start gap-2 mt-4 text-sm text-text-muted cursor-pointer">
                <input type="checkbox" required checked={formData.gdpr} onChange={(e) => setFormData({...formData, gdpr: e.target.checked})} className="mt-1" />
                Souhlasím se zpracováním osobních údajů dle GDPR.
              </label>
              <button type="submit" className="btn-primary w-full mt-4">Odeslat poptávku</button>
              <p className="text-xs text-text-muted text-center mt-3">Odpovídáme v pracovní dny do 2 hodin.</p>
            </form>
          </div>
        </div>
      </section>

      <GroupBanner />
      <Footer />
    </>
  );
}
