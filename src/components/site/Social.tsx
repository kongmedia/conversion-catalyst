const stats = [
  { value: "+500", label: "Distribuidoras ativas" },
  { value: "+4.000", label: "Representantes em campo" },
  { value: "+R$ 25bi", label: "Em pedidos processados" },
  { value: "99,5%", label: "Taxa de retenção" },
];

const testimonials = [
  {
    quote: "Reduzimos em 80% o retrabalho do back office. Os pedidos entram no ERP em minutos, não em horas.",
    name: "Carlos Mendes", role: "Diretor Comercial", company: "Distribuidora Atlântico",
  },
  {
    quote: "Os representantes vendem mais e melhor. O catálogo offline mudou o jogo nas visitas em campo.",
    name: "Mariana Silva", role: "Gerente de Vendas", company: "Criativa Distribuição",
  },
  {
    quote: "A integração com o Sankhya funcionou no primeiro dia. Implantação rápida e suporte impecável.",
    name: "Roberto Almeida", role: "CIO", company: "Grupo D'Itália",
  },
];

export function Social() {
  return (
    <section className="bg-ink text-white relative overflow-hidden" style={{paddingTop:100,paddingBottom:100}}>
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-primary mb-4">
            Provas Sociais
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
            Mais de 500 distribuidoras já tiram seus pedidos pelo{" "}
            <span className="gradient-text">ClicVenda</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-16 border-b border-white/10">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">{s.value}</div>
              <div className="text-sm text-white/60">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article key={t.name} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition">
              <div className="text-primary mb-4 font-display text-3xl leading-none">"</div>
              <p className="text-white/90 leading-relaxed mb-6 italic font-display">{t.quote}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center font-bold font-display">
                  {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-white/60">{t.role} · {t.company}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
