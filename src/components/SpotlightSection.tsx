import React from 'react';
import { Product } from '../types';
import { Award, Compass, Eye, ShoppingBag } from 'lucide-react';

interface SpotlightSectionProps {
  products: Product[];
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const SpotlightSection: React.FC<SpotlightSectionProps> = ({
  products,
  onQuickView,
  onAddToCart
}) => {
  // Grab 2 marquee items
  const marquee = products.find((p) => p.id === 'prod-chronometer-1888') || products[1];

  if (!marquee) return null;

  return (
    <section className="py-14 sm:py-20 bg-[#F4EFE6] border-y border-[#E2D8C6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#8C6D3B] font-semibold mb-1">
              <Compass className="w-3.5 h-3.5" />
              <span>Curator’s Focal Lot</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-medium text-[#23201C]">
              Featured Singular Acquisition
            </h2>
          </div>
          <p className="text-xs text-[#6B6354] max-w-md">
            Individual artifacts that represent pinnacle craftsmanship of their respective eras, available for immediate insured dispatch.
          </p>
        </div>

        {/* Big Spotlight Card */}
        <div className="bg-[#FAF7F0] border border-[#DDD3C2] rounded-2xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          {/* Left Media */}
          <div className="lg:col-span-7 relative aspect-16/10 lg:aspect-auto bg-[#EBE4D5] overflow-hidden">
            <img
              src={marquee.image}
              alt={marquee.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded text-xs text-white flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#D9A74A]" />
              <span>Admiralty Registered #{marquee.serialNumber}</span>
            </div>
          </div>

          {/* Right Copy & Purchase Action */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#8C6D3B] font-medium">
                <span>{marquee.maker}</span>
                <span aria-hidden="true">·</span>
                <span>{marquee.era}</span>
                <span aria-hidden="true">·</span>
                <span>{marquee.origin}</span>
              </div>

              <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-[#23201C] leading-snug">
                {marquee.title}
              </h3>

              <p className="text-xs text-[#5C5549] leading-relaxed">
                {marquee.provenanceStory}
              </p>

              {/* Technical Highlights list */}
              <div className="pt-2 border-t border-[#EAE0CF] space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#7A7162]">Movement Architecture:</span>
                  <span className="font-mono text-[#23201C]">Spring Detent Escapement</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A7162]">Cabinetry:</span>
                  <span className="font-mono text-[#23201C]">Double-Tiered English Mahogany</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A7162]">Chronometric Precision:</span>
                  <span className="font-mono text-[#3D5B32]">±1.2 sec/48hr Tested</span>
                </div>
              </div>
            </div>

            {/* Price and CTA */}
            <div className="pt-4 border-t border-[#EAE0CF] flex items-center justify-between gap-4">
              <div>
                <div className="text-[11px] text-[#7A7162] uppercase tracking-wider">
                  Acquisition Valuation
                </div>
                <div className="text-2xl font-bold font-mono text-[#23201C] tabular-nums">
                  ${marquee.price.toLocaleString()}
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => onQuickView(marquee)}
                  className="px-3.5 py-2.5 border border-[#DDD3C2] hover:bg-[#EDE5D6] text-xs font-semibold rounded-lg text-[#23201C] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>Dossier</span>
                </button>

                <button
                  onClick={() => onAddToCart(marquee)}
                  className="px-5 py-2.5 bg-[#23201C] hover:bg-[#3D372F] text-white text-xs uppercase tracking-wider font-semibold rounded-lg flex items-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Acquire</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
