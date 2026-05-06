const erps = [
  "Sankhya", "TOTVS Protheus", "TOTVS RM", "Sênior",
  "SAP Business One", "Microsiga", "Bling", "Omie",
  "Tiny", "ContaAzul", "WK", "Linx",
];

export function Integrations() {
  return (
    <section id="integracoes" className="py-24 lg:py-32 bg-background">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {erps.map((erp) => (
            <div
              key={erp}
              className="aspect-[2/1] bg-card border border-border rounded-2xl flex items-center justify-center font-display font-bold text-ink/50 hover:text-primary hover:border-primary/40 hover:bg-primary-soft transition-all hover:-translate-y-1"
            >
              {erp}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Não vê seu ERP? <span className="text-ink font-semibold">A Clic constrói a integração para você.</span>{" "}
          Pergunte na demonstração.
        </p>
      </div>
    </section>
  );
}
