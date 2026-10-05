import React from 'react';
import { Microscope, Hammer, Award, CheckCircle, ShieldCheck } from 'lucide-react';

export const ProvenanceSection: React.FC = () => {
  return (
    <section id="story" className="py-16 sm:py-24 border-t border-[#E7DFD3] bg-[#F5EFE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#8C6D3B] mb-2">
            The Archival Protocol
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#23201C] tracking-tight leading-tight text-balance">
            Every Relic Entrusted to Our Care is Reborn for the Next Century.
          </h2>
          <p className="mt-4 text-base text-[#5C5549] leading-relaxed font-light">
            We reject aesthetic imitation. Each timepiece, brass instrument, and rangefinder undergoes forensic material authentication, full mechanical teardown, and conservation using era-appropriate techniques.
          </p>
        </div>

        {/* 3 Editorial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="p-6 bg-[#FAF7F0] border border-[#DDD3C2] rounded-2xl space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#EDE4D4] flex items-center justify-center text-[#8C6D3B]">
              <Microscope className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono font-semibold text-[#8C6D3B] mb-1">
                01. Forensic Provenance Audit
              </div>
              <h3 className="font-serif-display text-xl font-medium text-[#23201C]">
                Serial & Metallurgical Verification
              </h3>
            </div>
            <p className="text-xs text-[#5C5549] leading-relaxed">
              We cross-examine original factory batch ledgers from Leitz, Zeiss, Thorens, and British Admiralty rolls. Spectrometry confirms brass and bronze alloys pre-date synthetic modern substitutes.
            </p>
            <div className="pt-2 border-t border-[#EAE0CF] flex items-center gap-1.5 text-[11px] text-[#44663B] font-medium">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Zero reproduction parts tolerated</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 bg-[#FAF7F0] border border-[#DDD3C2] rounded-2xl space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#EDE4D4] flex items-center justify-center text-[#8C6D3B]">
              <Hammer className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono font-semibold text-[#8C6D3B] mb-1">
                02. Bench Micro-Conservation
              </div>
              <h3 className="font-serif-display text-xl font-medium text-[#23201C]">
                Mechanical Rejuvenation
              </h3>
            </div>
            <p className="text-xs text-[#5C5549] leading-relaxed">
              Escapements, gear trains, and shutter curtains are ultrasonically degreased and relubricated using Swiss Moebius synthetic oils that never gum or oxidize over decades of daily mechanical use.
            </p>
            <div className="pt-2 border-t border-[#EAE0CF] flex items-center gap-1.5 text-[11px] text-[#44663B] font-medium">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Full optical collimation & timing bench tests</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 bg-[#FAF7F0] border border-[#DDD3C2] rounded-2xl space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#EDE4D4] flex items-center justify-center text-[#8C6D3B]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono font-semibold text-[#8C6D3B] mb-1">
                03. Wax-Sealed Certification
              </div>
              <h3 className="font-serif-display text-xl font-medium text-[#23201C]">
                Lifelong Registry Entry
              </h3>
            </div>
            <p className="text-xs text-[#5C5549] leading-relaxed">
              Every parcel leaves our Bloomsbury and Marais vaults accompanied by a physical cotton-rag parchment certificate detailing historical ownership, condition grade, and unique registry serial.
            </p>
            <div className="pt-2 border-t border-[#EAE0CF] flex items-center gap-1.5 text-[11px] text-[#44663B] font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Permanent collector registry entry</span>
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Metric Ribbon */}
        <div className="mt-12 p-6 sm:p-8 bg-[#23201C] rounded-2xl text-[#FBF9F5] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-mono text-3xl font-semibold text-[#D9A74A] tabular-nums">
              1,480+
            </div>
            <div className="text-xs text-[#A89F91] mt-1">
              Antiquities Restored Since 1974
            </div>
          </div>

          <div>
            <div className="font-mono text-3xl font-semibold text-[#D9A74A] tabular-nums">
              100%
            </div>
            <div className="text-xs text-[#A89F91] mt-1">
              Verified Original Metallurgy
            </div>
          </div>

          <div>
            <div className="font-mono text-3xl font-semibold text-[#D9A74A] tabular-nums">
              14-Day
            </div>
            <div className="text-xs text-[#A89F91] mt-1">
              Private Hands-On Trial Window
            </div>
          </div>

          <div>
            <div className="font-mono text-3xl font-semibold text-[#D9A74A] tabular-nums">
              2 Vaults
            </div>
            <div className="text-xs text-[#A89F91] mt-1">
              London & Paris Private Salons
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
