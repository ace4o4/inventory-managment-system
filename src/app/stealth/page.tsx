"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Terminal, Code, Cpu, ChevronRight } from 'lucide-react';

export default function StealthPortfolio() {
  const container = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // Hero Entrance Animation
    gsap.from(".stealth-element", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out"
    });

    // Neumorphic Card Hover Effects
    const cards = gsap.utils.toArray('.neu-card');
    cards.forEach((card: any) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -5,
          boxShadow: '15px 15px 30px rgba(0,0,0,0.9), -15px -15px 30px rgba(255,255,255,0.04)',
          duration: 0.4,
          ease: "power2.out"
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          boxShadow: '10px 10px 20px rgba(0,0,0,0.8), -10px -10px 20px rgba(255,255,255,0.03)',
          duration: 0.4,
          ease: "power2.out"
        });
      });
    });

    // Claymorphic Button Squish Effect
    const clayBtns = gsap.utils.toArray('.clay-btn');
    clayBtns.forEach((btn: any) => {
      btn.addEventListener('mousedown', () => {
        gsap.to(btn, {
          scale: 0.95,
          boxShadow: 'inset 8px 8px 16px rgba(0,0,0,0.9), inset -8px -8px 16px rgba(255,255,255,0.05)',
          duration: 0.1,
          ease: "power1.inOut"
        });
      });
      btn.addEventListener('mouseup', () => {
        gsap.to(btn, {
          scale: 1,
          boxShadow: '10px 10px 20px rgba(0,0,0,0.8), -10px -10px 20px rgba(255,255,255,0.03), inset 4px 4px 8px rgba(255,255,255,0.05), inset -4px -4px 8px rgba(0,0,0,0.5)',
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          scale: 1,
          boxShadow: '10px 10px 20px rgba(0,0,0,0.8), -10px -10px 20px rgba(255,255,255,0.03), inset 4px 4px 8px rgba(255,255,255,0.05), inset -4px -4px 8px rgba(0,0,0,0.5)',
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  }, { scope: container });

  return (
    <div 
      ref={container} 
      className="min-h-screen bg-[#0F1012] text-gray-300 font-sans p-8 md:p-16 flex flex-col items-center justify-center selection:bg-emerald-500/30"
    >
      <div className="max-w-5xl w-full">
        
        {/* Navigation / Header */}
        <header className="flex justify-between items-center mb-24 stealth-element">
          <div className="text-xl font-bold tracking-widest text-white/90 uppercase flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            SYS.CMD
          </div>
          <nav className="flex gap-8 text-sm tracking-widest uppercase font-medium text-white/50">
            <a href="#" className="hover:text-white transition-colors">Intel</a>
            <a href="#" className="hover:text-white transition-colors">Operations</a>
            <a href="#" className="hover:text-white transition-colors">Comms</a>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div className="stealth-element inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-[inset_2px_2px_4px_rgba(255,255,255,0.02),inset_-2px_-2px_4px_rgba(0,0,0,0.5)] bg-[#121214] border border-white/5 text-xs uppercase tracking-widest text-emerald-400 font-mono">
              <Terminal size={14} /> System Online
            </div>
            
            <h1 className="stealth-element text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600 tracking-tight leading-[1.1]">
              Elite UI/UX<br />Architect.
            </h1>
            
            <p className="stealth-element text-lg text-gray-500 max-w-md leading-relaxed">
              Forging highly sophisticated, stealth-mode interfaces. Engineering precision pixels grounded in dark neumorphism.
            </p>

            <div className="stealth-element pt-4 flex items-center gap-6">
              {/* Claymorphic Button */}
              <button className="clay-btn group relative flex items-center gap-3 px-8 py-4 rounded-[32px] bg-[#0F1012] text-emerald-400 font-bold tracking-wide transition-colors outline-none shadow-[10px_10px_20px_rgba(0,0,0,0.8),-10px_-10px_20px_rgba(255,255,255,0.03),inset_4px_4px_8px_rgba(255,255,255,0.05),inset_-4px_-4px_8px_rgba(0,0,0,0.5)]">
                Initialize Protocol <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
                View Intel
              </button>
            </div>
          </div>

          {/* Project Grid / Neumorphic Panels */}
          <div className="grid grid-cols-2 gap-6">
            <div className="neu-card stealth-element p-8 rounded-3xl bg-[#0F1012] shadow-[10px_10px_20px_rgba(0,0,0,0.8),-10px_-10px_20px_rgba(255,255,255,0.03)] flex flex-col gap-4 mt-12 cursor-pointer">
              <div className="w-12 h-12 rounded-2xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.03)] flex items-center justify-center text-blue-400">
                <Code size={24} />
              </div>
              <h3 className="text-white/90 font-bold mt-4">Core Logic</h3>
              <p className="text-sm text-gray-500">Robust architectural systems designed for immense scale.</p>
            </div>

            <div className="neu-card stealth-element p-8 rounded-3xl bg-[#0F1012] shadow-[10px_10px_20px_rgba(0,0,0,0.8),-10px_-10px_20px_rgba(255,255,255,0.03)] flex flex-col gap-4 mb-12 cursor-pointer">
              <div className="w-12 h-12 rounded-2xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.03)] flex items-center justify-center text-emerald-400">
                <Cpu size={24} />
              </div>
              <h3 className="text-white/90 font-bold mt-4">Tactical UI</h3>
              <p className="text-sm text-gray-500">Micro-interactions built natively with GSAP and WebGL.</p>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
