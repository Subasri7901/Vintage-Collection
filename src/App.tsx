/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ConsignmentModal } from './components/ConsignmentModal';
import { SpotlightSection } from './components/SpotlightSection';
import { ProvenanceSection } from './components/ProvenanceSection';
import { Footer } from './components/Footer';

import { PRODUCTS } from './data/products';
import { Product, CartItem, Category, SortOption } from './types';
import { Check, ShieldAlert, Sparkles } from 'lucide-react';

export default function App() {
  // Persistence state
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('atelier_cart');
      return saved ? JSON.parse(saved) : [
        { product: PRODUCTS[0], quantity: 1 } // sample pre-seeded authentic item
      ];
    } catch {
      return [{ product: PRODUCTS[0], quantity: 1 }];
    }
  });

  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('atelier_wishlist');
      return saved ? JSON.parse(saved) : ['prod-chronometer-1888'];
    } catch {
      return ['prod-chronometer-1888'];
    }
  });

  // Filter & Search state
  const [selectedCategory, setSelectedCategory] = useState<Category>('All Curios');
  const [selectedEra, setSelectedEra] = useState<string>('All Eras');
  const [selectedCondition, setSelectedCondition] = useState<string>('All Conditions');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<SortOption>('curated');

  // Modals & Drawers state
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isConsignmentOpen, setIsConsignmentOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('catalog');

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('atelier_cart', JSON.stringify(cart));
    } catch {
      // Ignore
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('atelier_wishlist', JSON.stringify(wishlistIds));
    } catch {
      // Ignore
    }
  }, [wishlistIds]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Cart actions
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added "${product.title}" to Archive Bag`);
  };

  const handleUpdateQuantity = (productId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Wishlist actions
  const handleToggleWishlist = (product: Product) => {
    if (wishlistIds.includes(product.id)) {
      setWishlistIds((prev) => prev.filter((id) => id !== product.id));
      showToast(`Removed "${product.title}" from saved relics`);
    } else {
      setWishlistIds((prev) => [...prev, product.id]);
      showToast(`Saved "${product.title}" to private collection`);
    }
  };

  const wishlistProducts = useMemo(() => {
    return PRODUCTS.filter((p) => wishlistIds.includes(p.id));
  }, [wishlistIds]);

  const handleMoveToCart = (product: Product) => {
    handleAddToCart(product, 1);
    setWishlistIds((prev) => prev.filter((id) => id !== product.id));
  };

  // Filtered Products computation
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category
    if (selectedCategory !== 'All Curios') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Era
    if (selectedEra !== 'All Eras') {
      if (selectedEra.includes('Victorian')) {
        result = result.filter((p) => p.eraTag === 'Victorian');
      } else if (selectedEra.includes('Art Deco')) {
        result = result.filter((p) => p.eraTag === 'Art Deco');
      } else if (selectedEra.includes('Mid-Century')) {
        result = result.filter((p) => p.eraTag === 'Mid-Century');
      } else if (selectedEra.includes('Analog 70s')) {
        result = result.filter((p) => p.eraTag === 'Analog 70s');
      }
    }

    // Condition
    if (selectedCondition !== 'All Conditions') {
      result = result.filter((p) => p.condition === selectedCondition);
    }

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.maker.toLowerCase().includes(q) ||
          p.origin.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.era.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'era-asc') {
      result.sort((a, b) => parseInt(a.era) - parseInt(b.era));
    } else if (sortBy === 'era-desc') {
      result.sort((a, b) => parseInt(b.era) - parseInt(a.era));
    }

    return result;
  }, [selectedCategory, selectedEra, selectedCondition, searchQuery, sortBy]);

  const isFiltered =
    selectedCategory !== 'All Curios' ||
    selectedEra !== 'All Eras' ||
    selectedCondition !== 'All Conditions' ||
    searchQuery.trim() !== '';

  const handleResetFilters = () => {
    setSelectedCategory('All Curios');
    setSelectedEra('All Eras');
    setSelectedCondition('All Conditions');
    setSearchQuery('');
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'catalog') {
      const el = document.getElementById('catalog');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'story') {
      const el = document.getElementById('story');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'provenance') {
      const el = document.getElementById('story');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#23201C]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#23201C] text-white px-4 py-2.5 rounded-lg shadow-lg text-xs flex items-center gap-2 border border-[#443E36] animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Sparkles className="w-3.5 h-3.5 text-[#D9A74A]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Bar Header */}
      <Header
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenConsignment={() => setIsConsignmentOpen(true)}
        onSearchClick={() => {
          document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
        }}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Hero Archival Banner */}
      <Hero
        onExploreClick={() => {
          document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onSelectCategory={(cat) => setSelectedCategory(cat as Category)}
      />

      {/* Curator's Marquee Spotlight */}
      <SpotlightSection
        products={PRODUCTS}
        onQuickView={(p) => setQuickViewProduct(p)}
        onAddToCart={(p) => handleAddToCart(p, 1)}
      />

      {/* Main Catalog Viewport */}
      <main id="catalog" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E7DFD3] pb-6">
          <div>
            <div className="text-xs uppercase tracking-widest font-semibold text-[#8C6D3B] mb-1">
              Singular Verified Inventory
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-medium text-[#23201C]">
              The Vault Catalog
            </h2>
          </div>
          <div className="text-xs text-[#6B6354] max-w-xs text-left sm:text-right">
            Hand-inspected mechanical curiosities, analog optics, and archival leather from 1888 to 1975.
          </div>
        </div>

        {/* Filter Bar */}
        <FilterBar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedEra={selectedEra}
          onSelectEra={setSelectedEra}
          selectedCondition={selectedCondition}
          onSelectCondition={setSelectedCondition}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
          totalCount={PRODUCTS.length}
          filteredCount={filteredProducts.length}
          onResetFilters={handleResetFilters}
          isFiltered={isFiltered}
        />

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center space-y-4 bg-[#F5EFE4] rounded-2xl border border-[#DDD3C2] p-8">
            <ShieldAlert className="w-10 h-10 text-[#8C6D3B] mx-auto opacity-70" />
            <h3 className="font-serif-display text-2xl font-medium text-[#23201C]">
              No Curios Matched Your Inquiry
            </h3>
            <p className="text-xs text-[#5C5549] max-w-sm mx-auto">
              We couldn't locate any lots matching your filter criteria. Try clearing filters or searching for another era or maker.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 bg-[#23201C] text-white text-xs uppercase tracking-wider font-semibold rounded-lg hover:bg-[#3D372F] transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setQuickViewProduct(p)}
                onAddToCart={(p) => handleAddToCart(p, 1)}
                onToggleWishlist={(p) => handleToggleWishlist(p)}
                isWishlisted={wishlistIds.includes(product.id)}
                isInCart={cart.some((item) => item.product.id === product.id)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Provenance & Restoration Protocol Section */}
      <ProvenanceSection />

      {/* Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setSelectedCategory(cat as Category);
          document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenConsignment={() => setIsConsignmentOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(p, qty) => {
          handleAddToCart(p, qty);
          setQuickViewProduct(null);
        }}
        onToggleWishlist={(p) => handleToggleWishlist(p)}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
        isInCart={quickViewProduct ? cart.some((i) => i.product.id === quickViewProduct.id) : false}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlistProducts}
        onRemoveWishlist={(id) => {
          setWishlistIds((prev) => prev.filter((pId) => pId !== id));
        }}
        onMoveToCart={handleMoveToCart}
        onQuickView={(p) => setQuickViewProduct(p)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        onOrderCompleted={() => {
          setCart([]);
        }}
      />

      {/* Consignment Appraisal Modal */}
      <ConsignmentModal
        isOpen={isConsignmentOpen}
        onClose={() => setIsConsignmentOpen(false)}
      />
    </div>
  );
}
