import React from 'react'
import TransactionRow from './TransactionRow'
import { transactions } from '../../data/transactions'

const RecentTransactions = () => {

  return (
    <div className='border rounded-xl bg-[#1D283A] p-6 flex flex-col gap-6'>
        <div className='flex flex-col'>
            <span className='text-2xl font-semibold'>Recent Transactions</span>
            <span className='mt-1.5 text-slate-400 text-sm'>Your latest trading activity</span>
        </div>
        
        {transactions.map((tx) => (
            <TransactionRow
                key={tx.symbol}
                symbol={tx.symbol}
                company={tx.company}
                type={tx.type}
                qty={tx.qty}
                price={tx.price}
            />
        ))}
        
    </div>
  )
}

export default RecentTransactions
