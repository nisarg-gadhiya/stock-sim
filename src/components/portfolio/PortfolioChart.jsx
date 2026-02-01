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
import PortfolioSummary from "./PortfolioSummary";

const PortfolioChart = () => {
  return (
    <div className="rounded-xl">

      <div className="flex justify-between mb-6">
        <h2 className="text-lg font-semibold">
          Portfolio Performance
        </h2>

        <div className="text-right">
          <p className="text-xl font-bold">$100,957.98</p>
          <p className="text-sm text-green-500">
            +460.75 (+0.46%)
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
