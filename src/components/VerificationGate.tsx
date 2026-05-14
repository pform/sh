import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Fingerprint, Loader2, Mail, ArrowRight } from "lucide-react";
import { CONTACT_EMAIL } from "../constants";

export const VerificationGate = () => {
  const [status, setStatus] = useState<'idle' | 'verifying' | 'success'>('idle');

  const startVerification = () => {
    setStatus('verifying');
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  return (
    <div className="bg-white border border-slate-100 p-10 text-center relative overflow-hidden group rounded-3xl shadow-lg">
      <AnimatePresence mode="wait">
        {status === 'idle' && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-white">
              <Fingerprint size={24} />
            </div>
            <div>
              <h4 className="text-2xl font-extrabold tracking-tight text-zinc-900">Secure Access</h4>
              <p className="text-sm text-zinc-500 mt-2 max-w-xs mx-auto">
                Authorized inquiries only. Please complete the verification handshake to reveal administrator contact.
              </p>
            </div>
            <button
              onClick={startVerification}
              className="mt-2 w-full max-w-xs bg-zinc-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center justify-center gap-3"
            >
              Verify Identity <ArrowRight size={14} />
            </button>
          </motion.div>
        )}

        {status === 'verifying' && (
          <motion.div
            key="verifying"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-4 py-8"
          >
            <Loader2 className="animate-spin text-blue-600" size={32} />
            <div className="text-sm text-slate-400 font-medium tracking-tight">
              Verifying credentials...
            </div>
          </motion.div>
        )}

        {status === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-zinc-900">Verification Successful</h4>
              <div className="mt-6 flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Administrative Channel</span>
                <a 
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-2xl md:text-3xl font-extrabold text-zinc-900 hover:text-blue-600 transition-colors underline decoration-2 underline-offset-8"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
