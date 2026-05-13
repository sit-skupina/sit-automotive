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

  const navLinks = [
    { to: "/", hash: "vozovy-park", label: "Mercedes-Benz a BMW" },
    { to: "/", hash: "pronajmy", label: "Pronájmy" },
    { to: "/kontakt", label: "Kontakt" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <div
          className="flex items-center justify-center py-1"
          style={{ background: scrolled ? "#F7F5F0" : "transparent", fontSize: 11, fontWeight: 500, transition: "background 0.2s" }}
        >
          <span style={{ color: scrolled ? "var(--sit-text-muted)" : "rgba(255,255,255,0.5)" }} className="transition-colors">Skupina SIT · </span>
          <a
            href="https://www.sittravel.cz"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors ml-1"
            style={{ color: scrolled ? "var(--sit-text-muted)" : "rgba(255,255,255,0.5)" }}
          >
            SIT Travel
          </a>
        </div>
        <nav
          className="transition-all duration-300"
          style={{
            height: 72,
            background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
            backdropFilter: scrolled ? "blur(16px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
            borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
            boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.07)" : "none",
          }}
        >
          <div className="container-sit h-full flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src={scrolled || location.pathname === "/kontakt" ? sitLogo : sitLogoWhite} alt="SIT Automotive" style={{ height: 35 }} />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  hash={l.hash}
                  className="text-[15px] font-medium transition-colors"
                  style={{
                    color: location.pathname === l.to && (!l.hash || location.hash === l.hash) ? "var(--primary)" : scrolled ? "var(--sit-text)" : "#FFFFFF",
                  }}
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/kontakt" className="btn-primary text-[15px] py-2.5 px-6">
                Rezervovat vůz
              </Link>
            </div>

            <button
              className="md:hidden p-2 transition-colors"
              style={{ color: scrolled ? "var(--sit-text)" : "#FFFFFF" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-[100px] px-6 flex flex-col gap-6 md:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              className="text-lg font-medium py-2 border-b border-border"
              style={{ color: location.pathname === l.to && (!l.hash || location.hash === l.hash) ? "var(--primary)" : "var(--sit-text)" }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/kontakt" className="btn-primary text-center mt-4">
            Rezervovat vůz
          </Link>
        </div>
      )}
    </>
  );
}
