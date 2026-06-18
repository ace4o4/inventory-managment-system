"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  trend?: string;
  isPositive?: boolean;
}

export default function StatCard({ title, value, icon, trend, isPositive = true }: StatCardProps) {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.1}
      whileHover={{ scale: 1.05, rotate: Math.random() * 2 - 1 }}
      whileTap={{ scale: 0.95, rotate: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="p-6 rounded-3xl bg-clay shadow-clay flex flex-col justify-between cursor-grab active:cursor-grabbing z-10 relative"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-2xl bg-clay shadow-clay-pressed flex items-center justify-center text-accent">
          {icon}
        </div>
        {trend && (
          <span className={`text-sm font-semibold px-3 py-1 rounded-full shadow-clay-pressed ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {trend}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-foreground/60 text-sm font-medium mb-1">{title}</h3>
        <p className="text-3xl font-bold text-foreground">{value}</p>
      </div>
    </motion.div>
  );
}
