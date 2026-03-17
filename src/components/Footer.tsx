import { Heart, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [socialModal, setSocialModal] = useState<string | null>(null);

  return (
    <>
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2 font-display bg-gradient-purple-deep bg-clip-text text-transparent">
                SupremAdapta
              </h3>
              <p className="text-sm text-muted-foreground">Soluções Ergonômicas</p>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-3 text-sm">
                Transformando ambientes de trabalho através da ergonomia profissional. 
                Cuidamos da saúde dos seus colaboradores para que sua empresa prospere.
              </p>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setSocialModal("Instagram")}
                className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button
                onClick={() => setSocialModal("LinkedIn")}
                className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>
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

      <Dialog open={!!socialModal} onOpenChange={() => setSocialModal(null)}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader className="items-center">
            <DialogTitle className="text-xl font-display">
              {socialModal}
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground pt-2">
              🚀 Em breve! Estamos preparando nosso perfil no {socialModal}. Fique ligado!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
