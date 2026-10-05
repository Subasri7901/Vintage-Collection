import React from 'react';
import { Search, SlidersHorizontal, X, ArrowUpDown } from 'lucide-react';
import { CATEGORIES, ERAS } from '../data/products';
import { Category, Condition, SortOption } from '../types';

interface FilterBarProps {
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
  selectedEra: string;
  onSelectEra: (era: string) => void;
  selectedCondition: string;
  onSelectCondition: (condition: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  totalCount: number;
  filteredCount: number;
  onResetFilters: () => void;
  isFiltered: boolean;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedEra,
  onSelectEra,
  selectedCondition,
  onSelectCondition,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalCount,
  filteredCount,
  onResetFilters,
  isFiltered
}) => {
  const [showAdvanced, setShowAdvanced] = React.useState(false);

  return (
    <div className="space-y-4">
      {/* Category Segmented Bar & Search Row */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Category Scrollable Segmented Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none text-xs font-medium">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat as Category)}
                className={`px-3.5 py-2 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#23201C] text-[#FBF9F5] shadow-xs'
                    : 'bg-[#F2ECE1] text-[#5C5549] hover:bg-[#E8DFCFA0] hover:text-[#23201C]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search & Sort Controls */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Search Input */}
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 text-[#8A8172] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search maker, era, or curio..."
              className="w-full pl-9 pr-8 py-2 text-xs bg-[#F2ECE1] border border-[#DDD3C2] rounded-lg text-[#23201C] placeholder-[#8A8172] focus:outline-none focus:border-[#8C6D3B] focus:bg-[#FAF7F0] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8A8172] hover:text-[#23201C]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Toggle More Filters */}
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs rounded-lg border transition-colors cursor-pointer whitespace-nowrap ${
              showAdvanced || isFiltered
                ? 'bg-[#EAE1D1] border-[#8C6D3B] text-[#23201C]'
                : 'bg-[#F2ECE1] border-[#DDD3C2] text-[#5C5549] hover:text-[#23201C]'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters</span>
            {isFiltered && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D3B]" />
            )}
          </button>

          {/* Sort Dropdown */}
          <div className="relative flex items-center gap-1 bg-[#F2ECE1] border border-[#DDD3C2] rounded-lg px-2.5 py-1.5 text-xs text-[#5C5549]">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#8A8172]" />
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="bg-transparent border-none text-[#23201C] text-xs focus:outline-none cursor-pointer pr-1"
            >
              <option value="curated">Curated Order</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="era-asc">Era: Oldest First</option>
              <option value="era-desc">Era: Newest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Advanced Filter Drawer (Era & Condition) */}
      {showAdvanced && (
        <div className="p-4 bg-[#F5EFE4] border border-[#E0D5C3] rounded-xl space-y-4 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Era Filter */}
            <div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-[#7A7162] mb-2">
                Historical Period / Era
              </div>
              <div className="flex flex-wrap gap-1.5">
                {ERAS.map((era) => (
                  <button
                    key={era}
                    onClick={() => onSelectEra(era)}
                    className={`px-3 py-1.5 rounded-md text-xs transition-colors cursor-pointer ${
                      selectedEra === era
                        ? 'bg-[#23201C] text-white'
                        : 'bg-[#EAE1D1] text-[#4A4338] hover:bg-[#DDD3C2]'
                    }`}
                  >
                    {era}
                  </button>
                ))}
              </div>
            </div>

            {/* Condition Filter */}
            <div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-[#7A7162] mb-2">
                Archival Grade & Condition
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['All Conditions', 'Museum Grade', 'Pristine Patina', 'Restored Functional', 'Collector Original'].map((cond) => (
                  <button
                    key={cond}
                    onClick={() => onSelectCondition(cond)}
                    className={`px-3 py-1.5 rounded-md text-xs transition-colors cursor-pointer ${
                      selectedCondition === cond
                        ? 'bg-[#23201C] text-white'
                        : 'bg-[#EAE1D1] text-[#4A4338] hover:bg-[#DDD3C2]'
                    }`}
                  >
                    {cond}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Reset Action & Counts */}
          <div className="pt-2 flex items-center justify-between border-t border-[#E0D5C3]/70 text-xs">
            <span className="text-[#6B6354]">
              Displaying <strong className="text-[#23201C] tabular-nums">{filteredCount}</strong> of <span className="tabular-nums">{totalCount}</span> cataloged items
            </span>

            {isFiltered && (
              <button
                onClick={onResetFilters}
                className="text-[#8C6D3B] hover:text-[#5B4726] font-semibold underline underline-offset-2 cursor-pointer"
              >
                Clear all active filters
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
