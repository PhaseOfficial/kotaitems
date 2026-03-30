import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import VerificationSection from '../components/VerificationSection';
import OverviewSection from '../components/OverviewSection';
import CoreOperations from '../components/CoreOperations';
import PillarsOfExcellence from '../components/PillarsOfExcellence';
import ConsultationCTA from '../components/ConsultationCTA';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="bg-surface">
      <Navbar />
      <main>
        <HeroSection />
        <VerificationSection />
        <OverviewSection />
        <CoreOperations />
        <PillarsOfExcellence />
        <ConsultationCTA />
      </main>
      <Footer />
    </div>
  );
}
