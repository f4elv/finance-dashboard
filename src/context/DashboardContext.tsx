"use client";

import { createContext, useContext, useState } from "react";
import { financeData } from "@/data/financeData";

type Month = keyof typeof financeData;

type DashboardContextType = {
  month: Month;
  setMonth: (m: Month) => void;
  data: (typeof financeData)[Month];
};

const DashboardContext = createContext<DashboardContextType | null>(null);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [month, setMonth] = useState<Month>("January");

  return (
    <DashboardContext.Provider
      value={{
        month,
        setMonth,
        data: financeData[month],
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error("DashboardContext missing");
  return ctx;
}
