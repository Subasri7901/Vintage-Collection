import React from 'react';
import { X, Trash2, ShoppingBag, ShieldCheck, ArrowRight, Lock } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, newQty: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 500;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const shippingCost = isFreeShipping || items.length === 0 ? 0 : 45;
  const total = subtotal + shippingCost;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F0] border-l border-[#E2D7C4] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-[#E2D7C4] flex items-center justify-between bg-[#F5EFE4]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#8C6D3B]" />
              <h2 className="font-serif-display text-xl font-medium text-[#23201C]">
                Your Archive Bag
              </h2>
              <span className="text-xs text-[#7A7162] font-mono tabular-nums">
                ({items.reduce((s, i) => s + i.quantity, 0)})
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#5C5549] hover:bg-[#EAE0CF] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Shipping Progress bar */}
          <div className="px-5 py-2.5 bg-[#EFE7DA] border-b border-[#E2D7C4] text-xs">
            {isFreeShipping ? (
              <div className="flex items-center gap-1.5 text-[#3D5B32] font-medium">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Complimentary white-glove insured delivery unlocked</span>
              </div>
            ) : (
              <div className="text-[#6B6354]">
                Add <span className="font-semibold text-[#23201C] font-mono">${(freeShippingThreshold - subtotal).toLocaleString()}</span> more for complimentary insured global transit.
              </div>
            )}
          </div>

          {/* Itemized List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#EFE7DA] flex items-center justify-center text-[#8C6D3B]">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <div className="font-serif-display text-xl text-[#23201C]">
                  Your bag is empty
                </div>
                <p className="text-xs text-[#6B6354] max-w-xs">
                  Discover singular mid-century cameras, horology, and archival leather pieces in the vault catalog.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FBF9F5] bg-[#23201C] rounded-lg hover:bg-[#3D372F] transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="p-3.5 bg-[#F4EDE1] border border-[#DDD3C2] rounded-xl flex gap-3.5 relative group"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    className="w-20 h-20 object-cover rounded-lg bg-[#EAE0CF] shrink-0 border border-[#DDD3C2]"
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pr-6">
                        <span className="text-[10px] uppercase tracking-wider text-[#8C6D3B] font-semibold truncate">
                          {product.category} · {product.era}
                        </span>
                      </div>
                      <h4 className="font-serif-display text-base font-medium text-[#23201C] truncate">
                        {product.title}
                      </h4>
                      <div className="text-xs font-semibold text-[#23201C] font-mono tabular-nums mt-0.5">
                        ${product.price.toLocaleString()}
                      </div>
                    </div>

                    {/* Stepper & Subtotal */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-[#DDD3C2] rounded bg-[#FAF7F0] text-xs">
                        <button
                          onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                          className="px-2 py-0.5 text-[#5C5549] hover:bg-[#EAE0CF]"
                        >
                          -
                        </button>
                        <span className="px-2 font-mono font-medium text-[#23201C]">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                          className="px-2 py-0.5 text-[#5C5549] hover:bg-[#EAE0CF]"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-xs font-semibold font-mono text-[#23201C] tabular-nums">
                        ${(product.price * quantity).toLocaleString()}
                      </span>
                    </div>

                    {/* Remove button */}
                    <button
                      onClick={() => onRemoveItem(product.id)}
                      className="absolute top-3 right-3 text-[#968D7D] hover:text-[#B91C1C] transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#E2D7C4] bg-[#F5EFE4] space-y-3.5">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#6B6354]">
                  <span>Vault Subtotal</span>
                  <span className="font-mono text-[#23201C] tabular-nums">
                    ${subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-[#6B6354]">
                  <span>Insured Courier Transit</span>
                  <span className="font-mono text-[#23201C] tabular-nums">
                    {isFreeShipping ? 'Complimentary' : `$${shippingCost}`}
                  </span>
                </div>
                <div className="pt-2 border-t border-[#E2D7C4] flex justify-between text-sm font-semibold text-[#23201C]">
                  <span>Total Acquisition Due</span>
                  <span className="font-mono text-base tabular-nums">
                    ${total.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onCheckout();
                }}
                className="w-full py-3.5 px-4 bg-[#23201C] hover:bg-[#3D372F] text-[#FBF9F5] text-xs uppercase tracking-wider font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Begin Insured Acquisition</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <div className="text-[11px] text-center text-[#7A7162] flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8C6D3B]" />
                <span>Each relic ships with registered tamper-evident seal</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
