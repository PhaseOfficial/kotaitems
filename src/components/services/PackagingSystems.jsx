import Packaging from "../../assets/packaging.png";
import { motion } from "framer-motion";

const PackagingSystems = () => {
  return (
    <section className="bg-primary-container py-24 md:py-32 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-label text-secondary-container font-bold tracking-[0.3em] uppercase text-xs mb-4 block font-space">
              Sustainable Systems
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white leading-tight mb-8 uppercase tracking-tighter">
              Innovative <br className="hidden md:block"/>Packaging <br className="hidden md:block"/>Solutions
            </h2>
            <p className="text-blue-100/70 text-base md:text-lg mb-12 font-body leading-relaxed max-w-xl">
              Beyond the container. We design ecological and structural integrity into every unit of packaging we produce, from Eco-Pulp customization to heavy-duty protective skins.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div>
                <span className="material-symbols-outlined text-secondary-container text-4xl mb-4">inventory_2</span>
                <h4 className="font-headline font-bold text-xl mb-3 uppercase">Eco-Pulp Customization</h4>
                <p className="text-blue-100/50 text-sm leading-relaxed font-body">100% biodegradable custom molds for fragile industrial components.</p>
              </div>
              <div>
                <span className="material-symbols-outlined text-secondary-container text-4xl mb-4">science</span>
                <h4 className="font-headline font-bold text-xl mb-3 uppercase">Advanced Materials</h4>
                <p className="text-blue-100/50 text-sm leading-relaxed font-body">Proprietary barrier protection with zero plastic waste.</p>
              </div>
            </div>

            <a 
              href="https://wa.me/263775632466"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-container text-on-secondary-container px-8 py-4 font-bold rounded-md hover:bg-white transition-colors uppercase tracking-widest text-xs md:text-sm font-space inline-flex items-center justify-center"
            >
              Get Specifications
            </a>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="absolute -inset-4 border border-white/10 translate-x-4 translate-y-4"></div>
            <div className="relative bg-white/5 p-2 backdrop-blur-sm">
              <img 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" 
                src={Packaging}
                alt="Sustainable packaging systems"
              />
            </div>
            <div className="absolute top-8 right-8 bg-secondary p-6 shadow-2xl hidden md:block">
              <p className="text-on-secondary font-black text-4xl font-space uppercase">A+</p>
              <p className="text-on-secondary/70 text-[10px] font-bold uppercase tracking-widest font-space">Sustainability</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PackagingSystems;
