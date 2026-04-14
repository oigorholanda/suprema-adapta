import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShieldCheck, ShieldAlert } from "lucide-react";

const faqItems = [
  {
    question: "A NR-01 agora obriga as empresas a gerenciar riscos psicossociais?",
    answer:
      "Sim! A atualização da NR-01, publicada em agosto de 2024, incorporou a gestão dos riscos psicossociais no Gerenciamento de Riscos Ocupacionais (GRO). Fatores como assédio moral, pressão excessiva e ambientes de trabalho tóxicos devem ser avaliados e mitigados pelas empresas.",
    isTrue: true,
  },
  {
    question: "A inclusão dos riscos psicossociais na NR-01 é apenas uma recomendação?",
    answer:
      "Não! A atualização torna obrigatória a avaliação e gestão dos riscos psicossociais. Empresas que não se adequarem estão sujeitas a sanções legais.",
    isTrue: false,
  },
  {
    question: "Apenas grandes empresas precisam se preocupar com essa atualização?",
    answer:
      "Não! A NR-01 se aplica a todas as empresas, independentemente do porte ou segmento. Todas devem implementar medidas para gerenciar os riscos psicossociais no ambiente de trabalho.",
    isTrue: false,
  },
  {
    question: "A gestão dos riscos psicossociais pode melhorar a produtividade?",
    answer:
      "Sim! A avaliação e mitigação dos riscos psicossociais não apenas cumprem a legislação, mas também contribuem para um ambiente de trabalho mais saudável, aumentando a produtividade e o bem-estar dos colaboradores.",
    isTrue: true,
  },
  {
    question: "Minha empresa já possui todos os recursos necessários para se adequar?",
    answer:
      "Provavelmente não. Muitas empresas precisarão investir em treinamentos, consultorias especializadas e adaptações internas para cumprir as novas exigências relacionadas aos riscos psicossociais. A SupremAdapta pode ajudar nesse processo.",
    isTrue: false,
  },
  {
    question: "A fiscalização sobre riscos psicossociais será intensificada?",
    answer:
      "Sim! Com a atualização, espera-se uma fiscalização mais rigorosa para garantir que as empresas cumpram as novas diretrizes relacionadas aos riscos psicossociais.",
    isTrue: true,
  },
  {
    question: "A gestão dos riscos psicossociais é responsabilidade exclusiva do setor de Segurança do Trabalho?",
    answer:
      "Não! A gestão dos riscos psicossociais é uma responsabilidade compartilhada entre diversos setores da empresa, incluindo Recursos Humanos, lideranças e a alta administração. A colaboração interdisciplinar é essencial.",
    isTrue: false,
  },
  {
    question: "O setor de RH tem novas responsabilidades com essa atualização?",
    answer:
      "Sim! Com a inclusão dos riscos psicossociais na NR-01, o setor de Recursos Humanos desempenha um papel fundamental na implementação de práticas que promovam o bem-estar e a saúde mental dos colaboradores.",
    isTrue: true,
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Tire suas dúvidas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 font-display">
            Perguntas Frequentes sobre a NR-01
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Entenda as principais mudanças na NR-01 e como a gestão dos riscos
            psicossociais impacta sua empresa.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-xl px-6 bg-card shadow-sm data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline gap-3">
                  <div className="flex items-center gap-3">
                    {item.isTrue ? (
                      <ShieldCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <ShieldAlert className="w-5 h-5 text-destructive flex-shrink-0" />
                    )}
                    <span>{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
