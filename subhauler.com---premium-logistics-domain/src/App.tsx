import React, { lazy, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Helmet } from "react-helmet-async";
import { CONTACT_EMAIL, GODADDY_URL } from "./constants";

// Lazily load route components to split code and boost Core Web Vitals (FCP, LCP, TBT)
const Home = lazy(() => import("./pages/Home").then(module => ({ default: module.Home })));
const Services = lazy(() => import("./pages/Services").then(module => ({ default: module.Services })));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail").then(module => ({ default: module.ServiceDetail })));
const About = lazy(() => import("./pages/About").then(module => ({ default: module.About })));
const Solutions = lazy(() => import("./pages/Solutions").then(module => ({ default: module.Solutions })));
const Contact = lazy(() => import("./pages/Contact").then(module => ({ default: module.Contact })));
const Privacy = lazy(() => import("./pages/Privacy").then(module => ({ default: module.Privacy })));
const Terms = lazy(() => import("./pages/Terms").then(module => ({ default: module.Terms })));
const OtherAssets = lazy(() => import("./pages/OtherAssets").then(module => ({ default: module.default || module.OtherAssets })));

const PageLoading = () => (
  <div className="min-h-[60vh] flex items-center justify-center p-12" id="page-suspense-spinner">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 rounded-full border-2 border-slate-100 border-t-blue-600 animate-spin" />
      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Loading Asset</span>
    </div>
  </div>
);

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": "https://www.subhauler.com/#product",
        "name": "Subhauler.com Premium Logistics Domain Asset",
        "image": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200",
        "description": "Acquire Subhauler.com - the definitive digital brand and premium systems architecture for modern intermodal logistics, freight brokerage, and regional carrier coordination.",
        "brand": {
          "@type": "Brand",
          "name": "Subhauler"
        },
        "offers": {
          "@type": "Offer",
          "url": GODADDY_URL,
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@id": "https://www.subhauler.com/#organization"
          }
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.subhauler.com/#organization",
        "name": "Subhauler",
        "url": "https://www.subhauler.com",
        "logo": "https://www.subhauler.com/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Domain Sales Representative",
          "email": CONTACT_EMAIL,
          "url": "https://www.subhauler.com/contact",
          "availableLanguage": "English"
        }
      }
    ]
  };

  return (
    <Router>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <Layout>
        <Suspense fallback={<PageLoading />}>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/contact" element={<Contact />} /> 
              <Route path="/privacy" element={<Privacy />} /> 
              <Route path="/terms" element={<Terms />} /> 
              <Route path="/other-assets" element={<OtherAssets />} /> 
            </Routes>
          </PageTransition>
        </Suspense>
      </Layout>
    </Router>
  );
}
