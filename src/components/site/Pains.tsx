import {
  MessageSquare,
  PackageX,
  Tag,
  Hourglass,
  Eye,
  Layers,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Pain = {
  icon: LucideIcon;
  title: string;
  desc: string;
  metric: string;
};

const pains: Pain[] = [
  {
    icon: MessageSquare,
    title: "Pedido por WhatsApp",
    desc: "Seu rep tira pedido no WhatsApp. O back office redigita no ERP. Erros viram retrabalho.",
    metric: "Até 3 horas perdidas por dia",
  },
  {
    icon: PackageX,
    title: "Venda sem estoque",
    desc: "Rep vende o que não tem. Cliente espera. Pedido cancelado. Margem evapora.",
    metric: "2% do faturamento em cancelamentos",
  },
  {
    icon: Tag,
    title: "Preço diferente por cliente",
    desc: "Tabela na cabeça. Regra na planilha. Cada rep aplica desconto do jeito que acha.",
    metric: "Até 33% de margem queimada",
  },
  {
    icon: Hourglass,
    title: "Pedido demora dias",
    desc: "Do pedido ao faturamento, o cliente espera. E enquanto espera, compra do concorrente.",
    metric: "1% do faturamento perdido",
  },
  {
    icon: Eye,
    title: "Sem visibilidade",
    desc: "Você só sabe se bateu meta no fim do mês. Quando descobre, é tarde para corrigir.",
    metric: "Decisões com 72h de atraso",
  },
  {
    icon: Layers,
    title: "Múltiplas ferramentas",
    desc: "WhatsApp + Excel + e-mail + ERP. Seu rep gasta meio dia trocando de tela.",
    metric: "30 minutos perdidos por rep/dia",
  },
];

export function Pains() {
  return (
    <section id="dores" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-primary mb-4">
            O Problema
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink mb-5 leading-tight">
            Sua operação está sangrando.
            <br />
            <span className="gradient-text">Você só não sabe quanto.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Mapeamos as 6 dores que custam mais caro nas distribuidoras brasileiras.
            Você vai reconhecer todas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pains.map((p, i) => (
            <article
              key={p.title}
              className="group bg-card border border-border rounded-3xl p-7 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated transition-all duration-300"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="w-12 h-12 bg-primary flex items-center justify-center mb-5" style={{ borderRadius: "5px" }}>
                <p.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-ink mb-2">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-5">{p.desc}</p>
              <div className="font-mono text-sm font-bold text-primary border-t border-border pt-4">
                {p.metric}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
