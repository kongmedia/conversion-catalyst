const erps = [
  "Sankhya", "TOTVS Protheus", "TOTVS RM", "Sênior",
  "SAP Business One", "Microsiga", "Bling", "Omie",
  "Tiny", "ContaAzul", "WK", "Linx",
];

export function Integrations() {
  const loop = [...erps, ...erps];
  return (
    <section id="integracoes" style={{ paddingTop: 100, paddingBottom: 100 }} className="bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-primary mb-4">
            Integrações
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink mb-5 leading-tight">
            Já conversa com o seu ERP.
            <br />
            <span className="gradient-text">Sem projeto. Sem esforço.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            O hub de integração Clic é nativo e mantido pela própria Clic.
            Você não precisa contratar TI nem desenvolver nada.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {loop.map((erp, i) => (
            <span
              key={i}
              className="font-display text-2xl font-bold text-ink/60 hover:text-primary transition px-6"
            >
              {erp}
            </span>
          ))}
        </div>
      </div>

      <p className="text-center text-sm text-muted-foreground mt-10 px-6">
        Não vê seu ERP? <span className="text-ink font-semibold">A Clic constrói a integração para você.</span>{" "}
        Pergunte na demonstração.
      </p>
    </section>
  );
}
