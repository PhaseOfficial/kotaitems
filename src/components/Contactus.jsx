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
              Headquarters
            </h3>
            <div className="flex items-start gap-4">
              <IoMdPin className="text-secondary text-2xl shrink-0 mt-1" />
              <p className="text-on-surface-variant font-body">
                228 Coventry Rd,<br />
                Industrial Site,<br />
                Marondera, Zimbabwe
              </p>
            </div>
            <div className="flex items-center gap-4">
              <MdEmail className="text-secondary text-xl shrink-0" />
              <p className="text-on-surface-variant font-body">info@kotaitems.co.zw</p>
            </div>
          </div>

          {/* Contact Numbers */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary font-headline uppercase tracking-tight">
              Direct Contact
            </h3>
            <div className="flex items-start gap-4">
              <FaPhone className="text-secondary text-xl shrink-0 mt-1" />
              <div className="space-y-1">
                <p className="text-on-surface-variant font-body">+263 775 632 466</p>
                <p className="text-on-surface-variant font-body">+263 775 401 539</p>
                <p className="text-on-surface-variant font-body">+263 778 071 210</p>
              </div>
            </div>
          </div>

          {/* Production Inquiry */}
          <div className="space-y-6 bg-primary-container p-8 text-white">
            <h3 className="text-xl font-bold text-secondary-container font-headline uppercase tracking-tight">
              Operational Hours
            </h3>
            <p className="text-sm text-blue-100/70 font-body">
              Our facilities operate 24/7 for production, but our administrative offices are open during standard business hours.
            </p>
            <div className="pt-4">
              <p className="text-xs font-bold uppercase tracking-widest text-secondary-container font-space">Admin Hours</p>
              <p className="text-lg font-bold font-space">Mon - Fri: 8 AM - 5 PM</p>
              <p className="text-lg font-bold font-space">Sat: 8 AM - 1 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
