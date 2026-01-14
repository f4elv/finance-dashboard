"use client";

import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from "recharts";
import { motion } from "framer-motion";
import { useDashboard } from "@/context/DashboardContext";

export default function RevenueChart() {
  const { data, month } = useDashboard();

  return (
    <motion.section
      key={month}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-6 rounded-2xl bg-slate-900 border border-white/10"
    >
      <h2 className="text-xl font-semibold mb-6">Revenue Trend – {month}</h2>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data.chart}>
            <XAxis dataKey="day" stroke="#94a3b8" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6366F1"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.section>
  );
}
