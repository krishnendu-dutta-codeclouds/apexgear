import React, { useState, useEffect } from 'react';
import { Timer, Gift, Flame, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const BundleOffer = () => {
  const { addToCart } = useCart();
  const [timeLeft, setTimeLeft] = useState(27345); // ~7 hours and 35 minutes in seconds
  const [stockRemaining, setStockRemaining] = useState(14);
  const totalStock = 100;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return {
      hours: String(hrs).padStart(2, '0'),
      minutes: String(mins).padStart(2, '0'),
      seconds: String(secs).padStart(2, '0'),
    };
  };

  const time = formatTime(timeLeft);

  const handleBuyBundle = () => {
    const bundleProduct = {
      id: 'bundle-apex-champion',
      name: 'APEX CHAMPION BUNDLE (Mouse + Keyboard + Headset)',
      price: 369.99,
      glow: 'glow-pink',
      badge: 'Bundle Deal'
    };

    addToCart(bundleProduct, 1, {
      selection: 'Pro Edition Bundle (Apex-V1, Pro-Keys TKL, SoundPro X)'
    });

    // Simulate stock reduction when user adds it
    setStockRemaining((prev) => Math.max(1, prev - 1));
  };

  return (
    <section id="bundle" className="py-16 px-4 md:px-8 border-t border-slate-900 max-w-7xl mx-auto">
      <div className="glassmorphism scanline-effect relative rounded-3xl border border-slate-800/80 p-8 md:p-12 overflow-hidden glow-pink">
        {/* Background Glow */}
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyber-pink/15 blur-3xl animate-pulse-slow"></div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center relative z-10">
          {/* Left Column: Offer Details */}
          <div className="lg:col-span-7 text-left flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyber-pink/30 bg-cyber-pink/10 px-4 py-1.5 font-orbitron text-xs font-semibold uppercase tracking-wider text-cyber-neon-pink shadow-[0_0_15px_rgba(244,63,94,0.1)] w-fit">
              <Gift className="h-3.5 w-3.5" />
              Limited Championship Bundle
            </span>

            <h2 className="font-orbitron text-3xl font-extrabold leading-tight text-white md:text-4xl">
              APEX CHAMPION BUNDLE
            </h2>

            <p className="font-outfit text-base text-slate-400 max-w-xl">
              Equip the ultimate competitive arsenal. Get the <strong className="text-white">Apex-V1 Mouse</strong>, the <strong className="text-white">Pro-Keys TKL Mechanical Keyboard</strong>, and the <strong className="text-white">SoundPro X Spatial Headset</strong> in a single matched set.
            </p>

            {/* Price section with comparison */}
            <div className="flex items-end gap-6 my-2">
              <div>
                <span className="text-3xs uppercase font-orbitron tracking-widest text-slate-500 block mb-0.5">Bundle Price</span>
                <span className="font-orbitron text-3xl font-black text-cyber-neon-pink text-glow-pink">$369.99</span>
              </div>
              <div className="border-l border-slate-800 pl-6">
                <span className="text-3xs uppercase font-orbitron tracking-widest text-slate-500 block mb-0.5">Individual MSRP</span>
                <span className="font-orbitron text-xl font-bold text-slate-500 line-through">$469.97</span>
              </div>
              <div className="rounded-lg bg-cyber-green/10 border border-cyber-green/30 px-3 py-1 font-orbitron text-xs font-bold text-cyber-neon-green self-center animate-pulse">
                SAVE $99.98
              </div>
            </div>

            {/* Inventory progress bar */}
            <div className="max-w-md">
              <div className="flex justify-between items-center text-xs font-outfit text-slate-400 mb-2">
                <span className="flex items-center gap-1.5 font-semibold text-white">
                  <Flame className="h-4 w-4 text-cyber-neon-pink" />
                  Only {stockRemaining} bundles left
                </span>
                <span>{stockRemaining} / {totalStock} available</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-cyber-pink to-cyber-neon-pink transition-all duration-500"
                  style={{ width: `${(stockRemaining / totalStock) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Countdown Timer & Checkout Trigger */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center gap-6">
            {/* Timer visual frame */}
            <div className="w-full max-w-sm rounded-2xl bg-slate-950/60 border border-slate-850 p-6 flex flex-col gap-4 text-center">
              <span className="font-orbitron text-3xs font-bold uppercase tracking-wider text-slate-500 flex items-center justify-center gap-1.5">
                <Timer className="h-3.5 w-3.5 text-cyber-neon-pink" />
                Offer Expires In:
              </span>

              {/* Countdown Numbers */}
              <div className="grid grid-cols-3 gap-3 font-orbitron">
                <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800/80 shadow-inner">
                  <span className="block text-2xl font-black text-white">{time.hours}</span>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">HRS</span>
                </div>
                <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800/80 shadow-inner">
                  <span className="block text-2xl font-black text-white">{time.minutes}</span>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">MINS</span>
                </div>
                <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800/80 shadow-inner">
                  <span className="block text-2xl font-black text-white text-cyber-neon-pink text-glow-pink">{time.seconds}</span>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">SECS</span>
                </div>
              </div>

              {/* CTA Bundle Add */}
              <button
                onClick={handleBuyBundle}
                disabled={timeLeft <= 0}
                className="w-full flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-pink py-3.5 font-orbitron text-sm font-bold uppercase tracking-wider text-cyber-bg-dark transition-all duration-300 hover:scale-103 hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] disabled:opacity-40 disabled:cursor-not-allowed active:scale-97"
              >
                <ShoppingBag className="h-4 w-4" />
                Claim Championship Bundle
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BundleOffer;
