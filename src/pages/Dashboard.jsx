import React from 'react'
import StatsCard from '../components/dashboard/StatsCard'
import StatsGrid from '../components/dashboard/StatsGrid'
import RecentTransactions from '../components/dashboard/RecentTransactions'
import { usePortfolio } from "../context/PortfolioContext";

const Dashboard = () => {
  const { cashBalance, holdings } = usePortfolio();
  const { transactions } = usePortfolio();

  const portfolioValue = holdings.reduce(
    (sum, h) => sum + h.qty * h.avgBuyPrice,
    0
  );

  const totalValue = cashBalance + portfolioValue;

  return (
    <div className='w-full min-h-screen bg-[#0f1729] text-white mx-auto px-6 md:px-10 py-8'>
        <div>
            <span className='text-3xl font-bold mb-2'>Dashboard</span>
            <p className='text-[16px] text-[#94A3b8] my-2'>Welcome back, <span>demo@example.com</span></p>
        </div>
        <StatsGrid cashBalance={cashBalance} portfolioValue={portfolioValue} totalValue={totalValue}/>
        <RecentTransactions transactions={transactions.slice(0,3)} />
    </div>
  )
}

export default Dashboard