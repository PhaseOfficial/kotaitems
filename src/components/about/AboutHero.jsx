import Aboutheroimg from '../../assets/aboutheroimg.png';
const AboutHero = () => {
  return (
    <section className="relative min-h-[716px] flex items-center overflow-hidden bg-primary-container">
      <div className="absolute inset-0 opacity-40">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: `url(${Aboutheroimg})` }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-8 w-full py-24">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-secondary text-on-secondary text-[10px] font-bold tracking-[0.2em] uppercase mb-6 font-space">
            Established 2021 | Zimbabwe
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
            Precision in Every <span className="text-secondary-container">Drop.</span> Authority in Every Batch.
          </h1>
          <p className="text-xl text-blue-100/80 max-w-xl leading-relaxed font-light font-body">
            Kota Items Zimbabwe is the architectural backbone of the regional beverage redistribution industry, blending industrial scale with sommelier-grade meticulousness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
