import { Phone, MapPin } from "lucide-react";
import logo from "@/assets/clic-logo.webp";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          <div className="col-span-2 lg:col-span-1 text-center md:text-left">
            <img src={logo} alt="Clic Tecnologia" className="h-12 md:h-10 w-auto mb-5 mx-auto md:mx-0" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0">
              A plataforma de Força de Vendas que conecta seu time externo ao seu ERP, com
              o controle, a velocidade e a inteligência que a sua operação precisa para crescer.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary mb-4">Menu</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="text-ink hover:text-primary transition">Home</a></li>
              <li><a href="#dores" className="text-ink hover:text-primary transition">O Problema</a></li>
              <li><a href="#solucao" className="text-ink hover:text-primary transition">A Plataforma</a></li>
              <li><a href="#calculadora" className="text-ink hover:text-primary transition">Calculadora</a></li>
              <li><a href="#planos" className="text-ink hover:text-primary transition">Planos</a></li>
              <li><a href="#faq" className="text-ink hover:text-primary transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary mb-4">Plataforma</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://clictecnologia.com.br/diferencial/indicadores-de-vendas/" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-primary transition">Indicadores</a></li>
              <li><a href="https://clictecnologia.com.br/diferencial/aplicativo-de-pedidos/" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-primary transition">Aplicativo de Pedidos</a></li>
              <li><a href="https://clictecnologia.com.br/diferencial/hub-de-integracao/" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-primary transition">Hub de Integração</a></li>
              <li><a href="https://clictecnologia.com.br/diferencial/copiloto-de-vendas/" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-primary transition">Copiloto de Vendas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-ink">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                (47) 3230-0951
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Cel. Vidal Ramos, 1 – Sala 101 A<br />Jardim Blumenau, Blumenau – SC</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Clic Tecnologia. Todos os direitos reservados.</div>
          <div>Sankhya, TOTVS, Senior, WK, Bling e mais.</div>
        </div>
      </div>
    </footer>
  );
}
