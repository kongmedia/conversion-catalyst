import { ArrowRight } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";
import { openLeadModal } from "./LeadModal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="absolute inset-0 dot-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="lg:col-span-6 animate-fade-up text-center lg:text-left">
          <div className="inline-block px-4 py-2.5 bg-primary text-primary-foreground rounded-[5px] text-xs font-bold uppercase tracking-wider mb-6 leading-snug">
            Plataforma N°1 de força de vendas para distribuidoras
          </div>

          <h1 className="font-display font-bold leading-[1.05] text-ink mb-6 text-[40px] sm:text-5xl lg:text-[58px]">
            Tire pedidos
            <br />
            em <span className="text-primary">segundos</span>,
            <br />
            não em horas.
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-9">
            O <strong className="text-ink">ClicVenda</strong> transforma o pedido por WhatsApp em
            um fluxo automatizado entre representante, ERP e cliente.
            <span className="block mt-1">Sem retrabalho. Sem erro. Sem cliente esperando.</span>
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mb-4">
            <button
              onClick={openLeadModal}
              className="inline-flex items-center gap-2 px-7 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full transition shadow-cta hover:scale-[1.02] hover:shadow-elevated"
            >
              AGENDAR DEMONSTRAÇÃO GRATUITA <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "200ms" }}>
          <img
            src={heroMockup}
            alt="App ClicVenda em smartphone mostrando tela de pedido"
            className="relative w-full max-w-[576px] lg:max-w-[720px] mx-auto animate-float"
          />
        </div>
      </div>
    </section>
  );
}
