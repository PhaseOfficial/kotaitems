import Giving from '../../assets/giving.png';
const SustainabilitySection = () => {
  return (
    <section className="bg-primary text-white py-16 md:py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="col-span-12 lg:col-span-6 relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 md:mb-12 leading-none uppercase">
              Sustainability & <br className="hidden sm:block"/><span className="text-secondary-container">Community</span>
            </h2>
            <div className="space-y-8 md:space-y-12">
              <div className="flex gap-4 md:gap-6">
                <span className="material-symbols-outlined text-secondary-container text-3xl md:text-4xl shrink-0">eco</span>
                <div>
                  <h4 className="font-headline font-bold text-lg md:text-xl mb-2 uppercase">Zero-Waste Bottling</h4>
                  <p className="text-blue-100/60 text-sm md:text-base leading-relaxed font-body">Operating on a closed-loop system, reclaiming 92% of water used, setting a benchmark for Zimbabwean industry.</p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <span className="material-symbols-outlined text-secondary-container text-3xl md:text-4xl shrink-0">groups</span>
                <div>
                  <h4 className="font-headline font-bold text-lg md:text-xl mb-2 uppercase">Zimbabwean Workforce</h4>
                  <p className="text-blue-100/60 text-sm md:text-base leading-relaxed font-body">We invest in local vocational training to empower Zimbabwe's workforce with world-class industrial skills.</p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <span className="material-symbols-outlined text-secondary-container text-3xl md:text-4xl shrink-0">volunteer_activism</span>
                <div>
                  <h4 className="font-headline font-bold text-lg md:text-xl mb-2 uppercase">Community Project Support</h4>
                  <p className="text-blue-100/60 text-sm md:text-base leading-relaxed font-body">We are dedicated to uplifting the communities we operate in by actively supporting their projects and providing necessary funding.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 mt-8 lg:mt-0">
            <div className="relative group max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-4 border border-blue-500/20 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
              <img 
                className="relative z-10 w-full aspect-square object-cover rounded-sm" 
                src={Giving}
                alt="Our community and sustainability efforts"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
