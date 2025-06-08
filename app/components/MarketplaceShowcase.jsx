// components/MarketplaceShowcase.tsx
'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Search, SlidersHorizontal, Star } from 'lucide-react';

const features = [
    "Direct connection with producers",
    "Transparent pricing and quality information",
    "Secure payment and logistics support",
    "Seasonal and specialty products available",
];

const products = [
    {
        name: "Organic Tomatoes",
        price: "$2.49/kg",
        farm: "Green Valley Farm",
        rating: 4.8,
        image: "/images/tomatoes.jpg",
    },
    {
        name: "Russet Potatoes",
        price: "$1.29/kg",
        farm: "Hilltop Organics",
        rating: 4.6,
        image: "/images/potatoes.jpg",
    },
    {
        name: "Fresh Carrots",
        price: "$1.79/kg",
        farm: "Sunrise Farms",
        rating: 4.7,
        image: "/images/carrots.jpg",
    },
    {
        name: "Honeycrisp Apples",
        price: "$3.49/kg",
        farm: "Orchard Valley",
        rating: 4.9,
        image: "/images/apples.jpg",
    },
];

export default function MarketplaceShowcase() {
    return (
        <section className="bg-white py-20 px-6 lg:px-16 min-h-screen flex items-center justify-center">
            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        Discover Our Thriving <br className="hidden md:inline" /> Marketplace
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                        Browse thousands of agricultural products from verified farmers across the country.
                        From fresh produce to grains, dairy to livestock – everything you need in one place.
                    </p>

                    <ul className="space-y-4 text-gray-700 mb-8">
                        {features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                                <span className="text-md">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition">
                        Browse Marketplace
                    </button>
                </motion.div>

                {/* Right - Product Cards */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gray-100 rounded-2xl shadow-lg p-6"
                >
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-lg text-gray-800">Featured Products</h3>
                        <div className="flex gap-2">
                            <Search className="w-5 h-5 text-gray-500 cursor-pointer" />
                            <SlidersHorizontal className="w-5 h-5 text-gray-500 cursor-pointer" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {products.map((product, idx) => (
                            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-32 w-full object-cover"
                                />
                                <div className="p-4">
                                    <h4 className="text-md font-semibold text-gray-800">{product.name}</h4>
                                    <p className="text-sm text-green-700 font-medium">{product.price}</p>
                                    <p className="text-sm text-gray-500">{product.farm}</p>
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center gap-1 text-sm text-yellow-500">
                                            <Star className="w-4 h-4 fill-yellow-400" />
                                            {product.rating}
                                        </div>
                                        <button className="text-green-600 font-semibold hover:underline text-sm">
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 text-right">
                        <button className="text-green-700 hover:underline font-medium text-sm">
                            View all products →
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
