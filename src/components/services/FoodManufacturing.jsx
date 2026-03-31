import Packaging from "../../assets/packaging.png";
import Sugarbeans from "../../assets/sugarbeans.png";
const FoodManufacturing = () => {
  const products = [
    {
      title: "Peanut Butter Manufacturing",
      description: "High-quality peanut butter produced in compliance with strict safety and quality standards.",
      image: Packaging,
      tags: ["Bulk Supply", "Certified"]
    },
    {
      title: "Refined Staples",
      description: "Consistently graded flours and sugars for industrial culinary applications.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADipungBs01f54lqKRUJeilpES3jiJR2Cx0QJwyJ-GD4l7HJlRFvepxXYxLkd_fbltyouyVgqLkZSlfJ5R4Jq2NtJ-Ib2CW0uvvNhIKUvBc08PE3ULxF3-ZIED3bGutAUKX5kbwe4V8mVS1nO5tnO4cXMgFT6S1hNLrezxrArqyouRwzDxRmZ0sqobB9LaXV5juyivBPkqy0v-VAn66ja7y2XlC_MLaxs5IgkjaM4Mt4tlUnVQLVmGz6btPuXmcNEmvcEIhntvLM0",
      tags: ["Quality Tested"]
    },
    {
      title: "Prepared Goods",
      description: "High-volume prepared food solutions for the retail and hospitality sectors.",
      image: Sugarbeans,
      tags: ["Ready-to-use"]
    }
  ];

  return (
    <section className="bg-surface-container-low py-24 mb-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-baseline mb-16">
          <h2 className="font-headline text-4xl font-bold text-primary tracking-tight uppercase">Food Manufacturing</h2>
          <div className="h-[2px] flex-grow mx-8 bg-outline-variant/30"></div>
          <a className="font-label text-sm font-bold text-secondary uppercase tracking-widest hover:translate-x-1 transition-transform inline-flex items-center font-space" href="#">
            View Catalogue <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="bg-surface-container-lowest overflow-hidden mb-6 aspect-[4/5] relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <h3 className="font-headline text-xl font-bold text-primary mb-2 uppercase">{product.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4 font-body">{product.description}</p>
              <div className="flex gap-2">
                {product.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="bg-surface-container px-3 py-1 text-[10px] font-bold uppercase tracking-tighter font-space">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodManufacturing;
