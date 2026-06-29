import React, { useState } from 'react';
import { ShoppingCart, Star, HelpCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const products = [
  // Mice
  {
    id: 'mouse-apex-v1',
    name: 'Apex-V1 Wireless Mouse',
    category: 'Mice',
    price: 129.99,
    rating: 4.9,
    reviews: 142,
    specs: { primary: '49g Weight', secondary: '8000Hz Polling', detail: 'PixArt 3395 Sensor' },
    badge: 'Pro Choice',
    glow: 'glow-cyan'
  },
  {
    id: 'mouse-apex-lite',
    name: 'Apex-Lite Wired Mouse',
    category: 'Mice',
    price: 69.99,
    rating: 4.6,
    reviews: 84,
    specs: { primary: '55g Weight', secondary: '1000Hz Polling', detail: 'PixArt 3335 Sensor' },
    glow: 'glow-cyan'
  },
  // Keyboards
  {
    id: 'kbd-pro-keys',
    name: 'Pro-Keys TKL Mechanical',
    category: 'Keyboards',
    price: 179.99,
    rating: 4.8,
    reviews: 96,
    specs: { primary: 'Hall Effect', secondary: 'Rapid Trigger', detail: 'Aluminum Top Plate' },
    badge: 'Trending',
    glow: 'glow-pink'
  },
  {
    id: 'kbd-pro-mini',
    name: 'Pro-Keys Mini 60%',
    category: 'Keyboards',
    price: 119.99,
    rating: 4.5,
    reviews: 62,
    specs: { primary: 'Gateron Yellow', secondary: 'Hot-Swappable', detail: 'PBT Double-Shot' },
    glow: 'glow-pink'
  },
  // Audio
  {
    id: 'audio-soundpro-x',
    name: 'SoundPro X Spatial Headset',
    category: 'Audio',
    price: 159.99,
    rating: 4.9,
    reviews: 115,
    specs: { primary: 'Beryllium Drivers', secondary: 'Spatial Audio', detail: 'Active Noise Canceling' },
    badge: 'New Drop',
    glow: 'glow-green'
  },
  {
    id: 'audio-soundpro-buds',
    name: 'SoundPro low-latency Buds',
    category: 'Audio',
    price: 89.99,
    rating: 4.4,
    reviews: 39,
    specs: { primary: '25ms Latency', secondary: 'Bluetooth 5.3', detail: 'Dual Noise-Canceling Mics' },
    glow: 'glow-green'
  },
  // Seating
  {
    id: 'seat-velo-240',
    name: 'Velo-240 Ergonomic Chair',
    category: 'Seating',
    price: 349.99,
    rating: 4.7,
    reviews: 58,
    specs: { primary: '4D Armrests', secondary: 'Lumbar Support', detail: 'Breathable Elastomer Mesh' },
    glow: 'glow-cyan'
  },
  // Monitors
  {
    id: 'monitor-swiftsync-360',
    name: 'SwiftSync 360Hz Monitor',
    category: 'Monitors',
    price: 399.99,
    rating: 4.8,
    reviews: 73,
    specs: { primary: '360Hz IPS Panel', secondary: '0.5ms GtG Response', detail: 'G-Sync Compatible' },
    badge: 'Elite Grade',
    glow: 'glow-pink'
  }
];

const categories = ['All', 'Mice', 'Keyboards', 'Audio', 'Seating', 'Monitors'];

const renderProductImage = (product) => {
  if (product.category === 'Mice') {
    return (
      <img
        src={`${import.meta.env.BASE_URL}images/gaming_mouse_hero.png`}
        alt={product.name}
        className="max-h-24 object-contain transition-transform duration-300 group-hover:scale-108"
      />
    );
  }
  if (product.category === 'Keyboards') {
    return (
      <img
        src={`${import.meta.env.BASE_URL}images/gaming_keyboard_spotlight.png`}
        alt={product.name}
        className="max-h-24 object-contain transition-transform duration-300 group-hover:scale-108 rounded-lg"
      />
    );
  }
  if (product.category === 'Audio') {
    return (
      <svg className="h-14 w-14 text-cyber-neon-green drop-shadow-[0_0_12px_rgba(0,255,135,0.4)] transition-transform duration-300 group-hover:scale-108" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 14c0-4.97 4.03-9 9-9s9 4.03 9 9" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="12" width="4" height="6" rx="2" fill="currentColor" opacity="0.8" />
        <rect x="18" y="12" width="4" height="6" rx="2" fill="currentColor" opacity="0.8" />
        <path d="M6 15h1m10 0h1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (product.category === 'Seating') {
    return (
      <svg className="h-14 w-14 text-cyber-neon-cyan drop-shadow-[0_0_12px_rgba(0,240,255,0.4)] transition-transform duration-300 group-hover:scale-108" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="2" width="8" height="3" rx="1.5" fill="currentColor" opacity="0.3" />
        <path d="M6 6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V6z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 11v3h2m14-3v3h-2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="5" y="17" width="14" height="2" rx="1" fill="currentColor" opacity="0.5" />
        <path d="M12 19v3M9 22h6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (product.category === 'Monitors') {
    return (
      <svg className="h-14 w-14 text-cyber-neon-pink drop-shadow-[0_0_12px_rgba(255,0,127,0.4)] transition-transform duration-300 group-hover:scale-108" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="13" rx="2" fill="currentColor" opacity="0.1" />
        <rect x="2" y="3" width="20" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 6h12v4H6z" fill="currentColor" opacity="0.2" />
        <path d="M12 16v4M8 21h8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return null;
};

const ProductExplorer = () => {
  const [activeTab, setActiveTab] = useState('All');
  const { addToCart } = useCart();

  const filteredProducts = activeTab === 'All'
    ? products
    : products.filter(p => p.category === activeTab);

  return (
    <section id="explore" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div className="text-left">
          <h2 className="font-orbitron text-xs font-bold uppercase tracking-widest text-cyber-neon-cyan mb-2">
            ESPORTS TOURNAMENT INVENTORY
          </h2>
          <p className="font-orbitron text-2xl font-bold text-white md:text-3xl">
            EXPLORE PRO-SERIES GEAR
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 font-outfit text-xs font-semibold uppercase tracking-wider">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`rounded-lg px-4 py-2 border transition-all duration-300 ${
                activeTab === cat
                  ? 'border-cyber-cyan bg-cyber-cyan/15 text-cyber-neon-cyan shadow-[0_0_15px_rgba(0,240,255,0.15)] font-bold'
                  : 'border-slate-800 bg-slate-900/20 text-slate-400 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={`glassmorphism group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 p-5 transition-all duration-300 hover:-translate-y-1.5 ${product.glow || 'glow-cyan'}`}
          >
            {/* Top Row: Badge & Stars */}
            <div className="flex items-center justify-between gap-2">
              {product.badge ? (
                <span className="rounded-md bg-slate-900/80 border border-slate-800 px-2 py-0.5 font-orbitron text-[10px] font-bold uppercase tracking-wider text-cyber-neon-cyan">
                  {product.badge}
                </span>
              ) : (
                <span className="text-[10px] uppercase font-orbitron text-slate-500 tracking-wider">
                  {product.category}
                </span>
              )}
              <div className="flex items-center gap-1 font-outfit text-xs text-amber-400">
                <Star className="h-3.5 w-3.5 fill-current" />
                <span>{product.rating}</span>
                <span className="text-[10px] text-slate-500">({product.reviews})</span>
              </div>
            </div>

            {/* Product Image Frame */}
            <div className="h-32 my-4 flex items-center justify-center relative overflow-hidden rounded-xl bg-slate-950/40 border border-slate-900/60 shadow-inner">
              {renderProductImage(product)}
              
              {/* Corner accent details for gamer tech feel */}
              <div className="absolute top-1.5 left-2 font-orbitron text-[7px] tracking-widest text-slate-600 select-none">SYS_DRV_OK</div>
              <div className="absolute bottom-1.5 right-2 h-1.5 w-1.5 rounded-full bg-slate-800 border border-slate-700"></div>
            </div>

            {/* Product Body */}
            <div className="my-3 text-left">
              <h3 className="font-orbitron text-sm font-bold text-white leading-tight min-h-[40px] group-hover:text-cyber-neon-cyan transition-colors duration-200">
                {product.name}
              </h3>
              
              {/* Product Specifications */}
              <div className="mt-4 flex flex-col gap-2 rounded-lg bg-slate-950/40 p-3 border border-slate-900">
                <div className="flex items-center justify-between text-2xs font-outfit gap-2">
                  <span className="text-slate-400">Performance</span>
                  <span className="font-bold text-white whitespace-nowrap">{product.specs.primary}</span>
                </div>
                <div className="flex items-center justify-between text-2xs font-outfit gap-2">
                  <span className="text-slate-400">Latency</span>
                  <span className="font-bold text-white whitespace-nowrap">{product.specs.secondary}</span>
                </div>
                <div className="border-t border-slate-800/50 mt-1 pt-1.5 text-3xs font-orbitron tracking-wide text-slate-500 uppercase">
                  {product.specs.detail}
                </div>
              </div>
            </div>

            {/* Bottom Row: Price & Buy Button */}
            <div className="flex items-center justify-between border-t border-slate-800/50 pt-4 mt-auto">
              <div>
                <span className="text-3xs uppercase font-orbitron tracking-widest text-slate-500">MSRP USD</span>
                <p className="font-orbitron text-base font-black text-white">${product.price}</p>
              </div>

              <button
                onClick={() => addToCart(product, 1, { color: 'Neon Cyan (Standard)', feet: 'PTFE Glides' })}
                className="group/btn flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 hover:bg-cyber-cyan border border-slate-800 hover:border-cyber-cyan text-slate-300 hover:text-cyber-bg-dark transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] active:scale-95"
                title="Add to Cart"
              >
                <ShoppingCart className="h-4 w-4 transition-transform duration-200 group-hover/btn:scale-110" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductExplorer;
