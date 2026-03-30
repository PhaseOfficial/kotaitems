import { IoMdPin } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contactus = () => {
  return (
    <div className="bg-surface py-24 px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-left">
          {/* Main Headquarters */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary font-headline uppercase tracking-tight">
              Zimbabwe Headquarters
            </h3>
            <div className="flex items-start gap-4">
              <IoMdPin className="text-secondary text-2xl shrink-0 mt-1" />
              <p className="text-on-surface-variant font-body">
                Harare Industrial Park East,<br />
                Manufacturing Block 12,<br />
                Harare, Zimbabwe
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-secondary text-xl shrink-0" />
              <p className="text-on-surface-variant font-body">+263 242 123 456</p>
            </div>
            <div className="flex items-center gap-4">
              <MdEmail className="text-secondary text-xl shrink-0" />
              <p className="text-on-surface-variant font-body">info@kotaitems.co.zw</p>
            </div>
          </div>

          {/* Logistics & Distribution */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary font-headline uppercase tracking-tight">
              Logistics Hub
            </h3>
            <div className="flex items-start gap-4">
              <IoMdPin className="text-secondary text-2xl shrink-0 mt-1" />
              <p className="text-on-surface-variant font-body">
                Bulawayo Distribution Centre,<br />
                Unit 4, Khami Road,<br />
                Bulawayo
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-secondary text-xl shrink-0" />
              <p className="text-on-surface-variant font-body">+263 292 789 012</p>
            </div>
          </div>

          {/* Production Inquiry */}
          <div className="space-y-6 bg-primary-container p-8 text-white">
            <h3 className="text-xl font-bold text-secondary-container font-headline uppercase tracking-tight">
              Production Inquiries
            </h3>
            <p className="text-sm text-blue-100/70 font-body">
              For large-scale contract manufacturing or beverage redistribution logistics, please contact our senior engineering team directly.
            </p>
            <div className="pt-4">
              <p className="text-xs font-bold uppercase tracking-widest text-secondary-container font-space">Direct Line</p>
              <p className="text-lg font-bold font-space">+263 772 000 000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
