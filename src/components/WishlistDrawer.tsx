import React from 'react';
import { X, Bookmark, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: Product[];
  onRemoveWishlist: (productId: string) => void;
  onMoveToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlist,
  onRemoveWishlist,
  onMoveToCart,
  onQuickView
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F0] border-l border-[#E2D7C4] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-[#E2D7C4] flex items-center justify-between bg-[#F5EFE4]">
            <div className="flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-[#8C6D3B]" />
              <h2 className="font-serif-display text-xl font-medium text-[#23201C]">
                Saved Collector Relics
              </h2>
              <span className="text-xs text-[#7A7162] font-mono tabular-nums">
                ({wishlist.length})
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#5C5549] hover:bg-[#EAE0CF] transition-colors"
              aria-label="Close saved items"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {wishlist.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#EFE7DA] flex items-center justify-center text-[#8C6D3B]">
                  <Bookmark className="w-8 h-8 opacity-60" />
                </div>
                <div className="font-serif-display text-xl text-[#23201C]">
                  No relics saved
                </div>
                <p className="text-xs text-[#6B6354] max-w-xs">
                  Bookmark singular curiosities from the catalog to follow their provenance and availability.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FBF9F5] bg-[#23201C] rounded-lg hover:bg-[#3D372F] transition-colors"
                >
                  Inspect Vault Catalog
                </button>
              </div>
            ) : (
              wishlist.map((product) => (
                <div
                  key={product.id}
                  className="p-3.5 bg-[#F4EDE1] border border-[#DDD3C2] rounded-xl flex gap-3.5 relative group"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    onClick={() => {
                      onClose();
                      onQuickView(product);
                    }}
                    className="w-20 h-20 object-cover rounded-lg bg-[#EAE0CF] shrink-0 border border-[#DDD3C2] cursor-pointer"
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#8C6D3B] font-semibold truncate block">
                        {product.category} · {product.era}
                      </span>
                      <h4 
                        onClick={() => {
                          onClose();
                          onQuickView(product);
                        }}
                        className="font-serif-display text-base font-medium text-[#23201C] truncate cursor-pointer hover:text-[#8C6D3B]"
                      >
                        {product.title}
                      </h4>
                      <div className="text-xs font-semibold text-[#23201C] font-mono tabular-nums mt-0.5">
                        ${product.price.toLocaleString()}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <button
                        onClick={() => {
                          onMoveToCart(product);
                        }}
                        className="px-3 py-1.5 text-xs bg-[#23201C] text-white hover:bg-[#3D372F] rounded-md font-medium flex items-center gap-1.5 cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Move to Bag</span>
                      </button>

                      <button
                        onClick={() => onRemoveWishlist(product.id)}
                        className="p-1.5 text-[#8A8172] hover:text-[#B91C1C] transition-colors"
                        aria-label="Remove from wishlist"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
