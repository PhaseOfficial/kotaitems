import cipzLogo from '../assets/CIPZ Logo.png';

const VerificationSection = () => {
  return (
    <section className="bg-surface border-y border-outline-variant/30 py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <a 
            href="https://cipz.pfms.gov.zw:8090/Info/Checkacompany?=45588A0262025"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 group hover:opacity-80 transition-opacity"
          >
            <div className="p-2 bg-white rounded-lg border border-outline-variant/30 shadow-sm flex-shrink-0">
              <img src={cipzLogo} alt="CIPZ Logo" className="h-14 w-auto object-contain" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-primary uppercase tracking-tight font-headline group-hover:text-blue-700 transition-colors">Verified Manufacturing Entity</h3>
              <p className="text-sm text-on-surface-variant font-body">Registered in accordance with the Companies and Other Business Entities Act of Zimbabwe.</p>
              <p className="text-xs text-on-surface-variant/80 font-body mt-1 uppercase font-bold">KOTA ITEMS • 14644 WARREN PARK HARARE</p>
            </div>
          </a>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded border border-outline-variant">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold text-primary uppercase tracking-widest font-space">Active Status</span>
            </div>
            <a 
              href="https://cipz.pfms.gov.zw:8090/Info/Checkacompany?=45588A0262025"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded border border-outline-variant hover:bg-surface-container-highest transition-colors cursor-pointer"
            >
              <span className="text-xs font-bold text-primary uppercase tracking-widest font-space">Reg: 45588A0262025</span>
              <span className="material-symbols-outlined text-[16px] ml-1">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationSection;
