"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";
import Skeleton from "./Skeleton";
import { motion } from "framer-motion";
import { useDashboard } from "@/context/DashboardContext";

export default function ComparisonChart() {
  const { data, loading, month } = useDashboard();

  const chartData = [
    { name: "Revenue", value: data.revenue },
    { name: "Expenses", value: data.expenses },
  ];

  return (
    <motion.section
      key={month}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-2xl bg-slate-900 border border-white/10"
    >
      <h2 className="text-xl font-semibold mb-6">Revenue vs Expenses</h2>

      {loading ? (
        <Skeleton className="h-62.5" />
      ) : (
        <div className="h-62.5">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="name" stroke="#94a3b8" />
              <Tooltip />
              <Bar dataKey="value" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </motion.section>
  );
}
