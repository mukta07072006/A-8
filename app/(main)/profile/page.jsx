"use client";

import Image from "next/image";
import { Mail, MapPin, Edit } from "lucide-react";
import { useSession } from "@/lib/auth-client";
import Logo from "@/assets/pfp.webp";
import NoAccount from "@/components/nodata/page";

export default function ProfilePage() {
    
    const defaultName = "Chattagram"
     const { data: session } = useSession();

        if (!session) {
            return (
                <div className="bg-black">
                    
                    <NoAccount/>
                </div>
            );
        }


       

    const user = session.user;

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 px-4 py-10">
            <div className="max-w-3xl mx-auto">

                {/* Card */}
                <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 md:p-8 shadow-sm border border-zinc-200 dark:border-zinc-800">

                    {/* Top Section */}
                    <div className="flex items-center gap-6">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden">
                            <Image
                                src={Logo}
                                alt="avatar"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex-1">
                            <h1 className="text-xl font-semibold text-zinc-900 dark:text-white">
                                {user.name}
                            </h1>
                            <p className="text-sm text-zinc-500">
                                {user.name}
                            </p>
                        </div>

                        <button className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
                            <Edit className="w-4 h-4" />
                            Edit
                        </button>
                    </div>

                    {/* Info */}
                    <div className="mt-6 space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
                        <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-orange-500" />
                            {user.email}
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-orange-500" />
                            {user.location || defaultName}  
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="my-6 border-t border-zinc-200 dark:border-zinc-800" />

                    {/* Stats */}
                    <div className="grid grid-cols-3 text-center">
                        <div>
                            <p className="text-lg font-semibold text-zinc-900 dark:text-white">24</p>
                            <p className="text-xs text-zinc-500">Orders</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-zinc-900 dark:text-white">12</p>
                            <p className="text-xs text-zinc-500">Wishlist</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-zinc-900 dark:text-white">5</p>
                            <p className="text-xs text-zinc-500">Reviews</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}