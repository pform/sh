import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const PATH_MAP: Record<string, string> = {
  "services": "Domain Features",
  "solutions": "Market Value",
  "about": "How to Buy",
  "contact": "Contact Information",
  "privacy": "Privacy & Legal",
  "terms": "Transaction Terms",
  "other-assets": "Other Assets"
};

const SERVICE_SLUGS: Record<string, string> = {
  "subhauler-services": "Subhaul Coordination",
  "freight-shipping": "Freight Shipping",
  "logistics-networking": "Logistics Networking",
  "shipping-containers": "Container Management",
  "carrier-management": "Carrier Management",
  "last-mile-logistics": "Last Mile Logistics",
  "intermodal-transport": "Intermodal Transport",
  "freight-brokerage-services": "Brokerage Services"
};

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  customItems?: BreadcrumbItem[];
}

export const Breadcrumbs = ({ customItems }: BreadcrumbsProps) => {
  const location = useLocation();

  // If custom items are provided, render them explicitly
  if (customItems && customItems.length > 0) {
    return (
      <nav 
        aria-label="Breadcrumb" 
        id="breadcrumbs-navigation" 
        className="flex items-center gap-2 py-4 px-1 mb-8 text-xs font-medium text-slate-400 select-none overflow-x-auto whitespace-nowrap scrollbar-none"
      >
        {customItems.map((item, index) => {
          const last = index === customItems.length - 1;
          const isHome = index === 0;

          return (
            <div key={item.path} className="flex items-center gap-2" id={`breadcrumb-item-custom-${index}`}>
              {!isHome && <ChevronRight className="w-3.5 h-3.5 text-slate-300" />}
              {last ? (
                <span className="text-slate-800 font-semibold" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link 
                  to={item.path} 
                  className={`flex items-center gap-1.5 transition-colors duration-200 ${
                    isHome ? "hover:text-blue-600 text-slate-400" : "hover:text-blue-600"
                  }`}
                >
                  {isHome && <Home className="w-3.5 h-3.5" />}
                  <span>{item.label}</span>
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    );
  }

  const pathnames = location.pathname.split("/").filter((x) => x);

  // Home route doesn't need a breadcrumb rendered below itself
  if (pathnames.length === 0) return null;

  return (
    <nav 
      aria-label="Breadcrumb" 
      id="breadcrumbs-navigation" 
      className="flex items-center gap-2 py-4 px-1 mb-8 text-xs font-medium text-slate-400 select-none overflow-x-auto whitespace-nowrap scrollbar-none"
    >
      <Link 
        to="/" 
        className="flex items-center gap-1.5 hover:text-blue-600 text-slate-400 transition-colors duration-200"
        id="breadcrumb-home-link"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        
        // Resolve friendly labels
        let label = PATH_MAP[value] || SERVICE_SLUGS[value];
        if (!label) {
          // Standard title-case fallback for unresolved params
          label = value
            .replace(/-|_/g, " ")
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        }

        return (
          <div key={to} className="flex items-center gap-2" id={`breadcrumb-item-${index}`}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            {last ? (
              <span className="text-slate-800 font-semibold" aria-current="page">
                {label}
              </span>
            ) : (
              <Link 
                to={to} 
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};
