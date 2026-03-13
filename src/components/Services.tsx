import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, FileSearch, GraduationCap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: FileSearch,
    title: "Avaliações Ergonômicas",
    description: "Análise completa dos postos de trabalho identificando riscos e propondo melhorias específicas para cada função.",
    features: [
      "Análise detalhada de riscos ocupacionais",
      "Relatório técnico completo",
      "Planos de ação",
      "Implementação e acompanhamento das medidas de prevenção"
    ],
  },
  {
    icon: Users,
    title: "Consultorias Empresariais",
    description: "Consultoria especializada para implementação de programas de ergonomia e adequação às normas regulamentadoras.",
    features: [
      "Diagnóstico organizacional",
      "Programa de ergonomia customizado",
      "Adequação às NRs",
      "Suporte técnico contínuo"
    ],
  },
  {
    icon: GraduationCap,
    title: "Palestras e Treinamentos",
    description: "Programas educativos para colaboradores e gestores sobre prevenção de lesões e boas práticas ergonômicas.",
    features: [
      "Ações de prevenção ao estresse no ambiente de trabalho",
      "Cuidados com a saúde e qualidade de vida",
      "Treinamento de lideranças",
      "Material didático personalizado"
    ],
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">O que fazemos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 font-display">
            Nossos Serviços Especializados
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em ergonomia para proteger seus colaboradores e 
            aumentar a produtividade da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-primary/30 bg-card overflow-hidden">
              <div className="h-1 bg-gradient-purple-gold" />
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-gradient-purple-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-display">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group/btn border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a 
                    href={`https://wa.me/5561995592185?text=Olá! Gostaria de saber mais sobre ${service.title}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <span>Solicitar Orçamento</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
