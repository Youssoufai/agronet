// components/JoinCTA.tsx
'use client';

import { motion } from 'framer-motion';

export default function JoinCTA() {
    return (
        <section className="bg-green-700 py-20 px-6 text-white text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Join hundreds of farmers and businesses growing together on Agronet
                </h2>
                <p className="text-md md:text-lg mb-8">
                    Whether you're a farmer looking to expand your market or a business seeking quality produce,
                    Agronet connects you to opportunities.
                </p>
                <button className="bg-white text-green-700 hover:bg-green-100 font-semibold py-3 px-6 rounded-lg transition text-lg shadow">
                    Register Now
                </button>
            </motion.div>
        </section>
    );
}
