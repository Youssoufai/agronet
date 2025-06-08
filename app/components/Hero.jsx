'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="relative w-full h-screen text-white">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/bg.png')",
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 flex flex-col justify-center h-[90%] max-w-6xl mx-auto px-6 md:px-12 md:py-4 pb-16"
            >
                <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
                    Agronet — Bridging Farmers and Businesses for a Healthier Future
                </h1>
                <p className="text-lg md:text-xl mt-4 text-white/90">
                    Buy direct from farmers. Sell faster. Eat healthier.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex gap-4 flex-wrap">
                    <Link
                        href="/get-started"
                        className="bg-green-700 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
                    >
                        Get Started
                    </Link>
                    <Link
                        href="/marketplace"
                        className="bg-white text-green-700 px-5 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-100 transition"
                    >
                        Explore Marketplace <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </motion.div>

            {/* Stats Bar */}
            <div className="absolute bottom-0 w-full bg-green-700 py-6 text-center grid grid-cols-2 md:grid-cols-4 text-white text-sm md:text-base font-semibold">
                <div>
                    <p className="text-xl md:text-2xl font-bold">2,500+</p>
                    <p>Farmers</p>
                </div>
                <div>
                    <p className="text-xl md:text-2xl font-bold">1,200+</p>
                    <p>Businesses</p>
                </div>
                <div>
                    <p className="text-xl md:text-2xl font-bold">15,000+</p>
                    <p>Products</p>
                </div>
                <div>
                    <p className="text-xl md:text-2xl font-bold">30+</p>
                    <p>Regions</p>
                </div>
            </div>
        </div>
    );
}
