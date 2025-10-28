import React from 'react';
import { Rocket } from 'lucide-react';

const Hero = ({ tenant }) => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(135deg, ${tenant.gradientFrom}, ${tenant.gradientTo})`,
        }}
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full text-xs font-medium border border-slate-200 bg-white/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: tenant.accent }} />
              Multi‑tenant storefront
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Launch branded stores for every audience
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Switch between tenants to instantly preview themes, assortments, and promotions — all within a single platform.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white shadow-sm"
                style={{ background: `linear-gradient(135deg, ${tenant.gradientFrom}, ${tenant.gradientTo})` }}
              >
                <Rocket size={16} />
                Explore products
              </a>
              <a
                href="#tenants"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50"
              >
                Change tenant
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div
                className="h-1.5"
                style={{ background: `linear-gradient(90deg, ${tenant.gradientFrom}, ${tenant.gradientTo})` }}
              />
              <div className="p-6 grid grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="rounded-xl border border-slate-200 p-3">
                    <div
                      className="h-24 w-full rounded-lg mb-3"
                      style={{ backgroundColor: tenant.accent + '22' }}
                    />
                    <div className="h-3 w-3/4 bg-slate-200 rounded mb-2" />
                    <div className="h-3 w-1/2 bg-slate-100 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
