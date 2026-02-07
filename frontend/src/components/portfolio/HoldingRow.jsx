import React from "react";

const HoldingRow = ({
  symbol,
  company,
  qty,
  avgBuyPrice,
  currentPrice,
  onSellClick,
}) => {
  const currentValue = qty * currentPrice;

  const percentChange =
    ((currentPrice - avgBuyPrice) / avgBuyPrice) * 100;

  return (
    <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-slate-600 hover:bg-[#24324a] transition-all duration-300">
      <div className="flex flex-col">
        <span className="font-semibold">{symbol}</span>
        <span className="text-sm text-slate-400">
          {company}
        </span>

        <span className="text-sm text-slate-400 mt-2">
          {qty} shares @ ${avgBuyPrice.toFixed(2)}
        </span>
      </div>

      <div className="flex flex-col text-right gap-1">
        <span className="font-semibold text-slate-300">
          ${currentValue.toFixed(2)}
        </span>

        <span
          className={`text-sm ${
            percentChange > 0
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {percentChange > 0 && "+"}
          {percentChange.toFixed(2)}%
        </span>

        <button
          onClick={onSellClick}
          className="px-3 py-1 mt-1 text-sm rounded-lg bg-[#0b1220] border border-slate-700 hover:bg-[#162033] transition"
        >
          Sell
        </button>
      </div>
    </div>
  );
};

export default HoldingRow;
