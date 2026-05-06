"use client";
import React from 'react';
import { UserX, LogIn, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NoAccount() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] p-6 text-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-md w-full bg-black rounded-[2.5rem] p-10"
      >
        {/* Icon Section */}
        <div className="relative mx-auto w-24 h-24 mb-8">
          <div className="absolute inset-0  rounded-3xl rotate-12" />
          <div className="relative w-full h-full rounded-3xl flex items-center justify-center shadow-lg">
            <UserX size={40} className="text-white" />
          </div>
        </div>

        {/* Text Section */}
        <h2 className="text-3xl font-bold text-white mb-3">
          Not Signed In
        </h2>
        <p className="text-zinc-500 mb-10 leading-relaxed">
          It looks like you aren't logged into Sun Cart. Join us to track your orders and manage your profile.
        </p>

        {/* Buttons Section */}
        <div className="flex flex-col gap-3">
          <Link 
            href="/signin"
            className="flex items-center justify-center gap-2 w-full bg-zinc-900 text-white py-4 rounded-2xl font-semibold transition-all hover:bg-zinc-800 active:scale-[0.98]"
          >
            <LogIn size={20} />
            Sign In to Account
          </Link>
          
          <Link 
            href="/signup"
            className="flex items-center justify-center gap-2 w-full bg-white text-zinc-900 border-2 border-zinc-100 py-4 rounded-2xl font-semibold transition-all hover:bg-zinc-50 active:scale-[0.98]"
          >
            <UserPlus size={20} />
            Create New Account
          </Link>
        </div>

        {/* Quick Help */}
        <p className="mt-8 text-sm text-zinc-400">
          Need help? <Link href="https://moshudmuktadir.pro.bd" className="text-yellow-600 font-medium underline underline-offset-4">Contact Support</Link>
        </p>
      </motion.div>
    </div>
  );
}