import React, { useState, useEffect } from "react";

const TradePanel = ({ stock }) => {
  const [quantity, setQuantity] = useState(1);

  // reset quantity when stock changes
  useEffect(() => {
    setQuantity(1);
  }, [stock]);

  // 1️⃣ No stock selected → placeholder
  if (!stock) {
    return (
      <div className="bg-[#1D283A] p-6 rounded-xl border border-white h-fit">
        <h2 className="text-xl font-semibold mb-2">Trade</h2>
        <p className="text-slate-400">
          Select a stock from the list to start trading
        </p>
      </div>
    );
  }

  // 2️⃣ Stock selected → trade UI
  const totalCost = (stock.price * quantity).toFixed(2);

  return (
    <div className="bg-[#1D283A] p-6 rounded-xl border border-slate-600 h-fit">
      {/* Header */}
      <h2 className="text-xl font-semibold">Trade</h2>
      <p className="text-slate-400 mt-1">Buy {stock.symbol}</p>

      {/* Stock Info */}
      <div className="mt-6">
        <p className="text-sm text-slate-400">Stock</p>
        <p className="font-semibold text-lg">{stock.symbol}</p>
        <p className="text-sm text-slate-400">{stock.company}</p>
      </div>

      {/* Price */}
      <div className="mt-6">
        <p className="text-sm text-slate-400">Current Price</p>
        <p className="text-2xl font-bold">
          ${stock.price.toFixed(2)}
        </p>
      </div>

      {/* Quantity */}
      <div className="mt-6">
        <p className="text-sm font-medium mb-2">Quantity</p>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full px-4 py-3 rounded-xl bg-[#0f1729]
                     border border-slate-700 outline-none
                     focus:border-blue-500"
        />
      </div>

      {/* Total Cost */}
      <div className="mt-6 bg-[#223049] p-4 rounded-xl">
        <p className="text-sm text-slate-400">Total Cost</p>
        <p className="text-xl font-semibold">${totalCost}</p>
      </div>

      {/* Action Button */}
      <button
        className="mt-6 w-full py-3 rounded-xl font-semibold
                   bg-blue-500 hover:bg-blue-600 transition"
      >
        Buy Shares
      </button>
    </div>
  );
};

export default TradePanel;
