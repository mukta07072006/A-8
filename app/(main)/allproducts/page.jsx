"use client"

import ProductsCard from '@/components/productsCard/page';
import UseApps from '@/hooks/products';
import React from 'react';

const AllProducts = () => {
    const {products, loading} = UseApps()


    return (
       <div className='bg-black pb-10 min-h-screen'>
            <div className="max-w-6xl mx-auto px-4 mt-4 mb-4">
        <h2 className="text-3xl font-bold text-center dark:text-white ">All Products</h2>
        </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4'>

            {
                products.map(product => <ProductsCard key={product.id} product={product} /> )
            }

            </div>


        
        
        </div>
    );
};

export default AllProducts;