import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ComingSoon from "./pages/comingsoon";
import "./App.css";
import ContactUs from "./pages/Contact";
import TagManager from "react-gtm-module";
import CookieConsent from "./components/Cookies";
import React, { useEffect } from "react";

const tagManagerArgs = {
  gtmId: "GTM-PKXK7LPV",
};

TagManager.initialize(tagManagerArgs);

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-surface min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Comingsoon" element={<ComingSoon />} />
        <Route path="/Contact" element={<ContactUs />} />
        
        <Route
          path="*"
          element={
            <div className="text-center mt-20 text-2xl font-headline text-primary">
              404 - Page Not Found
            </div>
          }
        />
      </Routes>

      <CookieConsent />
    </div>
  );
};

export default App;
