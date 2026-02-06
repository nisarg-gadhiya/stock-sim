import { transactions } from "../../data/transactions";
import TransactionRow from "./TransactionRow";
import { usePortfolio } from "../../context/PortfolioContext";

const TransactionList = () => {

  const { transactions } = usePortfolio();
  return (
    <div className="flex flex-col gap-5 border rounded-xl p-6 bg-[#1D283A]">

      <div className='flex flex-col mb-2'>
        <span className='text-2xl font-semibold'>All Transactions</span>
        <span className='mt-1.5 text-slate-400 text-sm'>Complete history of your trades</span>
      </div>
      
      {transactions.length === 0 ? (
        <p className="text-slate-400 text-sm">No transactions yet</p>
      ) : (
        transactions.map((tx) => (
          <TransactionRow key={tx.id} tx={tx} />
        ))
      )}

    </div>
  );
};

export default TransactionList;
