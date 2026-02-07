import React from "react";
import StockRow from "./StockRow";

const StockList = ({ stocks, onSelectStock }) => {
  return (
    <div className="border rounded-xl bg-[#1D283A] p-6 flex flex-col gap-4">

      <div>
        <h2 className="text-2xl font-semibold">Available Stocks</h2>
        <p className="text-slate-400 text-sm mt-1">
          Click on a stock to view details and trade
        </p>
      </div>

      {stocks.map((stock) => (
        <StockRow
          key={stock.symbol}
          stock={stock}
          onSelect={onSelectStock}
        />
      ))}
    </div>
  );
};

export default StockList;
