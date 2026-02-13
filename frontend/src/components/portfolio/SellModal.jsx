import React, { useEffect, useState } from "react";

const SellModal = ({ isOpen, onClose, holding, onConfirm, isProcessingSell }) => {
  const [qty, setQty] = useState(1);

  // reset qty when modal opens / holding changes
  useEffect(() => {
    if (isOpen) setQty(1);
  }, [isOpen, holding]);

  if (!isOpen || !holding) return null;

  const maxQty = holding.qty;
  const price = holding.currentPrice ?? holding.avgBuyPrice;
  const proceeds = qty * price;

  const handleConfirm = () => {
    if (isProcessingSell) return;
    if (qty <= 0) return;
    if (qty > maxQty) return;

    onConfirm(holding, qty);
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        onClick={() => {
          if (!isProcessingSell) onClose();
        }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-xl rounded-2xl border border-slate-500 bg-[#0f1729] p-8 shadow-xl animate-fadeInScale">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              Sell {holding.symbol}
            </h2>
            <p className="text-slate-400 mt-1">
              Current price: ${price.toFixed(2)}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-xl transition"
          >
            ✕
          </button>
        </div>

        {/* Quantity */}
        <div className="mt-8">
          <label className="block text-sm font-semibold mb-2">
            Quantity (Max: {maxQty})
          </label>

          <input
            type="number"
            min={1}
            max={maxQty}
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            className="w-full rounded-xl bg-[#0b1220] border border-slate-700 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Total Proceeds */}
        <div className="mt-6 rounded-xl bg-[#1D283A] px-6 py-5">
          <p className="text-slate-400 text-sm">
            Total Proceeds
          </p>
          <p className="text-3xl font-bold mt-2">
            ${proceeds.toFixed(2)}
          </p>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirm}
          disabled={isProcessingSell}
          className={`mt-7 w-full rounded-xl py-4 font-semibold transition ${
            isProcessingSell
              ? "bg-blue-300 cursor-not-allowed text-black"
              : "bg-blue-500 hover:bg-blue-600 text-black"
          }`}
        >
          {isProcessingSell ? "Processing..." : "Confirm Sale"}
        </button>

      </div>
    </div>
  );
};

export default SellModal;
