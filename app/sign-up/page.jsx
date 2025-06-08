'use client'

import { motion } from 'framer-motion'
import { Tractor, Briefcase, Truck } from 'lucide-react'

export default function SignupPage() {
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            {/* Left section */}
            <div className="bg-green-50 flex flex-col items-center justify-center text-center p-10">
                <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    src="/images/left-banner.png"
                    alt="Drone over field"
                    className="w-80 shadow-xl rounded-md"
                />
                <h2 className="text-2xl font-semibold mt-6">Agronet</h2>
                <p className="text-sm text-gray-600 mt-2 max-w-md">
                    Connect, trade, and grow with our innovative platform designed specifically for the agricultural community.
                </p>
                <div className="mt-4 flex gap-4 text-sm text-green-700 font-medium">
                    <span>✅ Sustainable</span>
                    <span>✅ Trusted</span>
                    <span>✅ Organic</span>
                </div>
            </div>

            {/* Right section */}
            <div className="bg-white p-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-center">Create Your Account</h2>
                <p className="text-sm text-center text-gray-500 mb-6">Join our community of agricultural professionals</p>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Select your role:</label>
                    <div className="grid grid-cols-3 gap-2">
                        <button className="p-8 bg-green-600 text-white rounded-md flex flex-col items-center">
                            <Tractor size={30} />
                            <span className="text-xl mt-1">Farmer</span>
                        </button>
                        <button className="p-8 border rounded-md flex flex-col items-center">
                            <Briefcase size={30} />
                            <span className="text-xl mt-1">Business Buyer</span>
                        </button>
                        <button className="p-8 border rounded-md flex flex-col items-center">
                            <Truck size={30} />
                            <span className="text-xl mt-1">Logistics Partner</span>
                        </button>
                    </div>
                </div>

                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input className="border p-2 rounded" type="text" placeholder="Full Name" />
                        <input className="border p-2 rounded" type="email" placeholder="Email" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input className="border p-2 rounded" type="text" placeholder="Phone Number" />
                        <select className="border p-2 rounded">
                            <option>Select your region</option>
                            <option>North</option>
                            <option>South</option>
                            <option>East</option>
                            <option>West</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input className="border p-2 rounded" type="password" placeholder="Password" />
                        <input className="border p-2 rounded" type="password" placeholder="Confirm Password" />
                    </div>

                    <input className="border p-2 rounded w-full" type="number" placeholder="Farm Size (acres)" />

                    <select multiple className="border p-2 rounded w-full h-24">
                        <option>Corn</option>
                        <option>Wheat</option>
                        <option>Soybeans</option>
                        <option>Vegetables</option>
                    </select>

                    <div className="flex items-start gap-2 text-sm">
                        <input type="checkbox" />
                        <span>I agree to the <a className="text-green-600 underline" href="#">Terms of Service</a> and <a className="text-green-600 underline" href="#">Privacy Policy</a></span>
                    </div>

                    <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Sign Up</button>

                    <p className="text-center text-sm text-gray-500">
                        Already have an account? <a href="#" className="text-green-600 font-medium">Login</a>
                    </p>
                </form>
            </div>
        </div>
    )
}
