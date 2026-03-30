import Navbar from '../components/Navbar';
import AboutHero from '../components/about/AboutHero';
import VerificationSection from '../components/VerificationSection';
import StorySection from '../components/about/StorySection';
import MissionVision from '../components/about/MissionVision';
import QualityCommitment from '../components/about/QualityCommitment';
import SustainabilitySection from '../components/about/SustainabilitySection';
import Footer from '../components/footer';

const About = () => {
  return (
    <div className="bg-surface">
      <Navbar />
      <main className="pt-16">
        <AboutHero />
        {/* Verification Section from Home is reused but slightly different in design in HTML, 
            but for consistency and code reuse I'll use the component I made */}
        <VerificationSection />
        <StorySection />
        <MissionVision />
        <QualityCommitment />
        <SustainabilitySection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
