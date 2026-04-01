import Navbar from '../components/Navbar';
import ServicesHero from '../components/services/ServicesHero';
import FoodManufacturing from '../components/services/FoodManufacturing';
import PackagingSystems from '../components/services/PackagingSystems';
import LiquidIntelligence from '../components/services/LiquidIntelligence';
import ConsultationCTA from '../components/ConsultationCTA';
import Footer from '../components/footer';

const Services = () => {
  return (
       <div className="bg-surface">
         <Navbar />
         <main className="pt-16">
        <ServicesHero />
        <FoodManufacturing />
        <PackagingSystems />
        <LiquidIntelligence />
        <ConsultationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
