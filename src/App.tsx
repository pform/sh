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

const DynamicMetadata = () => {
  const location = useLocation();
  const path = location.pathname;

  let title = "Subhauler.com | Premium Logistics & Freight Domain Asset";
  let description = "Acquire Subhauler.com - the definitive digital asset for modern logistics, intermodal freight coordination, and regional shipping networks. Available for immediate transfer.";
  let keywords = "subhauler, logistics domain, freight brokerage, shipping network, intermodal transport, trucking asset";

  if (path === "/") {
    title = "Subhauler.com | Premium Logistics & Freight Domain Asset";
    description = "Acquire Subhauler.com - the definitive digital asset for modern logistics, intermodal freight coordination, and regional shipping networks. Available for immediate transfer via GoDaddy.";
  } else if (path.startsWith("/services")) {
    const sub = path.replace("/services", "").replace("/", "");
    if (sub) {
      const formatted = sub.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      title = `${formatted} | Subhauler.com Feature`;
      description = `Specialized ${formatted} capabilities of the Subhauler.com premium domain asset. Ideal for ${formatted.toLowerCase()} platforms, regional freight coordinators, and intermodal transport groups.`;
    } else {
      title = "Digital Logistics Ecosystem | Subhauler.com Features";
      description = "Comprehensive overview of the logistics vertical markets supported by Subhauler.com. Covering subhaul coordination, intermodal transport, freight brokerage, and carrier management.";
    }
  } else if (path.startsWith("/coverage")) {
    const sub = path.replace("/coverage", "").replace("/", "");
    if (sub) {
      const parts = sub.split('-');
      const city = parts[0] ? parts[0].charAt(0).toUpperCase() + parts[0].slice(1) : "";
      const state = parts[1] ? parts[1].toUpperCase() : "";
      const placeName = city && state ? `${city}, ${state}` : "Regional Node";
      title = `${placeName} Intermodal Carrier Hub | Subhauler`;
      description = `Analyze carrier terminal operations, regional shipping corridors, and freight coordination networks in ${placeName} powered by the Subhauler.com master architecture.`;
    } else {
      title = "National Logistics Nodes & Cargo Hubs Directory | Subhauler";
      description = "Verify our interactive directory of 40 primary United States cargo ports, rail junctions, and regional trucking carrier nodes covered by Subhauler.com.";
    }
  } else if (path.startsWith("/glossary")) {
    const sub = path.replace("/glossary", "").replace("/", "");
    if (sub) {
      const formatted = sub.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      title = `${formatted} - Logistics Industry Dictionary | Subhauler.com`;
      description = `Learn the professional definition and commercial logistics context of '${formatted}' in our industry-standard carrier and brokerage glossary.`;
    } else {
      title = "Subhauler.com Logistics & Carrier Glossary | A-Z Definitions";
      description = "Search our dictionary of 40 commercial freight, trucking, drayage, and carrier terms. Understand the terminology powering Subhauler.com master architecture.";
    }
  } else if (path === "/about") {
    title = "How to Buy Subhauler.com | Secure Domain Acquisition";
    description = "A step-by-step guide to acquiring the Subhauler.com premium domain through GoDaddy's secure transfer protocol. Safe, fast, and documented logistics asset transfer.";
  } else if (path === "/solutions") {
    title = "Market Value | Subhauler.com Strategic Asset";
    description = "Detailed analysis of the market positioning, SEO performance, and digital value of the Subhauler.com domain. Optimized for logistics search intent and freight brand authority.";
  } else if (path === "/contact") {
    title = "Contact Administrative Registry | Subhauler.com";
    description = "Get in touch for strategic acquisition inquiries, direct partnerships, or technical integration discussions regarding the Subhauler.com asset.";
  } else if (path === "/privacy") {
    title = "Privacy Protocol | Subhauler.com Security";
    description = "Our high-rigor protocol for handling metadata and administrative information within the Subhauler digital corridors.";
  } else if (path === "/terms") {
    title = "Transaction Terms | Subhauler.com Transfer Agreement";
    description = "Operational terms governing the inquiry and acquisition of the Subhauler.com digital logistics asset.";
  } else if (path === "/other-assets") {
    title = "Other Premium Digital Assets | Subhauler.com Portfolio";
    description = "Explore our complete registry portfolio of thirty-seven high-value digital properties and premium domains available for purchase.";
  }

  const siteTitle = title.includes("Subhauler.com") ? title : `${title} | Subhauler.com`;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
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
      <DynamicMetadata />
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
              <Route path="/glossary" element={<Glossary />} />
              <Route path="/glossary/:slug" element={<Glossary />} />
              <Route path="/coverage" element={<Coverage />} />
              <Route path="/coverage/:slug" element={<Coverage />} /> 
            </Routes>
          </PageTransition>
        </Suspense>
      </Layout>
    </Router>
  );
}
