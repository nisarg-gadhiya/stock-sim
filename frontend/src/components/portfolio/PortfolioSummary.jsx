import React from "react";
import PortfolioChart from "./PortfolioChart";
import { usePortfolio } from "../../context/PortfolioContext";

const PortfolioSummary = () => {
  const { cashBalance, holdings } = usePortfolio();

  const stocksValue = holdings.reduce((sum, h) => {
    const current = h.currentPrice ?? h.avgBuyPrice;
    return sum + h.qty * current;
  }, 0);

  const investedValue = holdings.reduce((sum, h) => {
    return sum + h.qty * h.avgBuyPrice;
  }, 0);

  const totalValue = cashBalance + stocksValue;

  const totalReturnPercent =
    investedValue === 0
      ? 0
      : ((stocksValue - investedValue) / investedValue) * 100;

  return (
    <div className="flex flex-col border border-slate-600 rounded-xl bg-[#1D283A] p-6">
      <PortfolioChart />

      <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-700">
        {/* CASH */}
        <div className="flex flex-col gap-1">
          <span className="text-sm text-slate-400">Cash</span>
          <span className="text-lg font-semibold">
            ${cashBalance.toFixed(2)}
          </span>
        </div>

        {/* STOCKS */}
        <div className="flex flex-col gap-1">
          <span className="text-sm text-slate-400">Stocks</span>
          <span className="text-lg font-semibold">
            ${stocksValue.toFixed(2)}
          </span>
        </div>

        {/* TOTAL RETURN */}
        <div className="flex flex-col gap-1">
          <span className="text-sm text-slate-400">
            Total Return
          </span>

          <span
            className={`text-lg font-semibold ${
              totalReturnPercent >= 0
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {totalReturnPercent >= 0 ? "+" : ""}
            {totalReturnPercent.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSummary;
