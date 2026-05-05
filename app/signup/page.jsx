"use client";

import { Button} from "@heroui/react";

import { Check, Lock } from "@gravity-ui/icons";
import {Envelope} from '@gravity-ui/icons';
import {PersonFill} from '@gravity-ui/icons';
import {ShoppingCart} from '@gravity-ui/icons';
import React from 'react';
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";

const page = () => {

    const [isLoading, setIsLoading] = React.useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData)
        const data = Object.fromEntries(formData.entries());
        console.log(data);

        const {signUpData, error} = await authClient.signUp.email({
          name: data.name,
          email: data.email,
          password: data.password,
        });

        if (error) {
          console.error("Signup error:", error);
          alert("Signup failed: " + error.message);
          return;
        }
    }

    



    return (
       <div className="relative flex min-h-screen items-center justify-center p-4 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
      

      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-amber-400/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />


      <div className="relative w-full max-w-md p-8 sm:p-10 flex flex-col items-center shadow-2xl shadow-amber-900/5 rounded-[2rem] border border-white/60 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl">
          
   
        <div className="flex flex-col items-center gap-4 mb-8 text-center">
          
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-orange-500/30 text-white">
            <ShoppingCart size={28} />
           
            <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-yellow-300 border-2 border-white dark:border-zinc-900"></div>
        </div>
          
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Suncart</span>
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm max-w-[260px]">
              Create your account today and start shopping brighter.
            </p>
          </div>
        </div>

        {/* 4. The Form (Still using HeroUI Inputs for functionality) */}
        <form className="w-full flex flex-col gap-6" onSubmit={onSubmit}>
  <div className="flex flex-col gap-5">
    
    {/* Full Name */}
    <div className="group flex flex-col gap-2">
      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">
        Full Name
      </label>
      <div className="relative flex items-center">
        <div className="absolute left-4 text-amber-500 z-10">
          <PersonFill size={18} />
        </div>
        <input
          required
          name="name"
          placeholder="Moshud Muktadir"
          className="w-full h-13 pl-12 pr-4 bg-zinc-100/50 dark:bg-zinc-800/50 border-2 border-transparent rounded-2xl outline-none focus:border-amber-500 focus:bg-white dark:focus:bg-zinc-900 focus:ring-4 focus:ring-amber-500/10 transition-all duration-200 text-sm font-medium"
        />
      </div>
    </div>

    {/* Email Address */}
    <div className="group flex flex-col gap-2">
      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">
        Email Address
      </label>
      <div className="relative flex items-center">
        <div className="absolute left-4 text-amber-500 z-10">
          <Envelope size={18} />
        </div>
        <input
          required
          type="email"
          name="email"
          placeholder="moshud@muktadir.com"
          className="w-full h-13 pl-12 pr-4 bg-zinc-100/50 dark:bg-zinc-800/50 border-2 border-transparent rounded-2xl outline-none focus:border-amber-500 focus:bg-white dark:focus:bg-zinc-900 focus:ring-4 focus:ring-amber-500/10 transition-all duration-200 text-sm font-medium"
        />
      </div>
    </div>

    {/* Password */}
    <div className="group flex flex-col gap-2">
      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">
        Password
      </label>
      <div className="relative flex items-center">
        <div className="absolute left-4 text-amber-500 z-10">
          <Lock size={18} />
        </div>
        <input
          required
          type="password"
          name="password"
          placeholder="••••••••"
          className="w-full h-13 pl-12 pr-4 bg-zinc-100/50 dark:bg-zinc-800/50 border-2 border-transparent rounded-2xl outline-none focus:border-amber-500 focus:bg-white dark:focus:bg-zinc-900 focus:ring-4 focus:ring-amber-500/10 transition-all duration-200 text-sm font-medium"
        />
      </div>
    </div>

  </div>

  <button
    type="submit"
    disabled={isLoading}
    className="w-full h-14 mt-2 flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-2xl shadow-lg shadow-orange-500/30 active:scale-[0.98] transition-all disabled:opacity-70"
  >
    {isLoading ? "Creating Account..." : (
      <>
        <span>Start Shopping</span>
        <PersonFill size={20} />
      </>
    )}
  </button>
</form>

         <Link href="/signin" className="flex gap-2 rounded-full cursor items-center border border-white px-4 mt-3 py-1">
            Already have an account? Log in
          </Link>
        
      
      </div>
    </div>
    );
};

export default page;