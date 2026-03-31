import Buttermill from '../../assets/buttermill.png';
const ServicesHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-24 pt-32">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-7 text-left">
          <span className="font-label text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block font-space">
            Industrial Precision
          </span>
          <h1 className="font-headline text-primary text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
            The Core of <br/><span className="text-outline-variant italic font-light">Production.</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed font-body">
            Kota Items Manufacturing delivers industrial-scale solutions in food processing, high-fidelity packaging, and beverage redistribution with an uncompromising commitment to quality.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-5 flex items-end">
          <div className="w-full aspect-square bg-surface-container relative overflow-hidden">
            <img 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              src={Buttermill}
              alt="Industrial precision"
            />
            <div className="absolute bottom-6 right-6 bg-white p-4 shadow-xl">
              <span className="font-headline font-black text-primary text-4xl leading-none font-space">01/03</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
