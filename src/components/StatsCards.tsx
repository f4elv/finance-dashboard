"use client";

import Skeleton from "./Skeleton";
import { motion } from "framer-motion";
import { useDashboard } from "@/context/DashboardContext";

export default function StatsCards() {
  const { data, loading } = useDashboard();

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-24" />
        ))}
      </div>
    );
  }

  const net = data.revenue - data.expenses;

  const stats = [
    { label: "Revenue", value: `$${data.revenue.toLocaleString()}` },
    { label: "Expenses", value: `$${data.expenses.toLocaleString()}` },
    {
      label: "Net Profit",
      value: `$${net.toLocaleString()}`,
      highlight: true,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid md:grid-cols-3 gap-6"
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`p-6 rounded-2xl bg-slate-900 border border-white/10 ${
            stat.highlight ? "border-indigo-500/40" : ""
          }`}
        >
          <p className="text-slate-400 mb-2">{stat.label}</p>
          <h3 className="text-2xl font-bold">{stat.value}</h3>
        </div>
      ))}
    </motion.section>
  );
}
