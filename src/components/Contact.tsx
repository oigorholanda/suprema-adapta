import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato Conosco
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforme o ambiente de trabalho da sua empresa. 
            Agende uma consultoria e descubra como podemos ajudar.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* CTA Principal */}
            <Card className="bg-gradient-primary text-white border-0 shadow-medium">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">
                  Fale Conosco pelo WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-lg opacity-90 leading-relaxed">
                  Atendimento rápido e personalizado para suas necessidades de ergonomia. 
                  Tire suas dúvidas e solicite um orçamento sem compromisso.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-sm opacity-90">
                    <Clock className="w-4 h-4" />
                    <span>Atendimento: Segunda a Sexta, 8h às 18h</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm opacity-90">
                    <Phone className="w-4 h-4" />
                    <span>Resposta rápida garantida</span>
                  </div>
                </div>

                <Button 
                  size="lg"
                  variant="secondary"
                  className="w-full bg-white text-primary hover:bg-white/90"
                  asChild
                >
                  <a 
                    href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços da Suprema Adapta Ergonomia & Saúde."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Iniciar Conversa</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Informações de Contato */}
            <div className="space-y-6">
              <Card className="border-border/50 hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        contato@supremaadapta.com.br
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Atendimento</h3>
                      <p className="text-muted-foreground">
                        Atendemos em toda a região metropolitana de São Paulo
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Horário</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Segunda a Sexta: 8h às 18h</p>
                        <p>Sábado: 8h às 12h</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Benefícios do Contato */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Por que escolher a Suprema Adapta?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-muted/50 rounded-lg">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Resposta Rápida</h4>
                <p className="text-sm text-muted-foreground">
                  Atendimento ágil para suas necessidades urgentes
                </p>
              </div>
              
              <div className="p-6 bg-muted/50 rounded-lg">
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Consultoria Gratuita</h4>
                <p className="text-sm text-muted-foreground">
                  Primeira análise sem custo para sua empresa
                </p>
              </div>
              
              <div className="p-6 bg-muted/50 rounded-lg">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Orçamento Personalizado</h4>
                <p className="text-sm text-muted-foreground">
                  Soluções sob medida para sua empresa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;