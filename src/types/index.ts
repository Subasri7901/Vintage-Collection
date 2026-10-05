export type Category = 
  | 'All Curios'
  | 'Analog Optics'
  | 'Horology & Marine'
  | 'Architectural Brass'
  | 'Leather & Travel'
  | 'Typographic & Paper'
  | 'Audio & Vinyl';

export type EraTag = 'Victorian' | 'Art Deco' | 'Mid-Century' | 'Analog 70s';

export type Condition = 'Museum Grade' | 'Pristine Patina' | 'Restored Functional' | 'Collector Original';

export interface Product {
  id: string;
  archiveId: string;
  title: string;
  era: string;
  eraTag: EraTag;
  category: Category;
  maker: string;
  origin: string;
  price: number;
  condition: Condition;
  description: string;
  provenanceStory: string;
  specifications: Record<string, string>;
  inStock: boolean;
  image: string;
  featured: boolean;
  dimensions: string;
  weight: string;
  serialNumber: string;
  restorationNotes: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type SortOption = 'curated' | 'price-asc' | 'price-desc' | 'era-asc' | 'era-desc';
