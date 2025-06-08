// components/HowItWorks.tsx
'use client';

import { motion } from 'framer-motion';
import {
    UserPlus,
    ListOrdered,
    Handshake,
    Truck
} from 'lucide-react';

const steps = [
    {
        icon: <UserPlus className="w-8 h-8 text-green-600" />,
        title: 'Sign Up on Agronet',
        description: 'Create your profile as a farmer or business buyer in minutes.',
    },
    {
        icon: <ListOrdered className="w-8 h-8 text-green-600" />,
        title: 'List or Buy Products',
        description: 'Farmers list their produce while businesses browse and purchase.',
    },
    {
        icon: <Handshake className="w-8 h-8 text-green-600" />,
        title: 'Connect & Trade',
        description: 'Negotiate prices, arrange logistics, and complete secure transactions.',
    },
    {
        icon: <Truck className="w-8 h-8 text-green-600" />,
        title: 'Get Delivered or Earn',
        description: 'Businesses receive fresh products while farmers get paid promptly.',
    },
];

export default function HowItWorks() {
    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">How Agronet Works</h2>
                <p className="text-gray-600 mb-12">
                    Our simple four-step process makes agricultural trade efficient and transparent.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center text-center bg-white rounded-2xl shadow p-6"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            <div className="mb-4 bg-green-100 rounded-full p-4">{step.icon}</div>
                            <h3 className="font-semibold text-lg text-gray-800 mb-2">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
