import { ReactNode, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AeroBackground } from "./AeroBackground";
import { GODADDY_URL } from "../constants";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white">
      <AeroBackground />

      {/* Navigation */}
      <nav className="border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-gradient-to-br from-slate-950 to-blue-700 flex items-center justify-center text-white font-bold rounded-lg shadow-lg group-hover:scale-105 transition-transform">S</div>
            <span className="font-bold text-xl tracking-tight">
              <span className="text-slate-900">Sub</span>
              <span className="text-blue-600">hauler</span>
              <span className="text-slate-400">.com</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/services" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Domain Features</Link>
            <Link to="/solutions" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Market Value</Link>
            <Link to="/about" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">How to Buy</Link>
            <a 
              href={GODADDY_URL} 
              target="_blank" 
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-500 transition-all shadow-md hover:shadow-xl"
            >
              Buy Subhauler.com
            </a>
          </div>
        </div>
      </nav>

      <main className="min-h-[calc(100vh-80px)]">
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
              <h5 className="font-bold text-slate-900 mb-6">Legal</h5>
              <div className="flex flex-col gap-4 text-sm text-slate-500">
                <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-blue-600 transition-colors">Transaction Terms</Link>
                <span className="cursor-default">Asset ID: SHL-401-NET</span>
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
