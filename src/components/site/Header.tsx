import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "@/assets/clic-logo.webp";
import { openLeadModal } from "./LeadModal";

const links = [
  { href: "#dores", label: "O Problema" },
  { href: "#solucao", label: "Solução" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#calculadora", label: "Calculadora" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-primary text-primary-foreground text-center text-sm py-2 px-4">
        Veja uma demonstração grátis.{" "}
        <button onClick={openLeadModal} className="font-semibold underline-offset-4 hover:underline">
          ACESSAR →
        </button>
      </div>
      <header
        className={`sticky top-0 z-40 transition-all bg-white ${
          scrolled ? "backdrop-blur-md border-b border-border shadow-soft" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-18 py-3 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center">
            <img src={logo} alt="Clic Tecnologia" className="h-9 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-sm text-ink">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="font-medium hover:text-primary transition">
                {l.label}
              </a>
            ))}
          </nav>

          <button
            onClick={openLeadModal}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold rounded-full transition shadow-cta"
          >
            DEMONSTRAÇÃO GRÁTIS <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-ink"
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-white">
            <nav className="flex flex-col p-4 gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg hover:bg-muted text-ink font-medium"
                >
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => { setOpen(false); openLeadModal(); }}
                className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-full"
              >
                DEMONSTRAÇÃO GRÁTIS <ArrowUpRight className="w-4 h-4" />
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
