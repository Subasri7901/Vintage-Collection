import { Product } from '../types';

import cameraImg from '../assets/images/item_vintage_camera_1791181890301.jpg';
import chronometerImg from '../assets/images/item_brass_chronometer_1791181903496.jpg';
import lampImg from '../assets/images/item_banker_lamp_1791181917004.jpg';
import satchelImg from '../assets/images/item_leather_satchel_1791181928336.jpg';
import heroImg from '../assets/images/hero_vintage_archival_1791181870640.jpg';

export { heroImg };

export const PRODUCTS: Product[] = [
  {
    id: 'prod-leica-m3-1954',
    archiveId: 'REL-OPT-1954-04',
    title: '1954 Leica M3 Double-Stroke with 50mm Summicron f/2',
    era: '1954',
    eraTag: 'Mid-Century',
    category: 'Analog Optics',
    maker: 'Ernst Leitz GmbH',
    origin: 'Wetzlar, Germany',
    price: 2650,
    condition: 'Restored Functional',
    description: 'An early production double-stroke chassis with glass-plate film pressure plate. Equipped with original brass-mount rigid Summicron 50mm f/2 collapsible lens.',
    provenanceStory: 'Acquired from the private estate of a photojournalist based in Zurich. Completely overhauled by our master technician: mechanical escapements flushed, rangefinder mirrors recoated, and shutter curtain timing verified accurate to within 1/1000th second.',
    specifications: {
      'Mount': 'Leica M bayonet',
      'Shutter': 'Horizontal rubberized cloth focal-plane, 1s - 1/1000s + B',
      'Viewfinder': '0.91x magnification with automatic parallax compensation',
      'Serial Number': 'No. 703 418 (Early 1954 Batch)',
      'Aperture Blades': '10-blade diaphragm with circular bokeh profile'
    },
    inStock: true,
    image: cameraImg,
    featured: true,
    dimensions: '138 × 77 × 36 mm',
    weight: '580g (body only)',
    serialNumber: 'SN-703418',
    restorationNotes: 'Synthetic Swiss Moebius 9010 lubricant applied; rangefinder prism collimated at infinity; vulcanite grip preserved with natural bees-wax.'
  },
  {
    id: 'prod-chronometer-1888',
    archiveId: 'REL-HOR-1888-12',
    title: '1888 Royal Admiralty Gilded Brass Marine Chronometer',
    era: '1888',
    eraTag: 'Victorian',
    category: 'Horology & Marine',
    maker: 'Thomas Mercer & Sons',
    origin: 'St. Albans, Hertfordshire, England',
    price: 3850,
    condition: 'Museum Grade',
    description: 'A genuine gimballed nautical two-day chronometer bearing the British Admiralty broad arrow engraving, set in a double-tiered solid English mahogany case with bone inlay.',
    provenanceStory: 'Originally commissioned for HMS Egeria during hydrographic survey voyages across the Pacific. Maintained in naval storage at Greenwich until deaccessioned in 1968.',
    specifications: {
      'Movement': 'Spring detent chronometer escapement with helical balance spring',
      'Reserve': '56-hour winding reserve indicator with original brass key',
      'Dial': 'Silvered brass with hand-engraved Roman numerals and blued steel hands',
      'Case': 'Heavy cast brass bowl in brass gimbal ring and lockable mahogany chest',
      'Accuracy': 'Maintains ±1.2 seconds variance over 48 hours'
    },
    inStock: true,
    image: chronometerImg,
    featured: true,
    dimensions: '190 × 190 × 205 mm (cased)',
    weight: '4.8 kg cased',
    serialNumber: 'ADM-No. 4921-M',
    restorationNotes: 'Gimbal bearings balanced; balance jewel checked under 40x magnification; unlacquered original brass retaining subtle warm oceanic patina.'
  },
  {
    id: 'prod-emeralite-lamp-1948',
    archiveId: 'REL-LGT-1948-02',
    title: '1948 Emeralite No. 8734 Bankers Desk Lamp',
    era: '1948',
    eraTag: 'Mid-Century',
    category: 'Architectural Brass',
    maker: 'H.G. McFaddin & Co.',
    origin: 'New York City, USA',
    price: 780,
    condition: 'Pristine Patina',
    description: 'Classic Manhattan law library desk lamp featuring an authentic blown green cased glass shade stamped "Made in Czechoslovakia" and weighted cast bronze plinth.',
    provenanceStory: 'Salvaged during the architectural deconstruction of the Equitable Life Building in Lower Manhattan. Untouched original patina with rich bronze undertones and vintage braided cord.',
    specifications: {
      'Shade': 'Original hand-blown emerald glass with milk white reflective interior',
      'Plinth': 'Solid cast bronze with ribbed pen tray groove',
      'Wiring': 'Rewired with modern UL-listed twisted brown cotton cord & bakelite inline switch',
      'Socket': 'Standard E26 porcelain socket, brass paddle pull-switch',
      'Voltage': '110V-240V compatible (amber warm LED filament bulb included)'
    },
    inStock: true,
    image: lampImg,
    featured: true,
    dimensions: '420 × 260 × 200 mm',
    weight: '3.6 kg',
    serialNumber: 'EMR-8734-B',
    restorationNotes: 'Porcelain socket insulated; glass inspected with zero chips or hairline cracks; brass hand-rubbed with carnauba wax.'
  },
  {
    id: 'prod-leather-satchel-1938',
    archiveId: 'REL-LTR-1938-19',
    title: '1938 Hand-Stitched Vegetable-Tanned Bridle Courier Satchel',
    era: '1938',
    eraTag: 'Art Deco',
    category: 'Leather & Travel',
    maker: 'Atelier Pellami Cuoio',
    origin: 'Florence, Tuscany, Italy',
    price: 940,
    condition: 'Collector Original',
    description: 'Thick 4mm Tuscan saddle hide hand-stitched with waxed linen cord. Solid unlacquered sand-cast brass roller buckles and reinforced gussets with a century of rich honey amber glow.',
    provenanceStory: 'Carried by an architectural surveyor across Tuscany through the late 1930s. Leather is supple, pliable, and treated with pure neatsfoot oil and beeswax balm.',
    specifications: {
      'Hide': 'Full-grain 10-ounce Tuscan pit-tanned bridle leather',
      'Hardware': 'Solid sand-cast unlacquered architectural brass',
      'Stitching': 'Two-needle saddle stitch with hand-waxed 4-ply Irish linen thread',
      'Capacity': 'Two main compartments accommodating 15-inch folio or laptop',
      'Strap': 'Adjustable 38mm shoulder belt with hand-burnished edge bevels'
    },
    inStock: true,
    image: satchelImg,
    featured: true,
    dimensions: '400 × 290 × 120 mm',
    weight: '1.75 kg',
    serialNumber: 'FI-CUOIO-3809',
    restorationNotes: 'Leather nourished through 3 cycles of organic tallow; hardware cleaned of surface grime while preserving deep bronze oxidation.'
  },
  {
    id: 'prod-typewriter-1962',
    archiveId: 'REL-TYP-1962-07',
    title: '1962 Olivetti Lettera 22 Portable Mechanical Typewriter',
    era: '1962',
    eraTag: 'Mid-Century',
    category: 'Typographic & Paper',
    maker: 'Olivetti & Co. (Design: Marcello Nizzoli)',
    origin: 'Ivrea, Piedmont, Italy',
    price: 690,
    condition: 'Restored Functional',
    description: 'Compasso d’Oro winning mid-century icon in muted sage lacquer. Features tactile mechanical basket action, snappy escapement, and red/black dual ribbon selector.',
    provenanceStory: 'Formally housed in the editorial room of a literary journal in Bologna. Stripped, degreased, ultrasonic cleaned, and fitted with fresh cotton ink ribbon.',
    specifications: {
      'Typeface': 'Pica 10 CPI serif font cast in tempered steel',
      'Keyboard': '42 keys producing 84 characters with manual carriage return bell',
      'Body': 'Die-cast aluminum monocoque with low-profile profile',
      'Accessories': 'Original textured canvas zippered carrying satchel and ribbon spool clips'
    },
    inStock: true,
    image: heroImg, // fallback using our rich archival still life
    featured: false,
    dimensions: '320 × 300 × 80 mm',
    weight: '3.7 kg',
    serialNumber: 'OL-IVR-1962-55',
    restorationNotes: 'Platen roller reconditioned for crisp keystroke imprint; drawband cord renewed; brand-new dual-color silk ribbon installed.'
  },
  {
    id: 'prod-turntable-1971',
    archiveId: 'REL-AUD-1971-15',
    title: '1971 Thorens TD-125 Mk II Electronic Audiophile Turntable',
    era: '1971',
    eraTag: 'Analog 70s',
    category: 'Audio & Vinyl',
    maker: 'Thorens-Franz AG',
    origin: 'Sainte-Croix, Switzerland',
    price: 1820,
    condition: 'Museum Grade',
    description: 'Precision cast-zinc 3.2kg sub-chassis platter driven by a 16-pole synchronous motor with Wien-bridge oscillator pitch control in an oiled walnut plinth.',
    provenanceStory: 'Carefully preserved by a classical audio engineer in Bern. Fully recapped with audiophile electrolytic capacitors and matched with an SME 3009 Series II tonearm.',
    specifications: {
      'Drive': 'Belt-driven via two-stage reduction with precision ground flat rubber belt',
      'Speeds': '16, 33⅓, and 45 RPM with neon stroboscope fine pitch tuning',
      'Platter': 'Dynamically balanced 3.2 kg non-magnetic zinc alloy platter',
      'Plinth': 'Solid oiled Swiss walnut with spring-isolated sub-chassis suspension'
    },
    inStock: true,
    image: chronometerImg, // fallback archival image
    featured: false,
    dimensions: '460 × 360 × 165 mm',
    weight: '14.5 kg',
    serialNumber: 'TH-CH-71042',
    restorationNotes: 'Motor bearing flushed and infused with synthetic spindle oil; brand new Swiss ground belt fitted; suspension springs leveled to 2.5Hz resonance.'
  },
  {
    id: 'prod-binoculars-1928',
    archiveId: 'REL-OPT-1928-09',
    title: '1928 Carl Zeiss Jena Deltrintem 8×30 Porro Prism Binoculars',
    era: '1928',
    eraTag: 'Art Deco',
    category: 'Analog Optics',
    maker: 'Carl Zeiss Jena',
    origin: 'Jena, Thuringia, Germany',
    price: 540,
    condition: 'Pristine Patina',
    description: 'Art Deco optical masterpiece engineered with Schott barium crown glass prisms, deeply knurled brass central focusing wheel, and volcanic hard rubber armor.',
    provenanceStory: 'Sourced from an Alpine mountaineering club registry in Innsbruck. Prisms are crystal-clear with zero fungus, clouding, or prism separation.',
    specifications: {
      'Magnification': '8× with 30mm objective clear aperture',
      'Field of View': '150 meters at 1000 meters (super-wide 8.5° angle)',
      'Prism System': 'Porro I design with hand-lapped optical flats',
      'Eyecups': 'Threaded vulcanite contour eye-relief collars'
    },
    inStock: true,
    image: cameraImg,
    featured: false,
    dimensions: '165 × 115 × 52 mm',
    weight: '520g',
    serialNumber: 'CZJ-154988',
    restorationNotes: 'Central axle lubricated with low-temperature grease; optical paths collimated on bench optical comparator.'
  },
  {
    id: 'prod-balance-scale-1912',
    archiveId: 'REL-BRS-1912-03',
    title: '1912 French Apothecary Solid Brass Balance Scale & Grain Weights',
    era: '1912',
    eraTag: 'Victorian',
    category: 'Architectural Brass',
    maker: 'Maison Deleuil Instruments',
    origin: 'Rue du Pont-de-Lodi, Paris, France',
    price: 860,
    condition: 'Collector Original',
    description: 'Balanced beam scale with agatine knife-edge bearings, suspended twin spun brass pans, and original velvet-lined mahogany drawer containing 12 solid brass gram weights.',
    provenanceStory: 'Used in an herbalist apothecary in the Marais district of Paris throughout the early 20th century. Incredible warm gilding and original verification stamp marks.',
    specifications: {
      'Material': 'Hand-turned solid architectural brass with natural amber lacquer',
      'Base': 'French mahogany plinth with leveling thumb-screws and spirit bubble',
      'Precision': 'Accurate down to 10 milligrams with knife-edge agate bearings',
      'Set': 'Complete 12-piece brass metric weight set from 1g to 500g'
    },
    inStock: true,
    image: lampImg,
    featured: false,
    dimensions: '380 × 340 × 160 mm',
    weight: '3.1 kg',
    serialNumber: 'PARIS-DEL-1912',
    restorationNotes: 'Agate knife-edge checked and cleaned; beam balanced to zero deviation; mahogany base treated with French wax polish.'
  }
];

export const CATEGORIES = [
  'All Curios',
  'Analog Optics',
  'Horology & Marine',
  'Architectural Brass',
  'Leather & Travel',
  'Typographic & Paper',
  'Audio & Vinyl'
] as const;

export const ERAS = [
  'All Eras',
  'Victorian (pre-1918)',
  'Art Deco (1920-30s)',
  'Mid-Century (1940-60s)',
  'Analog 70s'
] as const;
