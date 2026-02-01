import React from 'react'
import StockList from '../components/market/StockList';
import TradePanel from '../components/market/TradePanel';
import SearchBar from '../components/market/SearchBar';

const Market = () => {
  return (
    <div className='w-full min-h-screen bg-[#0f1729] text-white mx-auto px-6 md:px-10 py-8'>
        <div>
            <span className='text-3xl font-bold mb-2'>Stock Market</span>
            <p className='text-[16px] text-[#94A3b8] my-2'>Search and trade stocks</p>
        </div>
       <SearchBar />

       <StockList />

       <TradePanel />
       

    </div>
  )
}

export default Market
