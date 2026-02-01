import React from 'react'
import StockRow from './StockRow'

const StockList = ({stocks}) => {
  return (
    <div className='border rounded-xl bg-[#1D283A] p-6 flex flex-col gap-6 mt-8'>
        <div className='flex flex-col'>
            <span className='text-2xl font-semibold'>Available Stocks</span>
            <span className='mt-1.5 text-slate-400 text-sm'>Click on a stock to view details and trade</span>
        </div>
        
        {stocks.map((stock) => (
            <StockRow {...stock} />
        ))}
    </div>
  )
}

export default StockList
