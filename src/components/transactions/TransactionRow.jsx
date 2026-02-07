import React from "react";

const TransactionRow = ({ tx }) => {
  if (!tx) return null;

  const { type, symbol, company, shares, price, date } = tx;

  const totalAmount = (shares ?? 0) * (price ?? 0);

  return (
    <div className="flex items-center justify-between px-5 py-4 rounded-xl border border-slate-700 bg-[#1D283A] hover:bg-[#24324a] transition-all duration-300 cursor-pointer">
      <div className="flex items-start gap-4">
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${
            type === "BUY"
              ? "bg-green-500/15 text-green-500"
              : "bg-red-500/15 text-red-500"
          }`}
        >
          {type}
        </span>

        <div className="flex flex-col">
          <span className="font-semibold">{symbol}</span>
          <span className="text-sm text-slate-400">{company}</span>
          <span className="text-xs text-slate-500 mt-1">{date}</span>
        </div>
      </div>

      <div className="text-right">
        <p className="text-sm text-slate-300">
          {shares} shares @ ${Number(price || 0).toFixed(2)}
        </p>

        <p
          className={`text-sm font-bold mt-1 ${
            type === "BUY" ? "text-red-500" : "text-green-500"
          }`}
        >
          {type === "BUY" ? "-" : "+"}$
          {totalAmount.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default TransactionRow;
