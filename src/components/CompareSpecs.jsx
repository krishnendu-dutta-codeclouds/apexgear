import React, { useState } from 'react';
import { Info, HelpCircle, Check, X } from 'lucide-react';

const specsData = [
  {
    feature: 'Polling Rate',
    apex: '8000Hz',
    competitor: '1000Hz',
    office: '125Hz',
    apexBest: true,
    tooltip: 'Number of times per second the mouse reports its position to the computer. 8000Hz is 8x faster than standard gaming mice.'
  },
  {
    feature: 'Latency',
    apex: '0.1ms (Optical)',
    competitor: '1.0ms (Mechanical)',
    office: '8.0ms (Membrane)',
    apexBest: true,
    tooltip: 'The delay between pressing a button and the action executing. Apex uses light-speed optical triggers for instant response.'
  },
  {
    feature: 'Weight',
    apex: '49g',
    competitor: '63g',
    office: '95g',
    apexBest: true,
    tooltip: 'Lighter mice allow faster sweeps, quicker target acquisition, and significantly reduce wrist fatigue over long competitive play.'
  },
  {
    feature: 'Sensor Type',
    apex: 'PixArt 3395 (26K DPI)',
    competitor: 'Hero 25K (25K DPI)',
    office: 'Generic Optical (1K DPI)',
    apexBest: true,
    tooltip: 'The optical sensor reading raw performance. PixArt 3395 offers flawless 1:1 hand tracking without any pixel skipping.'
  },
  {
    feature: 'Switch Durability',
    apex: '90 Million Clicks',
    competitor: '50 Million Clicks',
    office: '3 Million Clicks',
    apexBest: true,
    tooltip: 'Tested lifecycle count. Optical switches do not suffer from double-click degradation because they rely on light beams, not metal contacts.'
  },
  {
    feature: 'Connection Protocol',
    apex: '2.4GHz Zero-Lag',
    competitor: 'Standard 2.4GHz',
    office: 'Bluetooth / Wired Only',
    apexBest: true,
    tooltip: 'Proprietary frequency tuning keeps wireless transmission latency lower than standard wired connections.'
  }
];

const CompareSpecs = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
    <section id="compare" className="py-16 px-4 md:px-8 border-t border-slate-900 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="font-orbitron text-xs font-bold uppercase tracking-widest text-cyber-neon-green mb-2">
          COMPETITIVE ADVANTAGE MATRIX
        </span>
        <h2 className="font-orbitron text-2xl font-bold text-white md:text-3xl">
          APEX VS THE COMPETITION
        </h2>
        <div className="mt-3 h-1 w-12 bg-cyber-green"></div>
      </div>

      {/* Comparison Grid/Table */}
      <div className="glassmorphism rounded-2xl border border-slate-800/80 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse text-left font-outfit">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/60 font-orbitron text-xs uppercase tracking-wider text-slate-400">
                <th className="py-5 px-6 font-bold">Performance Metric</th>
                <th className="py-5 px-6 font-bold text-cyber-neon-cyan text-glow-cyan bg-cyber-cyan/5">
                  Apex-V1 Wireless
                </th>
                <th className="py-5 px-6 font-bold">Esports Competitor</th>
                <th className="py-5 px-6 font-bold">Standard Office Gear</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {specsData.map((spec, idx) => (
                <tr key={idx} className="transition-colors duration-150 hover:bg-slate-900/20">
                  {/* Metric name with interactive info helper */}
                  <td className="py-4.5 px-6 font-medium text-slate-300">
                    <div className="flex items-center gap-2">
                      {spec.feature}
                      <div className="relative flex items-center">
                        <button
                          onMouseEnter={() => setActiveTooltip(idx)}
                          onMouseLeave={() => setActiveTooltip(null)}
                          onClick={() => setActiveTooltip(activeTooltip === idx ? null : idx)}
                          className="text-slate-500 hover:text-cyber-neon-cyan focus:outline-none"
                          aria-label="More information"
                        >
                          <HelpCircle className="h-3.5 w-3.5" />
                        </button>
                        
                        {/* Tooltip Overlay */}
                        {activeTooltip === idx && (
                          <div className="absolute z-20 left-6 bottom-4 w-64 rounded-xl border border-slate-800 bg-slate-950 p-3.5 font-outfit text-xs font-normal text-slate-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in-95 duration-200">
                            {spec.tooltip}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Apex Specs (Highlighted) */}
                  <td className="py-4.5 px-6 font-orbitron text-sm font-bold text-white bg-cyber-cyan/2">
                    <div className="flex items-center gap-2 text-cyber-neon-cyan text-glow-cyan">
                      <Check className="h-4.5 w-4.5 stroke-[3px] text-cyber-neon-cyan" />
                      {spec.apex}
                    </div>
                  </td>

                  {/* Competitor Specs */}
                  <td className="py-4.5 px-6 text-sm font-orbitron text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                      {spec.competitor}
                    </div>
                  </td>

                  {/* Standard Office Gear Specs */}
                  <td className="py-4.5 px-6 text-sm font-orbitron text-slate-500">
                    <div className="flex items-center gap-2">
                      <X className="h-4.5 w-4.5 text-slate-700" />
                      {spec.office}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CompareSpecs;
