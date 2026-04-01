import Packaging from "../../assets/packaging.png";
import Sugarbeans from "../../assets/sugarbeans.png";
import Factory from "../../assets/factory.png";
import { motion } from "framer-motion";

const FoodManufacturing = () => {
  const products = [
    {
      title: "Peanut Butter Manufacturing",
      description: "High-quality peanut butter produced in compliance with strict safety and quality standards. Our facility handles large-scale production with precision and care.",
      image: Packaging,
      tags: ["Bulk Supply", "Certified"]
    },
    {
      title: "Refined Staples",
      description: "Consistently graded flours and sugars for industrial culinary applications. We ensure every batch meets the highest standards of purity and consistency.",
      image: Factory,
      tags: ["Quality Tested", "High Volume"]
    },
    {
      title: "Prepared Goods",
      description: "High-volume prepared food solutions for the retail and hospitality sectors. Customized recipes and packaging to suit your brand's unique needs.",
      image: Sugarbeans,
      tags: ["Ready-to-use", "Scalable"]
    }
  ];

  return (
    <section className="bg-surface py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-16 md:mb-24">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary tracking-tight uppercase mb-4">Food Manufacturing</h2>
        <div className="h-1 w-20 bg-secondary"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-24 md:space-y-48">
        {products.map((product, index) => (
          <motion.div 
            key={index} 
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {/* Image Container */}
            <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-square relative group overflow-hidden bg-surface-container-low">
              <img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                src={product.image}
                alt={product.title}
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>

            {/* Content Container */}
            <div className="w-full md:w-1/2 text-left">
              <div className="flex gap-2 mb-6">
                {product.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="bg-surface-container px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest font-space border border-outline-variant">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6 uppercase tracking-tight">{product.title}</h3>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-8 font-body">{product.description}</p>
              <a 
                href="https://wa.me/263775632466"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:translate-x-2 transition-transform font-space"
              >
                Get Specifications <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FoodManufacturing;
