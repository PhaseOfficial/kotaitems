const PackagingSystems = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-32 self-start">
          <span className="font-label text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block font-space">
            Sustainable Logistics
          </span>
          <h2 className="font-headline text-5xl font-bold text-primary leading-tight mb-8 uppercase">
            Innovative <br/>Packaging <br/>Systems
          </h2>
          <p className="text-on-surface-variant mb-12 font-body">
            Beyond the container. We design ecological and structural integrity into every unit of packaging we produce.
          </p>
          <a 
            href="https://wa.me/263775632466?text=Hi%20Kota%20Items,%20I'd%20like%20to%20request%20the%20specifications%20for%20your%20Packaging%20Systems."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 border border-primary font-headline font-bold uppercase text-primary hover:bg-primary hover:text-white transition-all tracking-widest text-sm font-space inline-flex items-center justify-center"
          >
            Request Specification
          </a>

        </div>
        <div className="col-span-12 lg:col-span-8 space-y-24">
          <div className="relative group">
            <div className="bg-surface-container overflow-hidden h-[500px]">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmAtEUJMvIMnLxsmtkCNYZ2xOb2KoIj1crMn5nFFeqQEJJ8AEunQEbyxb1hI2M0Wh6XnchPPe9mkPYQmRvIJPmMvtmCtcZnPcw2LBNQ-z7QtDpXDstVux7EBEktzBKL9hNnc7CKfc3gwuiLTDJzQaz7KnKco15BnV5XREV1Wq70SPPpFEomB1tbQFdEesyuomxals9T7kKwFrC8hynm8TrDR7vkl47q3548LGOT0ke4dv65glFT85WK1EPJmG4qthWRO_P12_BLo0"
                alt="Sustainable packaging"
              />
            </div>
            <div className="absolute -bottom-10 -right-6 md:right-12 bg-white p-8 shadow-2xl max-w-sm">
              <h4 className="font-headline font-bold text-xl mb-2 uppercase">Eco-Pulp Customization</h4>
              <p className="text-sm text-on-surface-variant mb-4 font-body">100% biodegradable custom molds for fragile industrial components.</p>
              <span className="text-secondary font-bold text-xs font-label tracking-widest font-space">SUSTAINABILITY SCORE: A+</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
            <div>
              <span className="material-symbols-outlined text-4xl text-primary mb-4">inventory_2</span>
              <h4 className="font-headline font-bold text-2xl mb-4 uppercase">Industrial Logistics</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed font-body">Integrated tracking systems and heavy-duty protective skins for international shipping mandates.</p>
            </div>
            <div>
              <span className="material-symbols-outlined text-4xl text-primary mb-4">science</span>
              <h4 className="font-headline font-bold text-2xl mb-4 uppercase">Advanced Materials</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed font-body">Proprietary polymer substitutes that offer medical-grade barrier protection with zero plastic waste.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagingSystems;
