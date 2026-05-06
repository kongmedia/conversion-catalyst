import {
  WifiOff,
  ShieldCheck,
  Tags,
  MapPin,
  Receipt,
  RefreshCw,
  BarChart3,
  Activity,
} from "lucide-react";

const features = [
  { icon: WifiOff, title: "Catálogo offline", desc: "O rep vende mesmo sem sinal. Sincronia automática quando voltar a conectar." },
  { icon: ShieldCheck, title: "Validação em tempo real", desc: "Estoque, preço e limite de crédito conferidos no momento do pedido." },
  { icon: Tags, title: "Tabelas por cliente/rede", desc: "Política comercial automática. Cada cliente vê o preço dele. Sem erro." },
  { icon: MapPin, title: "Roteirização de visitas", desc: "Agenda inteligente. Check-in com geolocalização. Histórico por cliente." },
  { icon: Receipt, title: "Cobrança e financeiro", desc: "Boletos, NF e títulos em aberto. Cliente pendente bloqueado automaticamente." },
  { icon: RefreshCw, title: "Pedido recorrente", desc: "Sugestão de reposição com base no histórico. Vendedor vende o que o cliente já compra." },
  { icon: BarChart3, title: "Mix e curva ABC", desc: "Cada cliente com seu mix ideal. Ranking de produtos por margem e giro." },
  { icon: Activity, title: "Indicadores em tempo real", desc: "Gestor vê meta, ticket médio e cobertura sem pedir relatório a ninguém." },
];

export function Features() {
  return (
    <section id="funcionalidades" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-primary mb-4">
            Funcionalidades
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink mb-5 leading-tight">
            Tudo o que seu representante precisa.
            <br />
            <span className="gradient-text">Nada que ele não use.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Construído com mais de 500 distribuidoras. Cada funcionalidade resolve uma dor real.
            Cada tela foi testada em campo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-soft flex items-center justify-center mb-4">
                <f.icon className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-display font-bold text-ink mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
