import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { MapPin, ArrowLeft, ArrowUpRight, Navigation, Cpu, Network, Heart, Shield, Globe, BookOpen } from "lucide-react";
import { SEO } from "../components/SEO";
import { regionalHubs, RegionalHub, glossaryTerms } from "../data/seoContent";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { GODADDY_URL } from "../constants";

const getStableLinkedItems = <T,>(slug: string, list: T[], count = 4): T[] => {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash << 5) - hash + slug.charCodeAt(i);
    hash |= 0;
  }
  hash = Math.abs(hash);
  
  const results: T[] = [];
  const listLen = list.length;
  const chosenIndices = new Set<number>();
  for (let i = 0; i < count * 2 && chosenIndices.size < count; i++) {
    const idx = (hash + i * 13) % listLen;
    chosenIndices.add(idx);
  }
  chosenIndices.forEach(idx => results.push(list[idx]));
  return results;
};

export const Coverage = () => {
  const { slug } = useParams<{ slug?: string }>();
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  // Active hub find
  const activeHub = useMemo(() => {
    if (!slug) return null;
    return regionalHubs.find((h) => h.slug === slug.toLowerCase()) || null;
  }, [slug]);

  // Unique list of regions for filters
  const uniqueRegions = useMemo(() => {
    const rSet = new Set<string>();
    regionalHubs.forEach((h) => rSet.add(h.region));
    return Array.from(rSet);
  }, []);

  // Filtered cities list
  const filteredHubs = useMemo(() => {
    let result = regionalHubs;
    if (selectedRegion) {
      result = result.filter((h) => h.region === selectedRegion);
    }
    return result.sort((a, b) => a.city.localeCompare(b.city));
  }, [selectedRegion]);

  // 1. DETAIL LANDING PAGE FOR INDIVIDUAL LOGISTICS CORRIDOR
  if (slug && activeHub) {
    const hubSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Place",
          "@id": `https://www.subhauler.com/coverage/${activeHub.slug}#place`,
          "name": `Subhauler Logistics Hub in ${activeHub.city}, ${activeHub.state}`,
          "description": activeHub.marketDescription,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": activeHub.city,
            "addressRegion": activeHub.state,
            "addressCountry": "US"
          }
        },
        {
          "@type": "WebPage",
          "@id": `https://www.subhauler.com/coverage/${activeHub.slug}`,
          "url": `https://www.subhauler.com/coverage/${activeHub.slug}`,
          "name": `${activeHub.city}, ${activeHub.state} Intermodal Carrier Hub | Subhauler`,
          "description": activeHub.metaDescription,
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://www.subhauler.com/#website"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.subhauler.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Region Nodes",
                "item": "https://www.subhauler.com/coverage"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": `${activeHub.city}, ${activeHub.state}`,
                "item": `https://www.subhauler.com/coverage/${activeHub.slug}`
              }
            ]
          }
        }
      ]
    };

    const hubKeywords = `${activeHub.city.toLowerCase()} trucking, ${activeHub.city.toLowerCase()} shipping, ${activeHub.city.toLowerCase()} subhauler, ${activeHub.region.toLowerCase()} logistics, ${activeHub.city.toLowerCase()} ${activeHub.state.toLowerCase()} freight, carrier terminal ${activeHub.city.toLowerCase()}, intermodal corridor ${activeHub.slug}`;

    return (
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20" id="coverage-hub-detail">
        <SEO
          title={`${activeHub.city}, ${activeHub.state} Intermodal Carrier Hub | Subhauler`}
          description={activeHub.metaDescription}
          keywords={hubKeywords}
          canonical={`https://www.subhauler.com/coverage/${activeHub.slug}`}
          schema={hubSchema}
        />

        <Breadcrumbs
          customItems={[
            { label: "Home", path: "/" },
            { label: "Region Nodes", path: "/coverage" },
            { label: `${activeHub.city}, ${activeHub.state}`, path: `/coverage/${activeHub.slug}` }
          ]}
        />

        <div className="mt-8 max-w-5xl">
          <Link
            to="/coverage"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors mb-8"
            id="back-to-coverage-btn"
          >
            <ArrowLeft size={16} /> Back to National Coverage Map
          </Link>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* Main content card */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-8 bg-white border border-slate-150/60 rounded-[3rem] p-8 md:p-14 shadow-2xl shadow-slate-100/40 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600" />
              
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                <span className="px-3.5 py-1.5 bg-slate-900 text-white font-mono text-[10px] uppercase font-black tracking-widest rounded-md leading-none">
                  HUB LEVEL-1
                </span>
                <span className="px-3 py-1.5 bg-blue-50 text-blue-600 font-bold text-xs rounded-full flex items-center gap-1.5 leading-none">
                  <MapPin size={12} /> {activeHub.region} Corridor
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-[900] text-slate-900 tracking-tight leading-none mb-6">
                {activeHub.city}, <span className="text-blue-600 font-[800]">{activeHub.state}</span>
              </h1>

              <div className="my-10">
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">
                  Market Profile &amp; Corridor Capacity
                </h3>
                <p className="text-xl text-slate-700 leading-relaxed font-medium">
                  {activeHub.marketDescription}
                </p>
              </div>

              <div className="p-6 md:p-8 bg-blue-50/25 rounded-[2rem] border border-blue-100/20 mt-8">
                <h3 className="text-sm font-black text-blue-800 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Cpu size={16} className="text-blue-600" /> Carrier &amp; Subhauler Integration
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {activeHub.commercialImportance}
                </p>
              </div>
            </motion.div>

            {/* Side Call-to-Action widget */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="lg:col-span-4 flex flex-col gap-6"
            >
              {/* Simulated Local Node Radar Widget */}
              <div className="bg-slate-950 rounded-[3rem] p-8 text-white relative overflow-hidden flex flex-col justify-between min-h-[280px]">
                {/* Simulated Radar Circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full pointer-events-none animate-ping" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-blue-500/10 rounded-full pointer-events-none" />

                <div className="relative z-10">
                  <span className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase flex items-center gap-1.5 mb-2 font-black">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live Node Mapping
                  </span>
                  <h3 className="text-xl font-bold tracking-tight mb-2">Subhauler Corridor Active</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Geofenced coordinate zone mapping is ready to process incoming freight requests across state highways linking {activeHub.city} terminal points.
                  </p>
                </div>

                <div className="relative z-10 flex justify-between items-end mt-12 border-t border-white/10 pt-4">
                  <div className="font-mono text-[9px] text-slate-500">
                    <div>LAT: 41.8781° N</div>
                    <div>LNG: 87.6298° W</div>
                  </div>
                  <Navigation className="text-blue-500" size={24} />
                </div>
              </div>

              {/* Purchase CTA */}
              <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-black text-slate-705 uppercase tracking-widest mb-3 flex items-center gap-1.5 text-slate-900">
                    <Network size={16} className="text-blue-600" /> Master Routing Asset
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Deploy Subhauler.com as your corporate carrier interface. Seamlessly integrate the ultimate exact-match brand across your regional systems.
                  </p>
                </div>
                <div className="mt-8">
                  <a
                    href={GODADDY_URL}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-2xl transition shadow-lg shadow-blue-500/20"
                    id={`buy-domain-coverage-${activeHub.slug}`}
                  >
                    Acquire Subhauler.com <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick linkages grid */}
          <div className="mt-20">
            <h2 className="text-xl font-bold text-slate-800 mb-8">Other High-Capacity National Logistics Hubs</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {regionalHubs
                .filter((h) => h.slug !== activeHub.slug)
                .slice(0, 8)
                .map((sibling) => (
                  <Link
                    key={sibling.slug}
                    to={`/coverage/${sibling.slug}`}
                    className="p-5 bg-white border border-slate-100 hover:border-blue-500 hover:shadow-lg rounded-2xl transition duration-300 flex justify-between items-center text-sm font-semibold text-slate-700"
                  >
                    <span>{sibling.city}, {sibling.state}</span>
                    <MapPin size={12} className="text-slate-300 group-hover:text-blue-500" />
                  </Link>
                ))}
            </div>
          </div>

          {/* Active carrier dictionary nodes section */}
          <div className="mt-16 bg-slate-50/50 rounded-[2.5rem] p-8 border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <BookOpen size={18} className="text-blue-600" /> Key Cargo &amp; Dispatch Concepts for {activeHub.city}
            </h2>
            <p className="text-sm text-slate-500 mb-6 font-medium">
              Understand standard logistics regulations, carrier metrics, and freight terminology defining shipping workflows in the {activeHub.city} corridor:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {getStableLinkedItems(activeHub.slug, glossaryTerms, 4).map((term) => (
                <Link
                  key={term.slug}
                  to={`/glossary/${term.slug}`}
                  className="p-5 bg-white border border-slate-150 rounded-2xl hover:border-blue-600 hover:shadow-lg transition-all flex flex-col justify-between group h-32"
                >
                  <div>
                    <span className="text-[10px] font-mono text-blue-500 uppercase font-[800] tracking-wider leading-none block mb-1">
                      LOGISTICS KEYWORD
                    </span>
                    <h4 className="text-base font-bold text-slate-900 leading-tight">
                      {term.term}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-[11px] font-semibold text-slate-400 group-hover:text-blue-600 group-hover:underline transition-colors truncate max-w-[125px]">
                      Read Definition
                    </span>
                    <ArrowLeft size={14} className="rotate-180 text-slate-300 group-hover:text-blue-600 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. MAIN COVERAGE SUMMARY MAP / DIRECTORY LIST
  const mainSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemPage",
        "@id": "https://www.subhauler.com/coverage",
        "name": "Subhauler.com National Logistics Hub Coverage Directory",
        "description": "Geographical listing of 40 peak logistics nodes, port complexes, and inland distribution corridors available under Subhauler.com domain architecture.",
        "url": "https://www.subhauler.com/coverage",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.subhauler.com/#website"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.subhauler.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Freight Regions",
              "item": "https://www.subhauler.com/coverage"
            }
          ]
        }
      },
      {
        "@type": "ItemList",
        "name": "National Logistics Nodes Directory",
        "numberOfItems": regionalHubs.length,
        "itemListElement": regionalHubs.map((hub, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": `${hub.city}, ${hub.state} Logistics Corridor`,
          "url": `https://www.subhauler.com/coverage/${hub.slug}`
        }))
      }
    ]
  };

  const mainKeywords = "national logistics hubs, cargo hubs, trucking carriers, freight distribution, intermodal ports, US shipping nodes, Subhauler coverage map, freight brokerage hubs, shipping carrier terminals";

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20" id="coverage-index-hub">
      <SEO
        title="National Logistics Nodes &amp; Cargo Hubs Directory | Subhauler"
        description="Verify our interactive directory of 40 primary United States cargo ports, rail junctions, and regional trucking carrier nodes covered by Subhauler.com."
        keywords={mainKeywords}
        canonical="https://www.subhauler.com/coverage"
        schema={mainSchema}
      />

      <Breadcrumbs
        customItems={[
          { label: "Home", path: "/" },
          { label: "Freight Regions", path: "/coverage" }
        ]}
      />

      {/* Hero Header */}
      <div className="max-w-4xl mt-8 mb-16">
        <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          National Network Assets
        </span>
        <h1 className="text-4xl md:text-5xl font-[900] text-slate-900 tracking-tight leading-none mb-6">
          National Trade Corridors
        </h1>
        <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-3xl">
          An interactive, high-value geographical directory demonstrating how Subhauler.com functions as a global master-asset covering 40 of America's peak maritime gateways and distribution nodes.
        </p>
      </div>

      {/* Regions Filter Bar */}
      <div className="flex flex-wrap gap-2 mb-12 bg-slate-50/50 p-3 rounded-2xl border border-slate-100 max-w-2xl">
        <button
          onClick={() => setSelectedRegion(null)}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition ${
            selectedRegion === null
              ? "bg-slate-900 text-white"
              : "bg-white border text-slate-500 hover:text-slate-800"
          }`}
          id="btn-region-all"
        >
          All Logistics Zones
        </button>
        {uniqueRegions.map((region) => (
          <button
            key={region}
            onClick={() => setSelectedRegion(region)}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition ${
              selectedRegion === region
                ? "bg-blue-600 text-white"
                : "bg-white border text-slate-500 hover:text-blue-600"
            }`}
            id={`btn-region-${region.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {region}
          </button>
        ))}
      </div>

      {/* Corridor Grid Card Layout */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="coverage-national-grid">
        {filteredHubs.map((hub, idx) => (
          <motion.div
            key={hub.slug}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: Math.min(idx * 0.02, 0.25) }}
            className="group block bg-white border border-slate-100 hover:border-blue-500 hover:shadow-2xl rounded-2xl p-6 transition duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition duration-300">
              <Navigation className="text-blue-600 group-hover:animate-pulse" size={16} />
            </div>

            <span className="text-xs font-mono font-black text-blue-500 uppercase tracking-widest block mb-2">
              {hub.region} ZONE
            </span>
            <h3 className="text-xl font-[800] text-slate-850 tracking-tight mb-2 group-hover:text-blue-700 transition">
              {hub.city}, {hub.state}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6 line-clamp-2">
              {hub.marketDescription}
            </p>

            <Link
              to={`/coverage/${hub.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-black text-blue-600 group-hover:text-blue-800 tracking-wider uppercase"
              id={`read-coverage-${hub.slug}`}
            >
              Analyze Corridor <ArrowLeft size={12} className="rotate-180" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
