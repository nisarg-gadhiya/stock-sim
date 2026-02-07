import React, { useState } from "react";
import HoldingRow from "./HoldingRow";
import SellModal from "./SellModal";
import { usePortfolio } from "../../context/PortfolioContext";
import { useToast } from "../../context/ToastContext";

const HoldingsList = () => {
  const {
  holdings,
  setHoldings,
  cashBalance,
  setCashBalance,
  setTransactions,
} = usePortfolio();

  const { showToast } = useToast();
  const [isSellOpen, setIsSellOpen] = useState(false);
  const [selectedHolding, setSelectedHolding] = useState(null);

  const openSellModal = (holding) => {
    setSelectedHolding(holding);
    setIsSellOpen(true);
  };

  const closeSellModal = () => {
    setIsSellOpen(false);
    setSelectedHolding(null);
  };

  const handleConfirmSell = (holding, qty) => {
  if (!holding || qty <= 0) return;

  if (qty > holding.qty) {
    showToast("You cannot sell more than you own!", "error");
    return;
  }

  const sellPrice = holding.currentPrice ?? holding.avgBuyPrice;
  const proceeds = sellPrice * qty;

  // 1) add cash
  setCashBalance((prev) => prev + proceeds);

  // 2) update holdings
  setHoldings((prevHoldings) => {
    return prevHoldings
      .map((h) => {
        if (h.symbol !== holding.symbol) return h;

        const remainingQty = h.qty - qty;

        return {
          ...h,
          qty: remainingQty,
        };
      })
      .filter((h) => h.qty > 0);
  });

  // 3) add transaction
  setTransactions((prev) => [
    {
      type: "SELL",
      symbol: holding.symbol,
      company: holding.company,
      shares: qty,
      price: sellPrice,
      date: new Date().toLocaleString(),
    },
    ...prev,
  ]);

  showToast(`Sold ${qty} shares of ${holding.symbol}`, "success");
};


  return (
    <div className="rounded-xl bg-[#1D283A] p-6 border border-white">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Holdings</h2>
        <p className="text-sm text-slate-400">
          Your stock positions
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {holdings.length === 0 ? (
          <p className="text-slate-400 text-sm">
            No holdings yet. Buy stocks from Market.
          </p>
        ) : (
          holdings.map((stock) => (
            <HoldingRow
              key={stock.symbol}
              symbol={stock.symbol}
              company={stock.company}
              qty={stock.qty}
              avgBuyPrice={stock.avgBuyPrice}
              currentPrice={stock.currentPrice ?? stock.avgBuyPrice}
              onSellClick={() => openSellModal(stock)}
            />
          ))
        )}
      </div>

      {/* Modal */}
      <SellModal
        isOpen={isSellOpen}
        onClose={closeSellModal}
        holding={selectedHolding}
        onConfirm={handleConfirmSell}
      />
    </div>
  );
};

export default HoldingsList;
