import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Truck, Package, Boxes, Ship, Anchor, Database, Share2, MapPin, Shield } from "lucide-react";
import { SEO } from "../components/SEO";
import { SEO_KEYWORDS } from "../constants";
import { Breadcrumbs } from "../components/Breadcrumbs";

const services = [
  {
    title: "Subhaul Coordination",
    description: "Advanced networking protocols for connecting regional subhaulers with master freight brokers.",
    icon: Truck,
    slug: "subhauler-services",
    color: "bg-blue-500"
  },
  {
    title: "Freight Shipping",
    description: "High-density cargo transport management and intermodal shipping solutions.",
    icon: Ship,
    slug: "freight-shipping",
    color: "bg-emerald-500"
  },
  {
    title: "Logistics Networking",
    description: "Digital infrastructure for supply chain transparency and real-time asset tracking.",
    icon: Database,
    slug: "logistics-networking",
    color: "bg-orange-500"
  },
  {
    title: "Container Management",
    description: "Optimized storage and transition strategies for shipping container fleets.",
    icon: Boxes,
    slug: "shipping-containers",
    color: "bg-purple-500"
  },
  {
    title: "Carrier Management",
    description: "Unified platforms for carrier compliance, vetting, and performance metrics.",
    icon: Shield,
    slug: "carrier-management",
    color: "bg-red-500"
  },
  {
    title: "Last Mile Logistics",
    description: "Precision coordination for final delivery stages in urban and industrial zones.",
    icon: MapPin,
    slug: "last-mile-logistics",
    color: "bg-sky-500"
  },
  {
    title: "Intermodal Transport",
    description: "Seamless transitions between rail, sea, and road transport modes.",
    icon: Anchor,
    slug: "intermodal-transport",
    color: "bg-indigo-500"
  },
  {
    title: "Brokerage Services",
    description: "Algorithmic matching for freight brokers and owner-operators.",
    icon: Share2,
    slug: "freight-brokerage-services",
    color: "bg-amber-500"
  }
];

export const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <SEO 
        title="Digital Logistics Ecosystem | Subhauler.com Features" 
        description="Comprehensive overview of the logistics vertical markets supported by Subhauler.com. Covering subhaul coordination, intermodal transport, freight brokerage, and carrier management."
        keywords="logistics ecosystem, freight network, subhauler features, shipping technology, carrier compliance, last mile logistics details"
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
                  "name": "Features",
                  "item": "https://www.subhauler.com/services"
                }
              ]
            },
            {
              "@type": "ItemList",
              "name": "Logistics Ecosystem Services",
              "description": "List of core logistics services supported by Subhauler.com asset.",
              "numberOfItems": services.length,
              "itemListElement": services.map((s, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "url": `https://www.subhauler.com/services/${s.slug}`,
                "name": s.title
              }))
            }
          ]
        }}
      />
      <Breadcrumbs />
      <div className="max-w-3xl mb-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">Logistics Ecosystem.</h1>
        <p className="text-xl text-slate-500 leading-relaxed">
          Explore the vertical markets and specialized services supported by the Subhauler.com digital infrastructure.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
        {services.map((service, i) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link 
              to={`/services/${service.slug}`}
              className="block p-8 border border-slate-100 bg-white rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className={`w-12 h-12 ${service.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-current/10`}>
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {service.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20">
        <h2 className="text-3xl font-bold mb-12">Search Categories</h2>
        <div className="flex flex-wrap gap-4">
          {SEO_KEYWORDS.map(k => (
            <Link 
              key={k}
              to={`/services/${k.toLowerCase().replace(/ /g, '-')}`}
              className="px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 transition-all text-sm"
            >
              {k}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
