"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LayoutDashboard, Package, Truck, Settings, Users, ShoppingCart, BarChart3, Box } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Orders", href: "/orders", icon: ShoppingCart, badge: 3 },
  { name: "Products", href: "/products", icon: Package },
  { name: "Restock", href: "/restock", icon: Truck, badge: 1 },
  { name: "Suppliers", href: "/suppliers", icon: Users },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-clay shadow-clay h-screen flex flex-col p-6 m-4 rounded-3xl sticky top-4">
      <div className="flex items-center justify-between mb-12 px-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-clay shadow-clay flex items-center justify-center text-accent">
            <Box size={24} strokeWidth={2.5} />
          </div>
          <h1 className="text-xl font-bold text-foreground tracking-tight">NexStock</h1>
        </div>
        <ThemeToggle />
      </div>

      <nav className="flex flex-col gap-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link key={item.name} href={item.href} className="relative block">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-colors z-10 relative ${
                  isActive ? "text-accent font-semibold" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white shadow-clay-sm">
                    {item.badge}
                  </span>
                )}
              </motion.div>
              
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-clay shadow-clay-pressed rounded-2xl z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto">
        <div className="p-4 rounded-2xl bg-clay shadow-clay-pressed text-sm text-foreground/60 text-center">
          <p>Admin Access</p>
          <p className="text-xs mt-1">v1.0.0</p>
        </div>
      </div>
    </aside>
  );
}
