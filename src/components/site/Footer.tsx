import logo from "@/assets/clic-logo.webp";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Clic Tecnologia" className="h-9 w-auto" />
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href="#dores" className="hover:text-primary transition">Problema</a>
          <a href="#solucao" className="hover:text-primary transition">Solução</a>
          <a href="#calculadora" className="hover:text-primary transition">Calculadora</a>
          <a href="#planos" className="hover:text-primary transition">Planos</a>
          <a href="#faq" className="hover:text-primary transition">FAQ</a>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Clic Tecnologia · Blumenau, SC
        </div>
      </div>
    </footer>
  );
}
