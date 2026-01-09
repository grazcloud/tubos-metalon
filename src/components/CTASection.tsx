import { Button } from "@/components/ui/button";
import { MessageCircle, FileText, CheckCircle } from "lucide-react";

const benefits = [
  "Experiência Pioneira: 45 anos no mercado brasileiro",
  "Qualidade Controlada: Rigor técnico em cada fornecimento",
  "Linha Completa: Metalon quadrado e retangular em estoque",
  "Suporte Técnico Gratuito: Apoio na escolha e aplicação",
  "Entrega Rápida: Logística nacional eficiente"
];

const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=551129540299&text=Gostaria%20de%20solicitar%20or%C3%A7amento%20sobre%20Metalon.", "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-industrial-darker to-industrial-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Benefits Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Por Que Metalon da Tubonasa?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-300 mt-8 italic">
              Metalon: a escolha inteligente para estruturas práticas, resistentes e com ótimo acabamento.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center border-t border-white/20 pt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pronto para Seu Projeto?
            </h3>
            <h4 className="text-xl text-primary mb-4">
              Metalon de Qualidade para Seus Projetos
            </h4>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para fornecer metalon com qualidade garantida e suporte técnico completo. 45 anos de confiança no mercado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={handleWhatsAppClick}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
              >
                <FileText className="mr-2 h-5 w-5" />
                Solicitar Orçamento Agora
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={handleWhatsAppClick}
                className="border-2 border-white bg-white text-industrial-darker hover:bg-white/90 text-lg px-8 py-6"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </Button>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-gray-300 text-sm text-center">
              Atendimento especializado de segunda a sexta, das 8h às 18h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
