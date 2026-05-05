import React from "react";
import { StarFill } from "@gravity-ui/icons";
import ordinary from "@/assets/ordinary.webp";
import patagonia from "@/assets/patagonia.webp";
import rayban from "@/assets/rayban.webp";
import yeti from "@/assets/yeti.svg";
import Image from "next/image";

const TopBrands = () => {
  const brands = [
  { 
    name: "The Ordinary", 
    category: "Skincare", 
    rating: 4.8, 
    logo: ordinary 
  },
  { 
    name: "Patagonia", 
    category: "Outdoor", 
    rating: 4.9, 
    logo: patagonia 
  },
  { 
    name: "Ray-Ban", 
    category: "Accessories", 
    rating: 4.7, 
    logo: rayban 
  },
  { 
    name: "YETI", 
    category: "Coolers", 
    rating: 4.9, 
    logo: yeti 
  }
];

  return (
    <section className="py-20 border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase italic">
              Top <span className="text-orange-500">Brands</span>
            </h2>
            <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest mt-2">Certified Summer Quality</p>
          </div>
          <button className="text-orange-500 font-black text-sm hover:underline underline-offset-4">
            VIEW ALL BRANDS
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {brands.map((brand) => (
           <div key={brand.name} className="px-4 py-2 flex flex-col justify-center items-center">
            <Image src={brand.logo} alt={`${brand.name} logo`} />
           </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBrands;