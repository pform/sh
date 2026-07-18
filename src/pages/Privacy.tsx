import { SEO } from "../components/SEO";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-slate-600 prose prose-slate max-w-none">
      <SEO 
        title="Privacy Policy & Data Security Protocol | Subhauler.com" 
        description="Our high-rigor protocol for handling administrative inquiry metadata, security encryption, and escrow transaction privacy within the Subhauler digital logistics corridors."
        keywords="privacy policy, data security protocol, subhauler privacy, secure domain transfer, encrypted inquiry, transaction security"
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
                  "name": "Privacy Protocol",
                  "item": "https://www.subhauler.com/privacy"
                }
              ]
            }
          ]
        }}
      />
      <Breadcrumbs />
      <h1 className="text-4xl font-bold text-slate-900 mb-12">Privacy Protocol</h1>
      <p className="text-lg mb-8">
        At Subhauler.com, we treat data privacy with the same industrial rigor we apply to freight coordination. 
        This protocol outlines how we manage metadata and administrative information within our digital corridors.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">1. Metadata Collection</h2>
      <p>
        Currently, Subhauler.com exists as a managed digital asset. We do not collect personally identifiable information (PII) 
        from general visitors, except where explicitly provided through the Secure Gateway for registry inquiries.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">2. Registry Verification</h2>
      <p>
        When you use the Verification Gate, we process your input solely to establish an authenticated inquiry link. 
        This data is encrypted using standard SSL/TLS protocols and is restricted to authorized administrative systems.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">3. Strategic Persistence</h2>
      <p>
        We do not sell, trade, or transfer your administrative metadata to outside parties. 
        Your inquiry details are retained only for the duration of the asset acquisition process.
      </p>

      <div className="mt-20 p-8 bg-slate-50 rounded-3xl border border-slate-100 italic">
        "Trust is the primary currency of the intermodal network."
      </div>
    </div>
  );
};

export default Privacy;
