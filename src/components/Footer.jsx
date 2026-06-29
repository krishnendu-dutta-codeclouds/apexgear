import React, { useState } from 'react';
import { Mail, Send, ShieldAlert, Sparkles } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email) {
      setErrorMsg('Required field.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg('Enter a valid email address.');
      return;
    }

    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950/40 px-4 md:px-8 pt-16 pb-8 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 text-left mb-12">
        
        {/* Brand Info Column */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <a href="#" className="flex items-center gap-2 font-orbitron text-xl font-black uppercase tracking-wider text-white">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-cyber-cyan to-cyber-pink shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              <span className="text-sm font-bold text-cyber-bg-dark">AP</span>
            </span>
            APEX<span className="text-cyber-neon-cyan">GEAR</span>
          </a>
          <p className="font-outfit text-xs text-slate-500 max-w-xs leading-relaxed">
            Co-engineered with professional esports organizations to create hardware that unlocks maximum biological and structural performance.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-slate-500 hover:text-cyber-neon-cyan transition-colors" aria-label="Twitch">
              <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
              </svg>
            </a>
            <a href="#" className="text-slate-500 hover:text-cyber-neon-cyan transition-colors" aria-label="YouTube">
              <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.387-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" className="text-slate-500 hover:text-cyber-neon-cyan transition-colors" aria-label="GitHub">
              <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Links Column 1: Inventory */}
        <div className="md:col-span-2 flex flex-col gap-3 font-outfit">
          <h4 className="font-orbitron text-2xs font-bold uppercase tracking-wider text-slate-400">Inventory</h4>
          <a href="#explore" className="text-xs text-slate-500 hover:text-cyber-neon-cyan transition-colors">Apex Mice</a>
          <a href="#explore" className="text-xs text-slate-500 hover:text-cyber-neon-cyan transition-colors">Magnetic Keyboards</a>
          <a href="#explore" className="text-xs text-slate-500 hover:text-cyber-neon-cyan transition-colors">Spatial Headsets</a>
          <a href="#explore" className="text-xs text-slate-500 hover:text-cyber-neon-cyan transition-colors">Ergonomic Seats</a>
        </div>

        {/* Links Column 2: Athlete Support */}
        <div className="md:col-span-2 flex flex-col gap-3 font-outfit">
          <h4 className="font-orbitron text-2xs font-bold uppercase tracking-wider text-slate-400">Athlete Support</h4>
          <a href="#" className="text-xs text-slate-500 hover:text-cyber-neon-cyan transition-colors">Warranty & Claims</a>
          <a href="#" className="text-xs text-slate-500 hover:text-cyber-neon-cyan transition-colors">Drivers & Software</a>
          <a href="#" className="text-xs text-slate-500 hover:text-cyber-neon-cyan transition-colors">Tactical Support</a>
          <a href="#" className="text-xs text-slate-500 hover:text-cyber-neon-cyan transition-colors">Tournament Roster</a>
        </div>

        {/* Links Column 3: Newsletter */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <h4 className="font-orbitron text-2xs font-bold uppercase tracking-wider text-slate-400">
            Secure Intelligence Roster
          </h4>
          <p className="font-outfit text-xs text-slate-500 max-w-xs">
            Subscribe to get direct intelligence notifications on championship drops and exclusive performance pricing.
          </p>

          {/* Form */}
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full rounded-xl border bg-slate-950 py-2.5 pl-11 pr-12 text-xs text-white placeholder-slate-500 outline-none focus:border-cyber-cyan transition-colors ${
                    errorMsg ? 'border-cyber-pink focus:border-cyber-pink' : 'border-slate-900'
                  }`}
                />
                <button
                  type="submit"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 flex h-7.5 w-7.5 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyber-neon-cyan transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
              {errorMsg && (
                <span className="text-[10px] text-cyber-neon-pink font-outfit text-glow-pink flex items-center gap-1">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  {errorMsg}
                </span>
              )}
            </form>
          ) : (
            <div className="rounded-xl border border-cyber-green/30 bg-cyber-green/5 p-3 text-left font-outfit text-xs text-slate-300 flex items-center gap-3 shadow-[0_0_15px_rgba(16,185,129,0.05)] animate-in fade-in zoom-in-95 duration-300">
              <Sparkles className="h-5 w-5 text-cyber-neon-green shrink-0 animate-pulse" />
              <div>
                <strong className="text-white font-orbitron block text-2xs uppercase tracking-wider">Subscribed Successfully</strong>
                You have been added to the elite intel registry.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Bottom Row */}
      <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-outfit text-4xs uppercase tracking-widest text-slate-600">
        <div>
          &copy; {new Date().getFullYear()} APEXGEAR ESPORTS INC. ALL RIGHTS SECURED.
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-400">Terms of Mission</a>
          <a href="#" className="hover:text-slate-400">Tactical Privacy</a>
          <a href="#" className="hover:text-slate-400">Data Integrity</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
