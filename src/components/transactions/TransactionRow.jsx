import React from "react";

const TransactionRow = ({ tx }) => {
  const totalAmount = tx.qty * tx.price;
  const dateText = new Date(tx.timestamp).toLocaleString();

  return (
    <div className="flex items-center justify-between px-5 py-4 rounded-xl border border-slate-700 bg-[#1D283A] hover:bg-[#24324a] transition-all duration-300 cursor-pointer">

      {/* LEFT SIDE */}
      <div className="flex items-start gap-4">

        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full
            ${
              tx.type === "BUY"
                ? "bg-green-500/15 text-green-500"
                : "bg-red-500/15 text-red-500"
            }`}
        >
          {tx.type}
        </span>

        <div className="flex flex-col">
          <span className="font-semibold">{tx.symbol}</span>

          <span className="text-sm text-slate-400">
            {tx.company}
          </span>

          <span className="text-xs text-slate-500 mt-1">
            {dateText}
          </span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="text-right">
        <p className="text-sm text-slate-300">
          {tx.qty} shares @ ${tx.price.toFixed(2)}
        </p>

        <p
          className={`text-sm font-bold mt-1 ${
            tx.type === "BUY"
              ? "text-red-500"
              : "text-green-500"
          }`}
        >
          {tx.type === "BUY" ? "-" : "+"}$
          {totalAmount.toFixed(2)}
        </p>
      </div>

    </div>
  );
};

export default TransactionRow;
