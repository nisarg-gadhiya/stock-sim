import React from "react";

const SummaryCard = () => {
  const data = [
    {
      summary: "Cash",
      value: "$95,432.50",
    },
    {
      summary: "Total Gain/Loss",
      value: "+$110.98",
    },
    {
      summary: "Total Holdings",
      value: "3",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {data.map((item, index) => (
        <div
          key={index}
          className="rounded-xl bg-[#1D283A] p-6 flex flex-col gap-1 border borde"
        >
          <span className="text-sm text-slate-400">
            {item.summary}
          </span>

          <span className="text-lg font-semibold">
            {item.value}
          </span>
        </div>
      ))}

    </div>
  );
};

export default SummaryCard;
