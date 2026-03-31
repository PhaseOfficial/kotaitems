import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaXTwitter, FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import logoUrl from "../assets/weblogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white w-full mt-20">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
          {/* Column 1: Brand & Logo */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src={logoUrl}
                alt="Kota Items Logo"
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="text-2xl font-bold tracking-tighter font-space uppercase">
                Kota Items
              </span>
            </Link>
            <p className="text-on-primary/70 text-sm font-body leading-relaxed max-w-xs">
              Industrial Precision in every batch. Setting the Zimbabwe national standard for F&B excellence through engineering and logistical innovation.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-bold text-secondary-container uppercase tracking-[0.2em] bg-white/5 py-2 px-3 rounded-full w-fit">
              <span className="material-symbols-outlined text-sm">verified</span>
              PRAZ REGISTERED ENTITY
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold font-headline uppercase tracking-tight text-secondary-container">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/About' },
                { name: 'Services', path: '/Services' },
                { name: 'Contact', path: '/Contact' },
                { name: 'Careers', path: '/Careers' },
                { name: 'Blog', path: '/blog' }
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-on-primary/70 hover:text-secondary-container transition-colors font-body text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Legal & Resources */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold font-headline uppercase tracking-tight text-secondary-container">
              Resources
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms of Service', path: '/terms' },
                { name: 'Manufacturing Specs', path: '/specs' },
                { name: 'Support', path: '/Comingsoon' }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-on-primary/70 hover:text-secondary-container transition-colors font-body text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold font-headline uppercase tracking-tight text-secondary-container">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaLocationDot className="text-secondary-container text-lg mt-1 shrink-0" />
                <p className="text-on-primary/70 text-sm font-body">
                  228 Coventry Rd,<br />
                  Industrial Site,<br />
                  Marondera
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaPhone className="text-secondary-container shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <p className="text-on-primary/70 text-sm font-body">+263 775 632 466</p>
                  <p className="text-on-primary/70 text-sm font-body">+263 775 401 539</p>
                  <p className="text-on-primary/70 text-sm font-body">+263 778 071 210</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MdEmail className="text-secondary-container shrink-0" />
                <p className="text-on-primary/70 text-sm font-body">info@kotaitems.co.zw</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              {[
                { icon: <FaLinkedinIn />, href: "#", name: "LinkedIn" },
                { icon: <FaFacebookF />, href: "#", name: "Facebook" },
                { icon: <FaInstagram />, href: "#", name: "Instagram" },
                { icon: <FaXTwitter />, href: "#", name: "X" }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-secondary-container hover:text-primary transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-on-primary/40 text-xs font-body border-t border-white/5">
          <div>
            © {currentYear} Kota Items (Pvt) Ltd. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6 uppercase tracking-widest font-space">
            <span>Industrial Excellence</span>
            <span>•</span>
            <span>Global Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
