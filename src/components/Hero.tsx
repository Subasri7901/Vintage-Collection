import React from 'react';
import { ArrowDown, ShieldCheck, Compass, Sparkles } from 'lucide-react';
import { heroImg } from '../data/products';

interface HeroProps {
  onExploreClick: () => void;
  onSelectCategory: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onSelectCategory }) => {
  return (
    <section className="relative overflow-hidden border-b border-[#E7DFD3] bg-[#F7F4EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Manifesto & Lead */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C6D3B]">
              <Compass className="w-3.5 h-3.5" />
              <span>Est. 1974 · Physical Vaults in Paris & London</span>
            </div>

            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#23201C] leading-[1.12] text-balance">
              Curated Antiquities of Singular Mechanical Provenance.
            </h1>

            <p className="text-base sm:text-lg text-[#5C5549] leading-relaxed max-w-xl font-light">
              We source, authenticate, and mechanically restore historical treasures from 1880 through 1975. From brass maritime chronometers to precision rangefinder glass, each object carries an unbroken certificate of origin.
            </p>

            {/* Quick Actions & Curator Promises */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreClick}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FBF9F5] bg-[#23201C] hover:bg-[#3D372F] rounded-lg transition-all shadow-sm flex items-center gap-2"
              >
                <span>Inspect Vault Catalog</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2 text-xs text-[#5C5549] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#8C6D3B]" />
                <span>3-Tier Verification & Lifetime Guarantee</span>
              </div>
            </div>

            {/* Subtle Quick Category Starters */}
            <div className="pt-4 border-t border-[#E7DFD3]/80">
              <div className="text-xs uppercase tracking-wider text-[#7A7162] mb-2 font-medium">
                Featured Disciplines
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {['Analog Optics', 'Horology & Marine', 'Architectural Brass', 'Leather & Travel'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      onSelectCategory(cat);
                      onExploreClick();
                    }}
                    className="px-3 py-1.5 rounded-md bg-[#EDE6D8]/60 hover:bg-[#EDE6D8] text-[#3E382E] transition-colors border border-[#DDD3C2]/50 cursor-pointer"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Marquee Archival Photography */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#DED4C3] bg-[#EBE4D5] aspect-16/10 group">
              <img
                src={heroImg}
                alt="Atelier and Relic archival collector objects featuring maritime compass, leather journal, vintage camera, and amber glass bottles"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-[#E3D4BC] font-medium">
                    The Collector’s Desk
                  </div>
                  <div className="text-sm font-serif-display font-medium text-white/95">
                    Original 19th & 20th Century Artifacts in Our Bloomsbury Vault
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-[#E3D4BC] bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded">
                  <Sparkles className="w-3 h-3 text-[#D9A74A]" />
                  <span>Inspected Daily</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
