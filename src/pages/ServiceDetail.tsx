import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle, Package, Truck, Boxes, Ship, Globe, Shield } from "lucide-react";
import { ContainerFrame } from "../components/ContainerFrame";
import { SEO } from "../components/SEO";
import { SEO_KEYWORDS, GODADDY_URL } from "../constants";

export const ServiceDetail = () => {
  const { slug } = useParams();
  const serviceName = slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || "Logistics Asset";

  // Mock technical data for SEO "vibe" but human-like clarity
  const specs = [
    { label: "Market Segment", value: "Logi-Industrial" },
    { label: "Search Density", value: "High-Volume" },
    { label: "Authority Level", value: "Tier 1" },
    { label: "Asset Type", value: "Strategic Redirect" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 relative overflow-hidden bg-white">
      {/* Decorative Background Image Overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-[750px] z-0 opacity-40 pointer-events-none group bg-slate-950">
        <img 
          id="service-detail-hero-image"
          src={`https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1600`}
          alt="Logistics context"
          className="w-full h-full object-cover [mask-image:linear-gradient(to_bottom,black,transparent)] opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      <SEO 
        title={`${serviceName} | Subhauler.com Feature`}
        description={`Specialized ${serviceName} capabilities of the Subhauler.com premium domain asset. Ideal for ${serviceName.toLowerCase()} platforms, regional freight coordinators, and intermodal transport groups.`}
        keywords={`${serviceName.toLowerCase()}, subhauler ${serviceName.toLowerCase()}, freight ${serviceName.toLowerCase()}, logistics technology, shipping corridors, intermodal ${serviceName.toLowerCase()}`}
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
                  "item": "https://subhauler.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Features",
                  "item": "https://subhauler.com/services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": serviceName,
                  "item": `https://subhauler.com/services/${slug}`
                }
              ]
            },
            {
              "@type": "Service",
              "name": serviceName,
              "description": `Premium digital infrastructure capabilities for ${serviceName.toLowerCase()} operations.`,
              "provider": {
                "@type": "Organization",
                "name": "Subhauler"
              }
            }
          ]
        }}
      />

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative z-10"
      >
        <Link to="/services" className="inline-flex items-center text-sm font-bold text-blue-600 mb-20 hover:gap-2 transition-all p-3 bg-blue-50 rounded-full px-6">
          <ArrowLeft size={16} className="mr-2" /> Back to Features
        </Link>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-16 mb-40 relative z-10">
        <div className="lg:col-span-8">
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
           >
            <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-500 rounded-lg text-[10px] font-black uppercase tracking-widest mb-6">
              Industry Utility Marker
            </span>
            <h1 className="text-6xl md:text-9xl font-black text-slate-900 mb-12 tracking-tighter leading-[0.85]">
              {serviceName}.
            </h1>
            <p className="text-2xl md:text-4xl text-slate-500 leading-relaxed font-regular max-w-3xl mb-20 italic">
              Positioning Subhauler.com as the definitive authority for <span className="text-slate-900 font-bold underline decoration-blue-600 underline-offset-8 decoration-4">{serviceName}</span> digital integration.
            </p>
           </motion.div>

          <section className="space-y-16">
            <div className="bg-slate-50 p-12 md:p-16 rounded-[4rem] border border-slate-100 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-white rounded-full blur-3xl -z-10 opacity-50" />
              <h2 className="text-4xl font-bold mb-10 text-slate-900 tracking-tight">Market Positioning</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <Shield className="text-blue-600" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Brand Security</h4>
                  <p className="text-slate-500 leading-relaxed">
                    Own a keyword that is not only descriptive but also legally distinct in the freight registry space. 
                  </p>
                </div>
                <div className="space-y-6">
                   <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <Globe className="text-blue-600" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Global Search Authority</h4>
                  <p className="text-slate-500 leading-relaxed">
                    Immediately compete for "{serviceName.toLowerCase()}" search intent without the need for multi-year SEO cycles.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  "Optimized Search Positioning",
                  "Carrier Trust Signals",
                  "Asset Value Preservation"
                ].map((feature, i) => (
                  <div key={i} className="p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-xl">
                    <CheckCircle className="mb-4 text-blue-300" size={24} />
                    <div className="font-bold text-sm leading-tight">{feature}</div>
                  </div>
                ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-4 lg:pl-8">
          <div className="sticky top-12 space-y-8">
            <div className="p-10 bg-slate-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/30 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700" />
              <h3 className="text-3xl font-bold mb-6 relative z-10 tracking-tight leading-tight">Digital Asset Acquisition</h3>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed relative z-10">
                This feature set is integral to the Subhauler.com master domain bundle currently available for sale.
              </p>
              <a 
                href={GODADDY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-6 bg-blue-600 text-white font-bold rounded-2xl text-center hover:bg-blue-500 transition-all relative z-10 text-xl shadow-xl shadow-blue-900/40"
              >
                Acquire Domain
              </a>
              <div className="mt-8 pt-8 border-t border-slate-800 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                <span>Verified Listing</span>
                <span className="text-emerald-500">Tier 1 Registry</span>
              </div>
            </div>

            <ContainerFrame title="Asset Spec Sheet">
              <div className="space-y-6">
                {specs.map(spec => (
                  <div key={spec.label} className="flex flex-col border-b border-slate-50 pb-4 last:border-0 last:pb-0">
                    <dt className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{spec.label}</dt>
                    <dd className="font-bold text-slate-900 text-lg">{spec.value}</dd>
                  </div>
                ))}
              </div>
            </ContainerFrame>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 pt-20">
        <h3 className="text-xl font-bold mb-10 text-slate-400 uppercase tracking-[0.2em]">Related Logistics Clusters</h3>
        <div className="flex flex-wrap gap-3">
          {SEO_KEYWORDS.slice().sort(() => Math.random() - 0.5).slice(0, 12).map(k => (
            <Link 
              key={k}
              to={`/services/${k.toLowerCase().replace(/ /g, '-')}`}
              className="px-5 py-2 border border-slate-200 text-slate-500 rounded-full text-xs font-bold hover:border-slate-900 hover:text-zinc-950 transition-all uppercase tracking-widest"
            >
              {k}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
