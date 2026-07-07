import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ShieldCheck, Globe2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AeroBackground } from "./AeroBackground";
import { GODADDY_URL } from "../constants";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { path: "/services", label: "Features" },
    { path: "/solutions", label: "Market Value" },
    { path: "/coverage", label: "Coverage Nodes" },
    { path: "/glossary", label: "Glossary" },
    { path: "/other-assets", label: "Other Assets" },
    { path: "/about", label: "How to Buy" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-slate-50/50">
      <AeroBackground />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 transition-all duration-300">
        {/* Subtle top border bar with premium details */}
        <div className="bg-slate-900 text-white/80 py-2 px-6 text-center text-xs font-semibold tracking-wider flex items-center justify-center gap-4 border-b border-slate-800/20">
          <span className="flex items-center gap-1"><ShieldCheck size={13} className="text-emerald-400" /> GoDaddy Escrow Verified</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
          <span className="flex items-center gap-1 text-blue-300"><Globe2 size={13} /> Immediate Domain Push Available</span>
        </div>

        {/* Main Navbar */}
        <div className="bg-white/70 backdrop-blur-xl border-b border-slate-100/80 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group shrink-0">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-600 flex items-center justify-center text-white font-extrabold rounded-lg md:rounded-xl shadow-md group-hover:shadow-lg group-hover:scale-[1.02] transition-all duration-300">
                S
              </div>
              <span className="font-bold tracking-tight transition-transform group-hover:translate-x-0.5 duration-300">
                <span className="text-slate-900 font-extrabold text-lg md:text-xl lg:text-2xl">Sub</span>
                <span className="text-blue-600 font-extrabold text-lg md:text-xl lg:text-2xl">hauler</span>
                <span className="text-slate-400 font-normal text-xs md:text-sm lg:text-base">.com</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-2.5 py-2 rounded-full text-xs lg:text-sm font-semibold tracking-tight whitespace-nowrap transition-all duration-300 ${
                      active
                        ? "text-blue-600 bg-blue-50/80 border border-blue-100/50"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 border border-transparent"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-1 left-2.5 right-2.5 h-0.5 bg-blue-500 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
              
              <div className="hidden lg:block h-6 w-px bg-slate-200/80 mx-2" />

              <a
                href={GODADDY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-2 md:px-4 md:py-2.5 rounded-full text-xs lg:text-sm font-bold shadow-sm hover:shadow-md hover:scale-[1.02] whitespace-nowrap transition-all duration-300 group ml-1"
              >
                Acquire Domain
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 md:hidden text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 rounded-xl transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden border-b border-slate-200 bg-white shadow-xl overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-4">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`px-5 py-3.5 rounded-2xl text-base font-bold flex items-center justify-between transition-all ${
                        active
                          ? "bg-blue-50/80 text-blue-600 border border-blue-100/50"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-950 border border-transparent"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight size={16} className={`opacity-40 transition-transform ${active ? "translate-x-1 opacity-100" : ""}`} />
                    </Link>
                  );
                })}

                <div className="h-px bg-slate-100 my-2" />

                <a
                  href={GODADDY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl text-base font-bold shadow-md shadow-blue-600/10 transition-all duration-200"
                >
                  Buy Subhauler.com
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="min-h-[calc(100vh-120px)]">
        {children}
      </main>

      <footer className="bg-slate-50 border-t border-slate-100 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-slate-950 to-blue-700 flex items-center justify-center text-white font-bold rounded-lg leading-none">S</div>
                <span className="font-bold text-xl tracking-tight">
                  <span className="text-slate-900">Sub</span>
                  <span className="text-blue-600">hauler</span>
                  <span className="text-slate-400">.com</span>
                </span>
              </Link>
              <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                Managed digital asset for integrated freight networks. Transferred securely through major registrar escrow services.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-6">Domain Purchase</h5>
              <div className="flex flex-col gap-4 text-sm text-slate-500">
                <a href={GODADDY_URL} className="hover:text-blue-600 transition-colors font-bold text-slate-900">Buy via GoDaddy</a>
                <Link to="/services" className="hover:text-blue-600 transition-colors">Why Subhauler.com?</Link>
                <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact Information</Link>
                <Link to="/other-assets" className="hover:text-blue-600 transition-colors">Other Assets</Link>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-6">Registry &amp; SEO</h5>
              <div className="flex flex-col gap-4 text-sm text-slate-500">
                <Link to="/coverage" className="hover:text-blue-600 transition-colors">Corridor Coverage (40 Nodes)</Link>
                <Link to="/glossary" className="hover:text-blue-600 transition-colors">Broker Glossary (40 Terms)</Link>
                <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-blue-600 transition-colors">Transaction Terms</Link>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">XML Sitemap</a>
                <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">AI Crawler Rules</a>
                <span className="cursor-default text-xs text-slate-400 font-mono">Asset ID: SHL-401-NET</span>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-xs font-medium text-slate-400">
              &copy; {new Date().getFullYear()} Subhauler.com. All operations restricted.
            </span>
            <div className="text-xs font-medium text-slate-400">
              Site by <a href="https://feelize.com/start" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-slate-600 font-semibold transition-colors">Feelize</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
