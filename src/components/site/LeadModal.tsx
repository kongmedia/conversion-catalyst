import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

declare global {
  interface Window {
    RDStationForms?: new (id: string, token: string | null) => { createForm: () => void };
  }
}

const FORM_ID = "qualificacao-lead-site-74d4761c8872d7ba03f1";
const SCRIPT_SRC = "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";

export function openLeadModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-lead-modal"));
  }
}

export function LeadModal() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-lead-modal", handler);
    return () => window.removeEventListener("open-lead-modal", handler);
  }, []);

  useEffect(() => {
    if (!open || mountedRef.current) return;
    const init = () => {
      if (window.RDStationForms && containerRef.current) {
        containerRef.current.innerHTML = `<div role="main" id="${FORM_ID}"></div>`;
        new window.RDStationForms(FORM_ID, null).createForm();
        mountedRef.current = true;
      }
    };
    if (window.RDStationForms) {
      init();
    } else {
      const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`) as HTMLScriptElement | null;
      if (existing) {
        existing.addEventListener("load", init, { once: true });
      } else {
        const s = document.createElement("script");
        s.src = SCRIPT_SRC;
        s.onload = init;
        document.head.appendChild(s);
      }
    }
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Fechar"
          className="absolute top-3 right-3 z-10 w-9 h-9 inline-flex items-center justify-center rounded-full bg-muted hover:bg-border text-ink transition"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="p-6 md:p-8">
          <h3 className="font-display text-2xl font-bold text-ink mb-1">Agende sua demonstração</h3>
          <p className="text-sm text-muted-foreground mb-5">
            Preencha os dados abaixo e um especialista entra em contato.
          </p>
          <div ref={containerRef} className="rd-form-wrapper min-h-[200px]" />
        </div>
      </div>
    </div>
  );
}
