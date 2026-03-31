import Super from "../../assets/super.jpg";
import African from "../../assets/african dist.jpg";

const LiquidIntelligence = () => {
  return (
    <section className="bg-primary text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16 text-center">
          <span className="font-label text-secondary-container font-bold tracking-[0.2em] uppercase text-xs mb-4 block font-space">
            Extensive Distribution Network
          </span>
          <h2 className="font-headline text-5xl md:text-6xl font-bold tracking-tight uppercase">Beverage Redistribution</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px] text-left">
          {/* Delta Beverages */}
          <div className="md:col-span-1 md:row-span-2 bg-primary-container relative group overflow-hidden h-[400px] md:h-full">
            <img 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7LvQQd9mtOk0-SPM5zLgxC5b0qXGd36RfcWBEJdlQvQScwsWne1wsMEthj6bVybC5mBRod-7OyVS896lEBwS2mgU8mbJs-xn72bUpB2OrvJWQhAyqu_vCFfZoDoFxkXiH2-WulXnbNS5ufweqo3Dp5kEATG0_rPpOOR2XnmzkgNlr_RT_E7Qz3KKTj38_8JDet1uFmQHP4DW-vZYIVI46ve8FzW8LPeMHSF6eofx5OANB0h3LreogP2Zdu4YPLh49P03VU2Yw9jw"
              alt="A selection of Delta Beverages products"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
              <h4 className="font-headline text-2xl font-bold uppercase">Delta Beverages Portfolio</h4>
              <p className="text-xs text-on-primary-container mt-2 font-body">Official distributors for Delta's complete range of iconic alcoholic and non-alcoholic brands.</p>
            </div>
          </div>
          {/* African Distillers */}
          <div className="md:col-span-2 md:row-span-1 bg-surface-container relative group overflow-hidden h-[300px] md:h-full">
            <img 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all" 
              src={African}
              alt="African Distillers Limited products"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6 bg-primary/20 backdrop-blur-md">
                <h4 className="font-headline text-3xl font-bold uppercase tracking-widest">African Distillers</h4>
                <p className="font-label text-sm tracking-widest mt-2 font-space">PREMIUM SPIRITS & WINES</p>
              </div>
            </div>
          </div>
          {/* Sorghum Beers */}
          <div className="md:col-span-1 md:row-span-1 bg-secondary relative group overflow-hidden h-[300px] md:h-full">
            <img 
              className="w-full h-full object-cover opacity-50 group-hover:opacity-90 transition-all" 
              src={Super}
              alt="Traditional sorghum beers"
            />
            <div className="absolute bottom-6 left-6">
              <h4 className="font-headline text-xl font-bold uppercase">Chibuku & Nyati</h4>
              <p className="text-on-secondary/80 text-xs font-body">The heart of local tradition, delivered.</p>
            </div>
          </div>
          {/* And More */}
          <div className="md:col-span-1 md:row-span-1 bg-tertiary-container relative flex items-center justify-center p-8 h-[200px] md:h-full">
            <div className="text-center">
              <span className="material-symbols-outlined text-4xl text-secondary-container mb-4">add_business</span>
              <h4 className="font-headline font-bold text-lg leading-tight uppercase">And Many More</h4>
              <p className="text-on-tertiary-container/80 text-xs mt-2 font-body">Our network includes a growing list of beloved local and international brands.</p>
            </div>
          </div>
          {/* Logistics */}
          <div className="md:col-span-2 md:row-span-1 bg-primary relative overflow-hidden flex items-center px-12 h-[200px] md:h-full">
            <div className="w-1/2">
              <h4 className="font-headline text-2xl font-bold mb-2 uppercase">Nationwide Logistics</h4>
              <p className="text-xs text-slate-400 font-body">Our state-of-the-art, cold-chain logistics network ensures product integrity and timely delivery for all partners.</p>
            </div>
          <div className="w-1/2 flex justify-end">
            <a 
              href="https://wa.me/263775632466?text=Hi%20Kota%20Items,%20I'd%20like%20to%20request%20the%20specifications%20for%20your%20Beverage%20Redistribution%20network."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-container text-on-secondary-container px-6 py-2 font-bold text-xs uppercase tracking-widest font-space text-center"
            >
              Request Specification
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiquidIntelligence;
