import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("sit_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("sit_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("sit_cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-[460px] z-50 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="bg-[#1A1A1A] text-white p-5 rounded-2xl border border-white/15 shadow-2xl backdrop-blur-lg">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-primary/20 text-primary rounded-lg shrink-0 mt-0.5">
            <Cookie size={20} />
          </div>
          <div className="flex-1 pr-2">
            <h4 className="text-white text-base font-semibold mb-1">Nastavení cookies</h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Tento web používá soubory cookie pro zajištění správné funkčnosti a zlepšení uživatelského zážitku.{" "}
              <Link to="/ochrana-osobnich-udaju" className="text-primary underline hover:text-primary-hover">
                Více informací
              </Link>
            </p>
          </div>
          <button
            onClick={handleDecline}
            className="text-white/40 hover:text-white transition-colors p-1 rounded-lg"
            aria-label="Zavřít"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-end gap-2 pt-3 border-t border-white/10">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-xs font-medium text-white/70 hover:text-white transition-colors rounded-lg"
          >
            Odmítnout
          </button>
          <button
            onClick={handleAccept}
            className="btn-primary py-2 px-5 text-xs font-semibold rounded-lg"
          >
            Přijmout vše
          </button>
        </div>
      </div>
    </div>
  );
}
