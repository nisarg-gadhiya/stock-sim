import React from 'react'
import StatsCard from './StatsCard'

const StatsGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8'>
      <StatsCard title="Total Value" value="$108,307.80" subtitle="Cash + Holdings"/>
      <StatsCard title="Cash Balance" value="$95,432.50" subtitle="Available Funds"/>
      <StatsCard title="Portfolio Value" value="$12,875.30" subtitle="Invested"/>
      <StatsCard title="Total Gain/Loss" value="+$8,307.80" subtitle="Overall Performance"/>
    </div>
  )
}

export default StatsGrid
