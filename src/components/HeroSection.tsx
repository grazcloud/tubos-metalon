import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-industrial-pipes.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=551129540299&text=Gostaria%20de%20solicitar%20or%C3%A7amento%20sobre%20Metalon.", "_blank");
  };

  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Metalon para estruturas metálicas" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-darker/95 via-industrial-darker/85 to-industrial-darker/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <Badge className="mb-6 bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-4 py-2">
            ✓ 45 Anos de Pioneirismo
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Metalon: Qualidade e Versatilidade para Diversas Aplicações
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed">
            Tire suas dúvidas sobre metalon com especialistas Tubonasa.
          </p>
          
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            45 anos de pioneirismo no fornecimento de tubos quadrados, metalon, retangulares e redondos com qualidade certificada.
          </p>

          <p className="text-base text-gray-300 mb-8 leading-relaxed">
            O metalon é amplamente utilizado em estruturas metálicas, serralheria, indústria e construção civil, por oferecer formato regular, resistência mecânica e excelente acabamento. A Tubonasa fornece metalon com rigor técnico, garantindo segurança, durabilidade e eficiência para diferentes tipos de projeto.
          </p>

          <Button 
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Solicite Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
