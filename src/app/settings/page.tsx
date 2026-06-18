"use client";

import { motion } from "framer-motion";
import { User, Bell } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function SettingsPage() {
  const [lowStockAlerts, setLowStockAlerts] = useState(true);
  const [shipmentUpdates, setShipmentUpdates] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-4xl mx-auto py-8">
      <motion.div variants={itemVariants} className="mb-10">
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-foreground/60">Manage your account and system preferences.</p>
      </motion.div>

      <div className="space-y-6">
        <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-clay shadow-clay">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-clay shadow-clay-pressed flex items-center justify-center text-accent">
              <User size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Profile Information</h2>
              <p className="text-sm text-foreground/60">Update your account details.</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground/70 mb-2">Full Name</label>
              <input 
                type="text" 
                defaultValue="Admin User"
                className="w-full px-4 py-3 bg-clay shadow-clay-pressed rounded-2xl outline-none text-foreground focus:ring-2 focus:ring-accent/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground/70 mb-2">Email Address</label>
              <input 
                type="email" 
                defaultValue="admin@nexstock.com"
                className="w-full px-4 py-3 bg-clay shadow-clay-pressed rounded-2xl outline-none text-foreground focus:ring-2 focus:ring-accent/50"
              />
            </div>
          </div>
          
          <div className="mt-8 flex justify-end">
             <motion.button 
               onClick={() => toast.success("Settings saved successfully!")}
               whileHover={{ scale: 1.02 }} 
               whileTap={{ scale: 0.98 }} 
               className="px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent/90 transition-colors shadow-clay-sm rounded-xl"
             >
               Save Changes
             </motion.button>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-clay shadow-clay">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-clay shadow-clay-pressed flex items-center justify-center text-accent">
              <Bell size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Notifications</h2>
              <p className="text-sm text-foreground/60">Manage your alert preferences.</p>
            </div>
          </div>
          
          <div className="space-y-4">
             <div className="flex items-center justify-between p-4 bg-clay shadow-clay-pressed rounded-2xl">
               <div>
                 <p className="font-medium text-foreground">Low Stock Alerts</p>
                 <p className="text-xs text-foreground/60">Notify me when items drop below threshold.</p>
               </div>
               <div 
                 onClick={() => setLowStockAlerts(!lowStockAlerts)}
                 className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors duration-300 ${lowStockAlerts ? 'bg-accent shadow-clay-sm' : 'bg-clay shadow-clay'}`}
               >
                 <motion.div 
                   animate={{ x: lowStockAlerts ? 24 : 0 }}
                   className={`w-5 h-5 rounded-full absolute left-0.5 top-0.5 shadow-sm ${lowStockAlerts ? 'bg-white' : 'bg-foreground/30'}`}
                 />
               </div>
             </div>
             
             <div className="flex items-center justify-between p-4 bg-clay shadow-clay-pressed rounded-2xl">
               <div>
                 <p className="font-medium text-foreground">Shipment Updates</p>
                 <p className="text-xs text-foreground/60">Daily summaries of incoming stock.</p>
               </div>
               <div 
                 onClick={() => setShipmentUpdates(!shipmentUpdates)}
                 className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors duration-300 ${shipmentUpdates ? 'bg-accent shadow-clay-sm' : 'bg-clay shadow-clay'}`}
               >
                 <motion.div 
                   animate={{ x: shipmentUpdates ? 24 : 0 }}
                   className={`w-5 h-5 rounded-full absolute left-0.5 top-0.5 shadow-sm ${shipmentUpdates ? 'bg-white' : 'bg-foreground/30'}`}
                 />
               </div>
             </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
