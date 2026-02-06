import React from "react";

const TransactionRow = ({ tx }) => {
  const isBuy = tx.type === "BUY";
  const dateText = new Date(tx.timestamp).toLocaleString();

  return (
    <div className="flex items-center justify-between pb-4 border-b border-slate-700 last:border-none last:pb-0">
      {/* LEFT */}
      <div className="flex flex-col">
        <span className="font-semibold">{tx.symbol}</span>
        <span className="text-sm text-slate-400">{tx.company}</span>
        <span className="text-xs text-slate-500 mt-1">{dateText}</span>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col text-right">
        <span
          className={`font-semibold ${
            isBuy ? "text-green-500" : "text-red-500"
          }`}
        >
          {tx.type} {tx.qty}
        </span>

        <span className="text-sm text-slate-400">
          ${tx.price.toFixed(2)}
        </span>

        <span className="text-xs text-slate-500 mt-1">
          Total: ${tx.total.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default TransactionRow;
