import { Smartphone, Database, Globe, ArrowRight } from "lucide-react";
import { openLeadModal } from "./LeadModal";

const steps = [
  {
    n: "01",
    icon: Smartphone,
    title: "Representante tira pedido no app",
    desc: "Catálogo, estoque e tabela de preços corretos por cliente. Validação em tempo real. Sem erro de digitação.",
  },
  {
    n: "02",
    icon: Database,
    title: "Pedido entra no ERP automaticamente",
    desc: "Hub de integração nativo Clic envia o pedido direto para o seu ERP — sem redigitação, sem planilha, sem WhatsApp.",
  },
  {
    n: "03",
    icon: Globe,
    title: "Cliente acompanha pelo Portal B2B",
    desc: "Status, NF, boleto, histórico. O cliente se atende sozinho. Você libera o back office para o que importa.",
  },
];

export function Solution() {
  return (
    <section id="solucao" className="bg-cream relative overflow-hidden" style={{paddingTop:100,paddingBottom:100}}>
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-primary mb-4">
            Como Funciona
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink mb-5 leading-tight">
            Um app. Três cliques.
            <br />
            Pedido <span className="gradient-text">faturado em minutos</span>.
          </h2>
          <p className="text-lg text-muted-foreground">
            O ClicVenda elimina o intermediário humano entre o representante e o ERP.
            Tudo flui em tempo real.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="bg-background border border-border rounded-3xl p-8 h-full hover:shadow-elevated transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-5xl font-bold text-primary/20">{s.n}</span>
                  <div className="w-12 h-12 flex items-center justify-center bg-primary" style={{ borderRadius: "5px" }}>
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-ink mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <button
            onClick={openLeadModal}
            className="inline-flex items-center gap-2 px-7 py-4 bg-ink hover:bg-ink/90 text-primary-foreground font-semibold rounded-full transition shadow-soft"
          >
            VER DEMONSTRAÇÃO AO VIVO <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
