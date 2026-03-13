import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CompanySection from "@/components/CompanySection";
import RiskFactors from "@/components/RiskFactors";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CompanySection />
        <RiskFactors />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
