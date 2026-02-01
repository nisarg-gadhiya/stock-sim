import React from "react";
import HoldingRow from "./HoldingRow";
import { holdings } from "../../data/holdings";

const HoldingsList = () => {
  return (
    <div className="rounded-xl bg-[#1D283A] p-6 border border-white">

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Holdings</h2>
        <p className="text-sm text-slate-400">
          Your stock positions
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {holdings.map((stock) => (
          <HoldingRow
            key={stock.symbol}
            symbol={stock.symbol}
            company={stock.company}
            shares={stock.shares}
            avgPrice={stock.avgPrice}
            currentPrice={stock.currentPrice}
          />
        ))}
      </div>

    </div>
  );
};

export default HoldingsList;
