import Super from "../../assets/super.jpg";
import African from "../../assets/african dist.jpg";
import Delta from "../../assets/DELTA.webp";

const LiquidIntelligence = () => {
  return (
    <section className="bg-primary text-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-16 text-center">
          <span className="font-label text-secondary-container font-bold tracking-[0.2em] uppercase text-xs mb-4 block font-space">
            Extensive Distribution Network
          </span>
          <h2 className="font-headline text-5xl md:text-6xl font-bold tracking-tight uppercase">Beverage Redistribution</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px] text-left">
          {/* Delta Beverages */}
          <div className="md:col-span-1 md:row-span-2 bg-primary-container relative group overflow-hidden aspect-[4/5] md:aspect-auto">
            <img 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
              src={Delta}
              alt="A selection of Delta Beverages products"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6 md:p-8">
              <h4 className="font-headline text-xl md:text-2xl font-bold uppercase">Delta Portfolio</h4>
              <p className="text-[10px] md:text-xs text-on-primary-container mt-2 font-body">Official distributors for Delta's iconic brands.</p>
            </div>
          </div>
          {/* African Distillers */}
          <div className="md:col-span-2 md:row-span-1 bg-surface-container relative group overflow-hidden aspect-[16/7] md:aspect-auto">
            <img 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all" 
              src={African}
              alt="African Distillers Limited products"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-4 md:p-6 bg-primary/20 backdrop-blur-md">
                <h4 className="font-headline text-xl md:text-3xl font-bold uppercase tracking-widest">African Distillers</h4>
                <p className="font-label text-[10px] md:text-sm tracking-widest mt-2 font-space">PREMIUM SPIRITS & WINES</p>
              </div>
            </div>
          </div>
          {/* Sorghum Beers */}
          <div className="md:col-span-1 md:row-span-1 bg-secondary relative group overflow-hidden aspect-square md:aspect-auto">
            <img 
              className="w-full h-full object-cover opacity-50 group-hover:opacity-90 transition-all" 
              src={Super}
              alt="Traditional sorghum beers"
            />
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
              <h4 className="font-headline text-lg md:text-xl font-bold uppercase">Chibuku & Nyati</h4>
              <p className="text-on-secondary/80 text-[10px] md:text-xs font-body">Local tradition, delivered.</p>
            </div>
          </div>
          {/* And More */}
          <div className="md:col-span-1 md:row-span-1 bg-tertiary-container relative flex items-center justify-center p-6 md:p-8 aspect-square md:aspect-auto">
            <div className="text-center">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-secondary-container mb-3 md:mb-4">add_business</span>
              <h4 className="font-headline font-bold text-sm md:text-lg leading-tight uppercase">And Many More</h4>
              <p className="text-on-tertiary-container/80 text-[10px] md:text-xs mt-2 font-body">Global and local brands.</p>
            </div>
          </div>
          {/* Logistics */}
          <div className="md:col-span-2 md:row-span-1 bg-primary relative overflow-hidden flex flex-col md:flex-row items-center px-6 md:px-12 py-8 md:py-0 border border-white/10">
            <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
              <h4 className="font-headline text-lg md:text-2xl font-bold mb-2 uppercase">Nationwide Logistics</h4>
              <p className="text-[10px] md:text-xs text-slate-400 font-body">Cold-chain network ensuring integrity.</p>
            </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <a 
              href="https://wa.me/263775632466"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-secondary-container text-on-secondary-container px-4 py-2 font-bold text-[10px] md:text-xs uppercase tracking-widest font-space text-center"
            >
              Request Specs
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiquidIntelligence;
