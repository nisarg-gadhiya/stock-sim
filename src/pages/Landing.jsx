import React from "react";
import { HiTrendingUp } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div
      className="
        relative
        w-full
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-6
        bg-linear-to-br
        from-[#020617]
        via-[#020617]
        to-[#020617]
      "
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />

      <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">

        <div className="flex items-center gap-2 text-2xl font-bold">
          <HiTrendingUp className="text-blue-500 text-4xl" />
          <span>StockSim</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Master Stock Trading{" "}
          <span className="text-blue-500">Risk-Free</span>
        </h1>

        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          Practice trading with{" "}
          <span className="text-white font-medium">$100,000 virtual money</span>.
          Build your portfolio, track performance, and learn market strategies
          without risking real capital.
        </p>

        <div className="flex gap-4 mt-4">

          <button
            onClick={() => navigate("/auth")}
            className="
              px-6
              py-3
              rounded-lg
              bg-blue-600
              hover:bg-blue-700
              transition
              font-semibold
              text-white
              shadow-lg
              shadow-blue-600/30
            "
          >
            Start Trading Free
          </button>

          <button
            onClick={() => navigate("/auth")}
            className="
              px-6
              py-3
              rounded-lg
              border
              border-slate-600
              text-white
              hover:bg-slate-800
              transition
            "
          >
            Sign In
          </button>

        </div>
      </div>
    </div>
  );
};

export default Landing;
