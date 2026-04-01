import { FaWhatsapp } from 'react-icons/fa';

const ConsultationCTA = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative border-b border-outline-variant/30">
      <div className="max-w-5xl mx-auto px-6 md:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 tracking-tight uppercase font-headline">
          Ready to Scale Your Production?
        </h2>
        <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto font-body">
          Partner with Kota Items for industrial-grade manufacturing that doesn't compromise on artisanal quality.
        </p>
        <a
          href="https://wa.me/263775632466?text=Hi%20there!%20I'm%20interested%20in%20starting%20a%20consultation%20with%20Kota%20Items."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-primary text-on-primary px-10 py-5 text-lg font-bold rounded-md hover:shadow-xl hover:-translate-y-1 transition-all uppercase tracking-widest font-space"
        >
          <FaWhatsapp size={24} />
          Start a Consultation
        </a>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-surface-container text-surface-container-highest/20 -mr-32 -mt-32 rounded-full flex items-center justify-center font-black text-9xl select-none font-space">
        K
      </div>
    </section>
  );
};

export default ConsultationCTA;
