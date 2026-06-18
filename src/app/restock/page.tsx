"use client";

import { motion } from "framer-motion";
import { Truck, ArrowRight, PackageOpen, Factory, Plus } from "lucide-react";
import EmptyState from "@/components/EmptyState";
import { useState } from "react";
import { Modal } from "@/components/Modal";

export default function RestockPage() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrderModalOpen(false);
    // Logic to submit purchase order
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-6xl mx-auto py-8">
      <motion.div variants={itemVariants} className="mb-10">
        <h1 className="text-3xl font-bold text-foreground mb-2">Restock & Fulfillment</h1>
        <p className="text-foreground/60">Create restock orders and manage incoming shipments.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-clay shadow-clay">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-clay shadow-clay-pressed flex items-center justify-center text-accent">
              <Truck size={24} />
            </div>
            <h2 className="text-xl font-bold text-foreground">Active Shipments</h2>
          </div>
          <p className="text-foreground/60 mb-6">Track orders currently in transit to your warehouse.</p>
          
          <div className="space-y-4">
             {/* Simulating no active shipments */}
             <div className="p-6 rounded-2xl bg-clay shadow-clay-pressed text-center">
                <p className="text-foreground/50">No shipments currently in transit.</p>
             </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-clay shadow-clay flex flex-col justify-center">
          <h2 className="text-xl font-bold text-foreground mb-4">Create New Order</h2>
          <p className="text-foreground/60 mb-8">Initiate a restock request to your suppliers.</p>
          
          <motion.button 
            onClick={() => setIsOrderModalOpen(true)}
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }} 
            className="w-full flex items-center justify-center gap-2 px-5 py-4 text-sm font-semibold text-white bg-accent hover:bg-accent/90 transition-colors shadow-clay-sm rounded-2xl"
          >
            Start Purchase Order <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-clay shadow-clay min-h-[300px] flex items-center justify-center">
        <EmptyState 
          title="No Restock Suggestions" 
          description="Based on current sales velocity and inventory levels, no immediate restock is required." 
        />
      </motion.div>

      {/* New Purchase Order Modal */}
      <Modal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} title="New Purchase Order">
        <form onSubmit={handleOrderSubmit} className="space-y-6">
          <div className="p-4 rounded-2xl bg-clay shadow-clay-pressed flex gap-4 items-start mb-6">
            <div className="p-3 rounded-xl bg-accent/10 text-accent">
               <Factory size={24} />
            </div>
            <div>
               <h4 className="font-bold text-foreground">Select Supplier</h4>
               <p className="text-sm text-foreground/50 mb-3">Choose where to order from.</p>
               <select className="w-full p-3 rounded-xl bg-clay shadow-clay outline-none text-foreground cursor-pointer">
                 <option>Global Tech Distributors Inc.</option>
                 <option>Acme Supply Co.</option>
                 <option>Direct Manufacture Ltd.</option>
               </select>
            </div>
          </div>

          <div className="space-y-4">
             <div className="flex justify-between items-center pb-2 border-b border-foreground/10">
               <span className="font-bold text-foreground">Order Items</span>
               <button type="button" className="text-sm text-accent font-semibold hover:underline flex items-center gap-1">
                 <Plus size={14} /> Add Line Item
               </button>
             </div>
             
             {/* Dummy line item */}
             <div className="flex gap-4 items-center">
               <div className="flex-1">
                 <input type="text" placeholder="SKU or Product Name" className="w-full p-3 rounded-xl bg-clay shadow-clay-pressed outline-none focus:ring-2 focus:ring-accent/50" defaultValue="SKU-90212" />
               </div>
               <div className="w-24">
                 <input type="number" placeholder="Qty" className="w-full p-3 rounded-xl bg-clay shadow-clay-pressed outline-none focus:ring-2 focus:ring-accent/50" defaultValue={50} />
               </div>
             </div>
          </div>
          
          <div className="pt-6 border-t border-foreground/10 flex justify-between items-center">
            <div className="text-foreground/50 text-sm">Estimated Total: <span className="font-bold text-foreground text-lg">$3,999.50</span></div>
            <div className="flex gap-4">
              <motion.button type="button" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setIsOrderModalOpen(false)} className="px-6 py-3 rounded-xl font-medium text-foreground/60 hover:text-foreground transition-colors shadow-clay-sm">
                Cancel
              </motion.button>
              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-6 py-3 rounded-xl font-medium text-white bg-accent shadow-clay-sm flex items-center gap-2">
                Submit Order <ArrowRight size={16} />
              </motion.button>
            </div>
          </div>
        </form>
      </Modal>

    </motion.div>
  );
}
