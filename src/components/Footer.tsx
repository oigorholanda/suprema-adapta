import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2 font-display bg-gradient-purple-gold bg-clip-text text-transparent">
              SupremAdapta
            </h3>
            <p className="text-sm text-muted-foreground">Soluções Ergonômicas</p>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-3 text-sm">
              Transformando ambientes de trabalho através da ergonomia profissional. 
              Cuidamos da saúde dos seus colaboradores para que sua empresa prospere.
            </p>
          </div>

          <div className="border-t border-border pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-muted-foreground">
                © {currentYear} SupremAdapta Soluções Ergonômicas. Todos os direitos reservados.
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Feito com</span>
                <Heart className="w-4 h-4 text-destructive fill-current" />
                <span>para a saúde no trabalho</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
