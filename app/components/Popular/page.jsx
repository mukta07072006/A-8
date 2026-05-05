"use client";

import UseApps from '@/hooks/products';
import React from 'react';
import ProductsCard from '../../../productsCard/page';

const Popular = () => {

    const {products, loading} = UseApps()
    console.log(products)


    return (
        <div>
            <div className="max-w-6xl mx-auto px-4 mt-4 mb-4">
        <h2 className="text-3xl font-bold text-center dark:text-white ">Top Rated Products</h2>
        </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4'>

            {
                products.slice(0,3).map(product => <ProductsCard key={product.id} product={product} /> )
            }

            </div>


        
        
        </div>
    );
};

export default Popular;