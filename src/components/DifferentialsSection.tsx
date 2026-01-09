import { Award, Building2, Package, Headphones, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const differentials = [
  {
    icon: Building2,
    title: "Pioneirismo",
    description: "Há mais de 45 anos no mercado brasileiro, fornecendo tubos metálicos com qualidade e confiabilidade."
  },
  {
    icon: Package,
    title: "Variedade Completa",
    description: "Tubos de metalon quadrados e retangulares em diferentes dimensões e espessuras, prontos para diversas aplicações."
  },
  {
    icon: Award,
    title: "Qualidade Certificada",
    description: "Controle rigoroso de qualidade e conformidade técnica em todos os lotes fornecidos."
  },
  {
    icon: Headphones,
    title: "Suporte Técnico",
    description: "Orientação gratuita para escolha do metalon adequado conforme aplicação, carga e ambiente de uso."
  },
  {
    icon: Truck,
    title: "Estoque Estratégico",
    description: "Disponibilidade imediata e logística eficiente para entregas rápidas em todo o Brasil."
  }
];

const DifferentialsSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por Que Escolher Metalon da Tubonasa?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça os diferenciais que fazem da Tubonasa referência em metalon
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {differentials.map((item, index) => (
            <Card 
              key={index} 
              className="border border-border hover:border-primary transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-secondary/50 rounded-lg p-6 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Tubos de Metalon: Versatilidade e Resistência na Prática
            </h3>
            <p className="text-muted-foreground">
              Indicados para estruturas metálicas leves e médias, serralheria, portões, esquadrias, móveis metálicos e aplicações industriais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
