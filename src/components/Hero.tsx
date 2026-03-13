import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Award } from "lucide-react";
import heroImage from "../assets/ergonomics-hero.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero min-h-[85vh] flex items-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium text-primary">Soluções Ergonômicas Profissionais</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-display">
                Transforme seu ambiente de trabalho com{" "}
                <span className="bg-gradient-purple-gold bg-clip-text text-transparent">
                  ergonomia profissional
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Reduzimos riscos ocupacionais e melhoramos o bem-estar dos seus colaboradores 
                através de consultorias especializadas, treinamentos e avaliações ergonômicas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-purple-gold hover:opacity-90 transition-opacity shadow-medium text-white text-base px-8"
                asChild
              >
                <a 
                  href="https://wa.me/5561995592185?text=Olá! Gostaria de agendar uma consultoria de ergonomia."
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
                className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground text-base"
                asChild
              >
                <a href="#servicos">Conhecer Serviços</a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium text-muted-foreground">Segurança Garantida</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Equipe Especializada</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium text-muted-foreground">Resultados Comprovados</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-purple-gold rounded-2xl opacity-20 blur-xl" />
            <img 
              src={heroImage} 
              alt="Ambiente de trabalho ergonômico" 
              className="rounded-2xl shadow-medium w-full h-auto relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
