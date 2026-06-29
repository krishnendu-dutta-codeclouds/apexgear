import React from 'react';
import { Target, Zap, Award, Flame } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-24 px-4 md:px-8">
      {/* Background Glows */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyber-cyan/15 blur-3xl animate-pulse-slow"></div>
      <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-cyber-pink/15 blur-3xl animate-pulse-slow"></div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-12 items-center">
        {/* Left Content */}
        <div className="md:col-span-7 flex flex-col items-start gap-6 text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/10 px-4 py-1.5 font-orbitron text-xs font-semibold uppercase tracking-wider text-cyber-neon-cyan shadow-[0_0_15px_rgba(0,240,255,0.1)]">
            <Flame className="h-3.5 w-3.5 text-cyber-neon-cyan animate-pulse" />
            Apex Series 2026 Drop
          </div>

          {/* Headline */}
          <h1 className="font-orbitron text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            FORGED FOR <span className="bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-green bg-clip-text text-transparent text-glow-cyan">CHAMPIONS</span>.
            <br />
            UNLEASH PEAK GEAR.
          </h1>

          {/* Subtitle */}
          <p className="max-w-xl font-outfit text-base text-slate-400 md:text-lg">
            Elevate your competitive edge with zero-latency engineering, featherweight designs, and professional-grade tactile responses tested by elite esports teams globally.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#spotlight"
              className="relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-green px-8 py-3.5 font-orbitron text-sm font-bold uppercase tracking-wider text-cyber-bg-dark transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] active:scale-95"
            >
              Shop Apex-V1 Mouse
            </a>
            <a
              href="#compare"
              className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/50 px-8 py-3.5 font-orbitron text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-cyber-neon-cyan hover:bg-slate-900 hover:text-cyber-neon-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] active:scale-95"
            >
              Watch Specs
            </a>
          </div>

          {/* Floating Trust Indicators / Badges */}
          <div className="grid grid-cols-3 gap-6 mt-6 border-t border-slate-800/80 pt-6 w-full max-w-lg">
            <div className="flex flex-col gap-1 hover:text-cyber-neon-cyan transition-colors duration-200">
              <span className="flex items-center gap-1.5 font-orbitron text-lg font-bold text-white md:text-2xl">
                <Zap className="h-5 w-5 text-cyber-neon-cyan" />
                8000Hz
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Polling Rate</span>
            </div>
            <div className="flex flex-col gap-1 hover:text-cyber-neon-pink transition-colors duration-200">
              <span className="flex items-center gap-1.5 font-orbitron text-lg font-bold text-white md:text-2xl">
                <Target className="h-5 w-5 text-cyber-pink" />
                49g
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Ultra-Lightweight</span>
            </div>
            <div className="flex flex-col gap-1 hover:text-cyber-neon-green transition-colors duration-200">
              <span className="flex items-center gap-1.5 font-orbitron text-lg font-bold text-white md:text-2xl">
                <Award className="h-5 w-5 text-cyber-green" />
                0.1ms
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Optical Response</span>
            </div>
          </div>
        </div>

        {/* Right Dynamic Media Panel */}
        <div className="md:col-span-5 flex justify-center relative">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-cyber-cyan/10 to-cyber-pink/10 blur-3xl animate-pulse-slow"></div>
          {/* Main Visual Frame */}
          <div className="relative group scanline-effect rounded-2xl border border-slate-800/80 bg-slate-950/40 p-4 md:p-6 transition-all duration-500 glow-cyan animate-float">
            <div className="absolute top-2 left-2 flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-500/80"></span>
              <span className="h-2 w-2 rounded-full bg-yellow-500/80"></span>
              <span className="h-2 w-2 rounded-full bg-green-500/80"></span>
            </div>
            <span className="absolute top-2 right-4 font-orbitron text-[9px] tracking-widest text-slate-600">SYS_SEC_ACTIVE</span>
            
            <img
              src={`${import.meta.env.BASE_URL}images/gaming_mouse_hero.png`}
              alt="Apex-V1 Wireless Esports Gaming Mouse"
              className="max-h-[300px] md:max-h-[420px] object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
            />

            {/* Glowing Corner Borders */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyber-cyan"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-cyan"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-cyan"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-cyan"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
