import React from 'react';
import { ShoppingCart, Store, Search, ChevronDown } from 'lucide-react';

const Navbar = ({ tenant, cartCount = 0, onOpenTenantSwitcher }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg"
              style={{ backgroundColor: tenant.accent + '22', color: tenant.accent }}
              aria-hidden
            >
              <Store size={18} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-slate-500">Multi‑Tenant</span>
              <span className="font-semibold text-slate-900">{tenant.name} Store</span>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-6">
            <label className="relative w-full">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                <Search size={18} />
              </span>
              <input
                type="text"
                placeholder={`Search in ${tenant.name}...`}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-200"
                readOnly
                onClick={onOpenTenantSwitcher}
              />
            </label>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenTenantSwitcher}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 text-sm hover:bg-slate-50"
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: tenant.accent }} />
              <span>{tenant.name}</span>
              <ChevronDown size={16} />
            </button>
            <button
              className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 hover:bg-slate-50"
              aria-label="Cart"
            >
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-slate-900 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
