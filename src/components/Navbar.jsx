import React from "react";
import { HiTrendingUp } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { BsGraphUp, BsWallet } from "react-icons/bs";
import { AiOutlineHistory } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";

const Navbar = () => {

    const navItems = [
        {
            label:"Dashboard",
            icon:RxDashboard,
        },
        {
            label:"Market",
            icon:BsGraphUp,
        },
        {
            label:"Portfolio",
            icon:BsWallet,
        },
        {
            label:"Transactions",
            icon:AiOutlineHistory,
        },
    ];

  return (
    <nav className="w-full h-20 bg-[#1D283A] text-white flex items-center justify-between px-6 md:px-10 shadow-md">

      <div className="flex items-center gap-2 text-xl font-bold">
        <HiTrendingUp className="text-blue-500 text-3xl" />
        <span>StockSim</span>
      </div>

      <div className="hidden md:flex items-center gap-2 px-2 py-2 rounded-xl">

        {navItems.map((item,idx)=>{
            const Icon = item.icon

            return (
                <button key={idx} className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-500 text-white cursor-pointer transition-all duration-400">
                    <Icon className="text-lg" />
                    <span className="text-sm font-medium">{item.label}</span>
                </button>
            )
        })}

      </div>

      <div className="flex items-center gap-4">

        <div className="hidden sm:flex items-center gap-2 bg-[#223049] px-4 py-2 rounded-lg">
          <BsWallet className="text-slate-300" />
          <span className="font-semibold text-sm">$95,432.50</span>
        </div>

        <button className="p-2 rounded-lg  hover:bg-blue-500 cursor-pointer transition-all duration-400">
          <FiLogIn className="text-xl" />
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
