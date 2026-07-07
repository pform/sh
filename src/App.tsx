import React, { lazy, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { CONTACT_EMAIL, GODADDY_URL } from "./constants";
import { ErrorBoundary } from "./components/ErrorBoundary";

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
const OtherAssetDetail = lazy(() => import("./pages/OtherAssetDetail").then(module => ({ default: module.OtherAssetDetail })));
const Glossary = lazy(() => import("./pages/Glossary").then(module => ({ default: module.Glossary })));
const Coverage = lazy(() => import("./pages/Coverage").then(module => ({ default: module.Coverage })));

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
  return (
    <Router>
      <Layout>
        <ErrorBoundary>
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
                <Route path="/other-assets/:domain" element={<OtherAssetDetail />} /> 
                <Route path="/glossary" element={<Glossary />} />
                <Route path="/glossary/:slug" element={<Glossary />} />
                <Route path="/coverage" element={<Coverage />} />
                <Route path="/coverage/:slug" element={<Coverage />} /> 
              </Routes>
            </PageTransition>
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </Router>
  );
}
