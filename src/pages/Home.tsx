import { motion } from "motion/react";
import { 
  ExternalLink, 
  ArrowRight,
  Globe,
  Shield,
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
      <div className="relative mb-40 py-24 md:py-32 px-8 md:px-16 rounded-[4rem] overflow-hidden bg-slate-100 shadow-2xl">
        {/* Background Layer */}
        <div className="absolute inset-0">
          <img 
            id="hero-bg-image"
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000" 
            alt="Subhauler freight logistics terminal with master broker shipping cargo trucks and freight containers for regional transport coordination" 
            className="w-full h-full object-cover opacity-80"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="text-5xl md:text-8xl font-[800] text-white leading-[1] mb-8 tracking-tighter" id="hero-title">
            Definitive <br className="hidden md:block" />
            <span className="text-blue-400">Logistics Asset.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 font-medium max-w-2xl" id="hero-description">
            Subhauler.com is a premium digital namespace positioned at the intersection of freight brokerage, regional shipping coordination, and global intermodal transport.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              id="hero-cta-primary"
              href={GODADDY_URL}
              className="inline-flex items-center justify-center px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-xl hover:bg-blue-500 transition-all shadow-2xl shadow-blue-600/30 group"
            >
              Buy Subhauler.com <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link 
              id="hero-cta-secondary"
              to="/about" className="inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-bold text-white hover:bg-white/20 transition-all text-xl">
              Market Value & Stats
            </Link>
          </div>
        </motion.div>
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
