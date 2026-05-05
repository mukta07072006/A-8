import React from "react";
import { ArrowDownRight, Flame, Percent } from "@gravity-ui/icons";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[600px] flex items-center overflow-hidden bg-white dark:bg-zinc-950">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50/50 to-transparent dark:from-orange-950/20 -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* 1. Text Content */}
        <div className="flex flex-col gap-6 z-10">
          <div className="flex items-center gap-2 px-3 py-1 bg-orange-100 dark:bg-orange-900/30 w-fit rounded-full border border-orange-200 dark:border-orange-800">
            <Flame size={16} className="text-orange-600" />
            <span className="text-xs font-black uppercase tracking-widest text-orange-600">Hot Deals</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 dark:text-white leading-[0.9]">
            SUMMER <br />
            <span className="text-orange-500">SALE</span>
          </h1>

          <div className="flex items-baseline gap-4">
             <span className="text-4xl font-black text-zinc-400 line-through">2026</span>
             <div className="flex items-center gap-2 text-5xl font-black text-zinc-900 dark:text-white">
               UP TO <span className="bg-amber-400 px-2 text-white rounded-lg">50%</span> OFF
             </div>
          </div>

          <p className="text-zinc-500 dark:text-zinc-400 text-lg font-medium max-w-md leading-relaxed">
            Beat the heat with our sun-kissed collection. Fresh produce, beach essentials, and cooling drinks delivered in 30 minutes.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <button className="group flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black rounded-2xl hover:scale-105 transition-all shadow-xl shadow-zinc-500/20">
              SHOP NOW
              <ArrowDownRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 text-zinc-900 dark:text-white font-black rounded-2xl hover:scale-150 transition-all">
              VIEW OFFERS
            </button> 
          </div>
        </div>

        {/* 2. Visual / Banner Content */}
        <div className="relative">
          {/* Main Hero Image */}
          <div className="relative aspect-square w-full max-w-[500px] mx-auto overflow-hidden rounded-[40px] shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500">
            <img 
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800" 
              alt="Summer Fashion" 
              className="w-full h-full object-cover"
            />
            {/* Glass Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-tighter opacity-80">Flash Sale Ending In</p>
                  <p className="text-2xl font-black text-white">04:59:12</p>
                </div>
                <div className="h-12 w-12 bg-amber-400 rounded-full flex items-center justify-center text-white shadow-lg">
                  <Percent size={24} />
                </div>
              </div>
            </div>
          </div>

    
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl animate-pulse" />
        </div>

      </div>
    </section>
  );
};

export default Hero;