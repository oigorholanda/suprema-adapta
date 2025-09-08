import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Suprema Adapta Ergonomia & Saúde</h3>
            <p className="text-background/80 max-w-2xl mx-auto">
              Transformando ambientes de trabalho através da ergonomia profissional. 
              Cuidamos da saúde dos seus colaboradores para que sua empresa prospere.
            </p>
          </div>

          <div className="border-t border-background/20 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-background/60">
                © 2024 Suprema Adapta Ergonomia & Saúde. Todos os direitos reservados.
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-background/80">
                <span>Feito com</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
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