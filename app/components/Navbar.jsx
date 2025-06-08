'use client';

import { motion } from 'framer-motion';
import { Sprout } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About Us', href: '#about' },
];

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex justify-between items-center px-6 md:px-20 py-4 bg-white shadow-sm"
        >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
                <Sprout className="text-green-700 w-6 h-6" />
                <span className="text-xl font-bold text-green-800">Agronet</span>
            </Link>

            {/* Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
                {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="hover:text-green-700 transition">
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4">
                <Link href="/signin" className="text-green-700 font-medium hover:underline">
                    Sign In
                </Link>
                <Link
                    href="/get-started"
                    className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition"
                >
                    Get Started
                </Link>
            </div>
        </motion.nav>
    );
}
