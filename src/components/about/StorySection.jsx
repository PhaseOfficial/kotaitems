const StorySection = () => {
  return (
    <section className="py-24 md:py-32 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-12 gap-12 items-start">
          <div className="col-span-12 md:col-span-5">
            <h2 className="font-headline text-4xl font-bold text-primary tracking-tight mb-8 uppercase">Our Story</h2>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed font-body">
              <p>Founded at the intersection of mechanical engineering and beverage redistribution in Harare, Kota Items began with a single vision: to professionalize the liquid supply chain through unyielding precision.</p>
              <p>Over four decades, we have evolved from a local bottling facility into Zimbabwe's premier manufacturing titan, managing complex logistics and high-fidelity production for prestigious regional brands.</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 relative pt-12 md:pt-0">
            <div className="aspect-[16/10] bg-surface-container overflow-hidden">
              <img 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9AiyPMxMAGRFRPYi7yNTX7dZRm0CqbcWOAWlcLDc1aFcvzuZRS0R-BqHzpR9VnC9qIOWy6FS4Zw39q0SzCXlaO-pLikmCSA5w59tnPdBlR__c-p3PJfQ9XKApI-JUcyioa7kGyD_47H1A0UAG8fv09LpoCuhf3WHgFqL0XlL_HA76XolcV9xRGET6azZtNmyKBNkLw5b7DC1HlfaCVhz9RP_z9AIVRiSOYOqmkPq-Uxj-fBFrha4b8d3I3toPDDGMUXzKCC_aHf0"
                alt="Our industrial history"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 md:bottom-12 md:-left-20 bg-secondary p-8 text-on-secondary hidden md:block max-w-xs shadow-xl">
              <p className="font-headline text-2xl font-bold leading-tight uppercase">40 Years of Industrial Refinement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
