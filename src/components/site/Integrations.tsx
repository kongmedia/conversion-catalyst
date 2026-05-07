import sankhya from "@/assets/erps/sankhya.png";
import totvs from "@/assets/erps/totvs.png";
import senior from "@/assets/erps/senior.png";
import bling from "@/assets/erps/bling.png";
import tiny from "@/assets/erps/tiny.png";
import sap from "@/assets/erps/sap.png";

const erps = [
  { name: "Sankhya", logo: sankhya },
  { name: "TOTVS", logo: totvs },
  { name: "Senior", logo: senior },
  { name: "Bling", logo: bling },
  { name: "Tiny", logo: tiny },
  { name: "SAP Business One", logo: sap },
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
        <div className="flex gap-16 animate-marquee whitespace-nowrap items-center">
          {loop.map((erp, i) => (
            <img
              key={i}
              src={erp.logo}
              alt={erp.name}
              className="h-14 md:h-[68px] w-auto object-contain opacity-80 hover:opacity-100 transition px-4 flex-shrink-0"
              loading="lazy"
            />
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
