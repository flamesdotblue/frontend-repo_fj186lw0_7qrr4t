import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TenantSwitcher from './components/TenantSwitcher';
import ProductGrid from './components/ProductGrid';

const TENANTS = [
  {
    id: 'consumer',
    name: 'Aurora',
    tagline: 'Electronics & gadgets',
    accent: '#6366F1',
    gradientFrom: '#6366F1',
    gradientTo: '#22D3EE',
  },
  {
    id: 'fashion',
    name: 'Velvet',
    tagline: 'Style & apparel',
    accent: '#E11D48',
    gradientFrom: '#F43F5E',
    gradientTo: '#FB7185',
  },
  {
    id: 'home',
    name: 'Haven',
    tagline: 'Home & living',
    accent: '#10B981',
    gradientFrom: '#34D399',
    gradientTo: '#10B981',
  },
  {
    id: 'outdoor',
    name: 'Summit',
    tagline: 'Outdoor & adventure',
    accent: '#0EA5E9',
    gradientFrom: '#38BDF8',
    gradientTo: '#0EA5E9',
  },
];

function App() {
  const [activeTenant, setActiveTenant] = useState(TENANTS[0]);
  const [cartCount] = useState(2);

  const onOpenTenantSection = () => {
    const el = document.getElementById('tenants');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const bgStyle = useMemo(() => ({
    backgroundImage: `radial-gradient(1200px 600px at 10% -10%, ${activeTenant.gradientFrom}11, transparent 60%), radial-gradient(1200px 600px at 90% -20%, ${activeTenant.gradientTo}11, transparent 60%)`,
  }), [activeTenant]);

  return (
    <div className="min-h-screen bg-white text-slate-900" style={bgStyle}>
      <Navbar tenant={activeTenant} cartCount={cartCount} onOpenTenantSwitcher={onOpenTenantSection} />
      <main>
        <Hero tenant={activeTenant} />
        <TenantSwitcher tenants={TENANTS} activeId={activeTenant.id} onChange={setActiveTenant} />
        <ProductGrid tenant={activeTenant} />
      </main>
      <footer className="border-t border-slate-200 py-8 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Multi‑Tenant Commerce Platform</p>
          <div className="flex items-center gap-3 text-sm">
            <a className="text-slate-600 hover:text-slate-900" href="#products">Products</a>
            <span className="text-slate-300">•</span>
            <a className="text-slate-600 hover:text-slate-900" href="#tenants">Tenants</a>
            <span className="text-slate-300">•</span>
            <a className="text-slate-600 hover:text-slate-900" href="#">Docs</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
