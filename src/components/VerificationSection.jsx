import cipzLogo from '../assets/CIPZ Logo.png';

const VerificationSection = () => {
  return (
    <section className="bg-surface border-y border-outline-variant/30 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <a 
            href="https://cipz.pfms.gov.zw:8090/Info/Checkacompany?=45588A0262025"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 group hover:opacity-80 transition-opacity w-full"
          >
            <div className="p-2 bg-white rounded-lg border border-outline-variant/30 shadow-sm flex-shrink-0">
              <img src={cipzLogo} alt="CIPZ Logo" className="h-10 md:h-14 w-auto object-contain" />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-extrabold text-primary uppercase tracking-tight font-headline group-hover:text-blue-700 transition-colors">Verified Manufacturing Entity</h3>
              <p className="text-xs md:text-sm text-on-surface-variant font-body mt-1">Registered in accordance with the Companies Act of Zimbabwe.</p>
              <p className="text-[10px] md:text-xs text-on-surface-variant/80 font-body mt-1 uppercase font-bold tracking-wider">KOTA ITEMS • 228 COVENTRY RD MARONDERA</p>
            </div>
          </a>
          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-surface-container-high rounded border border-outline-variant">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-widest font-space">Active Status</span>
            </div>
            <a 
              href="https://cipz.pfms.gov.zw:8090/Info/Checkacompany?=45588A0262025"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-surface-container-high rounded border border-outline-variant hover:bg-surface-container-highest transition-colors cursor-pointer"
            >
              <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-widest font-space">Reg: 45588A0262025</span>
              <span className="material-symbols-outlined text-[14px] md:text-[16px] ml-1">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationSection;
