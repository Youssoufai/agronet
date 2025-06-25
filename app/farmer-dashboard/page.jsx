'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Home,
    Package,
    ShoppingCart,
    Truck,
    BarChart2,
    Wallet,
    MessageSquare,
    Settings,
    Bell,
    Mail,
    Plus,
    ShoppingBasket,
} from 'lucide-react';

export default function FarmerDashboard() {
    const [activeTab, setActiveTab] = useState('Dashboard');

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r">
                <div className="p-4 flex items-center space-x-2 border-b">
                    <div className="bg-green-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">
                        A
                    </div>
                    <span className="text-xl font-semibold text-gray-700">AgroNet</span>
                </div>
                <div className="p-4 border-b">
                    <div className="text-lg font-semibold">John Farmer</div>
                    <div className="text-sm text-green-600">Farmer Account</div>
                </div>
                <nav className="flex flex-col gap-3 p-4 text-gray-700">
                    <NavItem icon={<Home />} label="Dashboard" active={activeTab === 'Dashboard'} onClick={() => setActiveTab('Dashboard')} />
                    <NavItem icon={<Package />} label="Products" />
                    <NavItem icon={<ShoppingCart />} label="Orders" notification={3} />
                    <NavItem icon={<Truck />} label="Logistics" />
                    <NavItem icon={<BarChart2 />} label="Analytics" />
                    <NavItem icon={<Wallet />} label="Finances" />
                    <NavItem icon={<MessageSquare />} label="Messages" />
                    <NavItem icon={<Settings />} label="Settings" />
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">Welcome back, John Farmer!</h1>
                        <p className="text-gray-600">
                            Today is a great day to grow your business. You have <span className="text-green-600 font-medium">3 new orders</span> to review.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                        <Plus size={18} /> Add New Product
                    </button>
                </div>

                {/* Metrics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <StatCard title="Total Sales" value="₦125,430" subtitle="12% from last week" increase />
                    <StatCard title="Pending Orders" value="7" subtitle="3 require action" warning icon={<ShoppingCart />} />
                    <StatCard title="Total Products" value="24" subtitle="2 low in stock" danger icon={<ShoppingBasket />} />
                    <StatCard title="Earnings This Week" value="₦42,500" subtitle="8% from last week" increase />
                </div>

                {/* Placeholder for charts & categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                        <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
                        <div className="h-40 bg-green-100 rounded-md flex items-center justify-center text-gray-500">
                            [Insert Sales Chart Here]
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                        <h2 className="text-lg font-semibold mb-4">Product Categories</h2>
                        <div className="h-40 bg-yellow-100 rounded-md flex items-center justify-center text-gray-500">
                            [Insert Pie Chart Here]
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

function NavItem({ icon, label, active, onClick, notification }) {
    return (
        <div
            className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-green-100 ${active ? 'bg-green-100 font-semibold text-green-700' : ''
                }`}
            onClick={onClick}
        >
            <div className="flex items-center gap-2">
                {icon}
                {label}
            </div>
            {notification && (
                <div className="bg-yellow-400 text-white text-xs px-2 py-0.5 rounded-full">
                    {notification}
                </div>
            )}
        </div>
    );
}

function StatCard({ title, value, subtitle, increase, warning, danger, icon }) {
    const subtitleClass = increase
        ? 'text-green-600'
        : warning
            ? 'text-yellow-600'
            : danger
                ? 'text-red-600'
                : 'text-gray-500';

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="text-sm text-gray-500 flex justify-between">
                {title} {icon}
            </div>
            <div className="text-xl font-bold mt-2">{value}</div>
            <div className={`text-sm mt-1 ${subtitleClass}`}>{subtitle}</div>
        </div>
    );
}
