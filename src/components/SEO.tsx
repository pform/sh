import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  type?: string;
  schema?: object;
}

export const SEO = ({ 
  title = "Subhauler.com | Premium Logistics & Freight Domain Asset", 
  description = "Acquire Subhauler.com - the definitive digital asset for modern logistics, intermodal freight coordination, and regional shipping networks. Available for immediate transfer.",
  keywords = "subhauler, logistics domain, freight brokerage, shipping network, intermodal transport, trucking asset, subhauler coordinate, freight shipping software, shipping carrier portal",
  canonical = "https://www.subhauler.com",
  type = "website",
  schema
}: SEOProps) => {
  const siteTitle = title.includes("Subhauler.com") ? title : `${title} | Subhauler.com`;

  const defaultSchema = {
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
        "description": description,
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
  };

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      
      {/* Search Engine Optimization */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#2563eb" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Subhauler.com" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
};
