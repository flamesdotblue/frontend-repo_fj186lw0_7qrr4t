import React, { useMemo, useState } from 'react';
import { Star } from 'lucide-react';

const BASE_PRODUCTS = [
  { id: 'p1', name: 'Aurora Headphones', tenant: 'consumer', price: 129, rating: 4.6, imageHue: 210 },
  { id: 'p2', name: 'Nimbus Smart Watch', tenant: 'consumer', price: 199, rating: 4.4, imageHue: 280 },
  { id: 'p3', name: 'Stellar Sneakers', tenant: 'fashion', price: 89, rating: 4.7, imageHue: 330 },
  { id: 'p4', name: 'Silk-Line Shirt', tenant: 'fashion', price: 59, rating: 4.2, imageHue: 20 },
  { id: 'p5', name: 'Barista Pro', tenant: 'home', price: 149, rating: 4.8, imageHue: 38 },
  { id: 'p6', name: 'Aero Purifier', tenant: 'home', price: 179, rating: 4.5, imageHue: 140 },
  { id: 'p7', name: 'Summit Backpack', tenant: 'outdoor', price: 99, rating: 4.3, imageHue: 190 },
  { id: 'p8', name: 'Trailblazer Tent', tenant: 'outdoor', price: 229, rating: 4.9, imageHue: 90 },
];

const ProductCard = ({ product, accent }) => {
  return (
    <div className="group rounded-xl border border-slate-200 overflow-hidden bg-white hover:shadow-md transition-shadow">
      <div
        className="aspect-square w-full"
        style={{ backgroundColor: `${accent}1A`, filter: `hue-rotate(${product.imageHue}deg)` }}
      />
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4 className="font-medium text-slate-900 line-clamp-1">{product.name}</h4>
            <div className="mt-1 text-sm text-slate-500 flex items-center gap-1">
              <Star size={14} className="text-amber-400 fill-amber-400" />
              <span>{product.rating}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="font-semibold text-slate-900">${product.price}</div>
            <button
              className="mt-1 text-xs px-2.5 py-1 rounded-md border border-slate-200 hover:bg-slate-50"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = ({ tenant }) => {
  const [query, setQuery] = useState('');

  const products = useMemo(() => {
    return BASE_PRODUCTS.filter((p) => p.tenant === tenant.id && p.name.toLowerCase().includes(query.toLowerCase()));
  }, [tenant.id, query]);

  return (
    <section id="products" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Featured products</h3>
            <p className="text-sm text-slate-600">Curated for the {tenant.name} storefront.</p>
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products"
            className="w-56 px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-200"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} accent={tenant.accent} />
          ))}
          {products.length === 0 && (
            <div className="col-span-full text-center text-slate-500 border border-dashed border-slate-300 rounded-xl p-10">
              No products match your search.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
