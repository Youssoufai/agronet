'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-[#0f1b2d] text-white">
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo and Description */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <span className="bg-green-600 rounded-full w-6 h-6" /> Agronet
                    </h2>
                    <p className="mt-4 text-sm text-gray-300">
                        Bridging farmers and businesses for a healthier, more sustainable food system.
                    </p>
                    <div className="flex mt-4 gap-4 text-gray-400">
                        <Facebook className="hover:text-white" size={18} />
                        <Twitter className="hover:text-white" size={18} />
                        <Instagram className="hover:text-white" size={18} />
                        <Linkedin className="hover:text-white" size={18} />
                    </div>
                </motion.div>

                {/* Quick Links */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Marketplace</a></li>
                        <li><a href="#" className="hover:text-white">For Farmers</a></li>
                        <li><a href="#" className="hover:text-white">For Businesses</a></li>
                    </ul>
                </motion.div>

                {/* Support */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <h3 className="text-lg font-semibold mb-4">Support</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-white">Help Center</a></li>
                        <li><a href="#" className="hover:text-white">Contact Us</a></li>
                        <li><a href="#" className="hover:text-white">FAQs</a></li>
                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                    </ul>
                </motion.div>

                {/* Newsletter */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
                    <p className="text-sm text-gray-300 mb-4">
                        Get the latest updates, news and seasonal product information.
                    </p>
                    <div className="flex bg-gray-800 rounded overflow-hidden">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="bg-transparent p-2 text-sm text-white focus:outline-none w-full"
                        />
                        <button className="bg-green-600 px-3 flex items-center justify-center">
                            <Send size={16} className="text-white" />
                        </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-10 py-4 px-4 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
                <p>© 2024 Agronet. All rights reserved.
                </p>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms of Service</a>
                    <a href="#" className="hover:text-white">Sitemap</a>
                </div>
            </div>
        </footer>
    )
}
