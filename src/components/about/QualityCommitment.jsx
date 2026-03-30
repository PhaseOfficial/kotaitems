const QualityCommitment = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl font-bold text-primary tracking-tight mb-4 uppercase">Our Commitment to Quality</h2>
            <p className="text-on-surface-variant text-lg font-medium font-body">Every batch undergoes rigorous SAZ-aligned interrogation. Our QA protocols exceed local requirements.</p>
          </div>
          <div className="font-headline text-8xl font-black text-surface-container-high select-none">99.9%</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <div className="flex justify-between items-end mb-4">
                <span className="font-label font-bold uppercase tracking-widest text-primary text-sm font-space">Molecular Purity</span>
                <span className="font-headline font-bold text-secondary font-space">100% Verified</span>
              </div>
              <div className="h-4 bg-surface-container w-full relative">
                <div className="absolute top-0 left-0 h-full bg-secondary w-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-end mb-4">
                <span className="font-label font-bold uppercase tracking-widest text-primary text-sm font-space">Automated Inspection</span>
                <span className="font-headline font-bold text-secondary font-space">98.4% Precision</span>
              </div>
              <div className="h-4 bg-surface-container w-full relative">
                <div className="absolute top-0 left-0 h-full bg-secondary w-[98.4%]"></div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-8 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-white shadow-sm border border-outline-variant">
                <span className="material-symbols-outlined text-primary mb-4 text-4xl">biotech</span>
                <p className="font-label text-xs uppercase tracking-tighter text-on-surface-variant font-bold font-space">Lab Testing</p>
                <p className="font-headline font-bold text-xl font-space">Daily</p>
              </div>
              <div className="text-center p-6 bg-white shadow-sm border border-outline-variant">
                <span className="material-symbols-outlined text-primary mb-4 text-4xl">verified_user</span>
                <p className="font-label text-xs uppercase tracking-tighter text-on-surface-variant font-bold font-space">SAZ / ISO</p>
                <p className="font-headline font-bold text-xl font-space">Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityCommitment;
