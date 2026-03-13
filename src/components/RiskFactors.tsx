import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Monitor, Repeat, Weight, Clock, Eye } from "lucide-react";

const riskFactors = [
  {
    icon: Monitor,
    title: "Posturas Inadequadas",
    description: "Posições forçadas que sobrecarregam músculos e articulações, causando dores nas costas, pescoço e ombros.",
  },
  {
    icon: Repeat,
    title: "Movimentos Repetitivos",
    description: "Ações constantes que podem causar LER/DORT, tendinites e síndrome do túnel do carpo.",
  },
  {
    icon: Weight,
    title: "Esforço Físico Excessivo",
    description: "Levantamento de peso inadequado e sobrecarga física que pode causar lesões na coluna.",
  },
  {
    icon: Clock,
    title: "Ritmo de Trabalho",
    description: "Pressão temporal e sobrecarga que aumentam o estresse e reduzem a atenção aos riscos.",
  },
  {
    icon: Eye,
    title: "Fatores Visuais",
    description: "Iluminação inadequada e telas mal posicionadas causando fadiga visual e dores de cabeça.",
  },
  {
    icon: AlertTriangle,
    title: "Ambiente Físico",
    description: "Temperatura, ruído e vibração inadequados que afetam conforto e produtividade.",
  }
];

const RiskFactors = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Atenção</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 font-display">
            Principais Fatores de Risco Ergonômicos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Identifique os riscos que podem estar afetando a saúde e produtividade 
            dos seus colaboradores no ambiente de trabalho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {riskFactors.map((factor, index) => (
            <Card key={index} className="group hover:shadow-soft transition-all duration-300 border-border/50 hover:border-destructive/30 bg-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-destructive/10 group-hover:bg-destructive/20 transition-colors">
                    <factor.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <CardTitle className="text-lg font-display">{factor.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {factor.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-purple-gold rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display">
              Não deixe esses riscos comprometer sua empresa!
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              A SupremAdapta oferece soluções personalizadas para eliminar esses fatores de risco 
              e criar um ambiente de trabalho mais seguro e produtivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskFactors;
