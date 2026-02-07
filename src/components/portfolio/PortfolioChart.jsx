import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { portfolioHistory } from "../../data/portfolioHistory";
import { usePortfolio } from "../../context/PortfolioContext";

const PortfolioChart = () => {

  const { cashBalance, holdings } = usePortfolio();

  const stocksValue = holdings.reduce(
    (sum, h) => sum + h.qty * (h.currentPrice ?? h.avgBuyPrice),
    0
  );

  const totalValue = cashBalance + stocksValue;

  const investedValue = holdings.reduce(
    (sum, h) => sum + h.qty * h.avgBuyPrice,
    0
  );

  const profit = stocksValue - investedValue;

  const returnPercent =
    investedValue === 0 ? 0 : (profit / investedValue) * 100;

  return (
    <div className="rounded-xl">

      <div className="flex justify-between mb-6">
        <h2 className="text-lg font-semibold">
          Portfolio Performance
        </h2>

        <div className="text-right">
          <p className="text-xl font-bold">${totalValue.toFixed(2)}</p>

         <p className={`text-sm ${profit >= 0 ? "text-green-500" : "text-red-500"}`}>
          {profit >= 0 ? "+" : "-"}${Math.abs(profit).toFixed(2)} (
          {profit >= 0 ? "+" : "-"}
          {Math.abs(returnPercent).toFixed(2)}%)
        </p>

        </div>
      </div>

      <div className="h-70">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={portfolioHistory}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
            />

            <XAxis
              dataKey="date"
              stroke="#94a3b8"
              tick={{ fontSize: 12 }}
            />

            <YAxis
              stroke="#94a3b8"
              tick={{ fontSize: 12 }}
              domain={["dataMin - 2000", "dataMax + 2000"]}
              tickFormatter={(v) => `$${v / 1000}k`}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "8px",
                color: "#fff",
              }}
              formatter={(value) => `$${value.toLocaleString()}`}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="url(#colorValue)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PortfolioChart;
