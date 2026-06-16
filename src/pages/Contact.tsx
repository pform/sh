import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { ContainerFrame } from "../components/ContainerFrame";
import { VerificationGate } from "../components/VerificationGate";
import { SEO } from "../components/SEO";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 pb-40">
      <SEO 
        title="Contact Administrative Registry" 
        description="Get in touch for strategic acquisition inquiries, direct partnerships, or technical integration discussions regarding the Subhauler.com asset."
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
                  "name": "Contact",
                  "item": "https://www.subhauler.com/contact"
                }
              ]
            }
          ]
        }}
      />
      <Breadcrumbs />
      <div className="max-w-3xl mb-24">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
          Establish Contact.
        </h1>
        <p className="text-xl text-slate-500 leading-relaxed">
          For strategic acquisition inquiries, direct partnerships, or technical integration discussions.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <section className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-8">Asset Inquiry</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <Mail className="text-blue-600 mb-4" size={24} />
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Administrative Contact</div>
                  <div className="font-bold text-slate-900">GoDaddy Escrow Authorized</div>
                </div>
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <MessageSquare className="text-emerald-500 mb-4" size={24} />
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Asset Status</div>
                  <div className="font-bold text-slate-900">Verified for Transfer</div>
                </div>
              </div>
            </div>

            <ContainerFrame title="Logistics Routing">
              <p className="text-slate-500 mb-8 leading-relaxed">
                Our administrative points are distributed across major logistics hubs to ensure secure communication with global shipping partners.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-slate-300" />
                  <div>
                    <div className="font-bold text-slate-900">Strategic HQ</div>
                    <div className="text-sm text-slate-500">Digital Asset Management</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="text-slate-300" />
                  <div>
                    <div className="font-bold text-slate-900">Global Registry</div>
                    <div className="text-sm text-slate-500">Escrow Secured</div>
                  </div>
                </div>
              </div>
            </ContainerFrame>
          </section>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Secure Gateway.</h2>
              <p className="text-slate-400 mb-10 leading-relaxed">
                Verification is required to access sensitive administrative contact data and historical registry metadata.
              </p>
              <VerificationGate />
            </div>
            {/* Visual fluff for "Maze/Network" feel */}
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Send size={120} className="-rotate-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
