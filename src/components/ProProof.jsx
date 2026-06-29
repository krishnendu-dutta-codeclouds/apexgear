import React, { useState } from 'react';
import { Star, ShieldCheck, Cpu, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    quote: "The Apex-V1 has completely changed my tracking. The 8000Hz polling rate makes CS2 micro-adjustments feel like drawing on paper. Absolutely flawless sensor.",
    author: "Marcus 'Viper' Vance",
    role: "Professional VALORANT Duelist",
    team: "Team Singularity",
    rating: 5,
    gear: "Apex-V1 Mouse (8K, Glass Glides)"
  },
  {
    quote: "Hall Effect switches with Rapid Trigger are no longer optional for competitive play. Pro-Keys TKL has the tightest response and custom actuation profiles of any deck I've tested.",
    author: "Sarah 'Luna' Chen",
    role: "Esports Champion & Streamer",
    team: "GIGA Esports",
    rating: 5,
    gear: "Pro-Keys TKL Keyboard (Magnetic)"
  },
  {
    quote: "Audio separation is vital. SoundPro X allows me to hear defuse cues and directional footsteps over dense utility and teammate comms perfectly. Beryllium drivers are key.",
    author: "Anton 'Breaker' Rossi",
    role: "APEX Legends Professional",
    team: "Nebula Gaming",
    rating: 5,
    gear: "SoundPro X Headset (Spatial)"
  }
];

const teamLogos = [
  { name: "SABER ESPORTS", color: "text-cyber-neon-cyan border-cyber-cyan/20" },
  { name: "TEAM GALAXY", color: "text-cyber-neon-pink border-cyber-pink/20" },
  { name: "VALOR FORCE", color: "text-cyber-neon-green border-cyber-green/20" },
  { name: "VORTEX CLAN", color: "text-amber-400 border-amber-500/20" }
];

const ProProof = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="pro-usage" className="border-t border-slate-900 bg-slate-950/20 py-16 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-orbitron text-xs font-bold uppercase tracking-widest text-cyber-neon-pink mb-2">
            TRUSTED BY WORLD CHAMPIONS
          </h2>
          <p className="font-orbitron text-2xl font-bold text-white md:text-3xl">
            CO-DESIGNED & TESTED BY THE PROS
          </p>
          <div className="mt-3 h-1 w-12 bg-cyber-pink"></div>
        </div>

        {/* Dynamic Partner Logo Grid */}
        <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {teamLogos.map((team, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-center rounded-xl border bg-slate-900/10 py-5 px-6 font-orbitron text-sm font-black tracking-widest transition-all duration-300 hover:bg-slate-900/30 ${team.color} shadow-[0_0_10px_rgba(0,0,0,0.15)]`}
            >
              {team.name}
            </div>
          ))}
        </div>

        {/* Testimonials Slider */}
        <div className="mx-auto max-w-4xl">
          <div className="glassmorphism relative rounded-2xl border border-slate-800/80 p-8 md:p-10 shadow-[0_0_30px_rgba(0,0,0,0.25)] glow-pink">
            <span className="absolute right-6 top-6 text-7xl font-serif text-slate-800 leading-none pointer-events-none select-none">“</span>
            
            {/* Active Testimonial Content */}
            <div className="flex flex-col gap-6 text-left animate-in fade-in duration-500">
              {/* Rating stars */}
              <div className="flex gap-1 text-cyber-neon-pink text-glow-pink">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-outfit text-base italic leading-relaxed text-slate-200 md:text-lg">
                "{testimonials[activeIndex].quote}"
              </p>

              {/* Author & Gear Info */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-slate-800/60 pt-6">
                <div>
                  <h4 className="font-orbitron text-base font-bold text-white">
                    {testimonials[activeIndex].author}
                  </h4>
                  <p className="text-xs text-slate-500 font-outfit">
                    {testimonials[activeIndex].role} &bull; <span className="text-cyber-neon-cyan">{testimonials[activeIndex].team}</span>
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-lg bg-slate-900/80 px-4 py-2 border border-slate-800">
                  <CheckCircle className="h-4 w-4 text-cyber-neon-green" />
                  <span className="font-orbitron text-2xs font-semibold uppercase tracking-wider text-slate-300">
                    Gear: {testimonials[activeIndex].gear}
                  </span>
                </div>
              </div>
            </div>

            {/* Slider Dots */}
            <div className="mt-8 flex justify-center gap-2.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-cyber-pink shadow-[0_0_10px_rgba(244,63,94,0.6)]' : 'w-2.5 bg-slate-700 hover:bg-slate-500'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Global Authority Badges */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="flex items-center gap-4 rounded-xl border border-slate-800/80 bg-slate-950/30 p-6 text-left transition-colors duration-200 hover:border-slate-800">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-neon-cyan shadow-[0_0_10px_rgba(6,182,212,0.15)]">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-orbitron text-sm font-bold text-white">2-YEAR PRO WARRANTY</h4>
              <p className="text-xs text-slate-500 font-outfit mt-1">Zero questions asked instant replacements for all esports athletes.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-slate-800/80 bg-slate-950/30 p-6 text-left transition-colors duration-200 hover:border-slate-800">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyber-green/10 border border-cyber-green/30 text-cyber-neon-green shadow-[0_0_10px_rgba(16,185,129,0.15)]">
              <Cpu className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-orbitron text-sm font-bold text-white">LAB-TESTED LATENCY</h4>
              <p className="text-xs text-slate-500 font-outfit mt-1">Certified sub-1ms end-to-end click and key travel response latency.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-slate-800/80 bg-slate-950/30 p-6 text-left transition-colors duration-200 hover:border-slate-800">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyber-pink/10 border border-cyber-pink/30 text-cyber-neon-pink shadow-[0_0_10px_rgba(244,63,94,0.15)]">
              <Star className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-orbitron text-sm font-bold text-white">100% PRO SATISFACTION</h4>
              <p className="text-xs text-slate-500 font-outfit mt-1">Over 150 tournament professionals actively use our gear on-stage.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProProof;
