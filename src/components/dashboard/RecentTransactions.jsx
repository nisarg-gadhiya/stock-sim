import TransactionRow from "../transactions/TransactionRow";
import { usePortfolio } from "../../context/PortfolioContext";

const RecentTransactions = () => {
  const { transactions } = usePortfolio();

  const recentTx = transactions.slice(0, 3);

  return (
    <div className="border rounded-xl bg-[#1D283A] p-6 flex flex-col gap-6">
      <div className="flex flex-col">
        <span className="text-2xl font-semibold">Recent Transactions</span>
        <span className="mt-1.5 text-slate-400 text-sm">
          Your latest trading activity
        </span>
      </div>

      {recentTx.length === 0 ? (
        <p className="text-slate-400 text-sm">No transactions yet</p>
      ) : (
        recentTx.map((tx, idx) => (
          <TransactionRow key={tx.symbol + tx.date + idx} tx={tx} />
        ))
      )}
    </div>
  );
};

export default RecentTransactions;
