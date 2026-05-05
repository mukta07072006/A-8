
import React, { useEffect, useState } from 'react';

const UseApps = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
 
    useEffect(()=>{
        const datafetch = async ()=> {
            const res = await fetch("https://suncart-assignment-8.vercel.app/api/products")
            const data = await res.json()
            setProducts(data)
            setLoading(false)
        }
        datafetch()
    },[])
    return {products, loading}
};

export default UseApps;