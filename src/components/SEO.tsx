import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
  canonical,
  type = "website",
  schema
}: SEOProps) => {
  const location = useLocation();
  const rawPath = location.pathname;
  const resolvedCanonical = canonical || `https://www.subhauler.com${rawPath === "/" ? "" : rawPath.replace(/\/$/, "")}`;
  const siteTitle = title.includes("Subhauler.com") ? title : `${title} | Subhauler.com`;

  useEffect(() => {
    // Safely update document title
    document.title = siteTitle;

    // Safely update or create description meta tag
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', description);

    // Safely update or create keywords meta tag
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', keywords);

    // Safely update or create canonical link tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', resolvedCanonical);

    // Safely update Open Graph description/title/url
    const ogProperties = {
      'og:title': siteTitle,
      'og:description': description,
      'og:url': resolvedCanonical,
      'og:type': type,
      'og:site_name': "Subhauler.com",
      'og:locale': "en_US"
    };

    Object.entries(ogProperties).forEach(([prop, val]) => {
      let ogMeta = document.querySelector(`meta[property="${prop}"]`);
      if (!ogMeta) {
        ogMeta = document.createElement('meta');
        ogMeta.setAttribute('property', prop);
        document.head.appendChild(ogMeta);
      }
      ogMeta.setAttribute('content', val);
    });

    // Safely update Twitter card meta tags
    const twitterProperties = {
      'twitter:card': "summary_large_image",
      'twitter:title': siteTitle,
      'twitter:description': description
    };

    Object.entries(twitterProperties).forEach(([name, val]) => {
      let twitterMeta = document.querySelector(`meta[name="${name}"]`);
      if (!twitterMeta) {
        twitterMeta = document.createElement('meta');
        twitterMeta.setAttribute('name', name);
        document.head.appendChild(twitterMeta);
      }
      twitterMeta.setAttribute('content', val);
    });

    // Handle JSON-LD schema injection in a safe way that doesn't trigger CSP blockages in active render cycles
    const existingSchemaScript = document.getElementById('seo-jsonld-schema');
    if (existingSchemaScript) {
      existingSchemaScript.remove();
    }

    try {
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
            "description": "Enterprise digital brand and systems architecture for coordinating regional subhaulers and freight brokerage logistics."
          }
        ]
      };

      const script = document.createElement('script');
      script.id = 'seo-jsonld-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema || defaultSchema);
      document.head.appendChild(script);
    } catch (e) {
      console.warn("Failed to inject JSON-LD schema", e);
    }

  }, [siteTitle, description, keywords, resolvedCanonical, type, schema]);

  return null;
};
