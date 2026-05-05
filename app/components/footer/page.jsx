import React from "react";
import { ShoppingCart, LogoFacebook, Twitter, Instagram, ArrowRight } from "@gravity-ui/icons";

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Brand Section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-orange-500/20 text-white">
                <ShoppingCart size={20} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white">
                SUN<span className="text-orange-500">CART</span>
              </span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed max-w-xs">
              Bringing the sunshine to your doorstep with the freshest groceries and daily essentials since 2024.
            </p>
            <div className="flex gap-4">
              {[LogoFacebook].map((Icon, idx) => (
                <a key={idx} href="#" className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-orange-500 hover:bg-orange-50 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-zinc-900 dark:text-white font-bold mb-6 italic">Shop Categories</h4>
            <ul className="space-y-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Fresh Produce</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Dairy & Eggs</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Frozen Foods</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Beverages</a></li>
            </ul>
          </div>

          {/* 3. Company Links */}
          <div>
            <h4 className="text-zinc-900 dark:text-white font-bold mb-6 italic">Customer Service</h4>
            <ul className="space-y-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Shipping Info</a></li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div className="flex flex-col gap-6">
            <h4 className="text-zinc-900 dark:text-white font-bold italic">Stay Bright</h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">Subscribe for weekly deals and sun-kissed discounts.</p>
            <div className="relative flex items-center">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full h-12 pl-4 pr-12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:border-orange-500 transition-all text-sm"
              />
              <button className="absolute right-1 w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] font-bold uppercase tracking-widest text-zinc-400">
          <p>© 2026 SUNCART RETAIL GROUP. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-600 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;