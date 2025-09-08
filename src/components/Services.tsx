import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, FileSearch, GraduationCap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: FileSearch,
    title: "Avaliações Ergonômicas",
    description: "Análise completa dos postos de trabalho identificando riscos e propondo melhorias específicas para cada função.",
    features: [
      "Análise biomecânica detalhada",
      "Relatório técnico completo",
      "Recomendações personalizadas",
      "Acompanhamento de implementação"
    ],
    gradient: "from-primary to-primary-light"
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
    gradient: "from-secondary to-secondary-light"
  },
  {
    icon: GraduationCap,
    title: "Treinamentos e Capacitação",
    description: "Programas educativos para colaboradores e gestores sobre prevenção de lesões e boas práticas ergonômicas.",
    features: [
      "Ginástica laboral",
      "Treinamento de lideranças",
      "Palestras de conscientização",
      "Material didático personalizado"
    ],
    gradient: "from-primary-dark to-primary"
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços Especializados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em ergonomia para proteger seus colaboradores e 
            aumentar a produtividade da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 border-border/50">
              <CardHeader>
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a 
                    href={`https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre ${service.title}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <span>Solicitar Orçamento</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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