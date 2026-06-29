import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, ShieldAlert } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { getCartCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: "${searchQuery}" (Search simulation)`);
  };

  return (
    <nav className="glassmorphism-header sticky top-0 z-50 px-4 py-3 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-orbitron text-xl font-black uppercase tracking-wider text-white">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-cyber-cyan to-cyber-pink shadow-[0_0_15px_rgba(0,240,255,0.4)]">
            <span className="text-sm font-bold text-cyber-bg-dark">AP</span>
          </span>
          APEX<span className="text-cyber-neon-cyan">GEAR</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 font-outfit text-sm font-medium tracking-wide md:flex">
          <a href="#explore" className="text-slate-300 transition-colors duration-200 hover:text-cyber-neon-cyan">Products</a>
          <a href="#pro-usage" className="text-slate-300 transition-colors duration-200 hover:text-cyber-neon-cyan">Pro Teams</a>
          <a href="#spotlight" className="text-slate-300 transition-colors duration-200 hover:text-cyber-neon-cyan">Customizer</a>
          <a href="#bundle" className="text-slate-300 transition-colors duration-200 hover:text-cyber-neon-cyan">Offers</a>
          <a href="#compare" className="text-slate-300 transition-colors duration-200 hover:text-cyber-neon-cyan">Specs</a>
        </div>

        {/* Search, Cart and Menu Buttons */}
        <div className="flex items-center gap-4">
          {/* Desktop Search Bar */}
          <form onSubmit={handleSearchSubmit} className="relative hidden max-w-xs md:block">
            <input
              type="text"
              placeholder="Search esports gear..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-48 rounded-full border border-slate-700 bg-slate-900/50 py-1.5 pl-4 pr-10 text-xs text-white placeholder-slate-400 outline-none transition-all duration-300 focus:w-60 focus:border-cyber-neon-cyan focus:ring-1 focus:ring-cyber-neon-cyan focus:shadow-[0_0_10px_rgba(0,240,255,0.2)]"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyber-neon-cyan">
              <Search className="h-4 w-4" />
            </button>
          </form>

          {/* Cart Icon */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="group relative flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700/50 bg-slate-900/40 text-slate-300 transition-all duration-300 hover:border-cyber-neon-cyan hover:text-cyber-neon-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
            {getCartCount() > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-cyber-pink text-[10px] font-bold text-white shadow-[0_0_10px_rgba(244,63,94,0.6)]">
                {getCartCount()}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700/50 bg-slate-900/40 text-slate-300 hover:border-cyber-neon-cyan hover:text-cyber-neon-cyan md:hidden"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="glassmorphism mt-3 flex flex-col gap-4 rounded-xl p-4 md:hidden animate-in slide-in-from-top duration-300">
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <input
              type="text"
              placeholder="Search gear..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900/60 py-2 pl-4 pr-10 text-sm text-white placeholder-slate-400 outline-none focus:border-cyber-neon-cyan focus:ring-1 focus:ring-cyber-neon-cyan"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyber-neon-cyan">
              <Search className="h-4 w-4" />
            </button>
          </form>
          <div className="flex flex-col gap-3 font-outfit text-sm font-semibold tracking-wide">
            <a
              href="#explore"
              onClick={() => setIsMobileMenuOpen(false)}
              className="border-b border-slate-800 py-2 text-slate-300 hover:text-cyber-neon-cyan"
            >
              Products
            </a>
            <a
              href="#pro-usage"
              onClick={() => setIsMobileMenuOpen(false)}
              className="border-b border-slate-800 py-2 text-slate-300 hover:text-cyber-neon-cyan"
            >
              Pro Teams
            </a>
            <a
              href="#spotlight"
              onClick={() => setIsMobileMenuOpen(false)}
              className="border-b border-slate-800 py-2 text-slate-300 hover:text-cyber-neon-cyan"
            >
              Customizer
            </a>
            <a
              href="#bundle"
              onClick={() => setIsMobileMenuOpen(false)}
              className="border-b border-slate-800 py-2 text-slate-300 hover:text-cyber-neon-cyan"
            >
              Offers
            </a>
            <a
              href="#compare"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 text-slate-300 hover:text-cyber-neon-cyan"
            >
              Specs
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
