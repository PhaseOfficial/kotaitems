import Precision from "../assets/precision.png"
const PillarsOfExcellence = () => {
  const pillars = [
    {
      icon: "verified",
      title: "Quality Assurance",
      description: "SAZ-certified testing and HACCP protocols at every stage."
    },
    {
      icon: "biotech",
      title: "Innovation",
      description: "Continuous R&D in materials science and taste engineering."
    },
    {
      icon: "eco",
      title: "Sustainability",
      description: "Reducing carbon footprint through circular packaging models."
    },
    {
      icon: "precision_manufacturing",
      title: "Reliability",
      description: "Uninterrupted supply chain execution and nationwide distribution."
    }
  ];

  return (
    <section className="bg-primary-container py-32 text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold mb-8 text-on-primary-container uppercase tracking-tight font-headline">
              The Core Pillars of Our Excellence
            </h2>
            <p className="text-xl text-primary-fixed-dim leading-relaxed mb-12 font-body">
              We don't just manufacture; we innovate. Our systems are built on four non-negotiable standards that ensure every product leaving our facility is a benchmark of quality.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="group flex flex-col gap-4">
                  <span className="material-symbols-outlined text-4xl text-secondary-container">
                    {pillar.icon}
                  </span>
                  <h4 className="text-lg font-bold tracking-wide uppercase font-space">{pillar.title}</h4>
                  <p className="text-sm text-primary-fixed-dim/80 font-body">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative min-h-[400px]">
            <div className="absolute inset-0 bg-secondary-container/20 mix-blend-overlay"></div>
            <img
              alt="Data visualization of manufacturing efficiency"
              className="w-full h-full object-cover"
              src={Precision}
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-12 text-primary hidden md:block max-w-xs shadow-2xl">
              <p className="text-4xl font-black mb-2 font-space">99.8%</p>
              <p className="text-xs font-bold tracking-widest uppercase text-secondary font-space">Operational Precision</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarsOfExcellence;
