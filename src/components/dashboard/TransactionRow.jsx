import React from "react";

const TransactionRow = ({
  symbol,
  company,
  type,
  qty,
  price,
}) => {
  return (
    <div className="flex items-center justify-between pb-4 border-b border-slate-700 last:border-b-0">

      <div className="flex flex-col">
        <span className="font-semibold">
          {symbol}
        </span>
        <span className="text-sm text-slate-400">
          {company}
        </span>
      </div>

      <div className="flex flex-col text-right">
        <span
          className={`font-semibold ${
            type === "BUY"
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {type} {qty}
        </span>

        <span className="text-sm text-slate-400">
          ${price.toFixed(2)}
        </span>
      </div>

    </div>
  );
};

export default TransactionRow;
