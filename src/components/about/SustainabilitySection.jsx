const SustainabilitySection = () => {
  return (
    <section className="bg-primary text-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="grid grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-6 relative z-10">
            <h2 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter mb-12 leading-none uppercase">
              Sustainability & <br/><span className="text-secondary-container">Community</span>
            </h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-secondary-container text-4xl shrink-0">eco</span>
                <div>
                  <h4 className="font-headline font-bold text-xl mb-2 uppercase">Zero-Waste Bottling</h4>
                  <p className="text-blue-100/60 leading-relaxed font-body">Operating on a closed-loop system, reclaiming 92% of water used, setting a benchmark for Zimbabwean industry.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-secondary-container text-4xl shrink-0">groups</span>
                <div>
                  <h4 className="font-headline font-bold text-xl mb-2 uppercase">Zimbabwean Workforce</h4>
                  <p className="text-blue-100/60 leading-relaxed font-body">We invest in local vocational training to empower Harare's workforce with world-class industrial skills.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="relative group">
              <div className="absolute -inset-4 border border-blue-500/20 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
              <img 
                className="relative z-10 w-full aspect-square object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzNHLwjQgyVvSZ08SKZ2tjn8zWwyjWvAbjud00gqWAnNMdiGnZzsfOOr5Qi2A2gTsDBQ8HNpqMLMH1_z8cw0g87sjeDGQzKbGQQ2nteE1qPP3bBmnwboiC8Segnc0rNvm82oUpEfCbdPa9ohw2wA27xmg0dtHRjumocGyubwpADdFucgyEhSzkOjJ_bu9gmw_K7T4gDomTDamzyWdN-VvFkZVo-3ALG82V588HIGSpRJTrTQlkqRJ14PS8bDjqm4IvmurpziBfkCo"
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
