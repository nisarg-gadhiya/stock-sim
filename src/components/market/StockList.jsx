import React from 'react'
import StockRow from './StockRow'
import {stocks} from '../../data/stocks'

const StockList = () => {
  return (
    <div className='border rounded-xl bg-[#1D283A] p-6 flex flex-col gap-6 mt-8'>
        <div className='flex flex-col'>
            <span className='text-2xl font-semibold'>Available Stocks</span>
            <span className='mt-1.5 text-slate-400 text-sm'>Click on a stock to view details and trade</span>
        </div>
        
        {stocks.map((stx) => (
            <StockRow
                key={stx}
                symbol={stx.symbol}
                company={stx.company}
                price={stx.price}
                changePercent={stx.changePercent}
            />
        ))}
    </div>
  )
}

export default StockList
