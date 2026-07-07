import React, { useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Search, ArrowLeft, BookOpen, ShieldCheck, Tag, HelpCircle, ExternalLink, Scale, MapPin } from "lucide-react";
import { SEO } from "../components/SEO";
import { glossaryTerms, GlossaryTerm, regionalHubs } from "../data/seoContent";
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

export const Glossary = () => {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  // Find active term if slug is provided
  const activeTerm = useMemo(() => {
    if (!slug) return null;
    return glossaryTerms.find((t) => t.slug === slug.toLowerCase()) || null;
  }, [slug]);

  // Handle Search & Filter
  const filteredTerms = useMemo(() => {
    let result = glossaryTerms;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          t.term.toLowerCase().includes(query) ||
          t.definition.toLowerCase().includes(query)
      );
    }

    if (selectedLetter) {
      result = result.filter((t) =>
        t.term.toUpperCase().startsWith(selectedLetter)
      );
    }

    return result.sort((a, b) => a.term.localeCompare(b.term));
  }, [searchQuery, selectedLetter]);

  // Extract list of first letters available
  const availableLetters = useMemo(() => {
    const letters = new Set<string>();
    glossaryTerms.forEach((t) => {
      const char = t.term.charAt(0).toUpperCase();
      if (/[A-Z]/.test(char)) {
        letters.add(char);
      }
    });
    return Array.from(letters).sort();
  }, []);

  // 1. DETAIL VIEW FOR AN INDIVIDUAL TERM
  if (slug && activeTerm) {
    const termSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTerm",
          "@id": `https://www.subhauler.com/glossary/${activeTerm.slug}#term`,
          "name": activeTerm.term,
          "description": activeTerm.definition,
          "inDefinedTermSet": {
            "@type": "DefinedTermSet",
            "name": "Subhauler Industry Logistics Glossary",
            "url": "https://www.subhauler.com/glossary"
          }
        },
        {
          "@type": "WebPage",
          "@id": `https://www.subhauler.com/glossary/${activeTerm.slug}`,
          "url": `https://www.subhauler.com/glossary/${activeTerm.slug}`,
          "name": `${activeTerm.term} - Logistics Industry Dictionary | Subhauler.com`,
          "description": activeTerm.metaDescription,
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
                "name": "Broker Glossary",
                "item": "https://www.subhauler.com/glossary"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": activeTerm.term,
                "item": `https://www.subhauler.com/glossary/${activeTerm.slug}`
              }
            ]
          }
        }
      ]
    };

    const termKeywords = `${activeTerm.term.toLowerCase()} definition, what is ${activeTerm.term.toLowerCase()}, logistics glossary, trucking term ${activeTerm.term.toLowerCase()}, freight terminology, shipping dictionary, subhauler definition, logistics terms index`;

    return (
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20" id="glossary-term-detail">
        <SEO
          title={`${activeTerm.term} - Logistics Industry Dictionary | Subhauler.com`}
          description={activeTerm.metaDescription}
          keywords={termKeywords}
          canonical={`https://www.subhauler.com/glossary/${activeTerm.slug}`}
          schema={termSchema}
        />

        <Breadcrumbs 
          customItems={[
            { label: "Home", path: "/" },
            { label: "Broker Glossary", path: "/glossary" },
            { label: activeTerm.term, path: `/glossary/${activeTerm.slug}` }
          ]} 
        />

        <div className="mt-8 max-w-4xl">
          <Link
            to="/glossary"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors mb-8"
            id="back-to-glossary-btn"
          >
            <ArrowLeft size={16} /> Back to Glossary Dictionary
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-slate-100 rounded-[3rem] p-8 md:p-14 shadow-2xl shadow-slate-100 relative overflow-hidden"
          >
            {/* Elegant Accent Ribbon */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-indigo-600" />
            
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3.5 py-1.5 bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-wider rounded-full flex items-center gap-1.5">
                <BookOpen size={12} /> Industry Definition
              </span>
              <span className="px-3.5 py-1.5 bg-indigo-50 text-indigo-600 font-bold text-xs uppercase tracking-wider rounded-full flex items-center gap-1.5">
                <Tag size={12} /> Logistics Keyword
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-[900] text-slate-900 tracking-tight leading-none mb-6">
              {activeTerm.term}
            </h1>

            <div className="border-l-4 border-blue-600 pl-6 my-8">
              <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed">
                {activeTerm.definition}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12 pt-10 border-t border-slate-50">
              <div className="bg-slate-50/50 p-6 md:p-8 rounded-[2rem] border border-slate-100">
                <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Scale size={16} className="text-blue-500" /> Commercial Domain Alignment
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {activeTerm.commercialValue}
                </p>
              </div>

              <div className="bg-blue-50/30 p-6 md:p-8 rounded-[2rem] border border-blue-100/30 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-black text-blue-800 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <ShieldCheck size={16} className="text-blue-600" /> Brand Acquisition Authority
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Own the ultimate commercial digital logistics brand. Leverage premium exact-match traffic to build a secure SaaS terminal or dispatch platform.
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href={GODADDY_URL}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold text-sm rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/10"
                    id={`buy-domain-glossary-${activeTerm.slug}`}
                  >
                    Acquire Subhauler.com <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick links to sister terms */}
          <div className="mt-16">
            <h2 className="text-lg font-bold text-slate-700 mb-6">Explore Other Logistics Keyterms</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {glossaryTerms
                .filter((t) => t.slug !== activeTerm.slug)
                .slice(0, 8)
                .map((sibling) => (
                  <Link
                    key={sibling.slug}
                    to={`/glossary/${sibling.slug}`}
                    className="p-4 bg-white border border-slate-100 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all text-xs font-semibold text-slate-700 flex items-center justify-between"
                  >
                    <span>{sibling.term}</span>
                    <ArrowLeft size={12} className="rotate-180 text-slate-300" />
                  </Link>
                ))}
            </div>
          </div>

          {/* Active regional nodes network links */}
          <div className="mt-16 bg-slate-50/50 rounded-[2.5rem] p-8 border border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <MapPin size={18} className="text-blue-600" /> Active Regional Hubs & Route Lanes
            </h2>
            <p className="text-sm text-slate-500 mb-6 font-medium">
              Geofenced transloading points and subhaul networks executing carrier {activeTerm.term.toLowerCase()} operations across peak logistics corridors:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {getStableLinkedItems(activeTerm.slug, regionalHubs, 4).map((hub) => (
                <Link
                  key={hub.slug}
                  to={`/coverage/${hub.slug}`}
                  className="p-5 bg-white border border-slate-150 rounded-2xl hover:border-blue-600 hover:shadow-lg transition-all flex flex-col justify-between group h-32"
                >
                  <div>
                    <span className="text-[10px] font-mono text-blue-500 uppercase font-[800] tracking-wider leading-none block mb-1">
                      {hub.region} ZONE
                    </span>
                    <h4 className="text-base font-bold text-slate-900 leading-tight">
                      {hub.city}, {hub.state}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-[11px] font-semibold text-slate-400 group-hover:text-blue-600 group-hover:underline transition-colors">
                      View Hub Network
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

  // 2. MAIN HUB LIST VIEW (A-Z / SEARCH LIST)
  const listSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemPage",
        "@id": "https://www.subhauler.com/glossary",
        "name": "Subhauler Industry Logistics Glossary",
        "description": "Comprehensive reference of 40 essential industry definitions, freight concepts, and transport terminology relating to subhauling, carriers, and dispatch workflows.",
        "url": "https://www.subhauler.com/glossary",
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
              "name": "Logistics Glossary",
              "item": "https://www.subhauler.com/glossary"
            }
          ]
        }
      },
      {
        "@type": "DefinedTermSet",
        "@id": "https://www.subhauler.com/glossary#termset",
        "name": "Subhauler Industry Logistics Glossary",
        "description": "Comprehensive reference of 40 essential industry definitions, freight concepts, and transport terminology relating to subhauling, carriers, and dispatch workflows.",
        "hasDefinedTerm": glossaryTerms.map((term) => ({
          "@type": "DefinedTerm",
          "name": term.term,
          "description": term.definition,
          "url": `https://www.subhauler.com/glossary/${term.slug}`
        }))
      }
    ]
  };

  const indexKeywords = "logistics glossary, trucking dictionary, carrier terms, freight transport keyterms, intermodal glossary, shipping definition directory, Subhauler lexicon, glossary of logistics terms, freight carrier definitions";

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20" id="glossary-hub">
      <SEO
        title="Subhauler.com Logistics &amp; Carrier Glossary | A-Z Definitions"
        description="Search our dictionary of 40 commercial freight, trucking, drayage, and carrier terms. Understand the terminology powering Subhauler.com master architecture."
        keywords={indexKeywords}
        canonical="https://www.subhauler.com/glossary"
        schema={listSchema}
      />

      <Breadcrumbs 
        customItems={[
          { label: "Home", path: "/" },
          { label: "Logistics Glossary", path: "/glossary" }
        ]} 
      />

      {/* Hero Banner Area */}
      <div className="max-w-4xl mt-8 mb-16">
        <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          Industry Resource Hub
        </span>
        <h1 className="text-4xl md:text-5xl font-[900] text-slate-900 tracking-tight leading-none mb-6">
          Logistics Knowledge Base
        </h1>
        <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-3xl">
          A definitive commercial index of 40 standard terms, trucking operational structures, and technical terminology. Designed to showcase the strategic search power of Subhauler.com.
        </p>
      </div>

      {/* Search & Alphabet Roster bar */}
      <div className="bg-slate-50/50 border border-slate-100 rounded-[2.5rem] p-6 mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
          <div className="relative w-full md:flex-1">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              id="glossary-search-field"
              placeholder="Search terms, definitions..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSelectedLetter(null); // Clear active letter when searching
              }}
              className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200/80 rounded-2xl text-slate-800 placeholder-slate-400 font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm"
            />
          </div>
          {(selectedLetter !== null || searchQuery !== "") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedLetter(null);
              }}
              className="text-xs font-bold text-red-500 hover:text-red-700 transition"
              id="clear-glossary-filters"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Letters Index Row */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/40">
          <button
            onClick={() => setSelectedLetter(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              selectedLetter === null && searchQuery === ""
                ? "bg-slate-900 text-white"
                : "bg-white border text-slate-500 hover:text-slate-800"
            }`}
          >
            ALL
          </button>
          {availableLetters.map((letter) => (
            <button
              key={letter}
              onClick={() => {
                setSelectedLetter(letter);
                setSearchQuery(""); // Clear search when choosing a letter
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedLetter === letter
                  ? "bg-blue-600 text-white"
                  : "bg-white border text-slate-500 hover:text-blue-600"
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Roster list */}
      {filteredTerms.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="glossary-grid">
          {filteredTerms.map((item, idx) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: Math.min(idx * 0.02, 0.2) }}
              className="group bg-white border border-slate-100 hover:border-blue-500 rounded-[2rem] p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-[900] text-slate-200 group-hover:text-blue-100 transition-colors select-none font-mono">
                  {item.term.charAt(0).toUpperCase()}
                </span>
                <h3 className="text-lg font-[800] text-slate-800 mt-2 mb-3 tracking-tight group-hover:text-blue-700 transition-colors">
                  {item.term}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-6">
                  {item.definition}
                </p>
              </div>

              <Link
                to={`/glossary/${item.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-black text-blue-600 hover:text-blue-800 tracking-wider uppercase mt-auto"
                id={`read-glossary-link-${item.slug}`}
              >
                Read Specification <ArrowLeft size={12} className="rotate-180" />
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50 border border-slate-100 rounded-[2rem]" id="glossary-no-results">
          <HelpCircle className="mx-auto text-slate-300 mb-4" size={48} />
          <h3 className="text-lg font-bold text-slate-700">No Dictionary Match</h3>
          <p className="text-sm text-slate-400 mt-1 max-w-sm mx-auto">
            Try correcting your search spelling or change your alphabet letter filter.
          </p>
        </div>
      )}
    </div>
  );
};
