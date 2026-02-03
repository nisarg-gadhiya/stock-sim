import React from "react";
import { HiTrendingUp } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { BsGraphUp, BsWallet } from "react-icons/bs";
import { AiOutlineHistory } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { usePortfolio } from "../../context/PortfolioContext";

const Navbar = () => {

  const { cashBalance } = usePortfolio();

  const navigate = useNavigate();

  const navItems = [
    {
      label: "Dashboard",
      icon: RxDashboard,
      path: "/dashboard",
    },
    {
      label: "Market",
      icon: BsGraphUp,
      path: "/market",
    },
    {
      label: "Portfolio",
      icon: BsWallet,
      path: "/portfolio",
    },
    {
      label: "Transactions",
      icon: AiOutlineHistory,
      path: "/transactions",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative w-full h-18 bg-[#1D283A] text-white flex items-center justify-between px-6 md:px-10 shadow-md">

      <div className="flex items-center gap-2 text-xl font-bold cursor-pointer">
        <HiTrendingUp className="text-blue-500 text-3xl" />
        <span>StockSim</span>
      </div>

      <div className="hidden md:flex items-center gap-2 px-2 py-2 rounded-xl">

        {navItems.map((item, idx) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={idx}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg
                transition-all duration-400
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-500 text-slate-200"
                }`
              }
            >
              <Icon className="text-lg" />
              <span className="text-sm font-medium">
                {item.label}
              </span>
            </NavLink>
          );
        })}

      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setMenuOpen(prev => !prev)}
        className={`
          md:hidden
          flex items-center gap-2
          px-4 py-2
          rounded-lg
          text-white
          transition-all
          cursor-pointer
          ${
            menuOpen
              ? "bg-blue-500"
              : "bg-[#223049] hover:bg-[#2b3b55]"
          }
        `}
      >
        <span className="text-sm font-medium">Menu</span>
      </button>

      <div className="flex items-center gap-4">

        <div className="hidden sm:flex items-center gap-2 bg-[#223049] px-4 py-2 rounded-lg cursor-pointer">
          <BsWallet className="text-slate-300" />
          <span className="font-semibold text-sm">${cashBalance.toFixed(2)}</span>
        </div>

        <button className="p-2 rounded-lg  hover:bg-blue-500 cursor-pointer transition-all duration-400" onClick={()=> navigate("/")}>
          <FiLogIn className="text-xl" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full
                        bg-[#1D283A] border-t border-slate-700
                        shadow-lg z-50 rounded-b-xl transform transition-all duration-500 ease-in-out">

          <div className="flex flex-col px-4 py-3 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  onClick={() => {
                    navigate(item.path);
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3
                            rounded-lg hover:bg-[#24324a]
                            transition text-left cursor-pointer"
                >
                  <Icon className="text-lg" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}


    </nav>
  );
};

export default Navbar;
