import React from 'react';
import { Check } from 'lucide-react';

const TenantSwitcher = ({ tenants, activeId, onChange }) => {
  return (
    <section id="tenants" className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Tenants</h2>
            <p className="text-slate-600 text-sm">Switch to preview brand themes and assortments.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tenants.map((t) => {
            const active = t.id === activeId;
            return (
              <button
                key={t.id}
                onClick={() => onChange(t)}
                className={`relative rounded-xl border p-4 text-left transition-colors ${
                  active ? 'border-slate-900 ring-2 ring-slate-900' : 'border-slate-200 hover:border-slate-300'
                }`}
                style={{ backgroundColor: active ? t.accent + '0D' : 'white' }}
              >
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: t.accent }} />
                  <div>
                    <div className="font-medium text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.tagline}</div>
                  </div>
                </div>
                <div className="mt-3 h-1.5 rounded-full" style={{ background: `linear-gradient(90deg, ${t.gradientFrom}, ${t.gradientTo})` }} />
                {active && (
                  <div className="absolute top-3 right-3 text-slate-900">
                    <Check size={18} />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TenantSwitcher;
