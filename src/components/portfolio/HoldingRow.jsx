import React from 'react'

const HoldingRow = () => {
  return (
    <div className="flex items-center justify-between pb-4 hover:bg-[#24324a] px-4 py-2 rounded-xl shadow-sm border border-slate-600 cursor-pointer transition-all duration-400">
      <div className="flex flex-col">
        <span className="font-semibold">
          AAPL
        </span>
        <span className="text-sm text-slate-400">
          Apple Inc.
        </span>
        <span className="text-sm text-slate-400 mt-2">10 shares @ $175.20</span>
      </div>

      <div className="flex flex-col text-right">

        <span className="font-semibold text-slate-400">
          $1785.20
        </span>

        <span
            className={`text-sm ${
                1.89 > 0
                ? "text-green-500"
                : "text-red-500"
            }`}
            >
            {1.89 > 0 ? "+" : ""}
            {1.89}%
        </span>

        <button className='px-3 py-1 text-sm font-medium rounded-lg bg-[#0b1220] text-white border border-slate-700 hover:bg-[#162033] hover:border-blue-500/40 transition-all duration-200 mt-2'>Sell</button>

      </div>
    </div>
  )
}

export default HoldingRow
