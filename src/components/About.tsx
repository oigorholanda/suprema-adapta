import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import professorSergio from "@/assets/professor-sergio.jpg";

const education = [
  { period: "2026-2027", title: "Pós-graduando em Prescrição em Treinamento para Grupos Especiais e Doenças Crônicas" },
  { period: "2025-2026", title: "Pós-graduado em Ergonomia - Do Técnico ao Comercial" },
  { period: "2010-2012", title: "Pós-graduado em Método Pilates" },
  { period: "2006-2011", title: "Administração - Gestão de Negócios em Comércio Exterior" },
  { period: "1986-1990", title: "Licenciatura em Educação Física" },
];

const About = () => {
  return (
    <section id="responsavel" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Responsável Técnico</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 font-display">
            Conheça nosso Responsável Técnico
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Photo & Quote */}
            <div className="lg:col-span-2 flex flex-col items-center text-center space-y-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-purple-gold rounded-full opacity-30 blur-md" />
                <img 
                  src={professorSergio} 
                  alt="Sérgio Cardozo - Responsável Técnico da SupremAdapta"
                  className="w-48 h-48 rounded-full object-cover relative z-10 border-4 border-background shadow-medium"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground font-display">Sérgio Cardozo</h3>
                <p className="text-secondary font-medium mt-1">Responsável Técnico</p>
              </div>
              <blockquote className="italic text-muted-foreground border-l-4 border-secondary pl-4 text-left text-sm leading-relaxed">
                "Minha missão é promover a saúde e bem-estar dos trabalhadores através de soluções ergonômicas eficazes"
              </blockquote>
            </div>

            {/* Education Timeline */}
            <Card className="lg:col-span-3 border-border/50 bg-card">
              <CardContent className="p-6 md:p-8">
                <h4 className="text-lg font-bold text-foreground mb-6 font-display flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Formação Acadêmica
                </h4>
                <div className="space-y-5">
                  {education.map((item, index) => (
                    <div key={index} className="flex gap-4 group">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-gradient-purple-gold flex-shrink-0 mt-1.5 group-hover:scale-125 transition-transform" />
                        {index < education.length - 1 && (
                          <div className="w-px h-full bg-border mt-1" />
                        )}
                      </div>
                      <div className="pb-4">
                        <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{item.period}</span>
                        <p className="text-foreground font-medium mt-1 text-sm leading-relaxed">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
