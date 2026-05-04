import { Building2 } from "lucide-react";

export default function GroupBanner() {
  return (
    <section style={{ background: "var(--sit-bg-accent)", padding: "20px 0", borderTop: "1px solid rgba(245,166,35,0.3)", borderBottom: "1px solid rgba(245,166,35,0.3)" }}>
      <div className="container-sit flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-6">
        <div className="flex items-center gap-2.5">
          <Building2 size={18} className="text-primary shrink-0" />
          <span className="text-sm font-medium text-text">
            SIT Automotive je součástí skupiny SIT. Hledáte firemní cestování, incentivní zájezdy nebo kongresy?
          </span>
        </div>
        <a
          href="https://www.sittravel.cz"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-[13px] py-2 px-5 shrink-0"
        >
          Navštívit SIT Travel →
        </a>
      </div>
    </section>
  );
}
