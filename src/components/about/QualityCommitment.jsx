const QualityCommitment = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4 uppercase">Our Commitment to Quality</h2>
            <p className="text-on-surface-variant text-base md:text-lg font-medium font-body leading-relaxed">Every batch undergoes rigorous SAZ-aligned interrogation. Our QA protocols exceed local requirements.</p>
          </div>
          <div className="font-headline text-6xl md:text-8xl font-black text-surface-container-high select-none leading-none">99.9%</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="space-y-8 md:space-y-12">
            <div>
              <div className="flex justify-between items-end mb-3 md:mb-4">
                <span className="font-label font-bold uppercase tracking-widest text-primary text-[10px] md:text-sm font-space">Molecular Purity</span>
                <span className="font-headline font-bold text-secondary text-sm md:text-base font-space">100% Verified</span>
              </div>
              <div className="h-3 md:h-4 bg-surface-container w-full relative overflow-hidden rounded-full">
                <div className="absolute top-0 left-0 h-full bg-secondary w-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-end mb-3 md:mb-4">
                <span className="font-label font-bold uppercase tracking-widest text-primary text-[10px] md:text-sm font-space">Automated Inspection</span>
                <span className="font-headline font-bold text-secondary text-sm md:text-base font-space">98.4% Precision</span>
              </div>
              <div className="h-3 md:h-4 bg-surface-container w-full relative overflow-hidden rounded-full">
                <div className="absolute top-0 left-0 h-full bg-secondary w-[98.4%]"></div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 md:p-8 flex flex-col justify-center rounded-xl">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="text-center p-4 md:p-6 bg-white shadow-sm border border-outline-variant rounded-lg">
                <span className="material-symbols-outlined text-primary mb-3 md:mb-4 text-3xl md:text-4xl">biotech</span>
                <p className="font-label text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold font-space">Lab Testing</p>
                <p className="font-headline font-bold text-lg md:text-xl font-space">Daily</p>
              </div>
              <div className="text-center p-4 md:p-6 bg-white shadow-sm border border-outline-variant rounded-lg">
                <span className="material-symbols-outlined text-primary mb-3 md:mb-4 text-3xl md:text-4xl">verified_user</span>
                <p className="font-label text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold font-space">SAZ / ISO</p>
                <p className="font-headline font-bold text-lg md:text-xl font-space">Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityCommitment;
