import Butterimage from "../assets/buttermill.png"
import PartnershipImage from "../assets/partnership.png"
import FactoryImage from "../assets/factory.png"
import MissionImage from "../assets/mission.png"
import Packaging from "../assets/packaging.png"

const CoreOperations = () => {
  const operations = [
    {
      id: "01",
      title: "Food Manufacturing",
      description: "Precision-engineered culinary products focusing on taste, nutritional value, and mass-market consistency.",
      image: Butterimage,
      isPrimary: false
    },
    {
      id: "02",
      title: "Quality Packaging Solutions",
      description: "Industrial-grade packaging designed for protection, shelf-appeal, and sustainable lifecycle management.",
      image: Packaging,
      isPrimary: true
    },
    {
      id: "03",
      title: "Premium Beverage Distribution",
      description: "Nationwide cold-chain logistics ensuring peak freshness for the finest beverage brands across Zimbabwe.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiWR3-bFacFlI9S3IYVi2DFCl5Nu6TvMldOQinio-FODzZif2OgPyRngag4m83ATrYDQy5JA2V1Z1uGJewnwN5193CNb23hUK2lu-R6WHoyIJTLY0N4QGuKPmiK03E3SfkwXw4WN936XOffBodU3YdCKpRuLkbtSN2H8uFokko_O3Rt-3pZubF_yeI3sVcZ-Zt3MiYZHA9RCYbHKkyJkfw3koDuQJQ6WO0LUY7zs9cSfzjnGaqRC_09gbEqUB8boIhSOGKOCFaoCg",
      isPrimary: false
    },
    {
      id: "04",
      title: "Entrepreneurship Support",
      description: "Empowering the next generation through funding, mentorship, and full-scale production and distribution for aspiring entrepreneurs.",
      image: PartnershipImage,
      isPrimary: false
    },
    {
      id: "05",
      title: "Community Uplift",
      description: "Investing in community projects through financial support and hands-on assistance to foster local development.",
      image: MissionImage,
      isPrimary: false
    },
    {
      id: "06",
      title: "Industrial Tech Innovation",
      description: "Pioneering the future of manufacturing with advanced industrial technology supply and technical innovation.",
      image: FactoryImage,
      isPrimary: false
    }
  ];

  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold text-primary mb-4 tracking-tight uppercase font-headline">Core Operations</h2>
            <div className="h-1 w-24 bg-secondary"></div>
          </div>
          <p className="text-on-surface-variant font-medium tracking-wide uppercase text-sm font-space">Scalable Solutions. Superior Quality.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {operations.map((op) => (
            <div
              key={op.id}
              className={`group relative overflow-hidden h-[500px] flex flex-col justify-end p-8 transition-all ${
                op.isPrimary 
                  ? "bg-primary md:h-[550px] md:-mt-8 shadow-xl" 
                  : op.id === "05"
                    ? "bg-primary shadow-lg"
                    : "bg-surface-container-lowest hover:bg-primary-fixed"
              }`}
            >
              <div className="absolute inset-0">
                <img
                  alt={op.title}
                  className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${
                    op.isPrimary || op.id === "05"
                      ? "opacity-30 group-hover:opacity-90" 
                      : "grayscale group-hover:grayscale-0 opacity-20 group-hover:opacity-90"
                  }`}
                  src={op.image}
                />
                {/* Navy Blue (Primary) gradient overlay to maintain tint on the lower half */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              <div className={`relative z-10 ${op.isPrimary || op.id === "05" ? "text-white" : ""}`}>
                <span className={`text-secondary font-black text-5xl mb-6 block font-space ${op.isPrimary || op.id === "05" ? "" : "opacity-20"}`}>
                  {op.id}
                </span>
                <h3 className="text-2xl font-bold mb-4 font-headline">{op.title}</h3>
                <p className={`${op.isPrimary || op.id === "05" ? "text-primary-fixed-dim" : "text-on-surface-variant group-hover:text-primary"} font-body transition-colors`}>
                  {op.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreOperations;
