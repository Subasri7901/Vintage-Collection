import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Lock, Award, PackageCheck, Printer, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderCompleted: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderCompleted
}) => {
  const [step, setStep] = useState<'details' | 'payment' | 'confirmed'>('details');
  const [formData, setFormData] = useState({
    fullName: 'Eleanor Vance',
    email: 'e.vance@archival-arts.org',
    phone: '+1 (555) 234-8901',
    address: '42 Old Burlington Street, Suite 4B',
    city: 'London',
    postalCode: 'W1S 3AO',
    country: 'United Kingdom',
    deliveryMethod: 'insured-express',
    paymentMethod: 'card',
    cardNumber: '•••• •••• •••• 4092',
    cardExpiry: '09/28',
    cardCvc: '•••'
  });

  const [orderReference, setOrderReference] = useState('');
  const [certificateId, setCertificateId] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal >= 500 ? 0 : 45;
  const total = subtotal + shipping;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const randomOrderNum = Math.floor(100000 + Math.random() * 900000);
    const certCode = `CERT-VAULT-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderReference(`REL-${randomOrderNum}`);
    setCertificateId(certCode);
    setStep('confirmed');
    onOrderCompleted();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#FAF7F0] border border-[#E0D5C3] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-[#E0D5C3] flex items-center justify-between bg-[#F5EFE4]">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#8C6D3B]" />
            <h3 className="font-serif-display text-xl font-medium text-[#23201C]">
              {step === 'confirmed' ? 'Acquisition Confirmed' : 'Insured Vault Acquisition'}
            </h3>
          </div>
          {step !== 'confirmed' && (
            <button
              onClick={onClose}
              className="p-1 rounded text-[#5C5549] hover:bg-[#EAE0CF]"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8">
          {step === 'details' && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStep('payment');
              }}
              className="space-y-6"
            >
              {/* Order Recap Banner */}
              <div className="p-3.5 bg-[#F2ECE1] border border-[#DDD3C2] rounded-xl flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-[#23201C]">{items.length} Curated Lot(s)</span>
                  <span className="text-[#6B6354] ml-2">· Handled by Bloomsbury Antiquarian Vault</span>
                </div>
                <span className="font-mono font-bold text-sm text-[#23201C] tabular-nums">
                  ${total.toLocaleString()}
                </span>
              </div>

              {/* Recipient Details */}
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-wider font-semibold text-[#7A7162]">
                  1. Recipient & Vault Delivery Address
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-[#5C5549] mb-1 font-medium">Full Legal Name</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2 bg-[#F3EDE2] border border-[#DDD3C2] rounded-lg text-[#23201C] focus:outline-none focus:border-[#8C6D3B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#5C5549] mb-1 font-medium">Email Dispatch Notice</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-[#F3EDE2] border border-[#DDD3C2] rounded-lg text-[#23201C] focus:outline-none focus:border-[#8C6D3B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#5C5549] mb-1 font-medium">Courier Contact Telephone</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-[#F3EDE2] border border-[#DDD3C2] rounded-lg text-[#23201C] focus:outline-none focus:border-[#8C6D3B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#5C5549] mb-1 font-medium">Country / Territory</label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3 py-2 bg-[#F3EDE2] border border-[#DDD3C2] rounded-lg text-[#23201C] focus:outline-none focus:border-[#8C6D3B]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[#5C5549] mb-1 font-medium">Street Address & Suite</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3 py-2 bg-[#F3EDE2] border border-[#DDD3C2] rounded-lg text-[#23201C] focus:outline-none focus:border-[#8C6D3B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#5C5549] mb-1 font-medium">City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 py-2 bg-[#F3EDE2] border border-[#DDD3C2] rounded-lg text-[#23201C] focus:outline-none focus:border-[#8C6D3B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#5C5549] mb-1 font-medium">Postal / Zip Code</label>
                    <input
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full px-3 py-2 bg-[#F3EDE2] border border-[#DDD3C2] rounded-lg text-[#23201C] focus:outline-none focus:border-[#8C6D3B]"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Protocol */}
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-wider font-semibold text-[#7A7162]">
                  2. Secure Transport Protocol
                </div>
                <div className="p-3 bg-[#EFE7DA] border border-[#DDD3C2] rounded-xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#8C6D3B]" />
                    <span className="font-medium text-[#23201C]">
                      Armored Climate & Shock Padded Express Courier
                    </span>
                  </div>
                  <span className="font-mono text-[#3D5B32] font-semibold">
                    {shipping === 0 ? 'Complimentary' : `$${shipping}`}
                  </span>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#23201C] hover:bg-[#3D372F] text-white text-xs uppercase tracking-wider font-semibold rounded-lg flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Proceed to Payment Settlement</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 'payment' && (
            <form onSubmit={handleSubmitOrder} className="space-y-6">
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-wider font-semibold text-[#7A7162]">
                  Select Settlement Method
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-colors ${
                      formData.paymentMethod === 'card'
                        ? 'bg-[#EAE0CF] border-[#8C6D3B] text-[#23201C]'
                        : 'bg-[#F3EDE2] border-[#DDD3C2] text-[#5C5549]'
                    }`}
                  >
                    <div className="font-semibold">Encrypted Card</div>
                    <div className="text-[11px] text-[#7A7162]">Visa, MC, Amex Concierge</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'wire' })}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-colors ${
                      formData.paymentMethod === 'wire'
                        ? 'bg-[#EAE0CF] border-[#8C6D3B] text-[#23201C]'
                        : 'bg-[#F3EDE2] border-[#DDD3C2] text-[#5C5549]'
                    }`}
                  >
                    <div className="font-semibold">Bank Wire Escrow</div>
                    <div className="text-[11px] text-[#7A7162]">For lots over $3,000</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-colors ${
                      formData.paymentMethod === 'cod'
                        ? 'bg-[#EAE0CF] border-[#8C6D3B] text-[#23201C]'
                        : 'bg-[#F3EDE2] border-[#DDD3C2] text-[#5C5549]'
                    }`}
                  >
                    <div className="font-semibold">Vault Handover COD</div>
                    <div className="text-[11px] text-[#7A7162]">Verify on courier arrival</div>
                  </button>
                </div>
              </div>

              {formData.paymentMethod === 'card' && (
                <div className="p-4 bg-[#F2ECE1] border border-[#DDD3C2] rounded-xl space-y-3 text-xs">
                  <div>
                    <label className="block text-[#5C5549] mb-1 font-medium">Card Number</label>
                    <input
                      type="text"
                      required
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#DDD3C2] rounded-lg font-mono text-[#23201C]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#5C5549] mb-1 font-medium">Expiration</label>
                      <input
                        type="text"
                        required
                        value={formData.cardExpiry}
                        onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#DDD3C2] rounded-lg font-mono text-[#23201C]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#5C5549] mb-1 font-medium">Security Code (CVC)</label>
                      <input
                        type="password"
                        required
                        value={formData.cardCvc}
                        onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#DDD3C2] rounded-lg font-mono text-[#23201C]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {formData.paymentMethod === 'wire' && (
                <div className="p-4 bg-[#F2ECE1] border border-[#DDD3C2] rounded-xl text-xs text-[#5C5549] space-y-2">
                  <div className="font-semibold text-[#23201C]">Atelier Escrow Account Routing</div>
                  <p>
                    Funds will be held in regulated escrow pending your 14-day physical inspection and serial audit.
                  </p>
                </div>
              )}

              {formData.paymentMethod === 'cod' && (
                <div className="p-4 bg-[#F2ECE1] border border-[#DDD3C2] rounded-xl text-xs text-[#5C5549] space-y-2">
                  <div className="font-semibold text-[#23201C]">White-Glove Courier Inspection First</div>
                  <p>
                    The bonded courier will unpack the relic for your physical inspection before signing off the settlement.
                  </p>
                </div>
              )}

              <div className="p-3.5 bg-[#FAF7F0] border border-[#DDD3C2] rounded-xl space-y-2 text-xs">
                <div className="flex justify-between text-[#6B6354]">
                  <span>Total Lots ({items.length})</span>
                  <span className="font-mono text-[#23201C]">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#6B6354]">
                  <span>Insured Courier & Conservation Seal</span>
                  <span className="font-mono text-[#3D5B32]">{shipping === 0 ? 'Complimentary' : `$${shipping}`}</span>
                </div>
                <div className="pt-2 border-t border-[#DDD3C2] flex justify-between text-sm font-bold text-[#23201C]">
                  <span>Final Acquisition Amount</span>
                  <span className="font-mono text-base">${total.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  className="text-xs text-[#6B6354] hover:text-[#23201C] underline cursor-pointer"
                >
                  ← Edit Address
                </button>

                <button
                  type="submit"
                  className="px-6 py-3 bg-[#23201C] hover:bg-[#3D372F] text-white text-xs uppercase tracking-wider font-semibold rounded-lg flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Authorize Final Acquisition</span>
                </button>
              </div>
            </form>
          )}

          {step === 'confirmed' && (
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 rounded-full bg-[#E5EFE2] text-[#3D5B32] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-[#23201C]">
                  Acquisition Successfully Registered
                </h3>
                <p className="text-xs text-[#6B6354] mt-1.5">
                  Order <span className="font-mono font-semibold text-[#23201C]">{orderReference}</span> is now entering climate conditioning for insured transit.
                </p>
              </div>

              {/* Physical Certificate Preview Card */}
              <div className="p-5 bg-[#F4EDE1] border-2 border-dashed border-[#D2C5B0] rounded-xl max-w-lg mx-auto text-left space-y-3">
                <div className="flex items-center justify-between border-b border-[#DDD3C2] pb-2">
                  <div className="flex items-center gap-1.5 text-xs font-serif-display font-bold tracking-wider text-[#23201C]">
                    <Award className="w-4 h-4 text-[#8C6D3B]" />
                    <span>CERTIFICATE OF PROVENANCE</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#8C6D3B]">{certificateId}</span>
                </div>

                <div className="text-xs text-[#5C5549] space-y-1 font-serif-display text-sm">
                  <div>Holder of Record: <strong className="text-[#23201C]">{formData.fullName}</strong></div>
                  <div>Destination: <strong className="text-[#23201C]">{formData.city}, {formData.country}</strong></div>
                  <div>Settlement: <span className="font-mono text-[#23201C] font-semibold">${total.toLocaleString()}</span></div>
                </div>

                <div className="text-[11px] text-[#7A7162] pt-2 border-t border-[#DDD3C2] flex items-center justify-between">
                  <span>Physical embossed wax seal enclosed with parcel</span>
                  <span className="text-[#3D5B32] font-semibold">Archived in Registry</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2.5 border border-[#DDD3C2] hover:bg-[#EAE0CF] rounded-lg text-xs font-medium text-[#23201C] flex items-center gap-2 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Collector Dossier</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#23201C] hover:bg-[#3D372F] text-white text-xs uppercase tracking-wider font-semibold rounded-lg cursor-pointer"
                >
                  Return to Vault
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
