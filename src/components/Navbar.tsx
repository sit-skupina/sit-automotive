import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import sitLogo from "@/assets/sit-logo.png";

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
    { to: "/autopujcovna" as const, label: "Autopůjčovna" },
    { to: "/dlouhodoby-pronajem" as const, label: "Dlouhodobý pronájem" },
    { to: "/kontakt" as const, label: "Kontakt" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <div
          className="flex items-center justify-center py-1"
          style={{ background: scrolled ? "#F7F5F0" : "rgba(247,245,240,0.8)", fontSize: 11, fontWeight: 500 }}
        >
          <span className="text-text-muted">Skupina SIT · </span>
          <a
            href="https://www.sittravel.cz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary ml-1 transition-colors"
          >
            SIT Travel
          </a>
        </div>
        <nav
          className="transition-all duration-200"
          style={{
            height: 72,
            background: scrolled ? "#FFFFFF" : "transparent",
            borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          }}
        >
          <div className="container-sit h-full flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src={sitLogo} alt="SIT Automotive" className="h-7 bg-white rounded-full p-1" />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-[15px] font-medium transition-colors"
                  style={{
                    color: location.pathname === l.to ? "var(--primary)" : scrolled ? "var(--sit-text)" : "var(--sit-text)",
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
              className="md:hidden p-2"
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
              key={l.to}
              to={l.to}
              className="text-lg font-medium py-2 border-b border-border"
              style={{ color: location.pathname === l.to ? "var(--primary)" : "var(--sit-text)" }}
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
