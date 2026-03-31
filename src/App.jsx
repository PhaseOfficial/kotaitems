import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ComingSoon from "./pages/comingsoon";
import "./App.css";
import ContactUs from "./pages/Contact";
import Careers from "./pages/Careers";
import TagManager from "react-gtm-module";
import CookieConsent from "./components/Cookies";
import React, { useEffect, useState } from "react";
import { trackVisit } from "./utils/trackVisit";
import { setupAnalyticsListeners } from "./utils/analyticsListener";
import { registerVisitor } from "./utils/registerVisitor";
import { supabase } from "./lib/supabaseClient";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ReaderBlog from "./pages/ReaderBlog";

const tagManagerArgs = {
  gtmId: "GTM-PKXK7LPV",
};

TagManager.initialize(tagManagerArgs);

const App = () => {
  const location = useLocation();

  useEffect(() => {
    trackVisit();
    registerVisitor();
    setupAnalyticsListeners();
  }, []);

  const ProtectedRoute = ({ children }) => {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      supabase.auth.getSession().then(({ data }) => {
        setSession(data.session);
        setLoading(false);
      });
    }, []);

    if (loading) return <div>Loading...</div>;

    return session ? children : <AdminLogin />;
  };

  // 🧠 Hide widgets on admin routes
  const hideWidgets = location.pathname.startsWith("/admin");

  return (
    <div className="bg-surface min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Comingsoon" element={<ComingSoon />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/blog" element={<ReaderBlog />} />
        <Route path="/privacy" element={<ComingSoon />} />
        <Route path="/terms" element={<ComingSoon />} />
        <Route path="/specs" element={<ComingSoon />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={
            <div className="text-center mt-20 text-2xl font-headline text-primary">
              404 - Page Not Found
            </div>
          }
        />
      </Routes>

      {/* ✅ Only show widgets when not on admin routes */}
      {!hideWidgets && (
        <>
          <CookieConsent />
        </>
      )}
    </div>
  );
};

export default App;
