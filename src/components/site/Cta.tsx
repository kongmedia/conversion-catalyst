import { ArrowRight, ShieldCheck, Clock, Lock } from "lucide-react";
import { openLeadModal } from "./LeadModal";

export function Cta() {
  return (
    <section id="cta" className="bg-ink text-white relative overflow-hidden" style={{paddingTop:100,paddingBottom:100}}>
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-primary mb-4">
          Vamos começar
        </div>
        <h2 className="font-display text-4xl lg:text-6xl font-bold leading-[1.05] mb-6">
          Pronto para impulsionar suas <span className="gradient-text">vendas?</span>
        </h2>
        <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
          Em 30 minutos, um especialista da Clic te mostra como o ClicVenda funcionaria
          na sua operação. Sem compromisso. Sem custo.
        </p>

        <div className="flex justify-center mb-10">
          <button
            onClick={openLeadModal}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full transition shadow-cta hover:scale-[1.02]"
          >
            QUERO VER O CLICVENDA EM AÇÃO <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/80">
          <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Seus dados estão seguros</li>
          <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Resposta em até 1 hora útil</li>
          <li className="flex items-center gap-2"><Lock className="w-4 h-4 text-primary" /> Conformidade com a LGPD</li>
        </ul>
      </div>
    </section>
  );
}
