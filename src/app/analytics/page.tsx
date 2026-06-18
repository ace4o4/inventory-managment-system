"use client";

import { motion } from "framer-motion";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

const revenueData = [
  { name: 'Jan', revenue: 4000, cost: 2400 },
  { name: 'Feb', revenue: 3000, cost: 1398 },
  { name: 'Mar', revenue: 5000, cost: 3800 },
  { name: 'Apr', revenue: 2780, cost: 1908 },
  { name: 'May', revenue: 6890, cost: 4800 },
  { name: 'Jun', revenue: 8390, cost: 3800 },
];

const categoryData = [
  { name: 'Electronics', value: 400 },
  { name: 'Apparel', value: 300 },
  { name: 'Home & Kitchen', value: 300 },
  { name: 'Sports', value: 200 },
];
const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

export default function AnalyticsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-7xl mx-auto py-8">
      
      <motion.div variants={itemVariants} className="mb-10">
        <h1 className="text-3xl font-bold text-foreground mb-2">Analytics & Reports</h1>
        <p className="text-foreground/60">Deep dive into sales performance and inventory valuation.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Main Revenue Chart */}
        <motion.div variants={itemVariants} className="lg:col-span-2 p-8 rounded-[2rem] bg-clay shadow-clay h-[450px] flex flex-col">
           <div className="flex justify-between items-center mb-6">
             <h3 className="font-bold text-foreground">Revenue vs Cost (YTD)</h3>
           </div>
           <div className="flex-1 w-full min-h-0">
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                 <defs>
                   <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                     <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                   </linearGradient>
                   <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.8}/>
                     <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--foreground)" opacity={0.1} />
                 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'var(--foreground)', opacity: 0.5}} />
                 <YAxis axisLine={false} tickLine={false} tick={{fill: 'var(--foreground)', opacity: 0.5}} />
                 <Tooltip contentStyle={{ borderRadius: '1rem', border: 'none', backgroundColor: 'var(--background)', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}/>
                 <Area type="monotone" dataKey="revenue" stroke="#10b981" fillOpacity={1} fill="url(#colorRev)" strokeWidth={3} />
                 <Area type="monotone" dataKey="cost" stroke="#f43f5e" fillOpacity={1} fill="url(#colorCost)" strokeWidth={3} />
               </AreaChart>
             </ResponsiveContainer>
           </div>
        </motion.div>

        {/* Category Breakdown */}
        <motion.div variants={itemVariants} className="p-8 rounded-[2rem] bg-clay shadow-clay h-[450px] flex flex-col items-center">
           <h3 className="font-bold text-foreground w-full mb-6">Inventory by Category</h3>
           <div className="flex-1 w-full min-h-0 relative">
             <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                 <Pie
                   data={categoryData}
                   cx="50%"
                   cy="50%"
                   innerRadius={80}
                   outerRadius={120}
                   paddingAngle={5}
                   dataKey="value"
                   stroke="none"
                 >
                   {categoryData.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                   ))}
                 </Pie>
                 <Tooltip contentStyle={{ borderRadius: '1rem', border: 'none', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}/>
               </PieChart>
             </ResponsiveContainer>
             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-3xl font-bold text-foreground">1.2K</span>
                <span className="text-sm text-foreground/50">Total Items</span>
             </div>
           </div>
           
           <div className="w-full grid grid-cols-2 gap-2 mt-4">
              {categoryData.map((entry, index) => (
                 <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[index]}}></div>
                    <span className="text-foreground/70">{entry.name}</span>
                 </div>
              ))}
           </div>
        </motion.div>
      </div>

      {/* COGS & Metrics */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6">
         <div className="p-6 rounded-[2rem] bg-clay shadow-clay text-center">
            <p className="text-sm text-foreground/50 mb-1">Total Valuation</p>
            <p className="text-2xl font-bold text-foreground">$142,500</p>
         </div>
         <div className="p-6 rounded-[2rem] bg-clay shadow-clay text-center">
            <p className="text-sm text-foreground/50 mb-1">COGS (YTD)</p>
            <p className="text-2xl font-bold text-red-500">$84,200</p>
         </div>
         <div className="p-6 rounded-[2rem] bg-clay shadow-clay text-center">
            <p className="text-sm text-foreground/50 mb-1">Gross Margin</p>
            <p className="text-2xl font-bold text-green-500">40.9%</p>
         </div>
         <div className="p-6 rounded-[2rem] bg-clay shadow-clay text-center">
            <p className="text-sm text-foreground/50 mb-1">Inventory Turnover</p>
            <p className="text-2xl font-bold text-blue-500">4.2x</p>
         </div>
      </motion.div>

    </motion.div>
  );
}
