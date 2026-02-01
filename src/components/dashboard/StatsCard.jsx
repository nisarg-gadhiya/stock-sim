import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";

const StatsCard = (props) => {
  return (
    <div className="w-full rounded-xl bg-[#1D283A] p-6 flex flex-col gap-4 border border-white shadow-sm">

      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-300">
          {props.title}
        </span>

        <BsCurrencyDollar className="text-slate-300 text-lg" />
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-2xl font-bold">
          {props.value}
        </span>

        <span className="text-xs text-slate-400">
          {props.subtitle}
        </span>
      </div>

    </div>
  );
};

export default StatsCard;
