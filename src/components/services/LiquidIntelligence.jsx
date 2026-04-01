import Super from "../../assets/super.jpg";
import African from "../../assets/african dist.jpg";
import Delta from "../../assets/DELTA.webp";
import { motion } from "framer-motion";

const LiquidIntelligence = () => {
  const partners = [
    {
      title: "Delta Beverages Portfolio",
      description: "Official distributors for Delta's complete range of iconic alcoholic and non-alcoholic brands across the region.",
      image: Delta,
      accent: "bg-primary"
    },
    {
      title: "African Distillers",
      description: "Premium spirits and wines distribution, maintaining cold-chain integrity from warehouse to point-of-sale.",
      image: African,
      accent: "bg-surface-container-high"
    },
    {
      title: "Traditional Sorghum Beers",
      description: "The heart of local tradition, delivered with modern logistics efficiency. Distributors of Chibuku and Nyati brands.",
      image: Super,
      accent: "bg-secondary"
    }
  ];

  return (
    <section className="bg-surface py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-16 md:mb-24">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary tracking-tight uppercase mb-4 text-center">Beverage Redistribution</h2>
        <div className="h-1 w-20 bg-secondary mx-auto"></div>
        <p className="text-on-surface-variant text-center mt-8 text-base md:text-lg max-w-2xl mx-auto font-body leading-relaxed">
          Our nationwide logistics network ensures that Zimbabwe's most beloved brands reach every corner of the country in peak condition.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col bg-surface-container-lowest border border-outline-variant hover:shadow-2xl transition-all duration-500 group overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="aspect-[16/10] overflow-hidden relative">
              <img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                src={partner.image}
                alt={partner.title}
              />
              <div className="absolute inset-0 bg-primary/20 opacity-40 group-hover:opacity-0 transition-opacity duration-700"></div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h4 className="font-headline font-bold text-xl mb-4 uppercase tracking-tight text-primary">{partner.title}</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed font-body flex-grow">{partner.description}</p>
              <div className={`h-1 w-12 ${partner.accent} mt-6`}></div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-24">
        <div className="bg-primary-container p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-32 -mt-32 rounded-full blur-3xl"></div>
          <div className="relative z-10 text-center md:text-left">
            <h4 className="font-headline text-2xl md:text-3xl font-bold mb-4 uppercase tracking-tighter">Nationwide Cold-Chain Logistics</h4>
            <p className="text-blue-100/60 max-w-xl font-body">Our state-of-the-art logistics network ensures product integrity and timely delivery for all partners across Zimbabwe.</p>
          </div>
          <a 
            href="https://wa.me/263775632466"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 bg-secondary-container text-on-secondary-container px-8 py-4 font-bold rounded-md hover:bg-white transition-colors uppercase tracking-widest text-xs md:text-sm font-space inline-flex items-center justify-center whitespace-nowrap"
          >
            Request Specs
          </a>
        </div>
      </div>
    </section>
  );
};

export default LiquidIntelligence;
