const OverviewSection = () => {
  return (
    <section className="bg-surface-container-low py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 relative">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-tertiary-fixed opacity-20 rounded-full blur-3xl"></div>
          <div className="relative bg-surface-container-lowest p-2 shadow-2xl">
            <img
              alt="Aerial view of a large-scale manufacturing plant"
              className="w-full h-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw4n4TzxM45_wWg_vI_AzF3V_YsPlUZFejUtQ89MkepgkUlcCMqbVjcMXh3Ipk4D9UnQ8_AjYEwEg1f82mDLELnaOnFnJ_enYL97PwFCmjLV794q9kjYtz6EnCnJU2lvQ_A8FeMXvuWcOhG0UhBA6BtDwcultJsSmneAcNAjWs_jkHVEsY68sKuyuaNKgoYK5GQ_Aji6KlT4k4YZsTaDwXcGpORt9xDVNmBlRHQzA8qC1BNFfCv_nGEbbodZKeyoGWxbc3AcAE5B0"
            />
          </div>
        </div>
        <div className="lg:col-span-5">
          <span className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-6 block font-space">Legacy & Leadership</span>
          <h2 className="text-4xl font-bold text-primary mb-8 leading-tight font-headline">Strategic Partner to Industrial Giants</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-6 font-body">
            Kota Items stands as a pillar of manufacturing excellence. Our state-of-the-art facilities produce high-demand goods that define market standards across the Southern African region.
          </p>
          <div className="p-8 border-l-4 border-secondary bg-surface-container-high/50">
            <p className="text-primary font-semibold italic text-xl mb-4 font-body">
              "Our strategic alliance with Delta Beverages reinforces our commitment to supply chain integrity and premium output."
            </p>
            <span className="text-sm font-bold tracking-widest text-on-surface uppercase font-space">— Operational Synergy</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
