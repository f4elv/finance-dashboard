"use client";

import MonthSelector from "@/components/MonthSelector";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <h1 className="text-3xl font-bold">Financial Overview</h1>
        <p className="text-slate-400">Monthly performance insights</p>
      </div>

      <MonthSelector />
    </header>
  );
}
