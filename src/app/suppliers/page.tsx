"use client";

import { motion } from "framer-motion";
import { Plus, Search, Filter, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { Modal } from "@/components/Modal";
import { toast } from "sonner";

// Dummy data
const initialSuppliers = [
  { id: 1, name: "Global Tech Distributors Inc.", contact: "Sarah Jenkins", email: "sarah@globaltech.com", phone: "+1 (555) 123-4567", status: "Active", rating: 4.8 },
  { id: 2, name: "Acme Supply Co.", contact: "Mike Ross", email: "mike.r@acmesupply.co", phone: "+1 (555) 987-6543", status: "Active", rating: 4.2 },
  { id: 3, name: "Direct Manufacture Ltd.", contact: "Chen Wei", email: "orders@directmfg.cn", phone: "+86 10 1234 5678", status: "Pending Review", rating: 0 },
];

export default function SuppliersPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAddModalOpen(false);
    toast.success("Supplier added successfully!");
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-6xl mx-auto py-8">
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Vendors & Suppliers</h1>
          <p className="text-foreground/60">Manage your supplier network and contact information.</p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.02 }} 
          whileTap={{ scale: 0.98 }} 
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent/90 transition-colors shadow-clay-sm rounded-xl"
        >
          <Plus size={18} /> Add Supplier
        </motion.button>
      </motion.div>

      <motion.div variants={itemVariants} className="flex gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={20} />
          <input 
            type="text" 
            placeholder="Search suppliers..." 
            className="w-full pl-12 pr-4 py-3 bg-clay shadow-clay-pressed rounded-2xl outline-none text-foreground placeholder:text-foreground/40"
          />
        </div>
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center justify-center w-12 h-12 bg-clay shadow-clay-sm rounded-2xl text-foreground/60 hover:text-accent transition-colors">
          <Filter size={20} />
        </motion.button>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {initialSuppliers.map((supplier) => (
          <motion.div 
            key={supplier.id}
            whileHover={{ y: -5 }}
            className="p-6 rounded-[2rem] bg-clay shadow-clay flex flex-col gap-4 cursor-pointer"
          >
             <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-clay shadow-clay-pressed flex items-center justify-center text-accent text-xl font-bold">
                  {supplier.name.charAt(0)}
                </div>
                <span className={`px-3 py-1 text-xs rounded-full shadow-clay-pressed font-medium ${
                  supplier.status === 'Active' ? 'text-green-500' : 'text-orange-500'
                }`}>
                  {supplier.status}
                </span>
             </div>
             <div>
               <h3 className="font-bold text-lg text-foreground leading-tight mb-1">{supplier.name}</h3>
               <p className="text-foreground/50 text-sm">Contact: {supplier.contact}</p>
             </div>
             
             <div className="space-y-2 mt-2 pt-4 border-t border-foreground/5">
                <div className="flex items-center gap-3 text-sm text-foreground/70">
                   <Mail size={16} className="text-foreground/40" /> {supplier.email}
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground/70">
                   <Phone size={16} className="text-foreground/40" /> {supplier.phone}
                </div>
             </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Add Supplier Modal */}
      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Add New Supplier">
        <form onSubmit={handleAddSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/70">Company Name</label>
              <input required type="text" className="w-full p-4 rounded-xl bg-clay shadow-clay-pressed outline-none focus:ring-2 focus:ring-accent/50" placeholder="e.g. Acme Corp" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/70">Primary Contact Name</label>
              <input required type="text" className="w-full p-4 rounded-xl bg-clay shadow-clay-pressed outline-none focus:ring-2 focus:ring-accent/50" placeholder="e.g. John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/70">Email Address</label>
              <input required type="email" className="w-full p-4 rounded-xl bg-clay shadow-clay-pressed outline-none focus:ring-2 focus:ring-accent/50" placeholder="contact@acme.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/70">Phone Number</label>
              <input required type="text" className="w-full p-4 rounded-xl bg-clay shadow-clay-pressed outline-none focus:ring-2 focus:ring-accent/50" placeholder="+1 (555) 000-0000" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/70">Billing/Shipping Address</label>
            <textarea rows={3} className="w-full p-4 rounded-xl bg-clay shadow-clay-pressed outline-none focus:ring-2 focus:ring-accent/50 resize-none" placeholder="123 Supplier St..."></textarea>
          </div>
          <div className="pt-4 flex justify-end gap-4">
            <motion.button type="button" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setIsAddModalOpen(false)} className="px-6 py-3 rounded-xl font-medium text-foreground/60 hover:text-foreground transition-colors shadow-clay-sm">
              Cancel
            </motion.button>
            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-6 py-3 rounded-xl font-medium text-white bg-accent shadow-clay-sm">
              Save Supplier
            </motion.button>
          </div>
        </form>
      </Modal>

    </motion.div>
  );
}
