import React from "react";
import { motion } from "framer-motion";
import Contactus from '../components/Contactus';
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const ContactUs = () => {
  return (
    <div className="bg-surface">
      <Navbar />
      <div className="pt-32 pb-16 w-full">
        <motion.div
          className="text-center w-full max-w-4xl mx-auto px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-primary font-headline uppercase tracking-tighter mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-on-surface-variant font-body max-w-2xl mx-auto">
              Ready to scale your industrial production? Our engineering and logistics teams are standing by.
            </p>
          </div>
         
        </motion.div>
        <Contactus />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
