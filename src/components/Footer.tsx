import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer style={{ background: "#111111", padding: "64px 0 32px" }}>
      <div className="container-sit">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 md:gap-12 mb-12">
          <div>
            <div className="text-base font-semibold text-white uppercase tracking-wider mb-3">
              SIT AUTOMOTIVE
            </div>
            <p className="text-sm text-white/45 leading-relaxed max-w-[280px]">
              Prémiová autopůjčovna Mercedes-Benz. Krátkodobý a dlouhodobý pronájem vozidel. Praha.
            </p>
          </div>

          <div>
            <div className="text-[11px] font-medium text-white/35 uppercase tracking-widest mb-4">Služby</div>
            <div className="flex flex-col gap-2.5">
              <Link to="/autopujcovna" className="text-sm text-white/55 hover:text-primary transition-colors">Autopůjčovna</Link>
              <Link to="/dlouhodoby-pronajem" className="text-sm text-white/55 hover:text-primary transition-colors">Dlouhodobý pronájem</Link>
            </div>
          </div>

          <div>
            <div className="text-[11px] font-medium text-white/35 uppercase tracking-widest mb-4">Kontakt</div>
            <div className="flex flex-col gap-1.5 text-sm text-white/55 leading-relaxed">
              <span>Pod rovinou 682/4</span>
              <span>140 00 Praha 4</span>
              <a href="tel:+420770129982" className="hover:text-primary transition-colors">+420 770 129 982</a>
              <a href="tel:+420606209108" className="hover:text-primary transition-colors">+420 606 209 108</a>
              <a href="mailto:rezervace@sitautomotive.cz" className="hover:text-primary transition-colors">rezervace@sitautomotive.cz</a>
              <span className="mt-1">Po–Pá: 9:00–17:00</span>
            </div>
          </div>

          <div>
            <div className="text-[11px] font-medium text-white/35 uppercase tracking-widest mb-4">Skupina SIT</div>
            <div className="flex flex-col gap-2.5">
              <a href="https://www.sittravel.cz" target="_blank" rel="noopener noreferrer" className="text-sm text-white/55 hover:text-primary transition-colors">SIT Travel →</a>
              <span className="text-sm text-white/35">SIT Automotive</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <span className="text-[13px] text-white/30">© 2025 SIT Automotive s.r.o. · IČ: 05745136</span>
          <Link to="/ochrana-osobnich-udaju" className="text-[13px] text-white/30 hover:text-white/60 transition-colors">Ochrana osobních údajů</Link>
        </div>
      </div>
    </footer>
  );
}
