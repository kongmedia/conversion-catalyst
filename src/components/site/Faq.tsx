import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Quanto tempo leva para implantar o ClicVenda?",
    a: "Em média 30 dias para estar rodando integrado ao seu ERP. Casos simples (Bling, Omie, Tiny) ficam prontos em 7 dias.",
  },
  {
    q: "Meu ERP é compatível?",
    a: "O hub de integração Clic é nativo para Sankhya, TOTVS Protheus/RM, Sênior, SAP B1, WK, Bling, Omie e mais. Se o seu não está na lista, a Clic constrói a integração para você.",
  },
  {
    q: "O app funciona sem internet?",
    a: "Sim. O catálogo, preços e clientes ficam disponíveis offline. Os pedidos sincronizam automaticamente quando o representante voltar a ter sinal.",
  },
  {
    q: "Como é cobrado o ClicVenda?",
    a: "Mensalidade fixa baseada no plano e número de representantes ativos. Sem fidelidade. Sem taxa de implantação na maioria dos planos.",
  },
  {
    q: "Vocês oferecem treinamento?",
    a: "Sim. Treinamento completo para representantes, gestores e back office incluído na implantação. Material em vídeo e suporte humano.",
  },
  {
    q: "Como funciona o suporte?",
    a: "Suporte humano via WhatsApp, e-mail e telefone. Planos Growth e Enterprise contam com CSM dedicado e SLA garantido.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-background" style={{paddingTop:25,paddingBottom:100}}>
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-primary mb-4">
            Perguntas frequentes
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink leading-tight">
            Tirou todas as <span className="gradient-text">dúvidas?</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl overflow-hidden transition hover:border-primary/40"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
              >
                <span className="font-display font-semibold text-ink text-lg">{f.q}</span>
                <Plus
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    open === i ? "rotate-45" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed animate-fade-up">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
