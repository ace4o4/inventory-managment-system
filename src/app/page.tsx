"use client";

import { motion } from "framer-motion";
import { TrendingUp, MoreHorizontal, FileText, ArrowRight } from "lucide-react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar
} from 'recharts';
import { useState } from "react";
import { Modal } from "@/components/Modal";

const revenueData = [
  { name: 'Week 1', total: 4000 },
  { name: 'Week 2', total: 3000 },
  { name: 'Week 3', total: 5000 },
  { name: 'Week 4', total: 2780 },
  { name: 'Week 5', total: 6890 },
];

const demandData = [
  { name: 'Jan', demand: 40 },
  { name: 'Feb', demand: 70 },
  { name: 'Mar', demand: 30 },
  { name: 'Apr', demand: 90 },
];

const recentOrders = [
  { id: 'RT152466', name: 'Gold Bracelet', price: '$65.00', status: 'Delivered', img: 'https://i.pravatar.cc/150?u=1', date: 'Dec 12, 2026' },
  { id: 'RT152467', name: 'Ocean Blue Plush', price: '$250.00', status: 'Pending', img: 'https://i.pravatar.cc/150?u=2', date: 'Dec 12, 2026' },
  { id: 'RT152468', name: 'Woman High Heels', price: '$100.00', status: 'Shipped', img: 'https://i.pravatar.cc/150?u=3', date: 'Dec 11, 2026' },
  { id: 'RT152469', name: 'Smart Watch', price: '$199.00', status: 'Delivered', img: 'https://i.pravatar.cc/150?u=4', date: 'Dec 10, 2026' },
  { id: 'RT152470', name: 'Gaming Console', price: '$499.00', status: 'Processing', img: 'https://i.pravatar.cc/150?u=5', date: 'Dec 10, 2026' },
  { id: 'RT152471', name: 'Leather Wallet', price: '$45.00', status: 'Delivered', img: 'https://i.pravatar.cc/150?u=6', date: 'Dec 09, 2026' },
];

export default function Dashboard() {
  const [isOrdersModalOpen, setIsOrdersModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-7xl mx-auto">
      
      {/* Top Welcome & Summary */}
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-1">My Dashboard</h1>
        <p className="text-foreground/50">Here is your business overview at a glance.</p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        
        {/* Left Col: Revenue Chart & Cost Breakdown */}
        <div className="lg:col-span-2 space-y-8">
          
          <motion.div variants={itemVariants} className="p-8 rounded-[2rem] bg-clay shadow-clay flex flex-col md:flex-row gap-8">
             <div className="flex-1">
               <h3 className="text-foreground/60 font-medium mb-2">Sales Revenue</h3>
               <div className="text-5xl font-bold text-foreground mb-4">55k</div>
               <p className="text-sm text-foreground/50 mb-8 max-w-[200px]">This is the Sales Revenue Overview.</p>
               
               <div className="p-4 rounded-2xl bg-foreground text-[var(--background)] flex items-center justify-between shadow-lg">
                 <div>
                   <p className="text-xs opacity-70">Order Received</p>
                   <p className="text-xl font-bold">1,254K</p>
                 </div>
                 <div className="flex items-center text-green-400 text-sm font-medium">
                   25% <TrendingUp size={16} className="ml-1" />
                 </div>
               </div>
             </div>
             
             <div className="flex-[2] h-[250px]">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-foreground">Total Sales</h3>
                  <motion.button whileTap={{ scale: 0.98 }} className="text-xs px-3 py-1.5 rounded-full shadow-clay-pressed bg-clay text-foreground/70 font-medium hover:text-accent transition-colors">
                    View all
                  </motion.button>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="var(--accent)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--foreground)" opacity={0.1} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'var(--foreground)', opacity: 0.5, fontSize: 12}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: 'var(--foreground)', opacity: 0.5, fontSize: 12}} />
                    <Tooltip contentStyle={{ borderRadius: '1rem', border: 'none', backgroundColor: 'var(--background)', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}/>
                    <Area type="monotone" dataKey="total" stroke="var(--accent)" strokeWidth={3} fillOpacity={1} fill="url(#colorTotal)" />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-[2rem] bg-clay shadow-clay">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-foreground">Cost Breakdown</h3>
                <span className="text-xs text-foreground/50">Dec 15, 2026</span>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground/60">Earned</span>
                    <span className="font-bold text-green-500">$456.68</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-clay shadow-clay-pressed overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-300 to-green-500 w-3/4 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground/60">Spent</span>
                    <span className="font-bold text-blue-500">$39.46</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-clay shadow-clay-pressed overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-300 to-blue-500 w-1/4 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-clay shadow-clay flex flex-col justify-between">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-foreground">Top Market Demand</h3>
              </div>
              <div className="h-[120px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={demandData}>
                    <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '1rem', border: 'none' }}/>
                    <Bar dataKey="demand" fill="var(--accent)" radius={[4, 4, 0, 0]} barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Col: Stats & Recent Orders */}
        <div className="space-y-8">
          
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="p-6 rounded-[2rem] bg-gradient-to-br from-green-400 to-green-600 shadow-clay-sm text-white cursor-pointer relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <p className="text-sm font-medium opacity-80 mb-1">In Stock</p>
              <h2 className="text-3xl font-bold mb-4">495</h2>
              <div className="flex justify-between items-center text-xs opacity-90">
                <span>Updated</span>
                <span>Just now</span>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="p-6 rounded-[2rem] bg-gradient-to-br from-purple-400 to-purple-600 shadow-clay-sm text-white cursor-pointer relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <p className="text-sm font-medium opacity-80 mb-1">Low Stock</p>
              <h2 className="text-3xl font-bold mb-4">120</h2>
              <div className="flex justify-between items-center text-xs opacity-90">
                <span>Items</span>
                <span>View</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="p-8 rounded-[2rem] bg-clay shadow-clay">
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-foreground">Recent Orders</h3>
                <motion.button onClick={() => setIsOrdersModalOpen(true)} whileTap={{ scale: 0.9 }} className="w-8 h-8 rounded-full bg-clay shadow-clay flex items-center justify-center text-foreground/40 hover:text-accent transition-colors">
                  <MoreHorizontal size={16} />
                </motion.button>
             </div>
             <div className="space-y-5">
               {recentOrders.slice(0,4).map((order, i) => (
                 <div key={i} className="flex items-center justify-between group">
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full shadow-clay border-2 border-[var(--background)] overflow-hidden">
                       <img src={order.img} alt={order.name} />
                     </div>
                     <div>
                       <p className="font-semibold text-sm text-foreground">{order.name}</p>
                       <p className="text-xs text-foreground/50 font-mono">ID: {order.id}</p>
                     </div>
                   </div>
                   <div className="text-right">
                     <p className="font-bold text-sm text-foreground">{order.price}</p>
                     <p className={`text-xs font-medium ${order.status === 'Delivered' ? 'text-green-500' : order.status === 'Shipped' ? 'text-blue-500' : 'text-orange-500'}`}>
                       {order.status}
                     </p>
                   </div>
                 </div>
               ))}
             </div>
             <motion.button 
               onClick={() => setIsOrdersModalOpen(true)}
               whileHover={{ scale: 1.02 }} 
               whileTap={{ scale: 0.98 }} 
               className="w-full mt-6 py-3 rounded-2xl shadow-clay-pressed bg-clay text-sm font-semibold text-foreground/60 hover:text-accent transition-colors"
             >
               View All Orders
             </motion.button>
          </motion.div>
          
        </div>
      </div>

      {/* All Orders Modal */}
      <Modal isOpen={isOrdersModalOpen} onClose={() => setIsOrdersModalOpen(false)} title="All Recent Orders">
        <div className="space-y-4">
          {recentOrders.map((order, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-clay shadow-clay-pressed gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full shadow-clay border-2 border-[var(--background)] overflow-hidden flex-shrink-0">
                  <img src={order.img} alt={order.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-foreground">{order.name}</p>
                  <p className="text-xs text-foreground/50 font-mono">Order ID: {order.id} • {order.date}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 sm:justify-end">
                <div className="text-left sm:text-right">
                  <p className="font-bold text-lg text-foreground">{order.price}</p>
                  <p className={`text-xs font-bold uppercase tracking-wider ${
                    order.status === 'Delivered' ? 'text-green-500' : 
                    order.status === 'Shipped' ? 'text-blue-500' : 
                    order.status === 'Processing' ? 'text-purple-500' : 'text-orange-500'
                  }`}>
                    {order.status}
                  </p>
                </div>
                
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-10 h-10 rounded-xl bg-clay shadow-clay flex items-center justify-center text-foreground/60 hover:text-accent transition-colors">
                  <FileText size={18} />
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </Modal>

    </motion.div>
  );
}
