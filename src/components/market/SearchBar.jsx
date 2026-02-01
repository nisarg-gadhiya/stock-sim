import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = ({value,onChange}) => {
  return (
    <div>
      <div className="relative w-full my-6">

        <CiSearch
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg"
        />
        <input
          onChange={(e) => onChange(e.target.value)}
          type="text"
          placeholder="Search stocks by symbol or company name..."
          className="
            w-full
            h-12
            pl-12
            pr-4
            rounded-xl
            bg-[#0f172a]
            text-slate-200
            placeholder:text-slate-400
            border
            border-slate-700
            outline-none
            transition-all
            duration-300

            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/40
          "
        />
       </div>
    </div>
  )
}

export default SearchBar
