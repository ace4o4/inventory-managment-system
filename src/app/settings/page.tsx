"use client";

import { motion } from "framer-motion";
import { User, Bell, Shield, Package, Truck, Database, Settings2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function SettingsPage() {
  const [lowStockAlerts, setLowStockAlerts] = useState(true);
  const [shipmentUpdates, setShipmentUpdates] = useState(false);
  const [autoFulfill, setAutoFulfill] = useState(false);
  const [autoOrderSuppliers, setAutoOrderSuppliers] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);
  
  const [activeTab, setActiveTab] = useState('general');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  const ToggleSwitch = ({ checked, onChange }: { checked: boolean, onChange: () => void }) => (
    <div 
      onClick={onChange}
      className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors duration-300 ${checked ? 'bg-accent shadow-clay-sm' : 'bg-clay shadow-clay'}`}
    >
      <motion.div 
        animate={{ x: checked ? 24 : 0 }}
        className={`w-5 h-5 rounded-full absolute left-0.5 top-0.5 shadow-sm ${checked ? 'bg-white' : 'bg-foreground/30'}`}
      />
    </div>
  );

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-6xl mx-auto py-8">
      <motion.div variants={itemVariants} className="mb-10">
        <h1 className="text-3xl font-bold text-foreground mb-2">System Settings</h1>
        <p className="text-foreground/60">Manage your workspace preferences, integrations, and automation rules.</p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Settings Navigation Sidebar */}
        <motion.div variants={itemVariants} className="w-full md:w-64 space-y-2">
          {[
            { id: 'general', icon: User, label: 'Profile & Account' },
            { id: 'notifications', icon: Bell, label: 'Notifications' },
            { id: 'orders', icon: Package, label: 'Orders & Fulfillment' },
            { id: 'suppliers', icon: Truck, label: 'Supplier Automation' },
            { id: 'security', icon: Shield, label: 'Security & Access' },
            { id: 'data', icon: Database, label: 'Data & Integrations' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-medium ${
                activeTab === tab.id 
                  ? 'bg-clay shadow-clay-pressed text-accent' 
                  : 'text-foreground/60 hover:bg-clay hover:shadow-clay hover:text-foreground'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Settings Content Area */}
        <motion.div variants={itemVariants} className="flex-1 space-y-6">
          
          {/* General Tab */}
          {activeTab === 'general' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-8 rounded-3xl bg-clay shadow-clay">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-foreground/5">
                <div className="w-12 h-12 rounded-2xl bg-clay shadow-clay-pressed flex items-center justify-center text-accent">
                  <User size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Profile Information</h2>
                  <p className="text-sm text-foreground/60">Update your account details and workspace name.</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">Full Name</label>
                    <input type="text" defaultValue="Admin User" className="w-full px-4 py-3 bg-clay shadow-clay-pressed rounded-2xl outline-none text-foreground focus:ring-2 focus:ring-accent/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">Email Address</label>
                    <input type="email" defaultValue="admin@nexstock.com" className="w-full px-4 py-3 bg-clay shadow-clay-pressed rounded-2xl outline-none text-foreground focus:ring-2 focus:ring-accent/50" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">Workspace / Company Name</label>
                  <input type="text" defaultValue="NexStock Enterprises Ltd." className="w-full px-4 py-3 bg-clay shadow-clay-pressed rounded-2xl outline-none text-foreground focus:ring-2 focus:ring-accent/50" />
                </div>
                <div className="pt-4 flex justify-end">
                   <motion.button onClick={handleSave} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-6 py-3 text-sm font-semibold text-white bg-accent shadow-clay-sm rounded-xl">Save Changes</motion.button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-8 rounded-3xl bg-clay shadow-clay">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-foreground/5">
                <div className="w-12 h-12 rounded-2xl bg-clay shadow-clay-pressed flex items-center justify-center text-accent">
                  <Bell size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Alert Preferences</h2>
                  <p className="text-sm text-foreground/60">Manage what events trigger toast notifications and emails.</p>
                </div>
              </div>
              
              <div className="space-y-4">
                 <div className="flex items-center justify-between p-5 bg-clay shadow-clay-pressed rounded-2xl">
                   <div>
                     <p className="font-bold text-foreground">Low Stock Alerts</p>
                     <p className="text-sm text-foreground/60">Notify me immediately when items drop below threshold.</p>
                   </div>
                   <ToggleSwitch checked={lowStockAlerts} onChange={() => setLowStockAlerts(!lowStockAlerts)} />
                 </div>
                 
                 <div className="flex items-center justify-between p-5 bg-clay shadow-clay-pressed rounded-2xl">
                   <div>
                     <p className="font-bold text-foreground">Shipment Updates</p>
                     <p className="text-sm text-foreground/60">Receive daily summaries of incoming purchase orders.</p>
                   </div>
                   <ToggleSwitch checked={shipmentUpdates} onChange={() => setShipmentUpdates(!shipmentUpdates)} />
                 </div>

                 <div className="flex items-center justify-between p-5 bg-clay shadow-clay-pressed rounded-2xl">
                   <div>
                     <p className="font-bold text-foreground">New Order Chimes</p>
                     <p className="text-sm text-foreground/60">Play a sound when a new customer order is received.</p>
                   </div>
                   <ToggleSwitch checked={true} onChange={() => {}} />
                 </div>
                 
                 <div className="pt-4 flex justify-end">
                   <motion.button onClick={handleSave} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-6 py-3 text-sm font-semibold text-white bg-accent shadow-clay-sm rounded-xl">Save Preferences</motion.button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-8 rounded-3xl bg-clay shadow-clay">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-foreground/5">
                <div className="w-12 h-12 rounded-2xl bg-clay shadow-clay-pressed flex items-center justify-center text-accent">
                  <Package size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Order & Fulfillment Rules</h2>
                  <p className="text-sm text-foreground/60">Configure how customer outbound orders are handled.</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">Default Shipping Carrier</label>
                  <select className="w-full px-4 py-3 bg-clay shadow-clay-pressed rounded-2xl outline-none text-foreground focus:ring-2 focus:ring-accent/50 appearance-none">
                    <option>FedEx Ground</option>
                    <option>UPS Standard</option>
                    <option>USPS Priority</option>
                    <option>DHL Express</option>
                  </select>
                </div>

                <div className="flex items-center justify-between p-5 bg-clay shadow-clay-pressed rounded-2xl">
                   <div>
                     <p className="font-bold text-foreground">Auto-Fulfill Digital Products</p>
                     <p className="text-sm text-foreground/60">Automatically mark orders containing only digital items as delivered.</p>
                   </div>
                   <ToggleSwitch checked={autoFulfill} onChange={() => setAutoFulfill(!autoFulfill)} />
                 </div>

                 <div className="pt-4 flex justify-end">
                   <motion.button onClick={handleSave} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-6 py-3 text-sm font-semibold text-white bg-accent shadow-clay-sm rounded-xl">Apply Rules</motion.button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Suppliers Tab */}
          {activeTab === 'suppliers' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-8 rounded-3xl bg-clay shadow-clay">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-foreground/5">
                <div className="w-12 h-12 rounded-2xl bg-clay shadow-clay-pressed flex items-center justify-center text-accent">
                  <Truck size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Supplier Automation</h2>
                  <p className="text-sm text-foreground/60">Automate your purchase orders to prevent stockouts.</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-5 bg-clay shadow-clay-pressed rounded-2xl">
                   <div>
                     <p className="font-bold text-foreground">Auto-Generate Purchase Orders</p>
                     <p className="text-sm text-foreground/60">Create draft purchase orders when inventory hits the reorder point.</p>
                   </div>
                   <ToggleSwitch checked={autoOrderSuppliers} onChange={() => setAutoOrderSuppliers(!autoOrderSuppliers)} />
                 </div>

                 <div className="flex items-center justify-between p-5 bg-clay shadow-clay-pressed rounded-2xl">
                   <div>
                     <p className="font-bold text-foreground">Auto-Email Vendors</p>
                     <p className="text-sm text-foreground/60">Automatically email generated POs directly to the vendor.</p>
                   </div>
                   <ToggleSwitch checked={false} onChange={() => {}} />
                 </div>

                 <div className="pt-4 flex justify-end">
                   <motion.button onClick={handleSave} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-6 py-3 text-sm font-semibold text-white bg-accent shadow-clay-sm rounded-xl">Save Supplier Settings</motion.button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-8 rounded-3xl bg-clay shadow-clay">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-foreground/5">
                <div className="w-12 h-12 rounded-2xl bg-clay shadow-clay-pressed flex items-center justify-center text-accent">
                  <Shield size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Security & Access</h2>
                  <p className="text-sm text-foreground/60">Protect your inventory data and control user access.</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-5 bg-clay shadow-clay-pressed rounded-2xl">
                   <div>
                     <p className="font-bold text-foreground">Two-Factor Authentication (2FA)</p>
                     <p className="text-sm text-foreground/60">Require an OTP when logging into new devices.</p>
                   </div>
                   <ToggleSwitch checked={twoFactor} onChange={() => setTwoFactor(!twoFactor)} />
                 </div>

                 <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">Change Password</label>
                    <input type="password" placeholder="Current Password" className="w-full mb-3 px-4 py-3 bg-clay shadow-clay-pressed rounded-2xl outline-none text-foreground focus:ring-2 focus:ring-accent/50" />
                    <input type="password" placeholder="New Password" className="w-full px-4 py-3 bg-clay shadow-clay-pressed rounded-2xl outline-none text-foreground focus:ring-2 focus:ring-accent/50" />
                 </div>

                 <div className="pt-4 flex justify-end">
                   <motion.button onClick={() => toast.success("Security settings updated!")} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-6 py-3 text-sm font-semibold text-white bg-accent shadow-clay-sm rounded-xl">Update Security</motion.button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Data Tab */}
          {activeTab === 'data' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-8 rounded-3xl bg-clay shadow-clay">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-foreground/5">
                <div className="w-12 h-12 rounded-2xl bg-clay shadow-clay-pressed flex items-center justify-center text-accent">
                  <Database size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Data Management</h2>
                  <p className="text-sm text-foreground/60">Export records and manage external API integrations.</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-5 bg-clay shadow-clay rounded-2xl border border-foreground/5 flex flex-col md:flex-row gap-4 items-center justify-between">
                   <div>
                     <p className="font-bold text-foreground">Export All Database Records</p>
                     <p className="text-sm text-foreground/60">Download a JSON backup of products, orders, and suppliers.</p>
                   </div>
                   <motion.button onClick={() => toast.success("Export started! Check your downloads.")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-5 py-2 rounded-xl bg-clay shadow-clay-pressed text-accent font-semibold whitespace-nowrap">
                     Download JSON
                   </motion.button>
                 </div>

                 <div>
                    <h3 className="font-bold text-foreground mb-4">API Integrations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <div className="p-4 rounded-xl bg-clay shadow-clay-pressed flex justify-between items-center opacity-50 cursor-not-allowed">
                         <span className="font-semibold text-foreground">Shopify</span>
                         <span className="text-xs bg-foreground/10 px-2 py-1 rounded-full">Coming Soon</span>
                       </div>
                       <div className="p-4 rounded-xl bg-clay shadow-clay-pressed flex justify-between items-center opacity-50 cursor-not-allowed">
                         <span className="font-semibold text-foreground">QuickBooks</span>
                         <span className="text-xs bg-foreground/10 px-2 py-1 rounded-full">Coming Soon</span>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          )}

        </motion.div>
      </div>
    </motion.div>
  );
}
