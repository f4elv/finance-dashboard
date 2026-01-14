"use client";

import { motion } from "framer-motion";
import { useDashboard } from "@/context/DashboardContext";
import { financeData } from "@/data/financeData";

export default function MonthSelector() {
  const { month, setMonth } = useDashboard();

  return (
    <div className="flex flex-wrap gap-2">
      {Object.keys(financeData).map((m) => (
        <motion.button
          whileTap={{ scale: 0.95 }}
          key={m}
          onClick={() => setMonth(m as any)}
          className={`px-4 py-2 rounded-lg ${
            month === m ? "bg-indigo-600" : "bg-slate-900 hover:bg-slate-800"
          }`}
        >
          {m}
        </motion.button>
      ))}
    </div>
  );
}
