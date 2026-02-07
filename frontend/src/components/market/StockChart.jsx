import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const StockChart = ({ stock }) => {
  if (!stock || !stock.history || stock.history.length === 0) return null;

  const prices = stock.history.map(d => d.price);

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const padding = (maxPrice - minPrice) * 0.2 || 1;

  const avgPrice =
    prices.reduce((sum, p) => sum + p, 0) / prices.length;

  const dayLow = minPrice;
  const dayHigh = maxPrice;

  return (
    <div className="bg-[#1D283A] p-6 rounded-xl border border-white">
      <h2 className="text-xl font-semibold mb-4">
        {stock.symbol} Price Chart
      </h2>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={stock.history}>
            <XAxis dataKey="time" />
            <YAxis
              domain={[minPrice - padding, maxPrice + padding]}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* SUMMARY */}
      <div className="grid grid-cols-3 mt-6 pt-4 border-t border-slate-600">
        <div>
          <p className="text-sm text-slate-400">Avg Price</p>
          <p className="font-semibold">
            ${avgPrice.toFixed(2)}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Day Low</p>
          <p className="font-semibold text-red-500">
            ${dayLow.toFixed(2)}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Day High</p>
          <p className="font-semibold text-green-500">
            ${dayHigh.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StockChart;
