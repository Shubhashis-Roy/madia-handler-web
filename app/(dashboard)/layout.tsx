"use client";

import "@/app/components/app-sidebar.css";
import AppSidebar from "../components/ui/app-sidebar";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="dashboard-wrapper">

      <AppSidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
      />

      <div className="dashboard-main">
        <div className="dashboard-content">{children}</div>
      </div>

    </div>
  );
}
