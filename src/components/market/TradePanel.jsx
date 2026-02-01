import React from 'react'

const TradePanel = () => {
  return (
    <div className='border rounded-xl bg-[#1D283A] p-6 flex flex-col gap-6 my-6'>
        <div className='flex flex-col'>
            <span className='text-2xl font-semibold'>Trade</span>
            <span className='mt-1.5 text-slate-400 text-sm'>Select a stock to trade</span>
        </div>

        {/* <div className='text-slate-400 text-sm'>
            <span>Select a stock from list to start trading</span>
        </div> */}
    </div>
  )
}

export default TradePanel
