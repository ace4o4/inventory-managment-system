"use client";

import { motion } from "framer-motion";

interface EmptyStateProps {
  title: string;
  description: string;
}

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center p-12 text-center rounded-3xl bg-clay shadow-clay-pressed h-64 w-full"
    >
      <svg className="w-32 h-32 text-foreground/10 mb-6" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 80L100 40L160 80V140C160 151.046 151.046 160 140 160H60C48.9543 160 40 151.046 40 140V80Z" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 80L100 120L160 80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M100 120V160" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M60 50 C 65 40, 75 40, 80 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
        <circle cx="130" cy="50" r="4" fill="currentColor" />
        <circle cx="140" cy="40" r="3" fill="currentColor" />
        <circle cx="150" cy="55" r="2" fill="currentColor" />
      </svg>
      
      <h3 className="text-xl font-bold text-foreground/80 mb-2">{title}</h3>
      <p className="text-foreground/50 max-w-sm">{description}</p>
    </motion.div>
  );
}
