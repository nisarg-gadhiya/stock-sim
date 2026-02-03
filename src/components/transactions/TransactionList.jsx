import { transactions } from "../../data/transactions";
import TransactionRow from "./TransactionRow";

const TransactionList = () => {
  return (
    <div className="flex flex-col gap-5 border rounded-xl p-6 bg-[#1D283A]">

      <div className='flex flex-col mb-2'>
        <span className='text-2xl font-semibold'>All Transactions</span>
        <span className='mt-1.5 text-slate-400 text-sm'>Complete history of your trades</span>
      </div>
      
      {transactions.map((tx) => (
        <TransactionRow
          key={tx.symbol + tx.date}
          type={tx.type}
          symbol={tx.symbol}
          company={tx.company}
          shares={tx.shares}
          price={tx.price}
          date={tx.date}
        />
      ))}

    </div>
  );
};

export default TransactionList;
