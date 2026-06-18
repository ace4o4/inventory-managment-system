"use client";

import { motion } from "framer-motion";
import { Search, Bell, ShoppingBag } from "lucide-react";

export function Header() {
  return (
    <header className="flex justify-between items-center mb-8 pb-4">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={18} />
          <input 
            type="text" 
            placeholder="Search Product..." 
            className="w-full pl-12 pr-4 py-3 bg-clay shadow-clay-pressed rounded-full outline-none text-foreground text-sm placeholder:text-foreground/40 transition-all focus:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.7),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6 ml-6">
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative text-foreground/60 hover:text-accent transition-colors">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[var(--background)]"></span>
        </motion.button>
        
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-foreground/60 hover:text-accent transition-colors">
          <ShoppingBag size={22} />
        </motion.button>
        
        <div className="flex items-center gap-3 pl-6 border-l border-foreground/10">
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold text-foreground leading-tight">John Smith</p>
            <p className="text-xs text-foreground/50">johnsmith@example.com</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-clay shadow-clay border-2 border-[var(--background)] overflow-hidden">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
}
