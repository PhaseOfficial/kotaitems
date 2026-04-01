import Butterimage from "../assets/buttermill.png";
import PartnershipImage from "../assets/partnership.png";
import FactoryImage from "../assets/factory.png";
import Packaging from "../assets/packaging.png";
import Super from "../assets/super.jpg";
import Community from "../assets/community.avif";
import { motion } from "framer-motion";

const CoreOperations = () => {
  const operations = [
    {
      id: "01",
      title: "Food Manufacturing",
      description: "Precision-engineered culinary products focusing on taste, nutritional value, and mass-market consistency.",
      image: Butterimage,
      isPrimary: false,
    },
    {
      id: "02",
      title: "Quality Packaging Solutions",
      description: "Industrial-grade packaging designed for protection, shelf-appeal, and sustainable lifecycle management.",
      image: Packaging,
      isPrimary: true,
    },
    {
      id: "03",
      title: "Premium Beverage Distribution",
      description: "Nationwide cold-chain logistics ensuring peak freshness for the finest beverage brands across Zimbabwe.",
      image: Super,
      isPrimary: false,
    },
    {
      id: "04",
      title: "Entrepreneurship Support",
      description: "Empowering the next generation through funding, mentorship, and full-scale production and distribution for aspiring entrepreneurs.",
      image: PartnershipImage,
      isPrimary: false,
    },
    {
      id: "05",
      title: "Community Uplift",
      description: "Investing in community projects through financial support and hands-on assistance to foster local development.",
      image: Community,
      isPrimary: false,
    },
    {
      id: "06",
      title: "Industrial Tech Innovation",
      description: "Pioneering the future of manufacturing with advanced industrial technology supply and technical innovation.",
      image: FactoryImage,
      isPrimary: false,
    },
  ];

  const containerVariants = {
    offscreen: {},
    onscreen: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold text-primary mb-4 tracking-tight uppercase font-headline">Core Operations</h2>
            <div className="h-1 w-24 bg-secondary"></div>
          </div>
          <p className="text-on-surface-variant font-medium tracking-wide uppercase text-sm font-space">Scalable Solutions. Superior Quality.</p>
        </div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {operations.map((op) => (
            <motion.div
              key={op.id}
              className={`group relative overflow-hidden h-[500px] flex flex-col justify-end p-8 transition-all ${
                op.isPrimary 
                  ? "bg-primary md:h-[550px] md:-mt-8 shadow-xl" 
                  : op.id === "05"
                    ? "bg-primary shadow-lg"
                    : "bg-surface-container-lowest"
              }`}
              variants={cardVariants}
            >
              <div className="absolute inset-0">
                <img
                  alt={op.title}
                  className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${
                    op.isPrimary || op.id === "05"
                      ? "opacity-30 group-hover:opacity-90" 
                      : "grayscale group-hover:grayscale-0 opacity-20 group-hover:opacity-90"
                  }`}
                  src={op.image}
                />
                {/* Gradient overlay to maintain the specific card's theme color on the lower half */}
                <div className={`absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                  op.isPrimary || op.id === "05"
                    ? "from-primary via-primary/40 to-transparent"
                    : "from-white via-white/60 to-transparent"
                }`} />
              </div>
              <div className={`relative z-10 ${op.isPrimary || op.id === "05" ? "text-white" : ""}`}>
                <span 
                  className={`text-secondary font-black text-6xl mb-6 block font-space transition-opacity duration-500 ${
                    op.isPrimary || op.id === "05" ? "opacity-100" : "opacity-40 group-hover:opacity-100"
                  }`}
                  style={{ textShadow: op.isPrimary || op.id === "05" ? "none" : "1px 1px 0px rgba(0,0,0,0.05)" }}
                >
                  {op.id}
                </span>
                <h3 className="text-2xl font-bold mb-4 font-headline">{op.title}</h3>
                <p className={`${op.isPrimary || op.id === "05" ? "text-primary-fixed-dim" : "text-on-surface-variant group-hover:text-primary"} font-body transition-colors`}>
                  {op.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreOperations;
