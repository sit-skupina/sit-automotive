import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import sitLogoWhite from "@/assets/sit-logo-white.png";

export default function Footer() {
  return (
    <footer style={{ background: "#111111", padding: "64px 0 32px" }}>
      <div className="container-sit">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1.5fr_1fr] gap-12 md:gap-12 mb-12">
          <div>
            <div className="mb-4">
              <img
                src={sitLogoWhite}
                alt="SIT Automotive"
                style={{ height: 35, filter: "none", transition: "filter 0.3s" }}
              />
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-[280px]">
              Krátkodobý a dlouhodobý pronájem vozidel Mercedes-Benz a BMW v Praze. Prémiové vozy podle vašich potřeb.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">Navigace</div>
            <div className="flex flex-col gap-3">
              <Link to="/" hash="o-nas" className="text-sm text-white/70 hover:text-primary transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> O nás
              </Link>
              <Link to="/" hash="pronajmy" className="text-sm text-white/70 hover:text-primary transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Pronájmy
              </Link>
              <a href="#kontakt" className="text-sm text-white/70 hover:text-primary transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary/50 rounded-full"></span> Kontakt
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">Kontakt</div>
            <div className="flex flex-col gap-4 text-sm text-white/70 leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Pod rovinou 682/4<br />140 00 Praha 4</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+420606209108" className="hover:text-primary transition-colors">+420 606 209 108</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:pavel.vlk@sitautomotive.cz" className="hover:text-primary transition-colors">pavel.vlk@sitautomotive.cz</a>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">Skupina SIT</div>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.sittravel.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
              >
                <Building2 size={20} className="text-primary/70 group-hover:text-primary transition-colors" />
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider mb-0.5">Mateřská společnost</div>
                  <div className="text-sm text-white/90 group-hover:text-primary transition-colors font-medium">SIT Travel →</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <span className="text-[13px] text-white/30">
            © 2026 SIT Automotive s.r.o. · IČ: 057 45 136 · DIČ: CZ05745136 · Společnost je vedena Městským soudem v Praze pod spisovou značkou C 269988
          </span>
          <Link to="/ochrana-osobnich-udaju" className="text-[13px] text-white/30 hover:text-white/60 transition-colors">
            Ochrana osobních údajů
          </Link>
        </div>
      </div>
    </footer>
  );
}
