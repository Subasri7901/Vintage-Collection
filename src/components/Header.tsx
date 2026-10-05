import React from 'react';
import { ShoppingBag, Bookmark, Search, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenConsignment: () => void;
  onSearchClick: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenConsignment,
  onSearchClick,
  activeSection,
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E7DFD3] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); handleNavClick('catalog'); }}
          className="font-serif-display text-2xl sm:text-3xl font-semibold tracking-wider text-[#23201C] hover:text-[#8C6D3B] transition-colors whitespace-nowrap"
        >
          ATELIER & RELIC
        </a>

        {/* Zone 2: 4-5 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5C5549]">
          <button 
            onClick={() => handleNavClick('catalog')} 
            className={`hover:text-[#23201C] transition-colors whitespace-nowrap pb-0.5 ${
              activeSection === 'catalog' ? 'text-[#23201C] border-b-2 border-[#8C6D3B]' : ''
            }`}
          >
            Vault Catalog
          </button>
          <button 
            onClick={() => handleNavClick('story')} 
            className={`hover:text-[#23201C] transition-colors whitespace-nowrap pb-0.5 ${
              activeSection === 'story' ? 'text-[#23201C] border-b-2 border-[#8C6D3B]' : ''
            }`}
          >
            Restoration Standard
          </button>
          <button 
            onClick={() => handleNavClick('provenance')} 
            className={`hover:text-[#23201C] transition-colors whitespace-nowrap pb-0.5 ${
              activeSection === 'provenance' ? 'text-[#23201C] border-b-2 border-[#8C6D3B]' : ''
            }`}
          >
            Provenance Archive
          </button>
          <button 
            onClick={onOpenConsignment} 
            className="hover:text-[#23201C] transition-colors whitespace-nowrap"
          >
            Consign an Heirloom
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onSearchClick}
            aria-label="Search collection"
            className="p-2 text-[#5C5549] hover:text-[#23201C] hover:bg-[#F3ECE1] rounded-lg transition-colors"
          >
            <Search className="w-4.5 h-4.5" />
          </button>

          <button
            onClick={onOpenWishlist}
            aria-label="View Saved Relics"
            className="p-2 text-[#5C5549] hover:text-[#23201C] hover:bg-[#F3ECE1] rounded-lg transition-colors relative"
          >
            <Bookmark className="w-4.5 h-4.5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#8C6D3B] text-white text-[10px] font-semibold flex items-center justify-center rounded-full tabular-nums">
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#FBF9F5] bg-[#23201C] hover:bg-[#3D372F] rounded-lg transition-colors whitespace-nowrap"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Archive Bag</span>
            <span className="tabular-nums">({cartCount})</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#5C5549] hover:text-[#23201C]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E7DFD3] bg-[#FBF9F5] px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => handleNavClick('catalog')}
            className="block w-full text-left py-2 text-sm font-medium text-[#23201C]"
          >
            Vault Catalog
          </button>
          <button
            onClick={() => handleNavClick('story')}
            className="block w-full text-left py-2 text-sm font-medium text-[#5C5549]"
          >
            Restoration Standard
          </button>
          <button
            onClick={() => handleNavClick('provenance')}
            className="block w-full text-left py-2 text-sm font-medium text-[#5C5549]"
          >
            Provenance Archive
          </button>
          <button
            onClick={() => {
              onOpenConsignment();
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 text-sm font-medium text-[#8C6D3B]"
          >
            Consign an Heirloom
          </button>
        </div>
      )}
    </header>
  );
};
