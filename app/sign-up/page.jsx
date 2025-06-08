'use client';

import { useState } from 'react';
import { User, ShoppingCart, Truck } from 'lucide-react';

export default function SignupPage() {
    const [role, setRole] = useState('farmer');

    const handleRoleChange = (newRole) => setRole(newRole);

    return (
        <div className="min-h-screen grid md:grid-cols-2 bg-gray-50">
            {/* Left Side */}
            <div className="bg-green-100 flex flex-col justify-center items-center text-center px-6 py-12">
                <img src="/images/left-banner.png" alt="Drone" className="w-64 h-auto mb-6" />
                <h2 className="text-2xl font-bold mb-2">AgroNet</h2>
                <p className="text-gray-700 mb-4 max-w-md">
                    Connect, trade, and grow with our innovative platform designed specifically for the agricultural community.
                </p>
                <div className="flex gap-4 justify-center text-sm text-green-700 font-medium">
                    <span>🌱 Sustainable</span>
                    <span>✅ Trusted</span>
                    <span>🌿 Organic</span>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white flex flex-col justify-center px-6 py-12">
                <div className="max-w-md w-full mx-auto">
                    <h2 className="text-2xl font-bold text-center">Create Your Account</h2>
                    <p className="text-center text-gray-600 text-sm mt-1 mb-6">
                        Join our community of agricultural professionals
                    </p>

                    {/* Role Select */}
                    <div className="flex justify-center gap-3 mb-6">
                        {[
                            { id: 'farmer', label: 'Farmer', icon: <User size={18} /> },
                            { id: 'consumer', label: 'Consumer', icon: <ShoppingCart size={18} /> },
                            { id: 'company', label: 'Company', icon: <Truck size={18} /> }
                        ].map((option) => (
                            <button
                                key={option.id}
                                onClick={() => handleRoleChange(option.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-md border font-semibold transition ${role === option.id
                                    ? 'bg-green-600 text-white border-green-600'
                                    : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                                    }`}
                            >
                                {option.icon} {option.label}
                            </button>
                        ))}
                    </div>

                    {/* Form */}
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                            />
                            <select
                                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                            >
                                <option>Select your region</option>
                                <option>North</option>
                                <option>South</option>
                                <option>East</option>
                                <option>West</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="password"
                                placeholder="Password"
                                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                            />
                        </div>

                        {/* Show extra fields if role is farmer */}
                        {role === 'farmer' && (
                            <>
                                <input
                                    type="text"
                                    placeholder="Farm Size (acres)"
                                    className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                />
                                <select
                                    multiple
                                    className="border border-gray-300 px-4 py-2 rounded-md w-full h-32"
                                >
                                    <option>Corn</option>
                                    <option>Wheat</option>
                                    <option>Soybeans</option>
                                    <option>Vegetables</option>
                                </select>
                            </>
                        )}

                        <label className="flex items-start gap-2 text-sm text-gray-700">
                            <input type="checkbox" className="mt-1" />
                            I agree to the <a href="#" className="text-green-600 underline">Terms of Service</a> and <a href="#" className="text-green-600 underline">Privacy Policy</a>
                        </label>

                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold"
                        >
                            Sign Up
                        </button>

                        <p className="text-center text-sm mt-4">
                            Already have an account? <a href="/login" className="text-green-600 font-medium">Login</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
