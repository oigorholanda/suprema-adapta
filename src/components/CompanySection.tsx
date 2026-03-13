import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, TrendingUp, Heart } from "lucide-react";

const CompanySection = () => {
  return (
    <section id="empresa" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Quem Somos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 font-display">
            Conheça a <span className="text-primary">SupremAdapta</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A SupremAdapta é uma empresa especializada em soluções ergonômicas, comprometida com a 
            saúde e bem-estar dos trabalhadores. Atuamos com excelência na análise, prevenção e 
            adequação de ambientes de trabalho, oferecendo consultoria personalizada para empresas 
            de todos os portes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Target,
              title: "Missão",
              description: "Promover saúde ocupacional e produtividade através de soluções ergonômicas inovadoras e personalizadas.",
            },
            {
              icon: Lightbulb,
              title: "Visão",
              description: "Ser referência em ergonomia e saúde do trabalho, transformando ambientes corporativos em todo o Brasil.",
            },
            {
              icon: Heart,
              title: "Valores",
              description: "Ética, comprometimento, inovação e respeito à saúde e bem-estar de cada colaborador.",
            },
            {
              icon: TrendingUp,
              title: "Diferenciais",
              description: "Atendimento personalizado, equipe qualificada e metodologia própria com resultados comprovados.",
            },
          ].map((item, index) => (
            <Card key={index} className="group border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-soft bg-card">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-purple-gold flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground font-display">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
