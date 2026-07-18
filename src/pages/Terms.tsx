import { SEO } from "../components/SEO";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-slate-600 prose prose-slate max-w-none">
      <SEO 
        title="Acquisition Terms &amp; Transaction Protocols | Subhauler.com" 
        description="Official operational terms and atomic escrow transfer guidelines governing the inquiry and acquisition of the Subhauler.com digital logistics domain asset."
        keywords="transaction terms, domain transfer terms, escrow guidelines, asset acquisition protocol, subhauler terms, godaddy escrow compliance"
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
                  "name": "Transaction Terms",
                  "item": "https://www.subhauler.com/terms"
                }
              ]
            }
          ]
        }}
      />
      <Breadcrumbs />
      <h1 className="text-4xl font-bold text-slate-900 mb-12">Transaction Terms</h1>
      <p className="text-lg mb-8">
        The following terms govern the inquiry and acquisition of the Subhauler.com digital asset.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">1. Asset Definition</h2>
      <p>
        The asset includes the apex domain (subhauler.com) and all associated registry metadata. 
        Physical infrastructure or fleet assets are not included unless explicitly negotiated during the partnership stage.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">2. Transfer Protocols</h2>
      <p>
        All transfers are handled via certified escrow services (e.g., GoDaddy Premium Escrow) to ensure 
        atomic exchange of funds and DNS control.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">3. Regulatory Compliance</h2>
      <p>
        Buyers are responsible for ensuring that their use of the domain complies with regional logistics and 
        transportation trade regulations.
      </p>

      <div className="mt-20 text-xs font-bold text-slate-400 uppercase tracking-widest">
        Last Updated: Q2 2026 // Operational Status: Nominal
      </div>
    </div>
  );
};

export default Terms;
