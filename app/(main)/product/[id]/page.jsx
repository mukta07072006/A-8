"use client";

import UseApps from '@/hooks/products';
import { ArrowLeft, Star, ShieldCheck, Truck, RotateCcw, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

const ProductPage = () => {
    const router = useRouter();
    const { id } = useParams();
    const { products, loading } = UseApps();

    const product = products?.find(p => p.id === parseInt(id));

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-950">
                <div className="h-10 w-10 rounded-full border-2 border-zinc-300 border-t-orange-500 animate-spin" />
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
                    Product not found
                </h2>
                <button
                    onClick={() => router.back()}
                    className="mt-4 text-sm text-orange-500 flex items-center gap-1"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Go back
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 px-4 md:px-8 py-6">
            
            {/* Back */}
            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-sm text-zinc-500 hover:text-orange-500 mb-8"
            >
                <ArrowLeft className="w-4 h-4" />
                Back
            </button>

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

                {/* Image */}
                <div>
                    <div className="relative aspect-[4/4] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                   
                   
                </div>

                {/* Info */}
                <div className="flex flex-col">

                    {/* Header */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-sm">
                            <span className="px-2 py-1 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30">
                                {product.category}
                            </span>

                            <div className="flex items-center gap-1 text-zinc-500">
                                <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                                <span className="font-medium text-zinc-900 dark:text-white">
                                    {product.rating}
                                </span>
                                <span className="text-xs">({product.reviews || 48})</span>
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                            {product.name}
                        </h1>

                        <p className="text-2xl font-semibold text-zinc-900 dark:text-white">
                            ${product.price}
                        </p>
                    </div>

                    {/* Description */}
                    <p className="mt-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {product.description || "No description available."}
                    </p>

                    {/* Features */}
                    <div className="grid sm:grid-cols-2 gap-3 mt-6">
                        {(product.features || ["Premium Quality", "Eco Friendly", "Limited Edition"]).map((f, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                                <ShieldCheck className="w-4 h-4 text-orange-500" />
                                {f}
                            </div>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="mt-10 space-y-4">
                        <div className="flex gap-3">
                            <button className="flex-1 h-12 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 flex items-center justify-center gap-2 text-sm font-medium hover:opacity-90">
                                <ShoppingBag className="w-4 h-4" />
                                Add to cart
                            </button>

                            <button className="px-4 h-12 rounded-xl border border-zinc-300 dark:border-zinc-700 text-sm">
                                Wishlist
                            </button>
                        </div>

                        {/* perks */}
                        <div className="flex gap-6 text-xs text-zinc-500 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                            <div className="flex items-center gap-1">
                                <Truck className="w-4 h-4 text-orange-500" />
                                Free delivery
                            </div>
                            <div className="flex items-center gap-1">
                                <RotateCcw className="w-4 h-4 text-orange-500" />
                                30-day return
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductPage;