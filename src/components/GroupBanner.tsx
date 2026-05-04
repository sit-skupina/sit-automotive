export default function GroupBanner() {
  return (
    <section style={{ background: "var(--sit-bg-secondary)", padding: "16px 0" }}>
      <div className="container-sit flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
        <span className="text-sm text-text-muted">
          SIT Automotive je součástí skupiny SIT. Hledáte firemní cestování?
        </span>
        <a
          href="https://www.sittravel.cz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-primary hover:underline transition-colors shrink-0"
        >
          SIT Travel →
        </a>
      </div>
    </section>
  );
}
