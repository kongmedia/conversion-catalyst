import { useEffect, useRef, useState } from "react";
import criativaLogo from "@/assets/clients/criativa.webp";
import claricelogo from "@/assets/clients/clarice.webp";
import supremoLogo from "@/assets/clients/supremo.webp";
import spresLogo from "@/assets/clients/spres.webp";

const stats: { value: number; prefix: string; suffix: string; label: string; decimals?: number }[] = [
  { value: 500, prefix: "+", suffix: "", label: "Distribuidoras ativas" },
  { value: 4000, prefix: "+", suffix: "", label: "Representantes em campo" },
  { value: 25, prefix: "+R$ ", suffix: "bi", label: "Em pedidos processados" },
  { value: 99.5, prefix: "", suffix: "%", label: "Taxa de retenção", decimals: 1 },
];

const testimonials = [
  {
    title: "Redução de tempo e agilidade nos processos",
    quote: "Antes, depois de um dia de trabalho, ainda era necessário ficar de 3h a 4h digitando pedidos na planilha de Excel, e com o clicVenda, digitando pedidos direto no aplicativo, agilizou muito a rotina.",
    name: "Criativa Puxadores",
    role: "Representante",
    logo: criativaLogo,
  },
  {
    title: "Redução de 90% de custos com administração",
    quote: "Cada atualização era feita representante a representante, um a um, e com a aquisição do clicVenda isso ficou muito mais fácil. Agora, quando é necessária alguma mudança, é só alterar alguma função do sistema.",
    name: "Clarice Fogões",
    role: "Analista de TI",
    logo: claricelogo,
  },
  {
    title: "Redução e economias de tempo",
    quote: "Com a ferramenta, os meus clientes conseguem ter um ambiente fácil para realizar seus pedidos e conseguimos ter economias de tempo nas nossas negociações.",
    name: "Supremo Cimentos",
    role: "Gestor de TI",
    logo: supremoLogo,
  },
  {
    title: "Redução de 80% do retrabalho",
    quote: "O Força de Vendas nos auxiliou a diminuir 80% do retrabalho e otimizar a equipe de faturamento, permitindo que chegássemos a áreas mais remotas. Essa expansão fez nossas vendas aumentarem em 12%.",
    name: "Sucos Spres",
    role: "Coordenador Comercial",
    logo: spresLogo,
  },
];

function CountUp({ end, decimals = 0, prefix = "", suffix = "" }: { end: number; decimals?: number; prefix?: string; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(end * eased);
            if (p < 1) requestAnimationFrame(tick);
            else setVal(end);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  const formatted = decimals > 0
    ? val.toFixed(decimals).replace(".", ",")
    : Math.floor(val).toLocaleString("pt-BR");

  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
}

export function Social() {
  const [idx, setIdx] = useState(0);

  return (
    <section className="bg-ink text-white relative overflow-hidden" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-14 text-center mx-auto">
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
              <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">
                <CountUp end={s.value} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="text-sm text-white/60">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${idx * 100}%)` }}
            >
              {testimonials.map((t) => (
                <article key={t.name} className="w-full flex-shrink-0 px-1">
                  <div className="grid md:grid-cols-2 gap-8 items-center bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
                    <div>
                      <div className="text-primary mb-4 font-display text-4xl leading-none">"</div>
                      <h3 className="font-display text-xl md:text-2xl font-bold mb-4">{t.title}</h3>
                      <p className="text-white/85 leading-relaxed mb-6">{t.quote}</p>
                      <div className="pt-4 border-t border-white/10">
                        <div className="font-semibold">{t.name}</div>
                        <div className="text-sm text-white/60">{t.role}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center bg-white rounded-xl p-8 min-h-[220px]">
                      <img src={t.logo} alt={t.name} className="max-h-32 w-auto object-contain" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Bullets */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Depoimento ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === idx ? "bg-primary w-8" : "bg-white/30 hover:bg-white/50 w-2.5"
                }`}
              />
            ))}
          </div>

          {/* Client logos row */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 items-center opacity-70">
            {testimonials.map((t) => (
              <div key={`logo-${t.name}`} className="flex items-center justify-center bg-white/5 rounded-lg p-4 h-20">
                <img src={t.logo} alt={t.name} className="max-h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
