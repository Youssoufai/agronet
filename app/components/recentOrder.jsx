"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Calendar, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const OrdersDashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const orders = [
        {
            id: 'F-23451',
            farmer: 'Emmanuel Osei',
            avatar: '👨🏾‍🌾',
            product: 'Maize',
            quantity: '2.5 Tons',
            status: 'Delivered',
            date: 'June 20, 2023',
            statusColor: 'bg-green-100 text-green-800'
        },
        {
            id: 'F-78932',
            farmer: 'Amina Kofi',
            avatar: '👩🏾‍🌾',
            product: 'Cassava',
            quantity: '1.8 Tons',
            status: 'In Transit',
            date: 'June 22, 2023',
            statusColor: 'bg-yellow-100 text-yellow-800'
        },
        {
            id: 'F-12098',
            farmer: 'Kwame Nkrumah',
            avatar: '👨🏿‍🌾',
            product: 'Cocoa Beans',
            quantity: '3.2 Tons',
            status: 'Verified',
            date: 'June 23, 2023',
            statusColor: 'bg-blue-100 text-blue-800'
        },
        {
            id: 'F-45621',
            farmer: 'Fatima Mensah',
            avatar: '👩🏿‍🌾',
            product: 'Rice',
            quantity: '4.0 Tons',
            status: 'Pending',
            date: 'June 24, 2023',
            statusColor: 'bg-gray-100 text-gray-800'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        }
    };

    const buttonHover = {
        scale: 1.05,
        transition: { duration: 0.2 }
    };

    const rowHover = {
        scale: 1.01,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2 }
    };

    return (
        <motion.div
            className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8"
                    variants={itemVariants}
                >
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Recent Orders</h1>
                        <p className="text-gray-600">Manage and track your agricultural orders</p>
                    </div>

                    {/* Search and Filter Controls */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-0">
                        <motion.div
                            className="relative"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search orders..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-3 w-full sm:w-80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                            />
                        </motion.div>

                        <div className="flex gap-3">
                            <motion.button
                                className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl hover:bg-white transition-all duration-200 font-medium"
                                whileHover={buttonHover}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Filter className="w-5 h-5" />
                                Filter
                            </motion.button>

                            <motion.button
                                className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl hover:bg-white transition-all duration-200 font-medium"
                                whileHover={buttonHover}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Calendar className="w-5 h-5" />
                                Date Range
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Orders Table */}
                <motion.div
                    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200"
                    variants={itemVariants}
                >
                    {/* Table Header */}
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-4 border-b border-gray-200">
                        <div className="grid grid-cols-6 gap-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">
                            <div>Farmer Name</div>
                            <div>Product</div>
                            <div>Quantity</div>
                            <div>Status</div>
                            <div>Order Date</div>
                            <div className="text-center">Action</div>
                        </div>
                    </div>

                    {/* Table Body */}
                    <div className="divide-y divide-gray-100">
                        <AnimatePresence>
                            {orders.map((order, index) => (
                                <motion.div
                                    key={order.id}
                                    className="px-6 py-6 grid grid-cols-6 gap-4 items-center cursor-pointer"
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    whileHover={rowHover}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {/* Farmer Info */}
                                    <div className="flex items-center gap-4">
                                        <motion.div
                                            className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-xl shadow-lg"
                                            whileHover={{ rotate: 5, scale: 1.1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {order.avatar}
                                        </motion.div>
                                        <div>
                                            <div className="font-semibold text-gray-900">{order.farmer}</div>
                                            <div className="text-sm text-gray-500">ID: {order.id}</div>
                                        </div>
                                    </div>

                                    {/* Product */}
                                    <div className="font-medium text-gray-700">{order.product}</div>

                                    {/* Quantity */}
                                    <div className="font-semibold text-gray-900">{order.quantity}</div>

                                    {/* Status */}
                                    <div>
                                        <motion.span
                                            className={`px-3 py-1 rounded-full text-sm font-medium ${order.statusColor}`}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {order.status}
                                        </motion.span>
                                    </div>

                                    {/* Date */}
                                    <div className="text-gray-600">{order.date}</div>

                                    {/* Action */}
                                    <div className="text-center">
                                        <motion.button
                                            className="text-green-600 hover:text-green-800 font-semibold flex items-center justify-center gap-1 mx-auto"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Eye className="w-4 h-4" />
                                            View
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Pagination */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4"
                    variants={itemVariants}
                >
                    <div className="text-gray-600">
                        Showing <span className="font-semibold">4</span> of <span className="font-semibold">245</span> orders
                    </div>

                    <div className="flex items-center gap-2">
                        <motion.button
                            className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-lg transition-all duration-200 flex items-center gap-1"
                            whileHover={buttonHover}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Previous
                        </motion.button>

                        <div className="flex gap-1">
                            {[1, 2, 3].map((page) => (
                                <motion.button
                                    key={page}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${page === 1
                                            ? 'bg-green-600 text-white shadow-lg'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                                        }`}
                                    whileHover={page !== 1 ? buttonHover : {}}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </motion.button>
                            ))}
                        </div>

                        <motion.button
                            className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-lg transition-all duration-200 flex items-center gap-1"
                            whileHover={buttonHover}
                            whileTap={{ scale: 0.95 }}
                        >
                            Next
                            <ChevronRight className="w-4 h-4" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default OrdersDashboard;