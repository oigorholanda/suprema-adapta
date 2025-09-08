import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Users, Heart, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Conheça o Professor Sergio Cardozo
            </h2>
            <p className="text-xl text-muted-foreground">
              Especialista em ergonomia e bem-estar no trabalho
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Experiência e Dedicação ao Bem-Estar
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  O Professor Sergio Cardozo é um profissional experiente na área de ergonomia 
                  e saúde ocupacional, com especialização em pilates e amplo conhecimento em 
                  biomecânica aplicada ao ambiente de trabalho.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sua abordagem única combina conhecimento técnico em ergonomia com experiência 
                  prática em movimento corporal, proporcionando soluções inovadoras para 
                  prevenção de lesões e melhoria da qualidade de vida no trabalho.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-gradient-primary rounded-lg text-white">
                  <GraduationCap className="w-6 h-6" />
                  <div>
                    <div className="font-semibold">Professor</div>
                    <div className="text-sm opacity-90">de Pilates</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-gradient-secondary rounded-lg text-white">
                  <Award className="w-6 h-6" />
                  <div>
                    <div className="font-semibold">Especialista</div>
                    <div className="text-sm opacity-90">em Ergonomia</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-card border-border/50 shadow-soft">
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    Nossa Missão
                  </h4>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      Promover a saúde e bem-estar dos trabalhadores através de soluções ergonômicas eficazes
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      Reduzir significativamente os riscos de lesões ocupacionais
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      Aumentar a produtividade através de ambientes de trabalho saudáveis
                    </p>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-secondary hover:opacity-90 transition-opacity"
                  asChild
                >
                  <a 
                    href="https://wa.me/5511999999999?text=Olá, Professor Sergio! Gostaria de conversar sobre ergonomia."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <span>Falar com o Professor</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;