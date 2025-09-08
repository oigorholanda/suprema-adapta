import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Award } from "lucide-react";
import heroImage from "@/assets/ergonomics-hero.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transforme seu ambiente de trabalho com{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  ergonomia profissional
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Reduzimos riscos ocupacionais e melhoramos o bem-estar dos seus colaboradores 
                através de consultorias especializadas, treinamentos e avaliações ergonômicas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft"
                asChild
              >
                <a 
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consultoria de ergonomia."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>Agendar Consultoria</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href="#servicos">Conhecer Serviços</a>
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Segurança Garantida</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-secondary" />
                <span className="text-sm font-medium">Equipe Especializada</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Resultados Comprovados</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={heroImage} 
              alt="Ambiente de trabalho ergonômico" 
              className="rounded-lg shadow-medium w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;