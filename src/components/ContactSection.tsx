import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

// Public client-side key (safe to expose) – submissions are delivered via Web3Forms
const WEB3FORMS_ACCESS_KEY = "65a9f337-f075-4f53-b2b5-83a256df51e2";

interface ContactSectionProps {
  id?: string;
  showTitle?: boolean;
}

export default function ContactSection({ id = "kontakt", showTitle = true }: ContactSectionProps) {
  const revealRef = useReveal();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "Krátkodobý pronájem",
    dates: "",
    message: "",
    gdpr: false,
  });

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const botcheck = (new FormData(form).get("botcheck") as string) || "";
    if (botcheck) return;

    setSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Nová poptávka z webu – ${formData.name}`,
          from_name: "SIT Automotive web",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          interest: formData.interest,
          dates: formData.dates,
          message: formData.message,
        }),
      });
      const data = await response.json();
      if (!data.success) throw new Error(data.message);

      alert("Děkujeme za Vaši poptávku! Budeme Vás kontaktovat v pracovní dny do 2 hodin.");
      setFormData({ name: "", phone: "", email: "", interest: "Krátkodobý pronájem", dates: "", message: "", gdpr: false });
    } catch {
      alert("Odeslání se nepodařilo. Zkuste to prosím znovu, nebo nám zavolejte na +420 606 209 108.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id={id} className="section-padding bg-background relative border-t border-border/40">
      <div className="container-sit">
        {showTitle && (
          <div ref={revealRef} className="reveal text-center mb-14 max-w-[700px] mx-auto">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
              Kontakt & Poptávka
            </span>
            <h2 className="mb-4">Máte zájem o pronájem vozu?</h2>
            <p className="text-text-muted text-lg leading-relaxed">
              Vyplňte krátký formulář nebo nám zavolejte. Nabídku pronájmu vytvoříme podle vašich individuálních potřeb.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Contact details & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-bg-secondary p-8 rounded-2xl border border-border/60 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">SIT Automotive s.r.o.</h3>
              <p className="text-sm text-text-muted mb-6">Rezervace a informace o pronájmu</p>

              <div className="space-y-4 text-base">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-medium">Telefon</div>
                    <a href="tel:+420606209108" className="font-medium hover:text-primary transition-colors">
                      +420 606 209 108
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-medium">E-mail</div>
                    <a href="mailto:pavel.vlk@sitautomotive.cz" className="font-medium hover:text-primary transition-colors">
                      pavel.vlk@sitautomotive.cz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-medium">Adresa sídla</div>
                    <span className="font-medium">Pod rovinou 682/4, 140 00 Praha 4</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-medium">Pracovní doba</div>
                    <span className="font-medium">Pondělí – Pátek: 9:00 – 17:00</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-border/50 text-xs text-text-muted">
                IČ: 05745136 · DIČ: CZ05745136 · Společnost je vedena Městským soudem v Praze pod spisovou značkou C 269988
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-border/60 shadow-sm h-[240px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.381710531478!2d14.4379366!3d50.0416954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b93fb97063cfd%3A0xd6891aa570bdc3df!2sPod%20rovinou%20682%2F4%2C%20140%2000%20Praha%204!5e0!3m2!1scs!2scz!4v1710000000000!5m2!1scs!2scz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SIT Automotive sídlo"
              />
            </div>
          </div>

          {/* Right Column: Demand Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-8 md:p-10 shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Poslat poptávku</h3>
              <p className="text-text-muted text-sm mb-6">
                Odesláním formuláře získáte nezávaznou nabídku na míru. Odpovídáme v pracovní dny do 2 hodin.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-text mb-1.5 uppercase tracking-wider">
                    Jméno a příjmení *
                  </label>
                  <input
                    className="input-sit"
                    required
                    placeholder="Jan Novák"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text mb-1.5 uppercase tracking-wider">
                    Telefon *
                  </label>
                  <input
                    className="input-sit"
                    type="tel"
                    required
                    placeholder="+420 600 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-text mb-1.5 uppercase tracking-wider">
                  E-mail *
                </label>
                <input
                  className="input-sit"
                  type="email"
                  required
                  placeholder="jan.novak@email.cz"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-text mb-1.5 uppercase tracking-wider">
                  Mám zájem o *
                </label>
                <select
                  className="input-sit cursor-pointer bg-white"
                  required
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                >
                  <option value="Krátkodobý pronájem">Krátkodobý pronájem</option>
                  <option value="Dlouhodobý pronájem">Dlouhodobý pronájem</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-text mb-1.5 uppercase tracking-wider">
                  Termín nebo předpokládaná doba pronájmu
                </label>
                <input
                  className="input-sit"
                  placeholder="Např. 15.–20. 8. 2026 nebo od září na 6 měsíců"
                  value={formData.dates}
                  onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                />
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-text mb-1.5 uppercase tracking-wider">
                  Zpráva / Vaše požadavky
                </label>
                <textarea
                  className="input-sit"
                  style={{ minHeight: 110 }}
                  placeholder="Upřesněte preferovaný vůz, nájezd km nebo další přání..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <label className="flex items-start gap-2.5 mt-5 text-xs text-text-muted cursor-pointer select-none">
                <input
                  type="checkbox"
                  required
                  checked={formData.gdpr}
                  onChange={(e) => setFormData({ ...formData, gdpr: e.target.checked })}
                  className="mt-0.5 rounded border-border text-primary focus:ring-primary"
                />
                <span>Souhlasím se zpracováním osobních údajů v souladu s ochranou osobních údajů.</span>
              </label>

              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full mt-6 py-4 text-base font-semibold shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Odesílám…" : "Poslat poptávku"}
              </button>
              <p className="text-xs text-text-muted text-center mt-3">
                Odeslání je bezplatné a k ničemu vás nezavazuje.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
