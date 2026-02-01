import React from "react";

const PortfolioSummary = () => {
  return (
    <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-700">

      <div className="flex flex-col gap-1">
        <span className="text-sm text-slate-400">
          Cash
        </span>
        <span className="text-lg font-semibold">
          $95,432.50
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-sm text-slate-400">
          Stocks
        </span>
        <span className="text-lg font-semibold">
          $5,525.48
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-sm text-slate-400">
          Total Return
        </span>
        <span className="text-lg font-semibold text-green-500">
          +0.46%
        </span>
      </div>

    </div>
  );
};

export default PortfolioSummary;
