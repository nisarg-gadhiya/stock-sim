import React from 'react'
import StatsCard from '../components/dashboard/StatsCard'
import StatsGrid from '../components/dashboard/StatsGrid'
import RecentTransactions from '../components/dashboard/RecentTransactions'

const Dashboard = () => {
  return (
    <div className='w-full min-h-screen bg-[#0f1729] text-white mx-auto px-6 md:px-10 py-8'>
        <div>
            <span className='text-3xl font-bold mb-2'>Dashboard</span>
            <p className='text-[16px] text-[#94A3b8] my-2'>Welcome back, <span>demo@example.com</span></p>
        </div>
        <StatsGrid />
        <RecentTransactions />
    </div>
  )
}

export default Dashboard