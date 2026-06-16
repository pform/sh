import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Zap, Cpu, BarChart3, Radio, Layers, Cog, ShieldCheck, Activity, ArrowRight } from "lucide-react";
import { SEO } from "../components/SEO";
import { GODADDY_URL } from "../constants";
import { Breadcrumbs } from "../components/Breadcrumbs";

const solutions = [
  {
    title: "Carrier Management",
    id: "carrier-management",
    detail: "Holistic oversight of carrier performance and compliance.",
    icon: Zap
  },
  {
    title: "Supply Chain Sync",
    id: "supply-chain-optimization",
    detail: "End-to-end visibility across global transport corridors.",
    icon: Cpu
  },
  {
    title: "Asset Intelligence",
    id: "asset-tracking",
    detail: "Real-time metadata tracking for intermodal containers.",
    icon: Activity
  },
  {
    title: "Brokerage Automation",
    id: "brokerage-automation",
    detail: "Digital matching engines for high-volume freight routes.",
    icon: BarChart3
  }
];

export const Solutions = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 pb-40 relative bg-white">
      <div className="absolute top-0 right-0 w-1/3 h-[500px] z-0 opacity-40 pointer-events-none group bg-slate-50">
        <img 
          id="solutions-hero-image"
          src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1200" 
          alt="Fleet of highway heavy carriage trucks traveling on freight routes simulating real-time subhaul routing network coordinates"
          className="w-full h-full object-cover [mask-image:linear-gradient(to_bottom,black,transparent)] opacity-40"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
      </div>

      <SEO 
        title="Market Value | Subhauler.com Strategic Asset" 
        description="Detailed analysis of the market positioning, SEO performance, and digital value of the Subhauler.com domain. Optimized for logistics search intent and freight brand authority."
        keywords="subhauler domain value, logistics seo, freight keyword authority, digital logistics brand, premium shipping domain, domain acquisition analysis, trucking market data"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.subhauler.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Market Value",
                  "item": "https://www.subhauler.com/solutions"
                }
              ]
            }
          ]
        }}
      />

      <Breadcrumbs />

      <div className="max-w-4xl mb-32 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-10 shadow-lg shadow-blue-200">
            Premium Market Asset
          </span>
          <h1 className="text-6xl md:text-9xl font-black text-slate-900 mb-12 tracking-tighter leading-[0.85]">
            Market <br /><span className="text-blue-600">Value.</span>
          </h1>
          <p className="text-2xl md:text-4xl text-slate-500 leading-relaxed font-regular max-w-2xl italic">
            Subhauler.com is a Tier 1 digital asset positioned at the center of the <span className="text-slate-900 font-bold underline decoration-blue-500 decoration-4 underline-offset-8">independent carrier economy.</span>
          </p>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-12 gap-16 mb-40 relative z-10">
        <div className="lg:col-span-8 space-y-16">
          <section className="bg-slate-900 p-12 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full group-hover:scale-110 transition-transform duration-1000" />
            <h2 className="text-4xl font-bold mb-10 tracking-tight">Strategic Logistics SEO</h2>
            <div className="grid md:grid-cols-2 gap-12 border-t border-slate-800 pt-12">
              <div className="space-y-4">
                <div className="text-blue-400 font-black text-5xl mb-2">Tier 1</div>
                <h4 className="text-xl font-bold text-white tracking-tight">Category Authority</h4>
                <p className="text-slate-400 leading-relaxed font-medium">
                  Direct ownership of the "Subhauler" keyword provides immediate dominance in regional shipping searches. 
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-blue-400 font-black text-5xl mb-2">94%</div>
                <h4 className="text-xl font-bold text-white tracking-tight">Intent Alignment</h4>
                <p className="text-slate-400 leading-relaxed font-medium">
                  Matches the primary terminology billion-dollar freight brokerage firms use for their contractor networks.
                </p>
              </div>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((sol, i) => (
              <Link 
                key={sol.id}
                to={`/services/${sol.id}`}
                className="group p-12 bg-white border border-slate-100 rounded-[3.5rem] hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all mb-8">
                    <sol.icon size={32} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{sol.title}</h3>
                  <p className="text-lg text-slate-500 leading-relaxed mb-8">
                    {sol.detail}
                  </p>
                </div>
                <div className="flex items-center text-xs font-black text-slate-400 uppercase tracking-widest gap-2 group-hover:text-blue-600 transition-colors">
                  Analyze Value <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 sticky top-12">
          <div className="p-12 bg-white border border-slate-100 rounded-[3.5rem] shadow-xl space-y-12">
             <div className="space-y-2">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Asset Registry Status</div>
                <div className="text-3xl font-black text-emerald-500 flex items-center gap-3">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                  Available
                </div>
             </div>
             
             <div className="space-y-6 pb-12 border-b border-slate-50">
                <h4 className="text-xl font-bold text-slate-900 tracking-tight">Direct Purchase</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  The domain Subhauler.com is listed on GoDaddy Premium for immediate acquisition. 
                </p>
                <a 
                  href={GODADDY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-6 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-100 group/btn"
                >
                  Buy Now <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
             </div>

             <div className="space-y-8">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Digital Indicators</h4>
                <div className="space-y-6">
                   <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium">Domain Age</span>
                      <span className="font-bold text-slate-900">Established</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium">Dot Com TLD</span>
                      <span className="font-bold text-slate-900">Verified</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium">Transfer Ready</span>
                      <span className="font-bold text-emerald-600">Immediate</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
