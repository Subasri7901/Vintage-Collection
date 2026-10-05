import React from 'react';
import { Bookmark, ShoppingBag, Eye, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
  isInCart: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  isInCart
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <article 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-[#F7F4EC] border border-[#E4DAC9] rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      {/* Visual Anchor / Image Container */}
      <div 
        onClick={() => onQuickView(product)}
        className="relative aspect-4/3 bg-[#EFE9DC] overflow-hidden cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-103"
        />

        {/* Top Floating Actions: Wishlist */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product);
            }}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            className={`p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer ${
              isWishlisted
                ? 'bg-[#8C6D3B] text-white shadow-xs'
                : 'bg-white/80 text-[#5C5549] hover:bg-white hover:text-[#23201C]'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Quick View Overlay on Hover */}
        <div 
          className={`absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center transition-opacity duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/90 backdrop-blur-sm text-xs font-medium text-[#23201C] shadow-xs">
            <Eye className="w-3.5 h-3.5" />
            <span>Examine Provenance</span>
          </span>
        </div>
      </div>

      {/* Product Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        {/* Unboxed Metadata (NO PILL BOXES) */}
        <div>
          <div className="flex items-center gap-1.5 text-xs text-[#7A7162] tracking-wider uppercase mb-1">
            <span>{product.maker}</span>
            <span aria-hidden="true">·</span>
            <span>{product.origin}</span>
            <span aria-hidden="true">·</span>
            <span>{product.era}</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onQuickView(product)}
            className="font-serif-display text-lg sm:text-xl font-medium text-[#23201C] line-clamp-1 hover:text-[#8C6D3B] transition-colors cursor-pointer"
          >
            {product.title}
          </h3>

          <p className="mt-1 text-xs text-[#5C5549] line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Quiet Condition & Price Row */}
        <div className="pt-2 border-t border-[#E8DFD0] flex items-center justify-between">
          <div>
            <div className="text-[11px] text-[#7A7162] font-medium">
              {product.condition}
            </div>
            <div className="text-base font-semibold text-[#23201C] font-mono tabular-nums">
              ${product.price.toLocaleString()}
            </div>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className={`px-3 py-2 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
              isInCart
                ? 'bg-[#EDE4D4] text-[#8C6D3B] border border-[#8C6D3B]/40'
                : 'bg-[#23201C] text-[#FBF9F5] hover:bg-[#3D372F]'
            }`}
          >
            {isInCart ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#8C6D3B]" />
                <span>In Bag</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Acquire</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};
