import { useSession } from '@/lib/auth-client';
import { ArrowLeft, ArrowRight } from '@gravity-ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';





const ProductsCard = ({ product }) => {
  
    const {data, isPending} = useSession();
      const user = data?.user;

  

    const Toast =() => {
      if(!user) {
        alert("Please sign in to view product details.");
      }
    }

    return (
      
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 group flex flex-col">

        <Link href={`${user ? `/product/${product?.id}` : '/signin'}`} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 group flex flex-col">

  {/* Image */}
  <div className="relative w-full aspect-[4/3] overflow-hidden flex-shrink-0">
    <Image
      src={product?.image}
      alt={product?.name}
      fill
      className="object-cover group-hover:scale-105 transition duration-500"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />


    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-40"></div>
  </div>

  {/* Content */}
  <div className="p-5 flex flex-col gap-3">
    
    {/* Top Row */}
    <div className="flex justify-between items-center">
      <span className="text-[11px] font-medium text-orange-500 uppercase tracking-wider">
        {product?.category}
      </span>

      <div className="flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-300">
        <span className="text-orange-500">★</span>
        {product?.rating}
      </div>
    </div>

    {/* Title */}
    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white leading-snug">
      {product?.name}
    </h3>

    {/* Description */}
    <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
      {product?.description}
    </p>

    {/* Footer */}
    <div className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-100 dark:border-zinc-800">
      <span className="text-xl font-bold text-zinc-900 dark:text-white">
        ${product?.price}
      </span>

      <button className="flex items-center gap-1 text-sm font-medium text-orange-500 hover:gap-2 transition-all">
        Details <ArrowRight size={16} />
      </button>
    </div>

  </div>
  </Link>
</div>
    );
};

export default ProductsCard;