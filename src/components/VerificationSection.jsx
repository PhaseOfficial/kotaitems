const VerificationSection = () => {
  return (
    <section className="bg-surface border-y border-outline-variant/30 py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-primary rounded-lg text-secondary-container">
              <span className="material-symbols-outlined text-4xl">inventory_2</span>
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-primary uppercase tracking-tight font-headline">Verified Manufacturing Entity</h3>
              <p className="text-sm text-on-surface-variant font-body">Registered in accordance with the Companies and Other Business Entities Act of Zimbabwe.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded border border-outline-variant">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold text-primary uppercase tracking-widest font-space">Active Status</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded border border-outline-variant">
              <span className="text-xs font-bold text-primary uppercase tracking-widest font-space">Reg: 2026/08927/ZW</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationSection;
