import React, { useState } from "react";
import { stocks } from "../data/stocks";

import SearchBar from "../components/market/SearchBar";
import StockList from "../components/market/StockList";
import TradePanel from "../components/market/TradePanel";
import StockChart from "../components/market/StockChart";

const Market = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStock, setSelectedStock] = useState(null);

  const filteredStocks = stocks.filter((stock) => {
    const query = searchTerm.toLowerCase().trim();
    return (
      stock.symbol.toLowerCase().includes(query) ||
      stock.company.toLowerCase().includes(query)
    );
  });

  const handleSelectStock = (stock) => {
  setSelectedStock((prev) => {
    // if same stock clicked 
    if (prev?.symbol === stock.symbol) {
      return null;
    }
    // else select new stock
    return stock;
  });
};


  return (
    <div className="w-full min-h-screen bg-[#0f1729] text-white px-6 md:px-10 py-8">

      <div className="mb-4">
        <h1 className="text-3xl font-bold">Stock Market</h1>
        <p className="text-slate-400 mt-2">Search and trade stocks</p>
      </div>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {selectedStock && (
            <StockChart stock={selectedStock} />
          )}

          <StockList
            stocks={filteredStocks}
            onSelectStock={handleSelectStock}
          />

        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-1">
          <TradePanel stock={selectedStock} />
        </div>

      </div>
    </div>
  );
};

export default Market;
