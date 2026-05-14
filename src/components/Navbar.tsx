import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import sitLogo from "@/assets/sit-logo.png";
import sitLogoWhite from "@/assets/white sitautomotive.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { to: "/", hash: "vozovy-park", label: "Mercedes-Benz a BMW" },
    { to: "/", hash: "pronajmy", label: "Pronájmy" },
    { to: "/kontakt", label: "Kontakt" },
  ];

  const isKontakt = location.pathname === "/kontakt";

  return (
    <>
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div
          className="flex items-center justify-center py-1"
          style={{
            background: mobileOpen ? "#111" : scrolled ? "#F7F5F0" : "transparent",
            fontSize: 11, fontWeight: 500,
            transition: "background 0.3s",
          }}
        >
          <span style={{ color: mobileOpen ? "rgba(255,255,255,0.4)" : scrolled ? "var(--sit-text-muted)" : "rgba(255,255,255,0.5)" }} className="transition-colors">
            Skupina SIT ·{" "}
          </span>
          <a
            href="https://www.sittravel.cz"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors ml-1"
            style={{ color: mobileOpen ? "rgba(255,255,255,0.4)" : scrolled ? "var(--sit-text-muted)" : "rgba(255,255,255,0.5)" }}
          >
            SIT Travel
          </a>
        </div>

        <nav
          className="transition-all duration-300"
          style={{
            height: 72,
            background: mobileOpen ? "#111" : scrolled ? "rgba(255,255,255,0.92)" : "transparent",
            backdropFilter: scrolled && !mobileOpen ? "blur(16px)" : "none",
            WebkitBackdropFilter: scrolled && !mobileOpen ? "blur(16px)" : "none",
            borderBottom: scrolled && !mobileOpen ? "1px solid var(--border)" : "1px solid transparent",
            boxShadow: scrolled && !mobileOpen ? "0 2px 24px rgba(0,0,0,0.07)" : "none",
          }}
        >
          <div className="container-sit h-full flex items-center justify-between">
            <Link to="/" className="flex items-center" style={{ zIndex: 60, position: "relative" }}>
              <img
                src={scrolled || isKontakt || mobileOpen ? sitLogo : sitLogoWhite}
                alt="SIT Automotive"
                style={{ height: 35, filter: mobileOpen ? "brightness(0) invert(1)" : "none", transition: "filter 0.3s" }}
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  hash={l.hash}
                  className="text-[15px] font-medium transition-colors"
                  style={{
                    color: location.pathname === l.to && (!l.hash || location.hash === l.hash)
                      ? "var(--primary)"
                      : scrolled ? "var(--sit-text)" : "#FFFFFF",
                  }}
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/kontakt" className="btn-primary text-[15px] py-2.5 px-6">
                Rezervovat vůz
              </Link>
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden p-2 relative z-[60]"
              style={{ color: mobileOpen || scrolled ? (mobileOpen ? "#fff" : "var(--sit-text)") : "#fff" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Zavřít menu" : "Otevřít menu"}
            >
              <span style={{ display: "block", transition: "opacity 0.25s, transform 0.25s", opacity: mobileOpen ? 0 : 1, transform: mobileOpen ? "rotate(90deg)" : "rotate(0)", position: "absolute", top: 8, left: 8 }}>
                <Menu size={24} />
              </span>
              <span style={{ display: "block", transition: "opacity 0.25s, transform 0.25s", opacity: mobileOpen ? 1 : 0, transform: mobileOpen ? "rotate(0)" : "rotate(-90deg)" }}>
                <X size={24} />
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Full-screen mobile menu */}
      <div
        className="fixed inset-0 z-40 md:hidden"
        style={{
          background: "#111111",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "all" : "none",
          transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <nav className="flex flex-col items-center gap-10 w-full px-8">
          {navLinks.map((l, i) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              onClick={() => setMobileOpen(false)}
              className="text-white hover:text-primary transition-colors text-3xl font-medium text-center"
              style={{
                fontFamily: "var(--font-heading)",
                letterSpacing: "0.02em",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${0.12 + i * 0.09}s, transform 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${0.12 + i * 0.09}s, color 0.2s`,
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/kontakt"
            onClick={() => setMobileOpen(false)}
            className="btn-primary px-10 py-4 text-lg mt-4"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.5s ease 0.42s, transform 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.42s`,
            }}
          >
            Rezervovat vůz
          </Link>
        </nav>
        <div
          className="absolute bottom-8 text-center"
          style={{
            opacity: mobileOpen ? 0.3 : 0,
            transition: "opacity 0.5s ease 0.5s",
          }}
        >
          <span className="text-white text-xs uppercase tracking-[0.25em]">SIT Automotive s.r.o.</span>
        </div>
      </div>
    </>
  );
}
