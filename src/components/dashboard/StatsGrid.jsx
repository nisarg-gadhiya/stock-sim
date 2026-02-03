import React from 'react'
import StatsCard from './StatsCard'

const StatsGrid = ({cashBalance, portfolioValue , totalValue}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8'>
      <StatsCard title="Total Value" value={totalValue} subtitle="Cash + Holdings"/>
      <StatsCard title="Cash Balance" value={cashBalance} subtitle="Available Funds"/>
      <StatsCard title="Portfolio Value" value={portfolioValue} subtitle="Invested"/>
      <StatsCard title="Total Gain/Loss" value={8000} subtitle="Overall Performance"/>
    </div>
  )
}

export default StatsGrid
