"use client";

import { motion } from "framer-motion";
import { Plus, Search, Filter, Edit2, Trash2 } from "lucide-react";
import { useState } from "react";
import { Modal } from "@/components/Modal";

// Dummy data
const initialProducts = [
  { id: 1, name: "Premium Widget", sku: "SKU-90210", stock: 124, price: "$49.99", category: "Standard", status: "In Stock" },
  { id: 2, name: "Mechanical Keyboard", sku: "SKU-90211", stock: 12, price: "$149.00", category: "Electronics", status: "Low Stock" },
  { id: 3, name: "Ergonomic Mouse", sku: "SKU-90212", stock: 0, price: "$79.99", category: "Electronics", status: "Out of Stock" },
];

export default function ProductsPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

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
    // Logic to add product would go here
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-6xl mx-auto py-8">
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Products Inventory</h1>
          <p className="text-foreground/60">Manage all your products, tags, and stock levels.</p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.02 }} 
          whileTap={{ scale: 0.98 }} 
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent/90 transition-colors shadow-clay-sm rounded-xl"
        >
          <Plus size={18} /> Add Product
        </motion.button>
      </motion.div>

      <motion.div variants={itemVariants} className="flex gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={20} />
          <input 
            type="text" 
            placeholder="Search products, barcodes..." 
            className="w-full pl-12 pr-4 py-3 bg-clay shadow-clay-pressed rounded-2xl outline-none text-foreground placeholder:text-foreground/40"
          />
        </div>
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center justify-center w-12 h-12 bg-clay shadow-clay-sm rounded-2xl text-foreground/60 hover:text-accent transition-colors">
          <Filter size={20} />
        </motion.button>
      </motion.div>

      <motion.div variants={itemVariants} className="p-1 rounded-3xl bg-clay shadow-clay overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-foreground/50 border-b border-foreground/10">
                <th className="p-6 font-semibold whitespace-nowrap">Name</th>
                <th className="p-6 font-semibold whitespace-nowrap">SKU / Barcode</th>
                <th className="p-6 font-semibold whitespace-nowrap">Stock</th>
                <th className="p-6 font-semibold whitespace-nowrap">Price</th>
                <th className="p-6 font-semibold whitespace-nowrap">Category</th>
                <th className="p-6 font-semibold whitespace-nowrap">Status</th>
              </tr>
            </thead>
            <tbody className="text-foreground">
              {initialProducts.map((product) => (
                <tr 
                  key={product.id} 
                  onClick={() => setSelectedProduct(product)}
                  className="border-b border-foreground/5 last:border-0 hover:bg-foreground/5 transition-colors cursor-pointer group"
                >
                  <td className="p-6 font-medium group-hover:text-accent transition-colors">{product.name}</td>
                  <td className="p-6 text-foreground/60">{product.sku}</td>
                  <td className="p-6 font-medium">{product.stock}</td>
                  <td className="p-6">{product.price}</td>
                  <td className="p-6">
                    <span className="px-3 py-1 text-xs rounded-full shadow-clay-pressed text-foreground/70 font-medium">
                      {product.category}
                    </span>
                  </td>
                  <td className="p-6">
                    <span className={`px-3 py-1 text-xs rounded-full shadow-clay-pressed font-medium ${
                      product.status === 'In Stock' ? 'text-green-500' : 
                      product.status === 'Low Stock' ? 'text-orange-500' : 'text-red-500'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Add Product Modal */}
      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Add New Product">
        <form onSubmit={handleAddSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/70">Product Name</label>
              <input required type="text" className="w-full p-4 rounded-xl bg-clay shadow-clay-pressed outline-none focus:ring-2 focus:ring-accent/50" placeholder="e.g. Wireless Headphones" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/70">SKU</label>
              <input required type="text" className="w-full p-4 rounded-xl bg-clay shadow-clay-pressed outline-none focus:ring-2 focus:ring-accent/50" placeholder="e.g. WH-1002" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/70">Initial Stock</label>
              <input required type="number" min="0" className="w-full p-4 rounded-xl bg-clay shadow-clay-pressed outline-none focus:ring-2 focus:ring-accent/50" placeholder="0" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/70">Price ($)</label>
              <input required type="number" step="0.01" min="0" className="w-full p-4 rounded-xl bg-clay shadow-clay-pressed outline-none focus:ring-2 focus:ring-accent/50" placeholder="0.00" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/70">Description</label>
            <textarea rows={4} className="w-full p-4 rounded-xl bg-clay shadow-clay-pressed outline-none focus:ring-2 focus:ring-accent/50 resize-none" placeholder="Product details..."></textarea>
          </div>
          <div className="pt-4 flex justify-end gap-4">
            <motion.button type="button" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setIsAddModalOpen(false)} className="px-6 py-3 rounded-xl font-medium text-foreground/60 hover:text-foreground transition-colors shadow-clay-sm">
              Cancel
            </motion.button>
            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-6 py-3 rounded-xl font-medium text-white bg-accent shadow-clay-sm">
              Save Product
            </motion.button>
          </div>
        </form>
      </Modal>

      {/* Edit/View Product Modal */}
      <Modal isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)} title="Product Details">
        {selectedProduct && (
          <div className="space-y-8">
            <div className="flex items-center justify-between p-6 rounded-2xl bg-clay shadow-clay-pressed">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{selectedProduct.name}</h3>
                <p className="text-foreground/50 font-mono text-sm">{selectedProduct.sku}</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-accent">{selectedProduct.price}</p>
                <p className={`text-sm font-medium mt-1 ${selectedProduct.stock > 10 ? 'text-green-500' : selectedProduct.stock > 0 ? 'text-orange-500' : 'text-red-500'}`}>
                  {selectedProduct.stock} in stock
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center justify-center gap-2 p-4 rounded-xl bg-clay shadow-clay-sm font-semibold text-foreground hover:text-accent transition-colors">
                 <Edit2 size={18} /> Edit Details
               </motion.button>
               <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center justify-center gap-2 p-4 rounded-xl bg-clay shadow-clay-sm font-semibold text-red-500 hover:text-red-400 transition-colors">
                 <Trash2 size={18} /> Delete Product
               </motion.button>
            </div>
          </div>
        )}
      </Modal>
    </motion.div>
  );
}
