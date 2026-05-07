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
import { LeadModal } from "@/components/site/LeadModal";
import { Reveal } from "@/components/site/Reveal";

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
        <Reveal><Pains /></Reveal>
        <Reveal><Solution /></Reveal>
        <Reveal><Features /></Reveal>
        <Reveal><Calculator /></Reveal>
        <Reveal><Social /></Reveal>
        <Reveal><Integrations /></Reveal>
        <Reveal><Plans /></Reveal>
        <Reveal><Faq /></Reveal>
        <Reveal><Cta /></Reveal>
      </main>
      <Footer />
      <LeadModal />
    </div>
  );
}
