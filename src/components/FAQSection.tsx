import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const faqData = [
  {
    question: "O que é metalon e para que ele é utilizado?",
    answer: "O metalon é um tubo de aço carbono com seção quadrada ou retangular, utilizado principalmente em estruturas metálicas, serralheria e aplicações industriais leves e médias."
  },
  {
    question: "Qual a diferença entre metalon e tubo redondo?",
    answer: "O metalon possui formato quadrado ou retangular, facilitando encaixes, alinhamento e acabamento estético, enquanto tubos redondos são mais comuns em aplicações estruturais específicas e condução."
  },
  {
    question: "Quais dimensões de metalon a Tubonasa trabalha?",
    answer: "A Tubonasa oferece metalon em diversas dimensões e espessuras, adequadas para diferentes tipos de projeto."
  },
  {
    question: "O metalon suporta carga estrutural?",
    answer: "Sim, desde que seja corretamente dimensionado conforme a carga, aplicação e ambiente de uso."
  },
  {
    question: "Como escolher a espessura correta do metalon?",
    answer: "A escolha depende da carga suportada, do tipo de estrutura e do vão. O suporte técnico da Tubonasa auxilia nessa definição."
  },
  {
    question: "O metalon pode ser soldado facilmente?",
    answer: "Sim. O metalon apresenta excelente soldabilidade, o que facilita sua aplicação em estruturas metálicas e serralheria."
  },
  {
    question: "O metalon pode ser utilizado em áreas externas?",
    answer: "Pode, desde que receba tratamento adequado contra corrosão ou seja utilizado em ambientes compatíveis com o material."
  },
  {
    question: "A Tubonasa possui metalon em estoque para pronta entrega?",
    answer: "Sim. Trabalhamos com estoque estratégico para garantir agilidade no fornecimento."
  },
  {
    question: "A Tubonasa oferece suporte técnico para escolha do metalon?",
    answer: "Sim. Nossa equipe técnica orienta desde a escolha do perfil até a aplicação correta."
  },
  {
    question: "Como solicitar orçamento de tubos de metalon?",
    answer: "Basta entrar em contato com nossa equipe pelos canais disponíveis ou solicitar orçamento diretamente pelo site."
  }
];

const FAQSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=551129540299&text=Gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20Tubos%20de%20Metalon.", "_blank");
  };

  return (
    <section className="py-20 bg-secondary/30" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tire Suas Dúvidas sobre Tubos de Metalon
            </h2>
            <p className="text-lg text-muted-foreground">
              Perguntas mais comuns respondidas por nossos especialistas com base em 45 anos de experiência
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-primary">
                  {index + 1}. {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe técnica está pronta para ajudar com seu projeto.
            </p>
            <Button 
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Consulte um Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
