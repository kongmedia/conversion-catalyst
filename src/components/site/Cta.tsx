import { useState } from "react";
import { ArrowRight, ShieldCheck, Clock, Lock, Check } from "lucide-react";

export function Cta() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nome: "", empresa: "", email: "", telefone: "",
    cargo: "", faturamento: "", representantes: "", origem: "",
  });

  const valid =
    form.nome && form.empresa && /\S+@\S+\.\S+/.test(form.email) &&
    form.telefone.replace(/\D/g, "").length >= 10 &&
    form.cargo && form.faturamento && form.representantes;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    setLoading(true);
    // TODO: integrate with RD Station / HubSpot
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="cta" className="py-24 lg:py-32 bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-primary mb-4">
            Vamos começar
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold leading-[1.05] mb-6">
            Pronto para impulsionar suas <span className="gradient-text">vendas?</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-lg">
            Em 30 minutos, um especialista da Clic te mostra como o ClicVenda funcionaria
            na sua operação. Sem compromisso. Sem custo.
          </p>

          <ul className="space-y-4 text-white/80">
            <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-primary" /> Seus dados estão seguros — não fazemos spam</li>
            <li className="flex items-center gap-3"><Clock className="w-5 h-5 text-primary" /> Resposta em até 1 hora útil</li>
            <li className="flex items-center gap-3"><Lock className="w-5 h-5 text-primary" /> Conformidade total com a LGPD</li>
          </ul>
        </div>

        <div className="bg-card text-ink rounded-3xl p-8 lg:p-10 shadow-elevated">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-primary-soft flex items-center justify-center mx-auto mb-5">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3 text-ink">Recebemos sua solicitação!</h3>
              <p className="text-muted-foreground">
                Um especialista entra em contato em até <strong>1 hora útil</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Field label="Nome completo" required>
                <input className={inputCls} value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })} />
              </Field>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Empresa" required>
                  <input className={inputCls} value={form.empresa}
                    onChange={(e) => setForm({ ...form, empresa: e.target.value })} />
                </Field>
                <Field label="E-mail corporativo" required>
                  <input type="email" className={inputCls} value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </Field>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Telefone / WhatsApp" required>
                  <input className={inputCls} placeholder="(11) 99999-0000" value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })} />
                </Field>
                <Field label="Cargo" required>
                  <select className={inputCls} value={form.cargo}
                    onChange={(e) => setForm({ ...form, cargo: e.target.value })}>
                    <option value="">Selecione...</option>
                    <option>Sócio/Diretor</option>
                    <option>Gestor Comercial</option>
                    <option>Operações</option>
                    <option>TI</option>
                    <option>Outro</option>
                  </select>
                </Field>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Faturamento anual" required>
                  <select className={inputCls} value={form.faturamento}
                    onChange={(e) => setForm({ ...form, faturamento: e.target.value })}>
                    <option value="">Selecione...</option>
                    <option>Até R$ 5M</option>
                    <option>R$ 5M – 15M</option>
                    <option>R$ 15M – 50M</option>
                    <option>Acima de R$ 50M</option>
                  </select>
                </Field>
                <Field label="Nº de representantes" required>
                  <select className={inputCls} value={form.representantes}
                    onChange={(e) => setForm({ ...form, representantes: e.target.value })}>
                    <option value="">Selecione...</option>
                    <option>1 – 5</option>
                    <option>6 – 15</option>
                    <option>16 – 50</option>
                    <option>Mais de 50</option>
                  </select>
                </Field>
              </div>

              <button
                type="submit"
                disabled={!valid || loading}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground font-semibold rounded-full transition shadow-cta"
              >
                {loading ? "Enviando..." : "Quero ver o ClicVenda em ação"}
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-xs text-muted-foreground text-center pt-2">
                Ao enviar, você concorda com nossa Política de Privacidade.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full px-4 py-3 rounded-xl bg-background border border-border text-ink focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition";

function Field({
  label, required, children,
}: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-ink mb-1.5 block">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}
