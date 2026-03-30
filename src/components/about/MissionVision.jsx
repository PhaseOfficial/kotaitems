const MissionVision = () => {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-primary p-12 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-secondary-container text-5xl mb-8">factory</span>
              <h3 className="font-headline text-3xl font-bold text-white mb-6 uppercase">Our Mission</h3>
              <p className="text-blue-100/70 text-xl leading-relaxed font-body">To engineer the future of Zimbabwean beverage distribution by integrating hyper-efficient industrial logistics with local sustainable sourcing, ensuring every product meets the gold standard.</p>
            </div>
            <div className="mt-12 flex items-center space-x-4">
              <div className="h-[1px] flex-grow bg-blue-100/20"></div>
              <span className="text-secondary-container font-label text-xs tracking-widest uppercase">Mission Statement 2026</span>
            </div>
          </div>
          <div className="bg-white p-12 flex flex-col justify-between border-t-4 border-secondary shadow-sm">
            <div>
              <span className="material-symbols-outlined text-primary text-5xl mb-8">visibility</span>
              <h3 className="font-headline text-3xl font-bold text-primary mb-6 uppercase">Our Vision</h3>
              <p className="text-on-surface-variant leading-relaxed font-body">To become the Southern African anchor for industrial excellence, where technology and taste define the next era of consumption.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
