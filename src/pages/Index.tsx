import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Standards from "@/components/Standards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Standards />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
