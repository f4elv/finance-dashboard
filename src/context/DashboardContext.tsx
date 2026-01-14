"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { financeData } from "@/data/financeData";

type Month = keyof typeof financeData;

const DashboardContext = createContext<any>(null);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const months = Object.keys(financeData) as Month[];
  const [month, setMonth] = useState<Month>(months[0]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [month]);

  const data = financeData[month];

  return (
    <DashboardContext.Provider
      value={{ month, setMonth, data, months, loading }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export const useDashboard = () => useContext(DashboardContext);
