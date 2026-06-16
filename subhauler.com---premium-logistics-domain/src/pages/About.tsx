import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle2, History, Target, Users, ArrowRight, ChevronDown } from "lucide-react";
import { SEO } from "../components/SEO";
import { GODADDY_URL } from "../constants";
import { Breadcrumbs } from "../components/Breadcrumbs";

const faqs = [
  {
    question: "How does the domain transfer process work after checkout?",
    answer: "Once you finalize the purchase on GoDaddy's premium marketplace, a secure transfer is initiated. GoDaddy serves as the neutral escrow agent. You will receive an Authorization Code (EPP transfer key) via email within hours, allowing you to instantly push the domain to your own account or transfer it to any registrar of your choice."
  },
  {
    question: "Can I use Subhauler.com for email, SaaS, and carrier portal integrations immediately?",
    answer: "Yes, absolutely. Once the domain transfer is complete, you own 100% of the DNS management. You can configure custom corporate emails (e.g., info@subhauler.com), set up an enterprise landing page, or map it to a tracking portal for subhaulers and logistics coordination."
  },
  {
    question: "Are there any recurring or hidden brokerage fees?",
    answer: "No. The purchase on GoDaddy is a one-time acquisition for full perpetual ownership. No residual royalties or broker commissions are charged. The only onward cost is your standard annual domain renewal fee directly with your hosting registrar (typically around $10-$15 per year)."
  },
  {
    question: "Why is a premium logistics keyword like 'Subhauler' highly valuable?",
    answer: "Premium, short, single-word domain assets are finite. In logistics, the term 'Subhauler' is a primary commercial keyword representing regional carriers who execute overflow freight contracts. Owning the exact match .com establishes instant market dominance, ranks exceptionally well on search engines, and saves thousands of dollars in annual Google Ads search spend."
  },
  {
    question: "Is escrow and transaction protection included?",
    answer: "Yes, GoDaddy handles the transfer process under strict regulatory escrow guidelines. This guarantees that your payment is only released to the seller once the domain's transfer credentials have been successfully released to you."
  }
];

export const About = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 pb-40 relative overflow-hidden">
      <SEO 
        title="How to Buy Subhauler.com | Secure Domain Acquisition" 
        description="A step-by-step guide to acquiring the Subhauler.com premium domain through GoDaddy's secure transfer protocol. Safe, fast, and documented logistics asset transfer."
        keywords="buy subhauler.com, domain purchase guide, premium logistics domain, godaddy transfer process, secure domain acquisition, freight branding asset"
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
                  "name": "Buy Domain",
                  "item": "https://www.subhauler.com/about"
                }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }
          ]
        }}
      />
      
      <Breadcrumbs />
      
      {/* Scattered Decorative Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-slate-100 rounded-full blur-[120px] -z-10 opacity-60" />

      <div className="max-w-4xl mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Secure Acquisition Process
          </span>
          <h1 className="text-5xl md:text-8xl font-[800] text-slate-900 mb-8 tracking-tighter leading-[0.95]">
            How to Buy <br /><span className="text-blue-600">Subhauler.com</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-regular max-w-2xl">
            Acquiring a premium domain is a straightforward legal process. We use GoDaddy—the world's largest registrar—to ensure a fast, secure, and documented transfer of ownership.
          </p>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
        <div className="space-y-12">
          <section className="relative pl-12 border-l-2 border-slate-100">
            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
            <h3 className="text-2xl font-bold mb-4 text-slate-900">1. Click "Buy Now" on GoDaddy</h3>
            <p className="text-lg text-slate-500 leading-relaxed">
              When you visit the official GoDaddy registry link, you will see the current list price for Subhauler.com. This is an immediate-transfer price with no hidden brokerage fees.
            </p>
          </section>

          <section className="relative pl-12 border-l-2 border-slate-100">
            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-slate-200 border-4 border-white shadow-sm" />
            <h3 className="text-2xl font-bold mb-4 text-slate-900">2. Complete Secure Checkout</h3>
            <p className="text-lg text-slate-500 leading-relaxed">
              GoDaddy acts as the escrow agent. Your payment is held securely while the domain's administrative rights are prepared for transfer to your account.
            </p>
          </section>

          <section className="relative pl-12 border-l-2 border-slate-100">
            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-slate-200 border-4 border-white shadow-sm" />
            <h3 className="text-2xl font-bold mb-4 text-slate-900">3. Auth-Code Delivery</h3>
            <p className="text-lg text-slate-500 leading-relaxed">
              Once payment is confirmed, you will receive a unique Authorization Code (EPP Key). This is your digital proof of ownership that allows you to move the domain to any registrar you prefer.
            </p>
          </section>

          <section className="relative pl-12">
            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-emerald-500 border-4 border-white shadow-sm" />
            <h3 className="text-2xl font-bold mb-4 text-slate-900">4. Immediate Operational Rights</h3>
            <p className="text-lg text-slate-500 leading-relaxed">
              The transfer typically completes within minutes to a few hours. You gain full control of email, hosting, and DNS settings immediately.
            </p>
          </section>
        </div>

        <div className="sticky top-32">
          <div className="p-12 bg-slate-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full" />
            <div className="relative z-10">
              <h4 className="text-3xl font-bold mb-6 tracking-tight">Ready to Purchase?</h4>
              <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                Subhauler.com is listed exclusively on the GoDaddy Premium Marketplace for immediate acquisition.
              </p>
              <a 
                href={GODADDY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-xl transition-all shadow-xl group/btn"
              >
                Go to GoDaddy Checkout <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
              <div className="mt-8 flex items-center gap-4 text-sm text-slate-500 font-medium italic">
                <CheckCircle2 size={18} className="text-emerald-500" />
                Secure Escrow Included
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 mb-40 border-t border-slate-100 pt-32">
        <section>
          <h2 className="text-3xl font-bold mb-6">Why Purchase Now?</h2>
          <p className="text-lg text-slate-500 leading-relaxed mb-8 font-medium">
            Premium logistics domains are high-demand assets. As trucking digitizes, the "Subhauler" keyword becomes increasingly valuable for SEO and brand authority.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Instant Brand Trust",
              "SEO Dominance",
              "Direct Competitor Advantage",
              "Resale Value"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-600 font-medium text-sm p-4 bg-slate-50 rounded-xl">
                <CheckCircle2 size={16} className="text-blue-600" />
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="relative rounded-[3.5rem] overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200" 
            alt="Industrial trucking logistics terminal with fleets of shipping trucks representing reliable intermodal transport and subhaul capacity" 
            className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 transition-all duration-1000 shadow-2xl"
            loading="lazy"
            decoding="async"
          />
        </section>
      </div>

      {/* Dynamic interactive FAQ section */}
      <div className="max-w-3xl mx-auto mb-40 border-t border-slate-100 pt-32" id="faq-section">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl font-[800] text-slate-900 tracking-tight">
            Acquisition &amp; Transfer FAQ
          </h2>
          <p className="text-lg text-slate-500 mt-4">
            Everything you need to know about purchasing and deploying Subhauler.com
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div 
                key={idx}
                id={`faq-item-${idx}`}
                className={`bg-white border rounded-[2rem] transition-all duration-300 overflow-hidden ${
                  isExpanded 
                    ? "border-blue-500 shadow-xl shadow-blue-500/5 ring-1 ring-blue-500/10" 
                    : "border-slate-100 hover:border-slate-300 hover:shadow-lg"
                }`}
              >
                <button
                  id={`faq-button-${idx}`}
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center text-left p-6 md:p-8 font-bold text-lg text-slate-900 hover:text-blue-600 transition-colors focus:outline-none"
                    aria-expanded={isExpanded}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`transform transition-transform duration-300 text-slate-400 shrink-0 ${
                      isExpanded ? "rotate-180 text-blue-600" : ""
                    }`} 
                    size={20}
                  />
                </button>
                
                <div 
                  id={`faq-answer-container-${idx}`}
                  className={`transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-96 border-t border-slate-50" : "max-h-0 pointer-events-none"
                  }`}
                >
                  <p className="p-6 md:p-8 text-base text-slate-500 leading-relaxed bg-slate-50/50">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Have Questions Before Buying?</h2>
        <p className="text-xl text-slate-500 mb-12">
          Our team can provide documentation on domain history and traffic potential before you commit to the GoDaddy checkout.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center justify-center px-10 py-5 border-2 border-slate-900 rounded-full font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all text-lg"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default About;
