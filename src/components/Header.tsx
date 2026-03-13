import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "@/assets/suprema-adapta-logo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-background/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-3">
          <img 
            src={logoImage} 
            alt="SupremAdapta - Soluções Ergonômicas" 
            className="h-14 w-auto"
          />
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#empresa" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            A Empresa
          </a>
          <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Serviços
          </a>
          <a href="#responsavel" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Responsável Técnico
          </a>
          <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Contato
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="default"
            className="hidden sm:inline-flex bg-gradient-purple-gold hover:opacity-90 transition-opacity text-white"
            asChild
          >
            <a 
              href="https://wa.me/5561995592185?text=Olá! Gostaria de saber mais sobre os serviços de ergonomia da SupremAdapta."
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Conosco
            </a>
          </Button>

          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/98 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <a href="#empresa" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-primary py-2 font-medium">A Empresa</a>
            <a href="#servicos" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-primary py-2 font-medium">Serviços</a>
            <a href="#responsavel" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-primary py-2 font-medium">Responsável Técnico</a>
            <a href="#contato" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-primary py-2 font-medium">Contato</a>
            <Button className="bg-gradient-purple-gold text-white w-full" asChild>
              <a href="https://wa.me/5561995592185?text=Olá! Gostaria de saber mais sobre os serviços da SupremAdapta." target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
