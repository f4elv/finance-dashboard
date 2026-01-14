import Header from "@/components/Header";
import StatsCards from "@/components/StatsCards";
import RevenueChart from "@/components/RevenueChart";
import ComparisonChart from "@/components/ComparisonChart";

export default function DashboardPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">
      <Header />
      <StatsCards />

      <div className="grid md:grid-cols-2 gap-6">
        <RevenueChart />
        <ComparisonChart />
      </div>
    </main>
  );
}
