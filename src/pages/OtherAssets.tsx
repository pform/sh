import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Shield, ArrowUpRight, CheckCircle2, Globe, Database, Search, Tag, Server, HelpCircle } from "lucide-react";
import { ContainerFrame } from "../components/ContainerFrame";
import { SEO } from "../components/SEO";
import { OTHER_DOMAINS } from "./assetsData";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const OtherAssets = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  // Reset visibleCount on filter or search query change
  useEffect(() => {
    setVisibleCount(12);
  }, [searchQuery, selectedTag]);

  // Extract all unique tags across all domains
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    OTHER_DOMAINS.forEach(domain => {
      domain.tags.forEach(t => tagsSet.add(t));
    });
    return Array.from(tagsSet).sort();
  }, []);

  // Filter domains based on search query and selected tag
  const filteredDomains = useMemo(() => {
    return OTHER_DOMAINS.filter(domain => {
      const matchesSearch = 
        domain.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
        domain.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        domain.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        domain.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTag = !selectedTag || domain.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 pb-40" id="other-assets-viewport">
      <SEO 
        title="Premium Digital Asset Portfolio &amp; Domains | Subhauler.com" 
        description="Explore our complete verified registry of 37 high-value digital properties, brandable domain assets, and premium logistics namespaces available for immediate acquisition."
        keywords="premium domains, premium digital assets, high-value domains, buy logistics domains, saas branding domains, premium .com transfer, domain portfolio"
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
                  "name": "Other Assets",
                  "item": "https://www.subhauler.com/other-assets"
                }
              ]
            },
            {
              "@type": "ItemList",
              "name": "Premium Digital Asset Registry",
              "description": "Thirty-seven premium brandable digital properties and domain names available for strategic acquisition.",
              "numberOfItems": OTHER_DOMAINS.length,
              "itemListElement": OTHER_DOMAINS.map((domain, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "url": domain.url,
                "name": domain.domain,
                "description": domain.description
              }))
            }
          ]
        }}
      />
      
      <Breadcrumbs />
      
      {/* Header section with rich typography */}
      <div className="max-w-4xl mb-20" id="other-assets-heading">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
          Other Assets.
        </h1>
        <p className="text-xl text-slate-500 leading-relaxed font-normal">
          In addition to our flagship projects, the administrative registry coordinates custom transaction links and acquisitions for a highly curated portfolio containing thirty-seven premium digital properties. 
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-16" id="other-assets-grid">
        {/* Left Column: Filter panel, search controls, and the domain cards list */}
        <div className="lg:col-span-8 space-y-10" id="assets-list-container">
          
          {/* Dynamic Search & Tag Filters */}
          <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl space-y-6" id="assets-filter-panel">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text"
                placeholder="Search domains by name, industry keyword, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-base shadow-sm"
              />
            </div>

            {/* Popular tags carousel/list */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Tag size={14} className="text-slate-400" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Filter Core Sectors</span>
              </div>
              <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                    !selectedTag 
                      ? "bg-slate-900 text-white border-slate-900" 
                      : "bg-white text-slate-500 border-slate-200 hover:border-slate-350"
                  }`}
                >
                  All Sectors ({OTHER_DOMAINS.length})
                </button>
                {allTags.map(tag => {
                  const count = OTHER_DOMAINS.filter(d => d.tags.includes(tag)).length;
                  return (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                        selectedTag === tag 
                          ? "bg-blue-600 text-white border-blue-600" 
                          : "bg-white text-slate-500 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {tag} ({count})
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results count label */}
          <div className="flex items-center justify-between text-sm" id="results-meta">
            <span className="font-bold text-slate-400 uppercase tracking-widest">
              Showing {filteredDomains.length} of {OTHER_DOMAINS.length} Strategic Properties
            </span>
            {(searchQuery || selectedTag) && (
              <button 
                onClick={() => { setSearchQuery(""); setSelectedTag(null); }}
                className="text-xs font-bold text-blue-600 hover:text-blue-800 underline underline-offset-4"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Staggered Animated Cards */}
          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredDomains.slice(0, visibleCount).map((asset, idx) => (
                <motion.div 
                  layout
                  key={asset.domain}
                  id={`asset-${asset.domain.replace('.', '-')}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 md:p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Domain Identifier and status tag */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <Link 
                          to={`/other-assets/${asset.domain}`}
                          className="text-2xl sm:text-3xl font-black text-slate-900 hover:text-blue-600 transition-colors tracking-tight lowercase"
                        >
                          {asset.domain}
                        </Link>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border ${
                          asset.status.includes("Active") 
                            ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                            : "bg-blue-50 text-blue-600 border-blue-100"
                        }`}>
                          <Shield size={10} />
                          {asset.status}
                        </span>
                      </div>
                      
                      {/* Domain icon links */}
                      <div className="flex items-center gap-2 shrink-0">
                        <Link 
                          id={`asset-link-icon-${asset.domain.replace('.', '-')}`}
                          to={`/other-assets/${asset.domain}`}
                          className="p-2.5 text-slate-400 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors flex items-center justify-center border border-slate-100"
                          title={`Analyze ${asset.domain}`}
                        >
                          <Globe size={18} />
                        </Link>
                      </div>
                    </div>

                    {/* Meta Title and Description */}
                    <h3 className="text-base font-bold text-slate-800 mb-3">{asset.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm mb-6">
                      {asset.description}
                    </p>

                    {/* Tag list */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {asset.tags.map(tag => (
                        <span 
                          key={tag} 
                          id={`asset-tag-${tag.replace(/\s+/g, '-').toLowerCase()}`}
                          className="text-[10px] font-extrabold text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Escrow and direct visit actions */}
                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      <span>{asset.escrow}</span>
                    </div>
                    
                    <Link 
                      id={`asset-btn-${asset.domain.replace('.', '-')}`}
                      to={`/other-assets/${asset.domain}`}
                      className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-3 rounded-full shadow transition-transform hover:-translate-y-0.5"
                    >
                      Analyze Valuation <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}

              {filteredDomains.length > visibleCount && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-center pt-6 pb-2"
                  id="load-more-assets-wrapper"
                >
                  <button
                    id="btn-load-more-assets"
                    onClick={() => setVisibleCount(prev => prev + 12)}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all uppercase tracking-widest rounded-full shadow-sm hover:shadow"
                  >
                    Load More Premium Assets ({filteredDomains.length - visibleCount} remaining)
                  </button>
                </motion.div>
              )}

              {filteredDomains.length === 0 && (
                <motion.div 
                  className="p-12 text-center bg-slate-50 border border-slate-150 border-dashed rounded-3xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <HelpCircle className="mx-auto text-slate-400 mb-4" size={40} />
                  <h3 className="text-lg font-bold text-slate-800 mb-1">No Domains Found</h3>
                  <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
                    We couldn't find any domains matching "{searchQuery}" in our {selectedTag ? `"${selectedTag}"` : "global"} portfolio directory.
                  </p>
                  <button 
                    onClick={() => { setSearchQuery(""); setSelectedTag(null); }}
                    className="bg-slate-905 hover:bg-slate-900 text-slate-900 hover:text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3 border border-slate-300 rounded-full bg-white shadow-sm"
                  >
                    Reset Directory Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Acquisition metadata / Safe Escrow guides */}
        <div className="lg:col-span-4" id="assets-sidebar-container">
          <div className="sticky top-28 space-y-8">
            <ContainerFrame title="Strategic Acquisition">
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                All thirty-seven premium digital properties held under our registry of assets can be acquired securely. Every handshake enforces transfer integrity and standard secure escrow protocols.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-start gap-3">
                  <Shield className="text-blue-600 shrink-0 mt-0.5" size={16} />
                  <div>
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">100% Secure Transfer</div>
                    <div className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">Verified Escrow processes ensure smooth, legally absolute domain handover options.</div>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-start gap-3">
                  <Server className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                  <div>
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">Immediate Handover</div>
                    <div className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">Nameservers, customized DNS settings, and registrar authorization codes processed within 24 hours.</div>
                  </div>
                </div>
              </div>
            </ContainerFrame>

            <div className="p-10 bg-slate-900 text-white rounded-[2.5rem] shadow-xl text-center" id="inquiry-card">
              <h3 className="text-xl font-bold mb-3">Custom Portfolio Inquiries</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6 font-medium">
                Interested in bulk acquisitions, package deals, or customized escrow transfers for domain holdings? Reach out directly to our administrative desk.
              </p>
              <a 
                id="contact-button-sidebar"
                href="/contact"
                className="inline-block bg-white text-slate-900 font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-slate-200 transition-all shadow-md hover:shadow-lg"
              >
                Inquire Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherAssets;
