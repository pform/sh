import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Shield, CheckCircle2, Globe, Sparkles, Tag, Server, ArrowRight } from "lucide-react";
import { SEO } from "../components/SEO";
import { OTHER_DOMAINS, DomainAsset } from "./assetsData";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ContainerFrame } from "../components/ContainerFrame";
import { GODADDY_URL } from "../constants";

// Helper for stable relational items
const getStableLinkedItems = (domain: string, list: DomainAsset[], count = 4): DomainAsset[] => {
  let hash = 0;
  for (let i = 0; i < domain.length; i++) {
    hash = (hash << 5) - hash + domain.charCodeAt(i);
    hash |= 0;
  }
  hash = Math.abs(hash);
  
  const filtered = list.filter(item => item.domain !== domain);
  const results: DomainAsset[] = [];
  const listLen = filtered.length;
  if (listLen === 0) return [];
  
  const chosenIndices = new Set<number>();
  for (let i = 0; i < count * 2 && chosenIndices.size < Math.min(count, listLen); i++) {
    const idx = (hash + i * 17) % listLen;
    chosenIndices.add(idx);
  }
  chosenIndices.forEach(idx => results.push(filtered[idx]));
  return results;
};

export const OtherAssetDetail = () => {
  const { domain: paramDomain } = useParams<{ domain: string }>();

  // Normalize param if it has dashes (e.g. "ambeth-com" -> "ambeth.com")
  const decodedDomain = useMemo(() => {
    if (!paramDomain) return "";
    let d = paramDomain.toLowerCase();
    if (d.endsWith("-com") && !d.includes(".")) {
      d = d.substring(0, d.length - 4) + ".com";
    }
    return d;
  }, [paramDomain]);

  const asset = useMemo(() => {
    return OTHER_DOMAINS.find(d => d.domain.toLowerCase() === decodedDomain) || null;
  }, [decodedDomain]);

  const relatedAssets = useMemo(() => {
    if (!asset) return [];
    return getStableLinkedItems(asset.domain, OTHER_DOMAINS, 4);
  }, [asset]);

  if (!asset) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="text-3xl font-black text-slate-900 mb-4">Asset Not Found</h1>
        <p className="text-slate-500 mb-8">The digital property you are looking for is not listed in our direct portfolio registry.</p>
        <Link to="/other-assets" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-bold text-sm">
          <ArrowLeft size={16} /> Back to Asset Directory
        </Link>
      </div>
    );
  }

  // Dynamic content block generation based on domain tags
  const businessScenarios = useMemo(() => {
    const scenarios = [];
    if (asset.tags.includes("SaaS") || asset.tags.includes("AI Platforms")) {
      scenarios.push({
        title: "Developer & Product Roadmap",
        detail: `The clean phonetics of ${asset.domain} make it an exceptional brand for automated systems, cloud databases, and subscription platforms. Building on a memorable name reduces customer acquisition friction.`
      });
    }
    if (asset.tags.includes("FinTech") || asset.tags.includes("Financial") || asset.tags.includes("Investment")) {
      scenarios.push({
        title: "Trust & Transaction Authority",
        detail: `FinTech branding demands safety signals. Owning ${asset.domain} positions your system as a secure ledger, cryptographic asset vault, or prime investment calculator interface.`
      });
    }
    if (asset.tags.includes("E-Commerce") || asset.tags.includes("Beverage") || asset.tags.includes("Culinary")) {
      scenarios.push({
        title: "Consumer Product Positioning",
        detail: `Direct-to-consumer businesses thrive on top-of-mind recall. Launching an e-commerce catalog, subscription box model, or flagship retail portal under ${asset.domain} guarantees consistent brand value.`
      });
    }
    // Default fallback scenario if none match
    if (scenarios.length === 0) {
      scenarios.push({
        title: "Enterprise Brand Launchpad",
        detail: `The exact-match TLD provides a strong base for corporate email hosting, regional redirect routing, and landing page deployments that target high-intent organic traffic.`
      });
    }
    return scenarios;
  }, [asset]);

  const specSheet = [
    { label: "TLD Registry", value: ".com (Verified Premium)" },
    { label: "Status", value: asset.status },
    { label: "Escrow Protocol", value: asset.escrow },
    { label: "Acquisition Gateway", value: "GoDaddy Premium Brokerage" },
    { label: "Transfer Window", value: "Immediate Transfer Ready" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20" id="other-asset-detail-container">
      <SEO 
        title={`${asset.domain} | Premium Digital Asset Profile`}
        description={`Secure acquisition details for the premium domain ${asset.domain}. View strategic valuation, commercial positioning, and safe escrow transfer links.`}
        keywords={`${asset.domain}, buy ${asset.domain}, premium domains, brand registry, domain portfolio, escrow transfer`}
        canonical={`https://www.subhauler.com/other-assets/${asset.domain}`}
      />

      <Breadcrumbs 
        customItems={[
          { label: "Home", path: "/" },
          { label: "Other Assets", path: "/other-assets" },
          { label: asset.domain, path: `/other-assets/${asset.domain}` }
        ]}
      />

      <div className="mt-8">
        <Link 
          to="/other-assets" 
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors mb-12"
          id="back-to-other-assets-btn"
        >
          <ArrowLeft size={16} /> Back to Premium Portfolio
        </Link>
      </div>

      <div className="grid lg:grid-cols-12 gap-16 items-start">
        {/* Left column: main domain specs and detail overview */}
        <div className="lg:col-span-8 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-slate-100 rounded-[3rem] p-8 md:p-14 shadow-2xl shadow-slate-100/40 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-indigo-600" />
            
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="px-3.5 py-1.5 bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-wider rounded-full flex items-center gap-1.5">
                <Globe size={12} /> Premium TLD
              </span>
              <span className="px-3.5 py-1.5 bg-indigo-50 text-indigo-600 font-bold text-xs uppercase tracking-wider rounded-full flex items-center gap-1.5">
                <Shield size={12} /> {asset.escrow}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-[900] text-slate-900 tracking-tight leading-none lowercase mb-6">
              {asset.domain}
            </h1>

            <div className="border-l-4 border-blue-600 pl-6 my-8">
              <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed italic">
                "{asset.title}"
              </p>
            </div>

            <p className="text-lg text-slate-500 leading-relaxed font-normal mb-8">
              {asset.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
              {asset.tags.map(tag => (
                <span 
                  key={tag}
                  className="px-3.5 py-1.5 bg-slate-50 border border-slate-150 text-slate-600 text-xs font-bold rounded-lg uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Business Positioning Scenarios */}
          <div className="space-y-6">
            <h2 className="text-2xl font-[800] text-slate-900 tracking-tight flex items-center gap-2">
              <Sparkles size={20} className="text-blue-600" /> Commercial Application Potential
            </h2>
            <div className="grid md:grid-cols-1 gap-6">
              {businessScenarios.map((scenario, i) => (
                <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{scenario.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {scenario.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sibling asset links - cross linking across pages */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-6">Related Digital Assets in Portfolio</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedAssets.map(sibling => (
                <Link
                  key={sibling.domain}
                  to={`/other-assets/${sibling.domain}`}
                  className="p-6 bg-white border border-slate-100 rounded-3xl hover:border-blue-600 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors lowercase">
                      {sibling.domain}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {sibling.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-black text-slate-400 uppercase tracking-wider mt-4">
                    Analyze Asset <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: safe transaction block */}
        <div className="lg:col-span-4 sticky top-28">
          <div className="space-y-8">
            <div className="p-10 bg-slate-900 text-white rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/30 blur-3xl rounded-full" />
              <h3 className="text-3xl font-bold mb-6 tracking-tight leading-tight">Digital Asset Registry</h3>
              <p className="text-slate-400 text-sm mb-10 leading-relaxed">
                This asset is verified, transfer-ready, and listed directly on the secure premium gateway.
              </p>
              
              <a 
                href={asset.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-5 bg-blue-600 text-white font-bold rounded-2xl text-center hover:bg-blue-500 transition-all text-lg shadow-xl shadow-blue-900/40"
              >
                Acquire Domain
              </a>

              <div className="mt-8 pt-8 border-t border-slate-800 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                <span>Verified Listing</span>
                <span className="text-emerald-500">Handshake Ready</span>
              </div>
            </div>

            <ContainerFrame title="Asset Spec Sheet">
              <div className="space-y-5">
                {specSheet.map(spec => (
                  <div key={spec.label} className="flex flex-col border-b border-slate-50 pb-3 last:border-0 last:pb-0">
                    <dt className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{spec.label}</dt>
                    <dd className="font-bold text-slate-800 text-sm">{spec.value}</dd>
                  </div>
                ))}
              </div>
            </ContainerFrame>
          </div>
        </div>
      </div>
    </div>
  );
};
