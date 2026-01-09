import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Metalon - Tubonasa | 45 Anos de Pioneirismo</title>
        <meta 
          name="description" 
          content="Metalon com qualidade certificada. 45 anos fornecendo tubos quadrados e retangulares para estruturas metálicas, serralheria e construção civil." 
        />
        <meta name="keywords" content="metalon, metalon quadrado, metalon retangular, tubos estruturais, serralheria, tubonasa" />
        <link rel="canonical" href="https://tubonasa.com.br/metalon" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Metalon - Tubonasa | 45 Anos de Pioneirismo" />
        <meta property="og:description" content="Tire suas dúvidas sobre metalon com especialistas que têm 45 anos de experiência no mercado brasileiro" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tubonasa.com.br/metalon" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "O que é metalon e para que ele é utilizado?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O metalon é um tubo de aço carbono com seção quadrada ou retangular, utilizado principalmente em estruturas metálicas, serralheria e aplicações industriais leves e médias."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <HeroSection />
          <DifferentialsSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
