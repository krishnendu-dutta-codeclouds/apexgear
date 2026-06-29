import React, { useState } from 'react';
import { Shield, Sparkles, Check, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';

const colorOptions = [
  { name: 'Neon Cyan (Standard)', class: 'bg-cyber-cyan shadow-[0_0_10px_rgba(6,182,212,0.6)]', hex: '#00F0FF' },
  { name: 'Cyber Pink (Hyper)', class: 'bg-cyber-pink shadow-[0_0_10px_rgba(244,63,94,0.6)]', hex: '#FF007F' },
  { name: 'Neon Green (Toxic)', class: 'bg-cyber-neon-green shadow-[0_0_10px_rgba(0,255,135,0.6)]', hex: '#00FF87' }
];

const feetOptions = [
  { name: 'Virgin PTFE (Control)', price: 0, desc: 'Ultra-smooth glide, high control' },
  { name: 'Sapphire Glass (Speed)', price: 10, desc: 'Zero friction, ultimate speed micro-adjustments' }
];

const gripOptions = [
  { name: 'No Grip Tape', price: 0, desc: 'Stock weight, textured shell texture' },
  { name: 'Lizard-Grip Black', price: 5, desc: 'Pre-cut performance grips, maximum absorption' },
  { name: 'Lizard-Grip Cyan', price: 5, desc: 'Pre-cut performance grips, matching theme accent' }
];

const ProductSpotlight = () => {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  const [selectedFeet, setSelectedFeet] = useState(feetOptions[0]);
  const [selectedGrip, setSelectedGrip] = useState(gripOptions[0]);
  const [quantity, setQuantity] = useState(1);

  const basePrice = 129.99;
  const totalPrice = (basePrice + selectedFeet.price + selectedGrip.price) * quantity;

  const handleAddToCart = () => {
    const product = {
      id: 'mouse-apex-v1-custom',
      name: 'Apex-V1 Custom Wireless Mouse',
      price: basePrice + selectedFeet.price + selectedGrip.price,
      glow: selectedColor.name.includes('Cyan') ? 'glow-cyan' : selectedColor.name.includes('Pink') ? 'glow-pink' : 'glow-green'
    };

    const customization = {
      color: selectedColor.name,
      feet: selectedFeet.name,
      grip: selectedGrip.name
    };

    addToCart(product, quantity, customization);
  };

  return (
    <section id="spotlight" className="border-t border-slate-900 py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="font-orbitron text-xs font-bold uppercase tracking-widest text-cyber-neon-cyan mb-2">
          GEAR LAB & CUSTOMIZATION
        </span>
        <h2 className="font-orbitron text-2xl font-bold text-white md:text-3xl">
          CUSTOMIZE YOUR APEX-V1
        </h2>
        <div className="mt-3 h-1 w-12 bg-cyber-cyan"></div>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
        {/* Left Interactive Visual Customizer */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-cyber-cyan/10 to-cyber-pink/5 blur-3xl animate-pulse-slow"></div>
          
          {/* Main Visual Customization Shell */}
          <div className="relative rounded-2xl border border-slate-800/80 bg-slate-950/40 p-6 glow-cyan max-w-md w-full">
            <div className="absolute top-3 left-4 flex items-center gap-1.5 font-orbitron text-[9px] tracking-widest text-slate-500">
              <Sparkles className="h-3 w-3 animate-spin text-cyber-neon-cyan" />
              ACCENT: {selectedColor.name.toUpperCase()}
            </div>

            {/* Mouse Visualizer frame */}
            <div className="my-6 flex justify-center">
              <img
                src={`${import.meta.env.BASE_URL}images/gaming_mouse_hero.png`}
                alt="Customized Apex-V1"
                className="max-h-[300px] object-contain rounded-xl drop-shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all duration-300 animate-float"
                style={{
                  filter: `drop-shadow(0 0 15px ${selectedColor.hex}40)`
                }}
              />
            </div>

            {/* Simulated Live Specs Display */}
            <div className="grid grid-cols-2 gap-3 border-t border-slate-800/80 pt-4 font-outfit text-xs text-slate-400">
              <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/40">
                <span className="text-slate-500 block uppercase text-4xs font-orbitron">GLIDE FEET</span>
                <span className="text-white font-bold">{selectedFeet.name.split(' ')[0]}</span>
              </div>
              <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/40">
                <span className="text-slate-500 block uppercase text-4xs font-orbitron">GRIP TYPE</span>
                <span className="text-white font-bold">{selectedGrip.name.replace('Lizard-', '')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Customizer Panel / Selectors */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-left">
          {/* Step 1: Glow Color */}
          <div>
            <h3 className="font-orbitron text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Step 1: Choose Accent Glow
            </h3>
            <div className="flex gap-4">
              {colorOptions.map((opt) => (
                <button
                  key={opt.name}
                  onClick={() => setSelectedColor(opt)}
                  className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 transition-all duration-200 ${
                    selectedColor.name === opt.name
                      ? 'border-cyber-cyan bg-cyber-cyan/10 text-white font-bold'
                      : 'border-slate-800 bg-slate-900/10 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <span className={`h-3 w-3 rounded-full ${opt.class}`} />
                  <span className="font-outfit text-xs">{opt.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Feet Material */}
          <div>
            <h3 className="font-orbitron text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Step 2: Performance Glide Feet
            </h3>
            <div className="flex flex-col gap-2">
              {feetOptions.map((opt) => (
                <button
                  key={opt.name}
                  onClick={() => setSelectedFeet(opt)}
                  className={`flex items-center justify-between rounded-xl border p-3.5 text-left transition-all duration-200 ${
                    selectedFeet.name === opt.name
                      ? 'border-cyber-cyan bg-cyber-cyan/5 text-white'
                      : 'border-slate-800 bg-slate-900/10 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="font-orbitron text-xs font-bold">{opt.name}</span>
                    <span className="font-outfit text-2xs text-slate-500">{opt.desc}</span>
                  </div>
                  <span className="font-orbitron text-xs font-black text-cyber-neon-cyan">
                    {opt.price === 0 ? 'FREE' : `+$${opt.price}`}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Grip Tape */}
          <div>
            <h3 className="font-orbitron text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Step 3: Lizard-Skin Grips
            </h3>
            <div className="flex flex-col gap-2">
              {gripOptions.map((opt) => (
                <button
                  key={opt.name}
                  onClick={() => setSelectedGrip(opt)}
                  className={`flex items-center justify-between rounded-xl border p-3.5 text-left transition-all duration-200 ${
                    selectedGrip.name === opt.name
                      ? 'border-cyber-cyan bg-cyber-cyan/5 text-white'
                      : 'border-slate-800 bg-slate-900/10 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="font-orbitron text-xs font-bold">{opt.name}</span>
                    <span className="font-outfit text-2xs text-slate-500">{opt.desc}</span>
                  </div>
                  <span className="font-orbitron text-xs font-black text-cyber-neon-cyan">
                    {opt.price === 0 ? 'FREE' : `+$${opt.price}`}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector and Total Summary */}
          <div className="border-t border-slate-800/80 pt-6 mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-3xs uppercase font-orbitron tracking-widest text-slate-500 block mb-0.5">Total Price</span>
              <span className="font-orbitron text-2xl font-black text-white">${totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex items-center gap-3">
              {/* Quantity incrementer */}
              <div className="flex items-center border border-slate-800 rounded-lg bg-slate-900/60 h-11 px-2 font-orbitron">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-2 text-slate-400 hover:text-white"
                >
                  -
                </button>
                <span className="px-3 text-sm text-white font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2 text-slate-400 hover:text-white"
                >
                  +
                </button>
              </div>

              {/* Add Custom Build button */}
              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-green px-6 h-11 font-orbitron text-xs font-bold uppercase tracking-wider text-cyber-bg-dark transition-all duration-300 hover:scale-103 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] active:scale-97"
              >
                Add Custom Build
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpotlight;
