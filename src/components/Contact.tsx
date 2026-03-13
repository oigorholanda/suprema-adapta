import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, MapPin, Clock, ArrowRight, Building2 } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Contato</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 font-display">
            Entre em Contato Conosco
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transforme o ambiente de trabalho da sua empresa. 
            Agende uma consultoria e descubra como podemos ajudar.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* CTA Principal */}
            <Card className="bg-gradient-purple-gold text-white border-0 shadow-medium overflow-hidden relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <CardContent className="p-8 text-center space-y-6 relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-display">
                  Fale Conosco pelo WhatsApp
                </h3>
                <p className="text-base opacity-90 leading-relaxed">
                  Atendimento rápido e personalizado para suas necessidades de ergonomia. 
                  Tire suas dúvidas e solicite um orçamento sem compromisso.
                </p>

                <Button 
                  size="lg"
                  className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
                  asChild
                >
                  <a 
                    href="https://wa.me/5561995592185?text=Olá! Gostaria de saber mais sobre os serviços da SupremAdapta Soluções Ergonômicas."
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
            <div className="space-y-4">
              {[
                { icon: Phone, label: "Telefone", value: "(61) 3083-8185", color: "text-primary", bg: "bg-primary/10" },
                { icon: Mail, label: "E-mail", value: "consultorsupremadapta@gmail.com", color: "text-secondary", bg: "bg-secondary/10" },
                { icon: MapPin, label: "Atendimento", value: "Atendemos em todo o DF", color: "text-primary", bg: "bg-primary/10" },
                { icon: Clock, label: "Horário", value: "Seg a Sex: 8h às 18h | Sáb: 8h às 12h", color: "text-secondary", bg: "bg-secondary/10" },
                { icon: Building2, label: "CNPJ", value: "63.775.758/0001-11", color: "text-primary", bg: "bg-primary/10" },
              ].map((item, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300 bg-card">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 ${item.bg} rounded-xl flex-shrink-0`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{item.label}</p>
                        <p className="text-foreground font-medium text-sm truncate">{item.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
