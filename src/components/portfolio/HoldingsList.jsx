import React from "react";
import HoldingRow from "./HoldingRow";
import { usePortfolio } from "../../context/PortfolioContext";

const HoldingsList = () => {
  const { holdings } = usePortfolio();

  return (
    <div className="rounded-xl bg-[#1D283A] p-6 border border-white">

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Holdings</h2>
        <p className="text-sm text-slate-400">
          Your stock positions
        </p>
      </div>

      {holdings.length === 0 ? (
        <p className="text-slate-400 text-sm">
          No holdings yet. Buy a stock from Market.
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {holdings.map((stock) => (
            <HoldingRow
              key={stock.symbol}
              symbol={stock.symbol}
              company={stock.company}
              qty={stock.qty}
              avgBuyPrice={stock.avgBuyPrice}
              currentPrice={stock.currentPrice ?? stock.avgBuyPrice}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default HoldingsList;
