import { Check, Users, BarChart3, Smile, ArrowRight } from "lucide-react";
import { openLeadModal } from "./LeadModal";

const columns = [
  {
    icon: Users,
    audience: "Representantes",
    title: "Ganha tempo",
    subtitle: "Mais visitas, menos burocracia",
    items: [
      "Pedido em segundos, mesmo offline",
      "Carteira e histórico organizados",
      "Catálogo completo no bolso",
      "Comissão calculada na hora",
      "Sem digitação dupla no escritório",
    ],
  },
  {
    icon: BarChart3,
    audience: "Gestores",
    title: "Ganha controle",
    subtitle: "Visão total do que acontece em campo",
    items: [
      "Pedidos em tempo real, sem esperar fechamento",
      "Meta e ranking ao vivo",
      "Roteiro e check-in auditáveis",
      "Análise por região e curva ABC",
      "Política comercial centralizada",
    ],
    highlight: true,
  },
  {
    icon: Smile,
    audience: "Clientes B2B",
    title: "Ganha experiência",
    subtitle: "Atendimento ágil que fideliza",
    items: [
      "Pedido processado em minutos",
      "Histórico de compra disponível na visita",
      "Política comercial sempre correta",
      "Status de entrega e NF online",
    ],
  },
];

export function Plans() {
  return (
    <section id="planos" className="bg-cream" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-primary mb-4">
            App de pedidos
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink mb-5">
            Uma ferramenta. <span className="gradient-text">Três ganhos diferentes.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada perfil da sua operação extrai um valor distinto do mesmo aplicativo.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {columns.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.audience}
                className={`relative rounded-3xl p-8 transition-all hover:-translate-y-1 ${
                  c.highlight
                    ? "bg-ink text-white shadow-elevated lg:scale-105"
                    : "bg-card border border-border"
                }`}
              >
                {c.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wider">
                    Maior impacto
                  </div>
                )}
                <div className={`flex items-center gap-2 text-sm font-semibold mb-3 ${c.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                  <Icon className={`w-5 h-5 ${c.highlight ? "text-white" : "text-primary"}`} />
                  {c.audience}
                </div>
                <div className={`font-display text-2xl font-bold mb-1 ${c.highlight ? "text-white" : "text-ink"}`}>{c.title}</div>
                <p className={`text-sm mb-6 ${c.highlight ? "text-white/80" : "text-muted-foreground"}`}>{c.subtitle}</p>
                <ul className="space-y-3 mb-8">
                  {c.items.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${c.highlight ? "text-white" : "text-primary"}`} />
                      <span className={c.highlight ? "text-white" : "text-ink"}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={openLeadModal}
            className="inline-flex items-center gap-2 px-7 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full transition shadow-cta hover:scale-[1.02]"
          >
            FALAR COM CONSULTOR <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
