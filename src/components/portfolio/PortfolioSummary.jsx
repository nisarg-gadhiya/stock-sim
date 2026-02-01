import React from "react";
import PortfolioChart from "./PortfolioChart";

const PortfolioSummary = () => {
  return (
    <div className="flex flex-col border rounded-xl bg-[#1D283A] p-6">

      <PortfolioChart />

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
    </div>
  );
};

export default PortfolioSummary;
