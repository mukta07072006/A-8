"use client"

import { useParams } from 'next/navigation';
import React, { use } from 'react';

const ProductsDetails = ({params}) => {
    console.log(params)
    const id = useParams(params)
    console.log(id)
    return (
        <div className='h-[80vh] bg-black'>
            <h1 className='text-white'>Product Details</h1>
        </div>
    );
};

export default ProductsDetails;