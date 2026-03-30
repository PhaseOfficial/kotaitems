const LiquidIntelligence = () => {
  return (
    <section className="bg-primary text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16 text-center">
          <span className="font-label text-secondary-container font-bold tracking-[0.2em] uppercase text-xs mb-4 block font-space">
            Premium Formulations
          </span>
          <h2 className="font-headline text-5xl md:text-6xl font-bold tracking-tight uppercase">Liquid Intelligence</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px] text-left">
          {/* Mineral Water */}
          <div className="md:col-span-1 md:row-span-2 bg-primary-container relative group overflow-hidden h-[400px] md:h-full">
            <img 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYj3WxMd0aaem21BCaAUq4ptCalLRgj8kv8Ni1mjcCiJkoNMnT0kE7WtT-JeuKJmVWKx0uaB_PFHX3TbximDucdcnTz1fHzGV5kbd1Cshue6Nvt7v9eJolTLHG0Y66Pzj8p7PBSEY_7EOZ3YrJANF5NiLHiAP_MltImkseWGu2FePk2Fryb3yaBT71OkbNb3VPP5nypwZdX96SHt6yxRhK38-1hu9EzCe5ivkDTmota-B8fdIJL4F3f0NNH7BZMBX7vWOavUnpq58"
              alt="Mineral water"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
              <h4 className="font-headline text-2xl font-bold uppercase">Mineral Water</h4>
              <p className="text-xs text-on-primary-container mt-2 font-body">Pristine source purification.</p>
            </div>
          </div>
          {/* Carbonated Drinks */}
          <div className="md:col-span-2 md:row-span-1 bg-surface-container relative group overflow-hidden h-[300px] md:h-full">
            <img 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7LvQQd9mtOk0-SPM5zLgxC5b0qXGd36RfcWBEJdlQvQScwsWne1wsMEthj6bVybC5mBRod-7OyVS896lEBwS2mgU8mbJs-xn72bUpB2OrvJWQhAyqu_vCFfZoDoFxkXiH2-WulXnbNS5ufweqo3Dp5kEATG0_rPpOOR2XnmzkgNlr_RT_E7Qz3KKTj38_8JDet1uFmQHP4DW-vZYIVI46ve8FzW8LPeMHSF6eofx5OANB0h3LreogP2Zdu4YPLh49P03VU2Yw9jw"
              alt="Carbonated drinks"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6 bg-primary/20 backdrop-blur-md">
                <h4 className="font-headline text-3xl font-bold uppercase tracking-widest">Carbonated</h4>
                <p className="font-label text-sm tracking-widest mt-2 font-space">MODERN EFFERVESCENCE</p>
              </div>
            </div>
          </div>
          {/* Juices */}
          <div className="md:col-span-1 md:row-span-1 bg-secondary relative group overflow-hidden h-[300px] md:h-full">
            <img 
              className="w-full h-full object-cover opacity-50 group-hover:opacity-90 transition-all" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEa77Vanx8k_JQ1ptuNU9ckLSSE9trztceAeY3tW2_J9W-QavHSydSdvz9pHeTzOXinJ_daKsubNXAo9MBbdGUw2Bodfe_PmtEG7ODVeBQQrRHqtpMIBjVeKRCHYrnIUkY6jqr3_pmoiXBvVLBi6_4R12diwQBGnwwPeLcLwAGi8ARCQ1bRHOsujVvb395jJ9rmY7aIb7LAV_XA6HGu_mtDX6iMePG5tchc9uBo7nPQQo1yvNkjn488d367W93ten-PxPGq198qC4"
              alt="Juices"
            />
            <div className="absolute bottom-6 left-6">
              <h4 className="font-headline text-xl font-bold uppercase">Natural Juices</h4>
            </div>
          </div>
          {/* Speciality */}
          <div className="md:col-span-1 md:row-span-1 bg-tertiary-container relative flex items-center justify-center p-8 h-[200px] md:h-full">
            <div className="text-center">
              <span className="material-symbols-outlined text-4xl text-secondary-container mb-4">workspace_premium</span>
              <h4 className="font-headline font-bold text-lg leading-tight uppercase">Bespoke Bottling</h4>
            </div>
          </div>
          {/* Logistics */}
          <div className="md:col-span-2 md:row-span-1 bg-primary relative overflow-hidden flex items-center px-12 h-[200px] md:h-full">
            <div className="w-1/2">
              <h4 className="font-headline text-2xl font-bold mb-2 uppercase">Ready for Scale</h4>
              <p className="text-xs text-slate-400 font-body">Our bottling plants operate at a capacity of 500k units per day with zero-waste targets.</p>
            </div>
            <div className="w-1/2 flex justify-end">
              <button className="bg-secondary-container text-on-secondary-container px-6 py-2 font-bold text-xs uppercase tracking-widest font-space">
                Inquire
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiquidIntelligence;
