import React, { useState } from 'react';
import { X, CheckCircle2, Upload, FileText, Send, Sparkles } from 'lucide-react';

interface ConsignmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsignmentModal: React.FC<ConsignmentModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    collectorName: '',
    email: '',
    phone: '',
    itemTitle: '',
    estimatedEra: '1940s Mid-Century',
    makerOrigin: '',
    conditionDescription: '',
    provenanceHistory: '',
    targetAppraisal: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#FAF7F0] border border-[#E0D5C3] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-[#E0D5C3] flex items-center justify-between bg-[#F5EFE4]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#8C6D3B]" />
            <h3 className="font-serif-display text-xl font-medium text-[#23201C]">
              Consign or Appraise an Heirloom
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#5C5549] hover:bg-[#EAE0CF]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#E5EFE2] text-[#3D5B32] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif-display text-2xl font-medium text-[#23201C]">
                Consignment Dossier Received
              </h4>
              <p className="text-xs text-[#5C5549] max-w-md mx-auto leading-relaxed">
                Our Senior Antiquities Conservator will review your submission, verify historical auction records, and return a preliminary valuation within 24 hours.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#23201C] text-white text-xs uppercase tracking-wider font-semibold rounded-lg hover:bg-[#3D372F] cursor-pointer"
                >
                  Close Dossier
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <p className="text-[#5C5549] leading-relaxed">
                We invite private collectors, estates, and historians to present rare mechanical, optical, or artisanal antiquities for acquisition or commission consignment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#4A4338] mb-1 font-medium">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Julian Montgomery"
                    value={formData.collectorName}
                    onChange={(e) => setFormData({ ...formData, collectorName: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F3EDE2] border border-[#DDD3C2] rounded-lg text-[#23201C] focus:outline-none focus:border-[#8C6D3B]"
                  />
                </div>

                <div>
                  <label className="block text-[#4A4338] mb-1 font-medium">Contact Email</label>
                  <input
                    type="email"
                    required
                    placeholder="julian@collector.net"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F3EDE2] border border-[#DDD3C2] rounded-lg text-[#23201C] focus:outline-none focus:border-[#8C6D3B]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[#4A4338] mb-1 font-medium">Item Name & Maker</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 1935 Rolleiflex Standard 6x6 TLR or English Marine Sextant"
                    value={formData.itemTitle}
                    onChange={(e) => setFormData({ ...formData, itemTitle: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F3EDE2] border border-[#DDD3C2] rounded-lg text-[#23201C] focus:outline-none focus:border-[#8C6D3B]"
                  />
                </div>

                <div>
                  <label className="block text-[#4A4338] mb-1 font-medium">Approximate Era</label>
                  <select
                    value={formData.estimatedEra}
                    onChange={(e) => setFormData({ ...formData, estimatedEra: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F3EDE2] border border-[#DDD3C2] rounded-lg text-[#23201C] focus:outline-none focus:border-[#8C6D3B]"
                  >
                    <option value="Victorian (Pre-1918)">Victorian (Pre-1918)</option>
                    <option value="1920s-1930s Art Deco">1920s-1930s Art Deco</option>
                    <option value="1940s-1950s Mid-Century">1940s-1950s Mid-Century</option>
                    <option value="1960s-1970s Analog Era">1960s-1970s Analog Era</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#4A4338] mb-1 font-medium">Target Valuation ($ USD)</label>
                  <input
                    type="text"
                    placeholder="e.g. $1,200 or Open for Valuation"
                    value={formData.targetAppraisal}
                    onChange={(e) => setFormData({ ...formData, targetAppraisal: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F3EDE2] border border-[#DDD3C2] rounded-lg text-[#23201C] focus:outline-none focus:border-[#8C6D3B]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[#4A4338] mb-1 font-medium">Condition & Provenance Background</label>
                  <textarea
                    rows={3}
                    placeholder="Share any serial marks, original receipts, functioning status, or familial provenance..."
                    value={formData.provenanceHistory}
                    onChange={(e) => setFormData({ ...formData, provenanceHistory: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F3EDE2] border border-[#DDD3C2] rounded-lg text-[#23201C] focus:outline-none focus:border-[#8C6D3B] resize-none"
                  />
                </div>
              </div>

              {/* Upload simulation placeholder */}
              <div className="p-4 border-2 border-dashed border-[#DDD3C2] rounded-xl text-center text-[#7A7162] hover:border-[#8C6D3B] transition-colors cursor-pointer bg-[#F7F2E8]">
                <Upload className="w-5 h-5 mx-auto mb-1 text-[#8C6D3B]" />
                <span className="font-medium text-[#23201C]">Attach High-Resolution Photographs or Markings</span>
                <span className="block text-[11px] text-[#8A8172]">JPEG, PNG, TIFF up to 25MB (macro shots of serial numbers encouraged)</span>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#23201C] hover:bg-[#3D372F] text-white text-xs uppercase tracking-wider font-semibold rounded-lg flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Dossier to Curator</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
