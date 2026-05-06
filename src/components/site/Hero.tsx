import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="absolute inset-0 dot-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-soft text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Plataforma N°1 de força de vendas para distribuidoras
          </div>

          <h1 className="font-display font-bold leading-[1.02] text-ink mb-6" style={{ fontSize: "58px" }}>
            Tire pedidos em <span className="gradient-text italic">segundos</span>.
            <br />
            Não em horas.
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-9">
            O <strong className="text-ink">ClicVenda</strong> transforma o pedido por WhatsApp em
            um fluxo automatizado entre representante, ERP e cliente.
            <span className="block mt-1">Sem retrabalho. Sem erro. Sem cliente esperando.</span>
          </p>

          <div className="flex flex-wrap items-center gap-5 mb-12">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-7 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full transition shadow-cta hover:scale-[1.02] hover:shadow-elevated"
            >
              Agendar demonstração gratuita <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "200ms" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent blur-2xl" />
          <img
            src={heroMockup}
            alt="App ClicVenda em smartphone mostrando tela de pedido"
            width={1024}
            height={1024}
            className="relative w-full max-w-md mx-auto animate-float drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
