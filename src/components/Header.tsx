import { Button } from "@/components/ui/button";
import logoImage from "@/assets/suprema-adapta-logo.png";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src={logoImage} 
            alt="Suprema Adapta Ergonomia & Saúde" 
            className="h-12 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
            Serviços
          </a>
          <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#contato" className="text-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </nav>
        
        <Button 
          variant="default"
          className="bg-gradient-primary hover:opacity-90 transition-opacity"
          asChild
        >
          <a 
            href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços de ergonomia da Suprema Adapta."
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale Conosco
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;