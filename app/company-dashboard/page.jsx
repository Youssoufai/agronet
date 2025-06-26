"use client";
import React, { useState } from 'react';
import { BarChart4, Truck, UserCheck, FileText, MessageSquare, Settings, ShoppingCart, Loader, Users, CheckCircle2, AlertTriangle, Bell, Mail, Search, Filter, Calendar, Eye, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CompanyDashboard() {
    const [activeTab, setActiveTab] = useState('dashboard');

    return (
        <div className="min-h-screen flex bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r shadow-lg">
                <div className="p-6 font-bold text-xl text-green-700 border-b">🌱 Agronet</div>
                <nav className="flex flex-col gap-1 p-4 text-gray-700">
                    <NavItem
                        href="#"
                        icon={<BarChart4 size={18} />}
                        text="Dashboard"
                        active={activeTab === 'dashboard'}
                        onClick={() => setActiveTab('dashboard')}
                    />
                    <NavItem
                        href="#"
                        icon={<ShoppingCart size={18} />}
                        text="Orders"
                        active={activeTab === 'orders'}
                        onClick={() => setActiveTab('orders')}
                    />
                    <NavItem href="#" icon={<Truck size={18} />} text="Logistics" />
                    <NavItem
                        href="#"
                        icon={<MessageSquare size={18} />}
                        text="Messages"
                        badge="3"
                    />
                    <NavItem href="#" icon={<UserCheck size={18} />} text="Verified Farmers" />
                    <NavItem href="#" icon={<FileText size={18} />} text="Reports" />
                    <NavItem href="#" icon={<Settings size={18} />} text="Settings" />
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
                {activeTab === 'dashboard' && <DashboardContent />}
                {activeTab === 'orders' && <OrdersContent />}
            </main>

            {/* Help Button */}
            <div className="fixed bottom-4 right-4">
                <motion.button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    ❓ Help
                </motion.button>
            </div>
        </div>
    )
}

function NavItem({ href, icon, text, active, onClick, badge }) {
    return (
        <motion.a
            href={href}
            onClick={onClick}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 relative ${active
                    ? 'bg-green-50 text-green-700 font-medium border-r-2 border-green-600'
                    : 'hover:text-green-600 hover:bg-gray-50'
                }`}
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
        >
            {icon} {text}
            {badge && (
                <span className="absolute right-2 bg-green-500 text-white text-xs rounded-full px-2 py-0.5">
                    {badge}
                </span>
            )}
        </motion.a>
    );
}

function DashboardContent() {
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

    const rowHover = {
        scale: 1.01,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2 }
    };

    return (
        <motion.div
            className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Header */}
            <motion.div
                className="flex justify-between items-center mb-6"
                variants={itemVariants}
            >
                <div>
                    <h2 className="text-2xl font-semibold">Welcome, Harvest Foods Ltd</h2>
                    <p className="text-gray-600">Your AgriTech dashboard for direct farmer connections</p>
                </div>
                <div className="flex items-center gap-4">
                    <Bell className="text-gray-600 cursor-pointer hover:text-gray-800" />
                    <Mail className="text-gray-600 cursor-pointer hover:text-gray-800" />
                    <img src="https://i.pravatar.cc/40" alt="profile" className="w-10 h-10 rounded-full" />
                </div>
            </motion.div>

            <motion.div className="mb-6" variants={itemVariants}>
                <span className="inline-block px-4 py-2 text-sm bg-green-100 text-green-700 rounded-full font-medium">
                    ✅ Verified Company
                </span>
            </motion.div>

            {/* Stat Cards */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
                variants={containerVariants}
            >
                <StatCard title="Total Orders" value="245" change="12% from last month" icon={<ShoppingCart />} color="green" />
                <StatCard title="Orders in Progress" value="37" note="5 require attention" icon={<Loader />} color="yellow" />
                <StatCard title="Verified Farmers" value="156" change="8 new this week" icon={<Users />} color="blue" />
                <StatCard title="Successful Deliveries" value="208" note="98% success rate" icon={<CheckCircle2 />} color="green" />
                <StatCard title="Active Logistics" value="18" note="12 on schedule" icon={<Truck />} color="blue" />
                <StatCard title="Disputes/Issues" value="3" note="2 require urgent action" icon={<AlertTriangle />} color="red" />
            </motion.div>

            {/* Recent Orders Section */}
            <motion.div variants={itemVariants}>
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Recent Orders</h3>
                        <p className="text-gray-600">Your latest agricultural orders at a glance</p>
                    </div>
                    <motion.button
                        className="text-green-600 hover:text-green-800 font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Orders →
                    </motion.button>
                </div>

                {/* Recent Orders Table */}
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

                {/* Quick Stats Footer */}
                <motion.div
                    className="mt-4 text-center text-gray-600"
                    variants={itemVariants}
                >
                    Showing recent 4 orders • <span className="text-green-600 font-medium">245 total orders</span>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

function OrdersContent() {
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
            className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
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
        </motion.div>
    );
}

function StatCard({ title, value, change, note, icon, color }) {
    const colorMap = {
        green: 'text-green-600 bg-green-50 border-green-200',
        yellow: 'text-yellow-600 bg-yellow-50 border-yellow-200',
        blue: 'text-blue-600 bg-blue-50 border-blue-200',
        red: 'text-red-600 bg-red-50 border-red-200',
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className={`rounded-xl p-6 shadow-sm border-2 ${colorMap[color]} bg-gradient-to-br hover:shadow-lg transition-all duration-200`}
        >
            <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
                <div className="text-2xl opacity-80">{icon}</div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
            {change && <p className="text-sm text-green-600 font-medium">⬆ {change}</p>}
            {note && <p className="text-sm text-gray-500">{note}</p>}
        </motion.div>
    )
}