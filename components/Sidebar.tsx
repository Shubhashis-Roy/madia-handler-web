"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Image,
  PlusCircle,
  Calendar,
  Settings,
  LogOut,
  Link as LinkIcon,
} from "lucide-react";
import { clsx } from "clsx";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Image, label: "Media Library", href: "/dashboard/media" },
  {
    icon: PlusCircle,
    label: "Create Post",
    href: "/dashboard/create-post",
  },
  { icon: Calendar, label: "Scheduled Posts", href: "/dashboard/scheduled" },
  { icon: LinkIcon, label: "Accounts", href: "/dashboard/accounts" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <Link
          href="/dashboard"
          className="text-2xl font-heading font-bold text-primary"
        >
          Media Handler
        </Link>
      </div>
      <nav className="px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors",
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
        <button
          onClick={() => console.log("Logout")}
          className="flex items-center gap-3 px-4 py-3 rounded-lg mb-2 text-gray-700 hover:bg-gray-100 w-full transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </nav>
    </div>
  );
}
