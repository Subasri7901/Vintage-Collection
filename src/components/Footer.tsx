import React, { useState } from 'react';
import { Send, CheckCircle2, MapPin, Clock, Shield } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (category: string) => void;
  onOpenConsignment: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenConsignment,
  onNavigate
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#1C1917] text-[#D6CEC1] border-t border-[#36322C]">
      {/* Top Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif-display text-2xl font-semibold tracking-wider text-[#FAF7F0] block">
              ATELIER & RELIC
            </span>
            <p className="text-xs text-[#9E9587] leading-relaxed max-w-sm">
              Archival conservators and purveyors of singular 19th & 20th century mechanical horology, analog photographic optics, architectural brass, and handcrafted leather artifacts.
            </p>

            <div className="pt-2 text-xs space-y-2 text-[#B3AA9B]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8C6D3B] shrink-0" />
                <span>Bloomsbury Vault: 14 Great Russell St, London WC1B 3ND</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#8C6D3B] shrink-0" />
                <span>Private viewings Tuesday – Saturday by prior reservation</span>
              </div>
            </div>
          </div>

          {/* Catalog Disciplines */}
          <div className="space-y-3 text-xs">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              The Vault Collection
            </div>
            <ul className="space-y-2 text-[#9E9587]">
              <li>
                <button
                  onClick={() => onSelectCategory('Analog Optics')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Analog Optics & Rangefinders
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Horology & Marine')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Horology & Marine Chronometers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Architectural Brass')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Architectural Brass & Desk Oddities
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Leather & Travel')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Bridle Leather & Travel Satchels
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Typographic & Paper')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Mechanical Typewriters & Paper
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Audio & Vinyl')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Swiss Audiophile Turntables
                </button>
              </li>
            </ul>
          </div>

          {/* Curatorial Protocol */}
          <div className="space-y-3 text-xs">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Curatorial Care
            </div>
            <ul className="space-y-2 text-[#9E9587]">
              <li>
                <button
                  onClick={() => onNavigate('story')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Restoration Standards
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('provenance')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Provenance Dossiers
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenConsignment}
                  className="hover:text-white transition-colors cursor-pointer text-left text-[#C8A05C]"
                >
                  Consignment & Appraisals
                </button>
              </li>
              <li>
                <span className="hover:text-white transition-colors">
                  Brass & Leather Patina Guide
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors">
                  Insured Armored Dispatch
                </span>
              </li>
            </ul>
          </div>

          {/* The Gazette Newsletter */}
          <div className="space-y-3 text-xs">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Archival Gazette
            </div>
            <p className="text-xs text-[#9E9587] leading-relaxed">
              Receive confidential catalog dispatches 48 hours prior to public vault releases.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#2A2622] rounded-lg text-[#88B87B] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Enrolled in Gazette dispatches.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="curator@estate.org"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-[#2A2622] border border-[#3E3831] rounded-lg text-white placeholder-[#787063] focus:outline-none focus:border-[#8C6D3B] text-xs"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 bg-[#8C6D3B] hover:bg-[#A38249] text-white rounded cursor-pointer transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-[10px] text-[#787063]">
                  No spam. We dispatch twice per month maximum.
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#2C2824] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#787063] gap-4">
          <div>
            © {new Date().getFullYear()} Atelier & Relic Antiquarians Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Terms of Acquisition</span>
            <span aria-hidden="true">·</span>
            <span>Provenance Registry</span>
            <span aria-hidden="true">·</span>
            <span>Climate Transit Protocol</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
