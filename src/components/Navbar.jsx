import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import logoUrl from "../assets/weblogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/About' },
    { name: 'Services', path: '/Services' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white fixed top-0 w-full z-50 border-b border-black/5">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-none mx-auto">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logoUrl}
              alt="Kota Items Logo"
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold tracking-tighter text-primary font-space uppercase">Kota Items</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-space uppercase tracking-[0.05em] text-sm font-bold transition-colors ${
                  isActive(link.path)
                    ? "text-[#7f5700] border-b-2 border-[#7f5700] pb-1"
                    : "text-primary/80 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/Contact" className="hidden md:block bg-[#7f5700] text-white px-6 py-2 font-space uppercase tracking-[0.05em] text-sm font-bold hover:scale-[0.99] active:opacity-80 transition-all duration-300">
            Contact Us
          </Link>
          
          <button
            className="md:hidden text-primary"
            onClick={() => setIsOpen(true)}
          >
            <GiHamburgerMenu size={26} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 text-primary z-50 transition-all duration-300">
          <button
            className="absolute top-6 right-6 text-primary"
            onClick={() => setIsOpen(false)}
          >
            <IoClose size={36} />
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`font-space uppercase tracking-[0.05em] text-2xl font-bold ${
                isActive(link.path) ? "text-[#7f5700]" : "text-primary/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/Contact"
            onClick={() => setIsOpen(false)}
            className="bg-[#7f5700] text-white px-8 py-3 font-space uppercase tracking-[0.05em] text-xl font-bold"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
