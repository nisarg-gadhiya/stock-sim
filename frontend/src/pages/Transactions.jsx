import React from 'react'
import TransactionList from '../components/transactions/TransactionList'

const Transactions = () => {
  return (
    <div className='w-full min-h-screen bg-[#0f1729] text-white mx-auto px-6 md:px-10 py-8 flex flex-col gap-5'>
      <div>
          <span className='text-3xl font-bold mb-2'>Transaction History</span>
          <p className='text-[16px] text-[#94A3b8] my-2'>View all your trading activity</p>
      </div>

      <TransactionList />

    </div>
  )
}

export default Transactions
