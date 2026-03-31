import Excellence from '../../assets/excellence.png';
const StorySection = () => {
  return (
    <section className="py-16 md:py-32 bg-surface-container-lowest overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary tracking-tight mb-6 md:mb-8 uppercase">Our Story</h2>
            <div className="space-y-4 md:space-y-6 text-on-surface-variant text-base md:text-lg leading-relaxed font-body">
              <p>Founded at the intersection of mechanical engineering and beverage redistribution in Harare, Kota Items began in 2021 with a single vision: to professionalize the liquid supply chain through unyielding precision.</p>
              <p>Since our inception, we have rapidly evolved into one of Zimbabwe's premier manufacturing entities, managing complex logistics and high-fidelity production for prestigious regional brands with a focus on modern industrial innovation.</p>
            </div>
          </div>
          <div className="md:col-span-7 relative order-1 md:order-2 mb-8 md:mb-0">
            <div className="aspect-[16/10] bg-surface-container overflow-hidden rounded-sm">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src={Excellence}
                alt="Our industrial history"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-20 bg-secondary p-4 md:p-8 text-on-secondary max-w-[200px] md:max-w-xs shadow-2xl z-20">
              <p className="font-headline text-base md:text-2xl font-bold leading-tight uppercase">Modern Industrial Refinement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
