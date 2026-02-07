import React from "react";
import { usePortfolio } from "../../context/PortfolioContext";

const SummaryCard = () => {
  const { cashBalance, holdings } = usePortfolio();

  // Total holdings count
  const totalHoldings = holdings.length;

  // Total gain/loss (using currentPrice if available else avgBuyPrice)
  const totalGainLoss = holdings.reduce((sum, h) => {
    const current = h.currentPrice ?? h.avgBuyPrice;
    const invested = h.qty * h.avgBuyPrice;
    const currentValue = h.qty * current;
    return sum + (currentValue - invested);
  }, 0);

  const summaryData = [
    {
      summary: "Cash",
      value: cashBalance,
      type: "money",
    },
    {
      summary: "Total Gain/Loss",
      value: totalGainLoss,
      type: "gainloss",
    },
    {
      summary: "Total Holdings",
      value: totalHoldings,
      type: "count",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {summaryData.map((item) => (
        <div
          key={item.summary}
          className="rounded-xl bg-[#1D283A] p-6 flex flex-col gap-1 border border-slate-600"
        >
          <span className="text-sm text-slate-400">
            {item.summary}
          </span>

          <span
            className={`text-lg font-semibold ${
              item.type === "gainloss"
                ? item.value >= 0
                  ? "text-green-500"
                  : "text-red-500"
                : "text-white"
            }`}
          >
            {item.type === "money" || item.type === "gainloss"
              ? `${item.value >= 0 && item.type === "gainloss" ? "+" : ""}$${Math.abs(item.value).toFixed(2)}`
              : item.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SummaryCard;
