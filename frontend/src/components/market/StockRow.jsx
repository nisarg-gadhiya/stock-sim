import React from "react";

const StockRow = ({ stock, onSelect }) => {
  const { symbol, company, price, changePercent } = stock;

  return (
    <div
      onClick={() => onSelect(stock)}
      className="flex items-center justify-between px-4 py-3
                 rounded-xl border border-slate-600 cursor-pointer
                 hover:bg-[#24324a] transition"
    >
      <div>
        <p className="font-semibold">{symbol}</p>
        <p className="text-sm text-slate-400">{company}</p>
      </div>

      <div className="text-right">
        <p className="font-semibold">${price.toFixed(2)}</p>
        <p
          className={`text-sm ${
            changePercent > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {changePercent > 0 && "+"}
          {changePercent}%
        </p>
      </div>
    </div>
  );
};

export default StockRow;
