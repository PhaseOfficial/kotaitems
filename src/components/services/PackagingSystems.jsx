const PackagingSystems = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16 md:mb-24 mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 text-left">
        
        {/* Sidebar: Sticky only on LG screens */}
        <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-32 self-start">
          <span className="font-label text-secondary font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-4 block font-space">
            Sustainable Logistics
          </span>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6 md:mb-8 uppercase">
            Innovative <br className="hidden md:block"/>Packaging <br className="hidden md:block"/>Systems
          </h2>
          <p className="text-on-surface-variant mb-8 md:mb-12 font-body text-sm md:text-base">
            Beyond the container. We design ecological and structural integrity into every unit of packaging we produce.
          </p>
          <a 
            href="https://wa.me/263775632466?text=Hi%20Kota%20Items,%20I'd%20like%20to%20request%20the%20specifications%20for%20your%20Packaging%20Systems."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 border border-primary font-headline font-bold uppercase text-primary hover:bg-primary hover:text-white transition-all tracking-widest text-xs md:text-sm font-space inline-flex items-center justify-center"
          >
            Request Specification
          </a>
        </div>

        {/* Content Area */}
        <div className="col-span-12 lg:col-span-8 space-y-20 md:space-y-32">
          
          {/* Main Image Feature */}
          <div className="relative group">
            <div className="bg-surface-container overflow-hidden aspect-[4/3] md:aspect-video lg:h-[500px]">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmAtEUJMvIMnLxsmtkCNYZ2xOb2KoIj1crMn5nFFeqQEJJ8AEunQEbyxb1hI2M0Wh6XnchPPe9mkPYQmRvIJPmMvtmCtcZnPcw2LBNQ-z7QtDpXDstVux7EBEktzBKL9hNnc7CKfc3gwuiLTDJzQaz7KnKco15BnV5XREV1Wq70SPPpFEomB1tbQFdEesyuomxals9T7kKwFrC8hynm8TrDR7vkl47q3548LGOT0ke4dv65glFT85WK1EPJmG4qthWRO_P12_BLo0"
                alt="Sustainable packaging"
              />
            </div>
            
            {/* Floating Info Card: Adjusted for Mobile */}
            <div className="relative -mt-12 mx-4 md:mx-0 md:absolute md:-bottom-10 md:-right-6 lg:right-12 bg-white p-6 md:p-8 shadow-xl md:shadow-2xl max-w-full md:max-w-sm z-10">
              <h4 className="font-headline font-bold text-lg md:text-xl mb-2 uppercase">Eco-Pulp Customization</h4>
              <p className="text-xs md:text-sm text-on-surface-variant mb-4 font-body">100% biodegradable custom molds for fragile industrial components.</p>
              <span className="text-secondary font-bold text-[10px] md:text-xs font-label tracking-widest font-space">SUSTAINABILITY SCORE: A+</span>
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 pt-8">
            <div className="flex flex-col">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-primary mb-4">inventory_2</span>
              <h4 className="font-headline font-bold text-xl md:text-2xl mb-3 uppercase">Industrial Logistics</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed font-body">Integrated tracking systems and heavy-duty protective skins for international shipping mandates.</p>
            </div>
            <div className="flex flex-col">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-primary mb-4">science</span>
              <h4 className="font-headline font-bold text-xl md:text-2xl mb-3 uppercase">Advanced Materials</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed font-body">Proprietary polymer substitutes that offer medical-grade barrier protection with zero plastic waste.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PackagingSystems;
