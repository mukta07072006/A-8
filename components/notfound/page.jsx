"use client";
import React from 'react';
import { Home, MoveLeft, MapPinOff } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative inline-block mb-8"
        >
          <h1 className="text-[12rem] font-black text-zinc-100 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ 
                rotate: [0, -10, 10, -10, 0],
                y: [0, -5, 0] 
              }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="bg-yellow-400 p-6 rounded-[2rem] shadow-2xl shadow-yellow-200"
            >
              <MapPinOff size={64} className="text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-zinc-100 mb-4">
            Lost in the Clouds?
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            The page you are looking for has been moved, deleted, or never existed in the Sun Cart universe.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => window.history.back()}
              className="group flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-zinc-100 font-semibold text-white transition-all hover:bg-zinc-50 hover:text-black active:scale-95"
            >
              <MoveLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>

            <Link 
              href="/"
              className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-900 text-white font-semibold  hover:bg-zinc-800 active:scale-95"
            >
              <Home size={20} />
              Return Home
            </Link>
          </div>
        </motion.div>

        {/* Decorative Element */}
        <div className="mt-16 flex justify-center gap-4 opacity-20">
          <div className="w-2 h-2 rounded-full bg-zinc-400" />
          <div className="w-2 h-2 rounded-full bg-zinc-400" />
          <div className="w-2 h-2 rounded-full bg-zinc-400" />
        </div>
      </div>
    </div>
  );
}