import logoUrl from "../assets/weblogo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[921px] flex items-center overflow-hidden bg-primary pt-16">
      <div className="absolute inset-0 opacity-40">
        <img
          alt="Modern high-tech industrial manufacturing facility"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlpFZXXLvfWKAVTI366D0UKhdwT7v3HVhEH3zAOFHE7XCY94vYMj-pidhgriRd-u6uzb_AjEir6cTBWYManANQBRMklUrmZOPA8UZA86a2GWTb-cG5j8lCHeaf97GeY4dATrcuE_hcCgT2OgD38Gr3AXcpBVrqH64M78VQ85-2rUiyM6DgU-3WjJuYp8HbReGfetxVl9mnB77osNNKCkW0SKdtnyI1UHnyA9_Qf-vAOQ5Ks6VrFD9o4cCwLhnvysl8oMdjSOdlDeM"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
      
      <div className="relative w-full max-w-7xl mx-auto px-8 py-24 flex flex-col items-start">
        <div className="flex items-center gap-4 mb-12">
          <img
            alt="Kota Items Logo"
            className="h-20 brightness-0 invert opacity-90"
            src={logoUrl}
          />
          <span className="text-4xl font-bold tracking-tighter text-white font-space uppercase">Kota Items</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white max-w-4xl tracking-tight leading-[1.1] mb-8 font-headline">
          Excellence in Food, Packaging, and Beverage Redistribution
        </h1>
        
        <p className="text-on-primary-container text-xl md:text-2xl max-w-2xl font-light mb-12 leading-relaxed font-body">
          Engineering superior consumer goods through artisanal precision and industrial scale. Leading the future of F&B distribution in Zimbabwe.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-16">
          <button className="bg-secondary-container text-on-secondary-container px-8 py-4 font-bold rounded-md hover:bg-secondary transition-colors uppercase tracking-wider font-space">
            Explore Portfolio
          </button>
          <button className="border border-white/20 backdrop-blur-md text-white px-8 py-4 font-bold rounded-md hover:bg-white/10 transition-colors uppercase tracking-wider font-space">
            Our Capabilities
          </button>
        </div>

        {/* Trust Badges Overlay */}
        <div className="flex flex-wrap gap-8 items-center border-t border-white/10 pt-8 w-full">
          <div className="flex items-center gap-3 text-white/70">
            <span className="material-symbols-outlined text-secondary text-3xl">verified_user</span>
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase leading-none mb-1 font-space">Government Authorized</p>
              <p className="text-sm font-bold text-white tracking-wide font-space">PRAZ REGISTERED</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-white/70 border-l border-white/10 pl-8">
            <span className="material-symbols-outlined text-secondary text-3xl">workspace_premium</span>
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase leading-none mb-1 font-space">Quality Standards</p>
              <p className="text-sm font-bold text-white tracking-wide font-space">SAZ CERTIFIED GRADE</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-white/70 border-l border-white/10 pl-8">
            <span className="material-symbols-outlined text-secondary text-3xl">health_and_safety</span>
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase leading-none mb-1 font-space">Food Safety</p>
              <p className="text-sm font-bold text-white tracking-wide font-space">HACCP COMPLIANT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
