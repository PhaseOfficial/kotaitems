import Buttermill from '../../assets/buttermill.png';

const ServicesHero = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden bg-primary pt-16">
      <div className="absolute inset-0 opacity-40">
        <img 
          className="w-full h-full object-cover" 
          src={Buttermill}
          alt="Industrial precision"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
      
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-4xl">
          <span className="font-label text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block font-space">
            Industrial Solutions
          </span>
          <h1 className="font-headline text-white text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 uppercase">
            The Core of <br/><span className="text-secondary-container italic font-light">Production.</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl leading-relaxed font-body">
            Kota Items delivers industrial-scale solutions in food processing, high-fidelity packaging, and beverage redistribution with an uncompromising commitment to quality.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-12 right-6 md:right-12 hidden md:block">
        <div className="flex items-baseline gap-4">
          <span className="text-white/20 text-8xl font-black font-space">01</span>
          <div className="h-px w-24 bg-secondary"></div>
          <span className="text-secondary font-bold font-space uppercase tracking-widest text-xs">Services Overview</span>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
