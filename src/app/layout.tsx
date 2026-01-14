import { DashboardProvider } from "@/context/DashboardContext";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finance Dashboard",
  description: "A dashboard for financial data visualization",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DashboardProvider>{children}</DashboardProvider>
      </body>
    </html>
  );
}
