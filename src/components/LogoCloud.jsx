import { motion } from 'framer-motion';
import ADLLogo from '../assets/ADL.webp';
import ZambeziLogo from '../assets/zambezi.jpg';
import NyathiLogo from '../assets/Nyathi.jpg';
import ChibukuLogo from '../assets/chibuku.png';
import DeltaLogo from '../assets/DELTA.webp';

const logos = [
  { src: ADLLogo, alt: 'African Distillers Limited' },
  { src: ZambeziLogo, alt: 'Zambezi Lager' },
  { src: NyathiLogo, alt: 'Nyathi' },
  { src: ChibukuLogo, alt: 'Chibuku' },
  { src: DeltaLogo, alt: 'Delta Beverages' },
];

const LogoCloud = () => {
  const duplicatedLogos = [...logos, ...logos];

  const marqueeVariants = {
    animate: {
      x: [0, -1200], // 5 logos * (160px width + 80px margin)
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 25,
          ease: 'linear',
        },
      },
    },
  };

  return (
    <div className="bg-surface-container-low py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h3 className="text-center text-on-surface-variant font-semibold mb-12 font-space uppercase tracking-widest text-sm">
          In Partnership With Industry Leaders
        </h3>
        <div className="relative w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <motion.div className="flex" variants={marqueeVariants} animate="animate">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-10 flex items-center justify-center h-20 w-40">
                <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain filter grayscale hover:filter-none transition-all duration-300" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;