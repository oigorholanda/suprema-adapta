import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Monitor, Repeat, Weight, Clock, Eye } from "lucide-react";

const riskFactors = [
  {
    icon: Monitor,
    title: "Posturas Inadequadas",
    description: "Posições forçadas que sobrecarregam músculos e articulações, causando dores nas costas, pescoço e ombros.",
    color: "text-destructive"
  },
  {
    icon: Repeat,
    title: "Movimentos Repetitivos",
    description: "Ações constantes que podem causar LER/DORT, tendinites e síndrome do túnel do carpo.",
    color: "text-destructive"
  },
  {
    icon: Weight,
    title: "Esforço Físico Excessivo",
    description: "Levantamento de peso inadequado e sobrecarga física que pode causar lesões na coluna.",
    color: "text-destructive"
  },
  {
    icon: Clock,
    title: "Ritmo de Trabalho",
    description: "Pressão temporal e sobrecarga que aumentam o estresse e reduzem a atenção aos riscos.",
    color: "text-destructive"
  },
  {
    icon: Eye,
    title: "Fatores Visuais",
    description: "Iluminação inadequada e telas mal posicionadas causando fadiga visual e dores de cabeça.",
    color: "text-destructive"
  },
  {
    icon: AlertTriangle,
    title: "Ambiente Físico",
    description: "Temperatura, ruído e vibração inadequados que afetam conforto e produtividade.",
    color: "text-destructive"
  }
];

const RiskFactors = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Principais Fatores de Risco Ergonômicos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Identifique os riscos que podem estar afetando a saúde e produtividade 
            dos seus colaboradores no ambiente de trabalho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {riskFactors.map((factor, index) => (
            <Card key={index} className="hover:shadow-soft transition-shadow duration-300 border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-destructive/10">
                    <factor.icon className={`w-6 h-6 ${factor.color}`} />
                  </div>
                  <CardTitle className="text-lg">{factor.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {factor.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Não deixe esses riscos comprometer sua empresa!
            </h3>
            <p className="text-lg mb-6 opacity-90">
              A Suprema Adapta oferece soluções personalizadas para eliminar esses fatores de risco 
              e criar um ambiente de trabalho mais seguro e produtivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskFactors;