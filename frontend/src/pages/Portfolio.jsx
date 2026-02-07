import React from "react";
import PortfolioSummary from "../components/portfolio/PortfolioSummary";
import SummaryCard from "../components/portfolio/SummaryCard";
import HoldingsList from "../components/portfolio/HoldingsList";

const Portfolio = () => {
  return (
    <div className="w-full min-h-screen bg-[#0f1729] text-white mx-auto px-6 md:px-10 py-8 flex flex-col gap-6">
      <div>
        <span className="text-3xl font-bold mb-2">My Portfolio</span>
        <p className="text-[16px] text-[#94A3b8] my-2">
          View and manage your stock holdings
        </p>
      </div>

      <PortfolioSummary />
      <SummaryCard />
      <HoldingsList />
    </div>
  );
};

export default Portfolio;
