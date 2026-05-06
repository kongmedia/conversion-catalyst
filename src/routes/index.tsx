import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Pains } from "@/components/site/Pains";
import { Solution } from "@/components/site/Solution";
import { Features } from "@/components/site/Features";
import { Calculator } from "@/components/site/Calculator";
import { Social } from "@/components/site/Social";
import { Integrations } from "@/components/site/Integrations";
import { Plans } from "@/components/site/Plans";
import { Faq } from "@/components/site/Faq";
import { Cta } from "@/components/site/Cta";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ClicVenda — Tire pedidos em segundos. Não em horas." },
      {
        name: "description",
        content:
          "App de pedidos para distribuidoras e indústrias B2B. Integração nativa com seu ERP, sem retrabalho, sem erro. Mais de 500 clientes confiam na Clic.",
      },
      { property: "og:title", content: "ClicVenda — App de Pedidos B2B" },
      { property: "og:description", content: "Transforme o pedido por WhatsApp em fluxo automatizado entre rep, ERP e cliente." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Pains />
        <Solution />
        <Features />
        <Calculator />
        <Social />
        <Integrations />
        <Plans />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
