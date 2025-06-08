'use client'

import { motion } from 'framer-motion'
import { Tractor, Briefcase, Truck } from 'lucide-react'

export default function SignupPage() {
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            {/* Left section */}
            <div className="bg-green-50 flex flex-col items-center justify-center text-center p-16">
                <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    src="/images/left-banner.png"
                    alt="Drone over field"
                    className="w-96 shadow-xl rounded-md"
                />
                <h2 className="text-3xl font-bold mt-8">AgriTech Marketplace</h2>
                <p className="text-lg text-gray-600 mt-4 max-w-xl">
                    Connect, trade, and grow with our innovative platform designed specifically for the agricultural community.
                </p>
                <div className="mt-6 flex gap-6 text-lg text-green-700 font-medium">
                    <span>✅ Sustainable</span>
                    <span>✅ Trusted</span>
                    <span>✅ Organic</span>
                </div>
            </div>

            {/* Right section */}
            <div className="bg-white p-16 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-center mb-4">Create Your Account</h2>
                <p className="text-lg text-center text-gray-500 mb-10">Join our community of agricultural professionals</p>

                <div className="mb-6">
                    <label className="block text-lg font-medium mb-4">Select your role:</label>
                    <div className="grid grid-cols-3 gap-4">
                        <button className="p-6 bg-green-600 text-white rounded-lg flex flex-col items-center">
                            <Tractor size={28} />
                            <span className="text-lg mt-2">Farmer</span>
                        </button>
                        <button className="p-6 border rounded-lg flex flex-col items-center">
                            <Briefcase size={28} />
                            <span className="text-lg mt-2">Business Buyer</span>
                        </button>
                        <button className="p-6 border rounded-lg flex flex-col items-center">
                            <Truck size={28} />
                            <span className="text-lg mt-2">Logistics Partner</span>
                        </button>
                    </div>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input className="border p-4 rounded text-lg" type="text" placeholder="Full Name" />
                        <input className="border p-4 rounded text-lg" type="email" placeholder="Email" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input className="border p-4 rounded text-lg" type="text" placeholder="Phone Number" />
                        <select className="border p-4 rounded text-lg">
                            <option>Select your region</option>
                            <option>North</option>
                            <option>South</option>
                            <option>East</option>
                            <option>West</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input className="border p-4 rounded text-lg" type="password" placeholder="Password" />
                        <input className="border p-4 rounded text-lg" type="password" placeholder="Confirm Password" />
                    </div>

                    <input className="border p-4 rounded w-full text-lg" type="number" placeholder="Farm Size (acres)" />

                    <select multiple className="border p-4 rounded w-full h-32 text-lg">
                        <option>Corn</option>
                        <option>Wheat</option>
                        <option>Soybeans</option>
                        <option>Vegetables</option>
                    </select>

                    <div className="flex items-start gap-4 text-base">
                        <input type="checkbox" className="mt-1" />
                        <span>I agree to the <a className="text-green-600 underline" href="#">Terms of Service</a> and <a className="text-green-600 underline" href="#">Privacy Policy</a></span>
                    </div>

                    <button className="w-full bg-green-600 text-white py-3 text-lg rounded hover:bg-green-700">Sign Up</button>

                    <p className="text-center text-base text-gray-500">
                        Already have an account? <a href="#" className="text-green-600 font-medium">Login</a>
                    </p>
                </form>
            </div>
        </div>
    )
}
