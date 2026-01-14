import { DashboardProvider } from "@/context/DashboardContext";
import "./globals.css";

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
