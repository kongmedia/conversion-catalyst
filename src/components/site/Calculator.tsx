import { useState, useMemo } from "react";
import {
  TrendingUp, AlertCircle, Package, DollarSign, MessageSquare,
  ChevronRight, ArrowUpRight, Sparkles, Database, Eye, Tag, Lock,
  Workflow, ClipboardList, BarChart3, GitMerge, Hourglass,
  Layers, RefreshCw, ListChecks, AlertTriangle, RadioTower,
  type LucideIcon,
} from "lucide-react";
import { openLeadModal } from "./LeadModal";

type Severity = "alto" | "medio";
type Pain = {
  n: string; pilar: string; icon: LucideIcon; sev: Severity; persona: string;
  title: string; subtitle: string; valor: number; modulo: string; metrica: string;
};
type Pilar = {
  id: string; num: string; title: string; desc: string;
  color: string; colorSoft: string;
  itens: Pain[]; total: number; qtdAlto: number; qtdMedio: number;
};

export function Calculator() {
  const [faturamento, setFaturamento] = useState(15);
  const [representantes, setRepresentantes] = useState(7);
  const [pedidosDiaRep, setPedidosDiaRep] = useState(8);
  const diasUteis = 22;
  const [custoBackOfficeHora, setCustoBackOfficeHora] = useState(36);
  const [investimentoMensal, setInvestimentoMensal] = useState(4500);

  const [showAdvanced, setShowAdvanced] = useState(false);
  const [tempoRetrabalhoMin, setTempoRetrabalhoMin] = useState(10);
  const [margemBruta, setMargemBruta] = useState(25);
  const [pedidosPerdidosPct, setPedidosPerdidosPct] = useState(2);
  const [margemPerdidaPct, setMargemPerdidaPct] = useState(1);

  const [pilaresAbertos, setPilaresAbertos] = useState<Record<string, boolean>>({
    p1: true, p2: false, p3: false, p4: false,
  });
  const togglePilar = (id: string) =>
    setPilaresAbertos((prev) => ({ ...prev, [id]: !prev[id] }));

  const calculos = useMemo(() => {
    const fatAnual = faturamento * 1_000_000;
    const pedidosAno = representantes * pedidosDiaRep * diasUteis * 12;
    const ticketMedio = pedidosAno > 0 ? fatAnual / pedidosAno : 0;

    const d01 = pedidosAno * (tempoRetrabalhoMin / 60) * 0.8 * custoBackOfficeHora;
    const d02 = pedidosAno * (5 / 60) * 0.95 * custoBackOfficeHora;
    const d03 = fatAnual * 0.01 * (margemBruta / 100) * 0.5;
    const d04 = fatAnual * 0.02 * (margemBruta / 100) * 0.7;
    const d05 = fatAnual * (margemPerdidaPct / 100) * 0.5 * 0.6;
    const d06 = representantes * 200 * 12 + representantes * 0.5 * custoBackOfficeHora * diasUteis * 12;

    const d07 = fatAnual * 0.01 * 0.3;
    const d08 = fatAnual * 0.005 * 0.8;
    const d09 = fatAnual * 0.003 * 0.6;
    const d10 = fatAnual * 0.005 * 0.5;

    const d11 = fatAnual * 0.005 * 0.4;
    const d12 = fatAnual * (pedidosPerdidosPct / 100) * 0.5 * (margemBruta / 100);
    const d13 = pedidosAno * 0.001 * 50 + 60 * custoBackOfficeHora * 0.8;
    const d14 = fatAnual * 0.01 * (margemBruta / 100) * 0.6;
    const d15 = fatAnual * (margemPerdidaPct / 100) * 0.5 * 0.6;

    const d16 = representantes * 0.2 * 3 * 5000 * 0.7;
    const d17 = pedidosAno * (3 / 60) * 0.7 * custoBackOfficeHora;
    const d18 = fatAnual * 0.005 * (margemBruta / 100) * 0.4;
    const d19 = fatAnual * 0.005 * 0.7;
    const d20 = fatAnual * 0.005 * 0.5;

    const dores: Pain[] = [
      { n: "01", pilar: "p1", icon: MessageSquare, sev: "alto", persona: "Representante Externo",
        title: "Pedido anotado errado", subtitle: "WhatsApp / papel / planilha",
        valor: d01, modulo: "Aplicativo de pedidos",
        metrica: `${Math.round(pedidosAno * (tempoRetrabalhoMin / 60) * 0.8).toLocaleString("pt-BR")}h economizadas/ano` },
      { n: "02", pilar: "p1", icon: RefreshCw, sev: "alto", persona: "Back Office",
        title: "Retrabalho no ERP", subtitle: "Redigitação manual",
        valor: d02, modulo: "Hub de integração",
        metrica: "95% de redução com integração nativa" },
      { n: "03", pilar: "p1", icon: Hourglass, sev: "alto", persona: "Cliente B2B",
        title: "Pedido demora", subtitle: "Tempo até faturamento",
        valor: d03, modulo: "Aplicativo + Hub",
        metrica: "Cliente compra do concorrente em 1% do fat." },
      { n: "04", pilar: "p1", icon: Package, sev: "alto", persona: "Comercial",
        title: "Venda sem estoque", subtitle: "Cancelamento de pedidos",
        valor: d04, modulo: "Aplicativo de pedidos",
        metrica: "Estoque em tempo real evita 70% dos cancelamentos" },
      { n: "05", pilar: "p1", icon: Tag, sev: "alto", persona: "Comercial",
        title: "Preço divergente", subtitle: "Tabela errada por cliente/rede",
        valor: d05, modulo: "Copiloto de vendas",
        metrica: "Política comercial aplicada automaticamente" },
      { n: "06", pilar: "p1", icon: Layers, sev: "medio", persona: "TI / Comercial",
        title: "Múltiplas ferramentas", subtitle: "WhatsApp + Excel + e-mail + ERP",
        valor: d06, modulo: "Plataforma única Clic",
        metrica: `R$ ${(representantes * 200).toLocaleString("pt-BR")}/mês em licenças` },

      { n: "07", pilar: "p2", icon: Database, sev: "alto", persona: "Comercial",
        title: "Sem histórico de cliente", subtitle: "Visita sem contexto",
        valor: d07, modulo: "Indicadores + Portal", metrica: "LTV não capturado" },
      { n: "08", pilar: "p2", icon: BarChart3, sev: "alto", persona: "Controladoria",
        title: "Erro em cálculos", subtitle: "Comissão / margem manual",
        valor: d08, modulo: "Indicadores de vendas", metrica: "0,5% do fat. em distorções" },
      { n: "09", pilar: "p2", icon: Eye, sev: "alto", persona: "Gestor Comercial",
        title: "Sem visibilidade de pedidos", subtitle: "Decisão com 24-72h de atraso",
        valor: d09, modulo: "Indicadores de vendas", metrica: "Decisões mal alocadas" },
      { n: "10", pilar: "p2", icon: GitMerge, sev: "alto", persona: "Diretoria",
        title: "Dados espalhados", subtitle: "Sem fonte única de verdade",
        valor: d10, modulo: "Hub de integração", metrica: "Exposição a fraude e LGPD" },

      { n: "11", pilar: "p3", icon: ClipboardList, sev: "medio", persona: "Equipe",
        title: "Cadastro incompleto", subtitle: "CNPJ, crédito, fiscal vazios",
        valor: d11, modulo: "Portal do cliente", metrica: "40% do LTV potencial não capturado" },
      { n: "12", pilar: "p3", icon: AlertCircle, sev: "alto", persona: "Comercial",
        title: "Pedidos perdidos", subtitle: "Atraso no atendimento",
        valor: d12, modulo: "Marketplace e e-commerce", metrica: "50% dos pedidos resgatados" },
      { n: "13", pilar: "p3", icon: RadioTower, sev: "alto", persona: "Operações",
        title: "Baixa rastreabilidade", subtitle: "Auditoria difícil",
        valor: d13, modulo: "Indicadores + Hub", metrica: "Trilha de auditoria garantida" },
      { n: "14", pilar: "p3", icon: Hourglass, sev: "medio", persona: "Gestor",
        title: "Atraso na aprovação", subtitle: "Pedido travado em workflow",
        valor: d14, modulo: "Aplicativo de pedidos", metrica: "60% dos cancelamentos evitados" },
      { n: "15", pilar: "p3", icon: DollarSign, sev: "alto", persona: "Comercial",
        title: "Descontos indevidos", subtitle: "Acima do limite sem aprovação",
        valor: d15, modulo: "Copiloto de vendas", metrica: "Margem 18% → 12% sem controle" },

      { n: "16", pilar: "p4", icon: Workflow, sev: "medio", persona: "Operações",
        title: "Falta de padrão", subtitle: "Cada rep faz diferente",
        valor: d16, modulo: "Aplicativo + Copiloto", metrica: "Onboarding 4-6 sem (vs 4-6 meses)" },
      { n: "17", pilar: "p4", icon: ListChecks, sev: "medio", persona: "Back Office",
        title: "Conferência manual", subtitle: "Validação de regras",
        valor: d17, modulo: "Hub de integração", metrica: "Apenas exceções sobem ao back office" },
      { n: "18", pilar: "p4", icon: AlertTriangle, sev: "alto", persona: "Cliente",
        title: "Comunicação falha", subtitle: "Promessa quebrada → churn",
        valor: d18, modulo: "Portal do cliente", metrica: "Cliente acompanha em tempo real" },
      { n: "19", pilar: "p4", icon: Lock, sev: "alto", persona: "Empresa",
        title: "Vazamento de dados", subtitle: "LGPD + breach",
        valor: d19, modulo: "Hub seguro Clic", metrica: "IBM 2023: R$ 6,75M custo médio Brasil" },
      { n: "20", pilar: "p4", icon: TrendingUp, sev: "medio", persona: "Diretoria",
        title: "Sem visão estratégica", subtitle: "Decisão estratégica às cegas",
        valor: d20, modulo: "Indicadores de vendas", metrica: "Empresas data-driven crescem 3× mais rápido" },
    ];

    const ganhoTotal = dores.reduce((s, d) => s + d.valor, 0);
    const investimentoAnual = investimentoMensal * 12;
    const ganhoLiquido = ganhoTotal - investimentoAnual;
    const roi = (ganhoLiquido / investimentoAnual) * 100;
    const paybackMeses = investimentoAnual / (ganhoTotal / 12);

    const pilares: Pilar[] = (
      [
        { id: "p1", num: "01–06", title: "Pedidos & Operação", desc: "Erros, retrabalho e atrasos", color: "var(--primary)", colorSoft: "var(--primary-soft)" },
        { id: "p2", num: "07–10", title: "Dados & Visibilidade", desc: "Falta de histórico e dados", color: "#2563EB", colorSoft: "#EFF6FF" },
        { id: "p3", num: "11–15", title: "Rastreabilidade & Controle", desc: "Cadastros e governança", color: "#7C3AED", colorSoft: "#F5F3FF" },
        { id: "p4", num: "16–20", title: "Governança & Segurança", desc: "Padrão e segurança", color: "#10B981", colorSoft: "#ECFDF5" },
      ] as const
    ).map((p) => {
      const itens = dores.filter((d) => d.pilar === p.id);
      return {
        ...p,
        itens,
        total: itens.reduce((s, d) => s + d.valor, 0),
        qtdAlto: itens.filter((d) => d.sev === "alto").length,
        qtdMedio: itens.filter((d) => d.sev === "medio").length,
      };
    });

    return { pedidosAno, ticketMedio, dores, pilares, ganhoTotal, investimentoAnual, ganhoLiquido, roi, paybackMeses };
  }, [faturamento, representantes, pedidosDiaRep, custoBackOfficeHora, investimentoMensal,
      tempoRetrabalhoMin, margemBruta, pedidosPerdidosPct, margemPerdidaPct]);

  const fmt = (v: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(v);
  const fmtCompact = (v: number) => {
    if (v >= 1_000_000) return `R$ ${(v / 1_000_000).toFixed(2)}M`;
    if (v >= 1_000) return `R$ ${(v / 1_000).toFixed(0)}k`;
    return fmt(v);
  };

  const roiDisplay = calculos.roi > 999
    ? { value: (calculos.roi / 100).toFixed(0), unit: "x", sub: "vezes o investimento" }
    : { value: calculos.roi.toFixed(0), unit: "%", sub: "no primeiro ano" };

  return (
    <section id="calculadora" className="bg-cream relative overflow-hidden" style={{paddingTop:100,paddingBottom:100}}>
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-12 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-soft text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Calculadora · 20 dores · 4 pilares
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink leading-[1.1] mb-5">
            Quanto a sua operação está
            <br />
            <span className="gradient-text">perdendo agora?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Configure seu cenário com 4 ajustes simples e veja o ROI estimado de adotar o ClicVenda.
            Cálculo baseado em benchmarks de mais de 500 distribuidoras brasileiras.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* LEFT */}
          <div className="lg:col-span-5 space-y-5">
            <Card>
              <CardHeader number="01" title="Sua operação hoje" />
              <div className="space-y-6 mt-6">
                <SliderInput label="Faturamento anual" value={faturamento} onChange={setFaturamento}
                  min={5} max={100} step={1} format={(v) => `R$ ${v.toFixed(0)}M`} />
                <SliderInput label="Representantes comerciais" value={representantes} onChange={setRepresentantes}
                  min={3} max={100} step={1} format={(v) => `${v} reps`} />
                <SliderInput label="Pedidos por representante / dia" value={pedidosDiaRep} onChange={setPedidosDiaRep}
                  min={3} max={100} step={1} format={(v) => `${v} pedidos`} />
                <SliderInput label="Custo/hora do back office" value={custoBackOfficeHora} onChange={setCustoBackOfficeHora}
                  min={20} max={100} step={2} format={(v) => `R$ ${v}/h`} />
              </div>
              <div className="mt-6 pt-5 border-t border-border grid grid-cols-2 gap-3">
                <Mini label="Pedidos/ano" value={calculos.pedidosAno.toLocaleString("pt-BR")} />
                <Mini label="Ticket médio" value={fmtCompact(calculos.ticketMedio)} />
              </div>
            </Card>

            <Card>
              <CardHeader number="02" title="Investimento Clic" />
              <div className="mt-6">
                <SliderInput label="Mensalidade ClicTecnologia" value={investimentoMensal} onChange={setInvestimentoMensal}
                  min={690} max={35000} step={100} format={(v) => fmt(v)} />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2">
                <Mini label="Anual" value={fmt(calculos.investimentoAnual)} />
                <Mini label="% do faturamento" value={`${((calculos.investimentoAnual / (faturamento * 1_000_000)) * 100).toFixed(2)}%`} />
              </div>
            </Card>

            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="w-full text-left bg-card border border-border hover:border-primary p-4 rounded-2xl transition flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary-soft text-primary font-bold">03</span>
                <span className="text-sm font-semibold text-ink">Premissas avançadas</span>
              </div>
              <ChevronRight className={`w-4 h-4 text-muted-foreground transition ${showAdvanced ? "rotate-90" : ""}`} />
            </button>

            {showAdvanced && (
              <Card>
                <div className="space-y-5">
                  <SliderInput small label="Tempo de retrabalho/pedido" value={tempoRetrabalhoMin}
                    onChange={setTempoRetrabalhoMin} min={3} max={25} step={1} format={(v) => `${v} min`} />
                  <SliderInput small label="Margem bruta" value={margemBruta}
                    onChange={setMargemBruta} min={10} max={50} step={1} format={(v) => `${v}%`} />
                  <SliderInput small label="Pedidos perdidos" value={pedidosPerdidosPct}
                    onChange={setPedidosPerdidosPct} min={0.5} max={5} step={0.1} format={(v) => `${v}% fat.`} />
                  <SliderInput small label="Margem perdida em precificação" value={margemPerdidaPct}
                    onChange={setMargemPerdidaPct} min={0.2} max={3} step={0.1} format={(v) => `${v}% fat.`} />
                </div>
              </Card>
            )}
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7 space-y-5">
            {/* Hero ROI */}
            <div className="relative overflow-hidden rounded-3xl p-8 md:p-10 bg-ink text-white">
              <div className="absolute top-0 right-0 w-96 h-96 opacity-20 blur-3xl rounded-full bg-primary -translate-y-1/3 translate-x-1/3" />
              <div className="absolute bottom-4 right-12 opacity-[0.06]">
                <TrendingUp className="w-32 h-32" strokeWidth={0.8} />
              </div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  <div className="text-[11px] uppercase tracking-[0.2em] font-mono text-primary font-semibold">
                    Retorno sobre Investimento
                  </div>
                </div>
                <div className="flex items-baseline gap-5 mb-8 flex-wrap">
                  <div className="font-display text-7xl md:text-8xl font-bold leading-none">
                    {roiDisplay.value}<span className="text-4xl md:text-5xl font-light text-primary">{roiDisplay.unit}</span>
                  </div>
                  <div className="text-sm text-white/60 font-medium">
                    {roiDisplay.sub}<br />
                    <span className="text-white/40 text-xs">somando 20 dores mapeadas</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  <HeroStat label="Ganho anual" value={fmtCompact(calculos.ganhoTotal)} />
                  <HeroStat label="Líquido" value={fmtCompact(calculos.ganhoLiquido)} highlight />
                  <HeroStat label="Payback"
                    value={calculos.paybackMeses < 1 ? "< 1 mês" : `${calculos.paybackMeses.toFixed(1)} meses`} />
                </div>
              </div>
            </div>

            {/* Pilares */}
            <div className="space-y-3">
              {calculos.pilares.map((pilar) => (
                <PilarCard
                  key={pilar.id}
                  pilar={pilar}
                  aberto={pilaresAbertos[pilar.id]}
                  onToggle={() => togglePilar(pilar.id)}
                  ganhoTotal={calculos.ganhoTotal}
                  fmt={fmt}
                />
              ))}
            </div>

            {/* Síntese + CTA */}
            <div className="bg-card rounded-3xl p-7 border border-border">
              <p className="font-display text-xl md:text-2xl leading-snug font-medium text-ink mb-7">
                Para uma operação de <span className="font-bold">{fmtCompact(faturamento * 1_000_000)}</span> com {representantes} representantes,
                a Clic gera <span className="font-bold text-primary">{fmtCompact(calculos.ganhoLiquido)}</span> de
                ganho líquido no primeiro ano.
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="font-display text-lg font-semibold text-ink mb-1">
                    Recebi um número que me surpreendeu.
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Quero validar com um especialista da Clic.
                  </div>
                </div>
                <button
                  onClick={openLeadModal}
                  className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full transition shadow-cta"
                >
                  Falar com consultor <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <p className="text-xs leading-relaxed pt-2 px-2 text-muted-foreground">
              * As 20 dores foram mapeadas com base em entrevistas com clientes Clic e benchmarks setoriais
              (IBM Cost of Data Breach, ACFE, Bain, Panko/EuSpRIG). Resultados ilustrativos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Subcomponents ───── */

function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-card border border-border rounded-3xl p-7">{children}</div>;
}

function CardHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-primary-soft text-primary font-bold">
        {number}
      </span>
      <h3 className="font-display font-semibold text-ink">{title}</h3>
    </div>
  );
}

type SliderProps = {
  label: string; value: number; onChange: (v: number) => void;
  min: number; max: number; step: number; format: (v: number) => string; small?: boolean;
};
function SliderInput({ label, value, onChange, min, max, step, format, small }: SliderProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <label className={`${small ? "text-xs" : "text-sm"} font-medium text-ink`}>{label}</label>
        <span className={`font-mono ${small ? "text-xs" : "text-sm"} font-bold text-primary`}>{format(value)}</span>
      </div>
      <input
        type="range" className="clic-range"
        min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
      />
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider mb-1 font-medium text-muted-foreground">{label}</div>
      <div className="font-mono text-primary font-semibold text-sm">{value}</div>
    </div>
  );
}

function HeroStat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider mb-2 font-medium text-white/50">{label}</div>
      <div className={`font-mono font-bold ${highlight ? "text-primary text-xl md:text-2xl" : "text-white text-lg md:text-xl"}`}>
        {value}
      </div>
    </div>
  );
}

function PilarCard({
  pilar, aberto, onToggle, ganhoTotal, fmt,
}: {
  pilar: Pilar; aberto: boolean; onToggle: () => void;
  ganhoTotal: number; fmt: (v: number) => string;
}) {
  const pct = (pilar.total / ganhoTotal) * 100;
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-soft transition">
      <button onClick={onToggle} className="w-full p-5 flex items-center gap-4 text-left hover:bg-muted/50 transition">
        <div
          className="w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold font-display"
          style={{ background: pilar.colorSoft, color: pilar.color, borderRadius: "5px" }}
        >
          {pilar.itens.length}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between gap-3 mb-1 flex-wrap">
            <div className="flex items-baseline gap-2">
              <span className="font-display font-semibold text-base md:text-lg text-ink">{pilar.title}</span>
              <span className="font-mono text-[11px] font-medium" style={{ color: pilar.color }}>{pilar.num}</span>
            </div>
            <span className="font-mono text-base md:text-lg font-bold" style={{ color: pilar.color }}>
              {fmt(pilar.total)}
            </span>
          </div>
          <div className="text-xs text-muted-foreground">{pilar.desc}</div>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all duration-700"
                style={{ width: `${pct}%`, background: pilar.color }} />
            </div>
            <div className="font-mono text-xs font-semibold w-12 text-right text-ink">{pct.toFixed(1)}%</div>
          </div>
        </div>
        <ChevronRight className={`w-5 h-5 flex-shrink-0 transition ${aberto ? "rotate-90" : ""}`} style={{ color: pilar.color }} />
      </button>

      {aberto && (
        <div className="border-t border-border bg-muted/40 p-3 space-y-2 animate-fade-up">
          {pilar.itens
            .slice()
            .sort((a, b) => b.valor - a.valor)
            .map((item) => {
              const ipct = pilar.total > 0 ? (item.valor / pilar.total) * 100 : 0;
              const Icon = item.icon;
              const sevColor = item.sev === "alto" ? "#EF4444" : "#F59E0B";
              return (
                <div key={item.n} className="bg-card rounded-xl p-4 border border-transparent hover:border-border transition">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 border border-border flex items-center justify-center flex-shrink-0 bg-card" style={{ borderRadius: "5px" }}>
                      <Icon className="w-4 h-4" style={{ color: pilar.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2 mb-0.5 flex-wrap">
                        <div className="flex items-baseline gap-2">
                          <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                            {item.n}
                          </span>
                          <span className="font-semibold text-sm font-display text-ink">{item.title}</span>
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: sevColor }} />
                        </div>
                        <span className="font-mono text-sm font-bold" style={{ color: pilar.color }}>{fmt(item.valor)}</span>
                      </div>
                      <div className="text-[11px] text-muted-foreground mb-2">
                        {item.subtitle} · <span className="font-medium" style={{ color: pilar.color }}>{item.modulo}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1 bg-border rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${ipct}%`, background: pilar.color, opacity: 0.8 }} />
                        </div>
                        <span className="font-mono text-[10px] w-10 text-right text-muted-foreground">{ipct.toFixed(1)}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
