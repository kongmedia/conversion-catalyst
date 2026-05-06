import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "R$ 690",
    desc: "Para distribuidoras começando a profissionalizar a operação.",
    features: [
      "Até 5 representantes",
      "Aplicativo de pedidos",
      "Catálogo offline",
      "Integração com 1 ERP",
      "Suporte por e-mail",
    ],
  },
  {
    name: "Growth",
    price: "R$ 2.490",
    desc: "Operações em crescimento que precisam de visibilidade total.",
    features: [
      "Até 20 representantes",
      "Tudo do Starter",
      "Portal B2B do cliente",
      "Indicadores em tempo real",
      "Roteirização e check-in",
      "Suporte prioritário",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    desc: "Para indústrias e distribuidoras com operação complexa.",
    features: [
      "Representantes ilimitados",
      "Tudo do Growth",
      "Copiloto de vendas IA",
      "Hub de integração full",
      "SLA dedicado e CSM",
    ],
  },
];

export function Plans() {
  return (
    <section id="planos" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-primary mb-4">
            Planos
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink mb-5">
            Preço transparente. <span className="gradient-text">Valor óbvio.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Escolha o plano que cabe na sua operação. Sem fidelidade. Sem letras miúdas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 transition-all hover:-translate-y-1 ${
                p.highlight
                  ? "bg-ink text-white shadow-elevated lg:scale-105"
                  : "bg-card border border-border"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wider">
                  Mais popular
                </div>
              )}
              <div className="font-display text-2xl font-bold mb-2">{p.name}</div>
              <p className={`text-sm mb-6 ${p.highlight ? "text-white/70" : "text-muted-foreground"}`}>
                {p.desc}
              </p>
              <div className="mb-6">
                <span className="font-display text-4xl font-bold">{p.price}</span>
                {p.price.startsWith("R$") && (
                  <span className={`text-sm ml-1 ${p.highlight ? "text-white/60" : "text-muted-foreground"}`}>
                    /mês
                  </span>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${p.highlight ? "text-primary" : "text-primary"}`} />
                    <span className={p.highlight ? "text-white/90" : "text-ink"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold transition ${
                  p.highlight
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-cta"
                    : "bg-ink hover:bg-ink/90 text-white"
                }`}
              >
                Falar com consultor <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
