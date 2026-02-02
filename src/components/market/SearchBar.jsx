import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full mt-4">
      <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search stocks by symbol or company name..."
        className="w-full h-12 pl-12 pr-4 rounded-xl bg-[#0f172a]
                   border border-slate-700 text-white outline-none
                   focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;
