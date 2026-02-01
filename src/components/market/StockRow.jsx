import React from 'react'

const StockRow = ({symbol,company,price,changePercent}) => {
  return (
    <div className="flex items-center justify-between pb-4 hover:bg-[#24324a] px-4 py-2 rounded-xl shadow-sm border border-slate-600 cursor-pointer transition-all duration-400">
      <div className="flex flex-col">
        <span className="font-semibold">
          {symbol}
        </span>
        <span className="text-sm text-slate-400">
          {company}
        </span>
      </div>

      <div className="flex flex-col text-right">

        <span className="font-semibold text-slate-400">
          ${price.toFixed(2)}
        </span>

        <span
            className={`text-sm ${
                changePercent > 0
                ? "text-green-500"
                : "text-red-500"
            }`}
            >
            {changePercent > 0 ? "+" : ""}
            {changePercent}%
        </span>

      </div>
    </div>
  )
}

export default StockRow
