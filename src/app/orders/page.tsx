"use client";

import { motion } from "framer-motion";
import { Search, Filter, Plus, FileText, ArrowUpRight, PackageCheck, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Modal } from "@/components/Modal";
import { toast } from "sonner";

const dummyOrders = [
  { id: 'ORD-2026-001', customer: 'Alice Smith', items: 3, total: '$145.00', status: 'Processing', date: 'Dec 15, 2026' },
  { id: 'ORD-2026-002', customer: 'Bob Jones', items: 1, total: '$99.99', status: 'Shipped', date: 'Dec 14, 2026' },
  { id: 'ORD-2026-003', customer: 'Charlie Brown', items: 5, total: '$450.00', status: 'Delivered', date: 'Dec 12, 2026' },
  { id: 'ORD-2026-004', customer: 'Diana Prince', items: 2, total: '$210.50', status: 'Processing', date: 'Dec 15, 2026' },
];

export default function OrdersPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'Processing': return <PackageCheck size={16} className="text-orange-500" />;
      case 'Shipped': return <Send size={16} className="text-blue-500" />;
      case 'Delivered': return <CheckCircle2 size={16} className="text-green-500" />;
      default: return null;
    }
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-6xl mx-auto py-8">
      
      {/* Header */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Outbound Orders</h1>
          <p className="text-foreground/60">Manage customer sales, dispatch, and tracking.</p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.02 }} 
          whileTap={{ scale: 0.98 }} 
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent/90 transition-colors shadow-clay-sm rounded-xl"
        >
          <Plus size={18} /> Manual Order
        </motion.button>
      </motion.div>

      {/* KPI Cards */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 rounded-[2rem] bg-clay shadow-clay">
          <p className="text-sm font-medium text-foreground/60 mb-1">To Fulfill</p>
          <p className="text-3xl font-bold text-foreground">24</p>
        </div>
        <div className="p-6 rounded-[2rem] bg-clay shadow-clay">
          <p className="text-sm font-medium text-foreground/60 mb-1">In Transit</p>
          <p className="text-3xl font-bold text-foreground">18</p>
        </div>
        <div className="p-6 rounded-[2rem] bg-clay shadow-clay">
          <p className="text-sm font-medium text-foreground/60 mb-1">Completed (7d)</p>
          <p className="text-3xl font-bold text-foreground">142</p>
        </div>
      </motion.div>

      {/* List */}
      <motion.div variants={itemVariants} className="p-1 rounded-3xl bg-clay shadow-clay overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-foreground/50 border-b border-foreground/10 text-sm">
                <th className="p-6 font-semibold whitespace-nowrap">Order ID</th>
                <th className="p-6 font-semibold whitespace-nowrap">Customer</th>
                <th className="p-6 font-semibold whitespace-nowrap">Date</th>
                <th className="p-6 font-semibold whitespace-nowrap">Items</th>
                <th className="p-6 font-semibold whitespace-nowrap">Total</th>
                <th className="p-6 font-semibold whitespace-nowrap">Status</th>
                <th className="p-6 font-semibold whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="text-foreground">
              {dummyOrders.map((order) => (
                <tr key={order.id} className="border-b border-foreground/5 last:border-0 hover:bg-foreground/5 transition-colors">
                  <td className="p-6 font-bold font-mono text-sm">{order.id}</td>
                  <td className="p-6 font-medium">{order.customer}</td>
                  <td className="p-6 text-foreground/60 text-sm">{order.date}</td>
                  <td className="p-6 text-sm">{order.items} pcs</td>
                  <td className="p-6 font-semibold">{order.total}</td>
                  <td className="p-6">
                    <span className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-full shadow-clay-pressed font-medium w-max">
                      {getStatusIcon(order.status)} {order.status}
                    </span>
                  </td>
                  <td className="p-6">
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-8 h-8 rounded-full bg-clay shadow-clay flex items-center justify-center text-foreground/50 hover:text-accent">
                      <ArrowUpRight size={16} />
                    </motion.button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Modal */}
      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Create Manual Order">
        <div className="space-y-6">
          <p className="text-foreground/60 text-sm">Create a manual sales order for wholesale or B2B clients.</p>
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70">Customer Name</label>
                <input required type="text" className="w-full p-4 rounded-xl bg-clay shadow-clay-pressed outline-none focus:ring-2 focus:ring-accent/50" placeholder="John Doe" />
             </div>
             <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70">Customer Email</label>
                <input required type="email" className="w-full p-4 rounded-xl bg-clay shadow-clay-pressed outline-none focus:ring-2 focus:ring-accent/50" placeholder="john@example.com" />
             </div>
          </div>
          <div className="flex justify-end gap-4 pt-4">
             <motion.button type="button" onClick={() => setIsAddModalOpen(false)} className="px-6 py-3 rounded-xl font-medium text-foreground/60 shadow-clay-sm">Cancel</motion.button>
             <motion.button type="button" onClick={() => { setIsAddModalOpen(false); toast.success("Order Draft Created!"); }} className="px-6 py-3 rounded-xl font-medium text-white bg-accent shadow-clay-sm">Create Draft</motion.button>
          </div>
        </div>
      </Modal>

    </motion.div>
  );
}
