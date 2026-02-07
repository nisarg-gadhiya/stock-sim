import React, { useState } from "react";
import { stocks } from "../data/stocks";
import { usePortfolio } from "../context/PortfolioContext";
import SearchBar from "../components/market/SearchBar";
import StockList from "../components/market/StockList";
import TradePanel from "../components/market/TradePanel";
import StockChart from "../components/market/StockChart";
import { useToast } from "../context/ToastContext";

const Market = () => {

  const { showToast } = useToast();

  // const [cashBalance , setcashBalance] = useState(100000);
  // const [holdings , setHoldings] = useState([]);
  // const [transactions , setTransactions] = useState([]);

  const {
    cashBalance,
    setCashBalance,
    holdings,
    setHoldings,
    setTransactions,
  } = usePortfolio();

  const handleBuyStock = (stock, quantity) => {
    // validation
    if (!stock || quantity <= 0) return;

    const totalCost = stock.price * quantity;

    if (totalCost > cashBalance) {
      showToast("Insufficient balance", "error");
      return;
    }

    // 1) deduct cash
    setCashBalance((prev) => prev - totalCost);

    // 2) update holdings
    setHoldings((prevHoldings) => {
      const existing = prevHoldings.find(
        (h) => h.symbol === stock.symbol
      );

      if (existing) {
        return prevHoldings.map((h) => {
          if (h.symbol !== stock.symbol) return h;

          const newQty = h.qty + quantity;
          const newAvgPrice =
            (h.avgBuyPrice * h.qty + stock.price * quantity) /
            newQty;

          return {
            ...h,
            qty: newQty,
            avgBuyPrice: newAvgPrice,
          };
        });
      }

      return [
        ...prevHoldings,
        {
          symbol: stock.symbol,
          company: stock.company,
          qty: quantity,
          avgBuyPrice: stock.price,
        },
      ];
    });

    // 3) add transaction ✅
    setTransactions((prev) => [
      {
        id: crypto.randomUUID(),
        type: "BUY",
        symbol: stock.symbol,
        company: stock.company,
        qty: quantity,
        price: stock.price,
        total: totalCost,
        timestamp: Date.now(),
      },
      ...prev,
    ]);

    showToast(`Successfully bought ${quantity} shares of ${stock.symbol}`, "success");
 };



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
          <TradePanel stock={selectedStock}  onBuy={handleBuyStock}/>
        </div>

      </div>
    </div>
  );
};

export default Market;
