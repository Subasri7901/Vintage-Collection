import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Bookmark, ShoppingBag, Truck, Award, Sparkles, Scale, FileText } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
  isInCart: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  isInCart
}) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'provenance' | 'specifications' | 'restoration'>('provenance');

  if (!product) return null;

  const handleBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdrop}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl bg-[#FAF7F0] border border-[#E0D5C3] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          aria-label="Close product view"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#4A4338] transition-colors shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Gallery Left (Sticky) */}
            <div className="md:col-span-6 space-y-4">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-[#ECE4D4] border border-[#DDD3C2]">
                <img
                  src={product.image}
                  alt={product.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded text-[11px] text-[#F3EAD9] font-mono">
                  Archive Reference: {product.archiveId}
                </div>
              </div>

              {/* Authentication Seal Box */}
              <div className="p-3.5 bg-[#F2ECE1] border border-[#DDD3C2] rounded-xl flex items-center gap-3">
                <Award className="w-6 h-6 text-[#8C6D3B] shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-[#23201C]">
                    Authenticated by Atelier Master Horologist & Optician
                  </div>
                  <div className="text-[#6B6354]">
                    Accompanied by embossed wax-sealed physical parchment certificate.
                  </div>
                </div>
              </div>
            </div>

            {/* Contiguous Purchase Module Right */}
            <div className="md:col-span-6 space-y-5">
              {/* Hierarchy & Origin */}
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#8C6D3B] font-medium">
                  <span>{product.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{product.era}</span>
                  <span aria-hidden="true">·</span>
                  <span>{product.origin}</span>
                </div>

                <h2 className="font-serif-display text-2xl sm:text-3xl font-medium text-[#23201C] mt-1 leading-snug">
                  {product.title}
                </h2>

                <div className="mt-2 flex items-baseline gap-3">
                  <span className="text-2xl font-bold font-mono text-[#23201C] tabular-nums">
                    ${product.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-[#7A7162]">
                    Includes fully insured white-glove international courier delivery
                  </span>
                </div>
              </div>

              {/* Status and Serial Check */}
              <div className="py-2.5 px-3 bg-[#F0EAE0] rounded-lg text-xs flex items-center justify-between text-[#4A4338]">
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#44663B]" />
                  <span>Verified Original Stock ({product.serialNumber})</span>
                </div>
                <span className="font-medium text-[#8C6D3B]">{product.condition}</span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-[#DDD3C2] rounded-lg bg-[#F5EFE4] text-xs">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                      className="px-3 py-2 text-[#4A4338] hover:bg-[#EAE0CF] rounded-l-lg transition-colors disabled:opacity-40"
                    >
                      -
                    </button>
                    <span className="px-3 font-semibold font-mono tabular-nums text-[#23201C]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-[#4A4338] hover:bg-[#EAE0CF] rounded-r-lg transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      onAddToCart(product, quantity);
                    }}
                    className="flex-1 py-3 px-4 bg-[#23201C] hover:bg-[#3D372F] text-[#FBF9F5] text-xs uppercase tracking-wider font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{isInCart ? 'Acquire Another Copy' : 'Add to Archive Bag'}</span>
                  </button>

                  <button
                    onClick={() => onToggleWishlist(product)}
                    className={`p-3 rounded-lg border transition-colors cursor-pointer ${
                      isWishlisted
                        ? 'bg-[#8C6D3B] border-[#8C6D3B] text-white'
                        : 'border-[#DDD3C2] bg-[#F5EFE4] text-[#4A4338] hover:bg-[#EAE0CF]'
                    }`}
                    aria-label="Wishlist toggle"
                  >
                    <Bookmark className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#7A7162] pt-1">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5" /> Insured Climate-Controlled Dispatch
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> 14-Day Examination Window
                  </span>
                </div>
              </div>

              {/* Informational Tabs */}
              <div className="border-t border-[#E0D5C3] pt-4 space-y-3">
                <div className="flex items-center gap-2 border-b border-[#E0D5C3]/60 pb-2 text-xs font-medium">
                  <button
                    onClick={() => setActiveTab('provenance')}
                    className={`pb-1 cursor-pointer transition-colors ${
                      activeTab === 'provenance'
                        ? 'text-[#23201C] border-b-2 border-[#8C6D3B] font-semibold'
                        : 'text-[#6B6354] hover:text-[#23201C]'
                    }`}
                  >
                    Provenance & Lineage
                  </button>
                  <button
                    onClick={() => setActiveTab('specifications')}
                    className={`pb-1 cursor-pointer transition-colors ${
                      activeTab === 'specifications'
                        ? 'text-[#23201C] border-b-2 border-[#8C6D3B] font-semibold'
                        : 'text-[#6B6354] hover:text-[#23201C]'
                    }`}
                  >
                    Atelier Specs
                  </button>
                  <button
                    onClick={() => setActiveTab('restoration')}
                    className={`pb-1 cursor-pointer transition-colors ${
                      activeTab === 'restoration'
                        ? 'text-[#23201C] border-b-2 border-[#8C6D3B] font-semibold'
                        : 'text-[#6B6354] hover:text-[#23201C]'
                    }`}
                  >
                    Conservation Log
                  </button>
                </div>

                {activeTab === 'provenance' && (
                  <div className="text-xs text-[#5C5549] leading-relaxed space-y-2">
                    <p>{product.provenanceStory}</p>
                    <div className="pt-2 text-[11px] text-[#8C6D3B] flex items-center gap-1 font-medium">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Single unique inventory piece in stock.</span>
                    </div>
                  </div>
                )}

                {activeTab === 'specifications' && (
                  <div className="text-xs space-y-1.5 divide-y divide-[#EAE0CF]">
                    {Object.entries(product.specifications).map(([key, val]) => (
                      <div key={key} className="pt-1.5 flex justify-between gap-4">
                        <span className="text-[#7A7162] font-medium">{key}</span>
                        <span className="text-[#23201C] text-right font-mono">{val}</span>
                      </div>
                    ))}
                    <div className="pt-1.5 flex justify-between gap-4">
                      <span className="text-[#7A7162] font-medium">Dimensions & Weight</span>
                      <span className="text-[#23201C] text-right font-mono">
                        {product.dimensions} · {product.weight}
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === 'restoration' && (
                  <div className="text-xs text-[#5C5549] space-y-2">
                    <p className="leading-relaxed">{product.restorationNotes}</p>
                    <div className="p-2.5 bg-[#F0EBE0] rounded-lg text-[11px] text-[#4A4338] flex items-start gap-2">
                      <FileText className="w-4 h-4 text-[#8C6D3B] shrink-0 mt-0.5" />
                      <span>
                        Includes full physical report detailing serial alignment, metallurgy tests, and lubrications.
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
