"use client";
import React, { useState } from "react";
import { 
  ShoppingCart, 
  Magnifier, 
  Person, 
  ChevronDown, 
  Bars, 
  Xmark 
} from "@gravity-ui/icons";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {

  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const {data , isPending} = useSession();

  const user = data?.user;

  if(isPending) {
    return (
      <div className="w-full h-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  const notify = () => toast("Signed out successfully!", { type: "error" });
  const signOutFunction = ()=> {
    signOut();
    setIsOpen(false);
    notify();
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* 1. Logo & Brand */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-orange-500/20 text-white transition-transform group-hover:scale-110">
              <ShoppingCart size={20} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white">
              SUN<span className="text-orange-500">CART</span>
            </span>
          </div>

          {/* 2. Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
                      <a 
                      href="#" 
                      className={`text-sm font-bold transition-colors hover:text-orange-500 
                        ${active === "home" 
                          ? "text-orange-500" 
                          : "text-zinc-600 dark:text-zinc-400"
                        }`}
                      onClick={(e) => {
                        e.preventDefault(); 
                        setActive("home");
                      }}
                    >
                      Home
                    </a>

                    <a 
                      href="#" 
                      className={`text-sm font-bold transition-colors hover:text-orange-500 
                        ${active === "products" 
                          ? "text-orange-500" 
                          : "text-zinc-600 dark:text-zinc-400"
                        }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActive("products");
                      }}
                    >
                      Products
                    </a>
          </div>

          {/* 3. Right Side Actions */}
          {
            user? <div className="flex items-center gap-2 sm:gap-4">
            

            {/* Cart Button */}
            <button className="flex items-center gap-2 px-3 py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-xl transition-all group">
              <ShoppingCart size={18} className="text-orange-500" />
              <span className="hidden sm:inline text-xs font-black text-zinc-700 dark:text-zinc-200">
                0
              </span>
            </button>

            {/* User Profile (Non-HeroUI Dropdown) */}
            <div className="relative group">
              <button className="flex items-center gap-1 p-1 rounded-full border-2 border-transparent hover:border-amber-400 transition-all">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-100 to-orange-100 flex items-center justify-center text-orange-600">
                  <Person size={18} />
                </div>
                <ChevronDown size={14} className="text-zinc-400" />
              </button>
              
              {/* Simple CSS Dropdown */}
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                <a href="#" className="block px-4 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-orange-50 hover:text-orange-600">My Orders</a>
                <a href="#" className="block px-4 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-orange-50 hover:text-orange-600">Suncart Plus</a>
                <hr className="my-1 border-zinc-100 dark:border-zinc-800" />
                <button onClick={()=> signOutFunction()} className="flex items-center ml-2 gap-2 px-3 py-2 bg-red-500 text-white font-bold  cursor-pointer rounded-xl transition-all">
                  Log Out
                </button>
                <a href="#" className="block px-4 py-2 text-sm font-bold text-red-500 hover:bg-red-50"></a>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-zinc-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <Xmark size={24} /> : <Bars size={24} />}
            </button>
          </div> : <div className="flex items-center gap-2 sm:gap-4"> 
            <Link href="/signin" className="flex items-center gap-2 px-3 py-2 bg-orange-500 text-white font-bold rounded-xl transition-all">
              Sign In
            </Link>
            <Link href="/signup" className="flex items-center gap-2 px-3 py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-xl transition-all">SignUp </Link>
             </div>
          }
        </div>
      </div>

      {/* 4. Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 px-4 py-4 space-y-3">
          <a href="#" className="block text-base font-bold text-zinc-900 dark:text-white">Groceries</a>
          <a href="#" className="block text-base font-bold text-orange-500">Daily Deals</a>
          <a href="#" className="block text-base font-bold text-zinc-900 dark:text-white">Best Sellers</a>
          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
             <button className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white font-bold py-3 rounded-xl">
               Checkout Now
             </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;