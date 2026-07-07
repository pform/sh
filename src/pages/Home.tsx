import { motion } from "motion/react";
import { 
  ExternalLink, 
  ArrowRight,
  Globe,
  Shield,
  ShieldCheck,
  Check,
  Activity,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ContainerFrame } from "../components/ContainerFrame";
import { VerificationGate } from "../components/VerificationGate";
import { SEO } from "../components/SEO";
import { SEO_KEYWORDS, GODADDY_URL } from "../constants";

export const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-20">
      <SEO 
        title="Subhauler.com | Premium Logistics & Freight Domain Asset" 
        description="Acquire Subhauler.com - the definitive digital asset for modern logistics, intermodal freight coordination, and regional shipping networks. Available for immediate transfer via GoDaddy."
        keywords="subhauler, logistics domain, freight brokerage, shipping network, intermodal transport, trucking asset, subhauler coordination platform, freight shipping enterprise, digital logistics infrastructure"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://www.subhauler.com/#website",
              "url": "https://www.subhauler.com",
              "name": "Subhauler.com",
              "description": "Premium Logistics & Freight Domain Asset",
              "publisher": { "@id": "https://www.subhauler.com/#organization" }
            },
            {
              "@type": "Organization",
              "@id": "https://www.subhauler.com/#organization",
              "name": "Subhauler",
              "url": "https://www.subhauler.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.subhauler.com/logo.png"
              },
              "description": "Enterprise digital brand and systems architecture for coordinating regional subhaulers and freight brokerage logistics.",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Subhauler Logistics Services Portfolio",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Subhaul Coordination",
                      "description": "Advanced networking protocols for connecting regional subhaulers with master freight brokers."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Freight Shipping",
                      "description": "High-density cargo transport management and intermodal shipping solutions."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Logistics Networking",
                      "description": "Digital infrastructure for supply chain transparency and real-time asset tracking."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Container Management",
                      "description": "Optimized storage and transition strategies for shipping container fleets."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Carrier Management",
                      "description": "Unified platforms for carrier compliance, vetting, and performance metrics."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Last Mile Logistics",
                      "description": "Precision coordination for final delivery stages in urban and industrial zones."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Intermodal Transport",
                      "description": "Seamless transitions between rail, sea, and road transport modes."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Brokerage Services",
                      "description": "Algorithmic matching for freight brokers and owner-operators."
                    }
                  }
                ]
              }
            },
            {
              "@type": "Product",
              "name": "Subhauler.com Domain Asset",
              "description": "High-authority digital namespace for the logistics and freight industry.",
              "brand": {
                "@type": "Brand",
                "name": "Subhauler"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://www.godaddy.com/domainsearch/find?domainToCheck=subhauler.com",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "USD"
              }
            }
          ]
        }}
      />

      {/* Hero Section */}
      <div className="relative mb-24 rounded-[3rem] overflow-hidden bg-slate-950 border border-slate-900 shadow-2xl">
        {/* Subtle Ambient Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center p-8 md:p-16 lg:p-20">
          
          {/* Left Column - Headline & Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Asset Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-bold text-blue-400 mb-8 uppercase tracking-[0.2em]">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Premium Digital Brand Asset
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight" id="hero-title">
              The Definitive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500">Logistics Brand.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl font-medium" id="hero-description">
              Secure <span className="text-white font-bold">Subhauler.com</span> — a premium high-authority namespace engineered for regional carrier coordination, freight brokerages, and intermodal transport networks.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
              <a 
                id="hero-cta-primary"
                href={GODADDY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4.5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-base shadow-xl shadow-blue-600/20 hover:shadow-2xl hover:shadow-blue-600/30 hover:scale-[1.01] transition-all duration-300 group"
              >
                Acquire Domain
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </a>
              <Link 
                id="hero-cta-secondary"
                to="/about" 
                className="inline-flex items-center justify-center px-8 py-4.5 bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl font-bold text-slate-200 hover:text-white transition-all duration-300 hover:scale-[1.01]"
              >
                Market Value & Analytics
              </Link>
            </div>

            {/* Trust Indicators Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-900 w-full">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <ShieldCheck size={18} />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Escrow Secure</div>
                  <div className="text-sm font-bold text-white">GoDaddy verified</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Zap size={18} />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Transfer Speed</div>
                  <div className="text-sm font-bold text-white">Immediate push</div>
                </div>
              </div>

              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  <Check size={18} />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Niche Rank</div>
                  <div className="text-sm font-bold text-white">Top 0.1% logistics</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Beautiful Live HUD Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Frame */}
            <div className="relative bg-slate-900/90 border border-slate-800 rounded-[2rem] p-6 shadow-2xl backdrop-blur-md overflow-hidden">
              {/* Subtle top panel */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="text-[10px] font-mono text-slate-500 tracking-wider font-bold">
                  SUBHAULER_PORTAL_v4.1
                </div>
              </div>

              {/* Status Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Network Integrity</h4>
                  <div className="text-xl font-extrabold text-white flex items-center gap-2 mt-0.5">
                    100% Operational
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  </div>
                </div>
                <div className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700/50">
                  <div className="text-[10px] font-mono text-emerald-400 uppercase font-bold tracking-widest flex items-center gap-1">
                    <Activity size={12} className="animate-pulse" /> Live HUD
                  </div>
                </div>
              </div>

              {/* Stylized Active Corridor Route Graphic */}
              <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 mb-5 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                  <div className="w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
                </div>

                <div className="flex justify-between items-center text-xs text-slate-500 font-bold mb-3">
                  <span>OR_HUB (Chicagoland)</span>
                  <span>DEST_PORT (L.A. Basin)</span>
                </div>

                {/* Animated Signal Route */}
                <div className="relative h-1 bg-slate-800 rounded-full mb-4">
                  <div className="absolute top-1/2 left-0 w-3 h-3 -translate-y-1/2 rounded-full bg-blue-500 shadow-md shadow-blue-500/50" />
                  <div className="absolute top-1/2 right-0 w-3 h-3 -translate-y-1/2 rounded-full bg-indigo-500 shadow-md shadow-indigo-500/50" />
                  <motion.div 
                    className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                    animate={{ 
                      width: ["10%", "90%", "10%"],
                      left: ["0%", "5%", "0%"]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute top-1/2 w-2 h-2 -translate-y-1/2 rounded-full bg-white"
                    animate={{ 
                      left: ["5%", "95%", "5%"]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                  <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/50">
                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Master Broker</div>
                    <div className="text-xs font-bold text-blue-400 mt-0.5 font-mono">NODE-A</div>
                  </div>
                  <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/50">
                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Active Fleet</div>
                    <div className="text-xs font-bold text-emerald-400 mt-0.5 font-mono">40 Units</div>
                  </div>
                  <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/50">
                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Optimization</div>
                    <div className="text-xs font-bold text-indigo-400 mt-0.5 font-mono">98.4%</div>
                  </div>
                </div>
              </div>

              {/* Graphic Asset representation */}
              <div className="relative h-44 rounded-2xl overflow-hidden border border-slate-800 group">
                <img 
                  id="hero-bg-image"
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800" 
                  alt="Subhauler freight logistics terminal with cargo trucks and containers" 
                  className="w-full h-full object-cover opacity-60 filter saturate-[0.6] group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-[9px] bg-blue-500 text-white font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider">Asset Visual</span>
                    <h5 className="text-sm font-extrabold text-white mt-1">Intermodal Terminals</h5>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 font-bold">ID: SHL-401</span>
                </div>
              </div>
            </div>

            {/* Accent Glowing Aura */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />
          </motion.div>

        </div>
      </div>

      {/* Digital Asset Map / Maze section */}
      <section className="mb-48 bg-slate-50 p-12 md:p-20 rounded-[4rem] border border-slate-100">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-6">Digital Topology</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Market Keyword Integration Points</h3>
          <p className="text-lg text-slate-500 leading-relaxed font-medium">
            Subhauler.com is architected to dominate high-intent search corridors across the logistics vertical. Each point representing a strategic entry for carrier networks.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {SEO_KEYWORDS.slice(0, 24).map(k => (
            <Link 
              key={k}
              to={`/services/${k.toLowerCase().replace(/ /g, '-')}`}
              className="p-6 bg-white border border-slate-200 rounded-3xl hover:border-blue-500 hover:shadow-xl transition-all group"
            >
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 group-hover:text-blue-600">Active Market Point</div>
              <div className="font-bold text-slate-900 leading-tight">{k}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Feature Grid */}
      <section id="market" className="mb-48 relative">
        <div className="absolute -left-20 top-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />
        <div className="grid md:grid-cols-3 gap-8">
          <Link to="/services/intermodal" className="p-10 border border-slate-100 bg-white/50 backdrop-blur-sm rounded-3xl hover:border-blue-200 transition-all group">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Intermodal Focus</h3>
            <p className="text-slate-500 leading-relaxed font-medium">
              Connect subhaulers with global intermodal terminals through a high-authority brand that signals trust and integration.
            </p>
          </Link>
          <Link to="/services/freight" className="p-10 border border-slate-100 bg-white/50 backdrop-blur-sm rounded-3xl hover:border-emerald-200 transition-all group">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Industry Authority</h3>
            <p className="text-slate-500 leading-relaxed font-medium">
              Command instant credibility in the shipping sector. This domain is perfectly matches high-volume freight keywords.
            </p>
          </Link>
          <Link to="/services/logistics" className="p-10 border border-slate-100 bg-white/50 backdrop-blur-sm rounded-3xl hover:border-orange-200 transition-all group">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
              <ExternalLink size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Scalable Brand</h3>
            <p className="text-slate-500 leading-relaxed font-medium">
              From regional fleet coordination to a nationwide SaaS platform, Subhauler.com scales with your infrastructure.
            </p>
          </Link>
        </div>
      </section>

      {/* Narrative Section with Faded Image */}
      <section className="mb-48 relative py-20 px-6 rounded-[4rem] overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0">
          <img 
            id="narrative-bg-image"
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern logistics warehouse facility with distribution bays for subhauler cargo loading, fleet logistics management, and freight coordination" 
            className="w-full h-full object-cover opacity-20 grayscale"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight" id="narrative-title">Own the Definitive <span className="text-blue-400">Subhauler Brand.</span></h2>
          <p className="text-xl text-slate-300 leading-relaxed mb-12 font-medium" id="narrative-description">
            Acquire a high-authority digital asset that instantly establishes trust in the independent carrier space. Subhauler.com is the ultimate digital bridge for regional fleet managers and enterprise coordinators seeking market dominance.
          </p>
        </div>
      </section>

      {/* Details & Verification */}
      <div className="grid lg:grid-cols-12 gap-16 items-center mb-32" id="details">
        <div className="lg:col-span-7">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-transparent rounded-[3rem] -z-10 group-hover:opacity-100 opacity-0 transition-opacity" />
            <ContainerFrame title="Asset Specifications">
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-8 border-b border-slate-50 pb-8">
                  <div>
                    <dt className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Category</dt>
                    <dd className="text-xl font-bold text-slate-900">Premium Domain</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Market Status</dt>
                    <dd className="text-xl font-bold text-emerald-600">Immediate Transfer</dd>
                  </div>
                </div>
                <div>
                  <dt className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Targeted Visibility</dt>
                  <div className="flex flex-wrap gap-2">
                    {SEO_KEYWORDS.slice(0, 15).map(k => (
                      <Link 
                        key={k} 
                        to={`/services/${k.toLowerCase().replace(/ /g, '-')}`}
                        className="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-medium rounded-full lowercase hover:bg-slate-200 transition-colors"
                      >
                        #{k.replace(' ', '')}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </ContainerFrame>
          </div>
        </div>
        <div className="lg:col-span-1 hidden lg:block" />
        <div className="lg:col-span-4">
          <div className="bg-slate-900 text-white p-12 rounded-[3.5rem] relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 tracking-tight relative z-10">Private Inquiry.</h2>
            <p className="text-slate-400 mb-10 leading-relaxed text-lg relative z-10">
              Interested in acquisition? Verify to unlock contacts.
            </p>
            <VerificationGate />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
