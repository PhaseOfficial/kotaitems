import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#edeeef] dark:bg-[#191c1d] w-full mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <span className="font-space font-bold text-primary dark:text-white text-xl uppercase tracking-tighter">
            Kota Items
          </span>
          <p className="font-headline text-sm text-[#191c1d]/60 max-w-xs">
            Industrial Precision in every batch. Setting the Zimbabwe national standard for F&B excellence.
          </p>
          <div className="flex items-center gap-2 text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em]">
            <span className="material-symbols-outlined text-sm">verified</span>
            PRAZ REGISTERED ENTITY
          </div>
        </div>
        
        <div className="flex flex-wrap gap-8 my-8 md:my-0">
          <Link
            to="/privacy"
            className="font-headline text-sm text-[#191c1d]/60 hover:text-[#7f5700] underline transition-all duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="font-headline text-sm text-[#191c1d]/60 hover:text-[#7f5700] underline transition-all duration-200"
          >
            Terms of Service
          </Link>
          <Link
            to="/specs"
            className="font-headline text-sm text-[#191c1d]/60 hover:text-[#7f5700] underline transition-all duration-200"
          >
            Manufacturing Specs
          </Link>
        </div>
        
        <div className="text-primary dark:text-white font-headline text-sm font-bold">
          © 2026 Kota Items. Industrial Precision.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
