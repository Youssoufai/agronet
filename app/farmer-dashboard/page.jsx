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
    User,
    Building,
    Droplet,
    Leaf,
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

                {/* Charts Placeholder */}
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

                {/* Orders, Weather, Tips, Logistics */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                    {/* Recent Orders */}
                    <div className="col-span-2 bg-white p-4 rounded-xl shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">Recent Orders</h2>
                            <a href="#" className="text-green-600 text-sm font-medium">View All Orders</a>
                        </div>
                        <table className="w-full text-sm">
                            <thead className="text-left text-gray-500">
                                <tr>
                                    <th>ORDER ID</th>
                                    <th>CUSTOMER</th>
                                    <th>PRODUCT</th>
                                    <th>AMOUNT</th>
                                    <th>DATE</th>
                                    <th>STATUS</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    {
                                        id: '#ORD-7652', customer: 'Mary Johnson', icon: <User />, product: 'Organic Tomatoes (5kg)',
                                        amount: '₦4,500', date: 'Today, 10:45 AM', status: 'Pending', action: 'Accept'
                                    },
                                    {
                                        id: '#ORD-7651', customer: 'Lagos Foods Ltd', icon: <Building />, product: 'Cassava (50kg)',
                                        amount: '₦12,750', date: 'Yesterday, 3:30 PM', status: 'Processing', action: 'Details'
                                    },
                                    {
                                        id: '#ORD-7650', customer: 'John Okafor', icon: <User />, product: 'Fresh Yams (10kg)',
                                        amount: '₦8,200', date: '2 days ago', status: 'Delivered', action: 'Details'
                                    },
                                    {
                                        id: '#ORD-7649', customer: 'Green Harvest Co.', icon: <Building />, product: 'Plantains (30kg)',
                                        amount: '₦9,800', date: '3 days ago', status: 'Delivered', action: 'Details'
                                    }
                                ].map(order => (
                                    <tr key={order.id} className="border-t">
                                        <td>{order.id}</td>
                                        <td className="flex items-center gap-2 py-2">{order.icon} {order.customer}</td>
                                        <td>{order.product}</td>
                                        <td>{order.amount}</td>
                                        <td>{order.date}</td>
                                        <td>
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                                order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                                                    'bg-green-100 text-green-700'}`}>{order.status}</span>
                                        </td>
                                        <td>
                                            <button className={`px-3 py-1 text-xs font-medium rounded-md ${order.status === 'Pending' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'}`}>{order.action}</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Sidebar Widgets */}
                    <div className="space-y-6">
                        {/* Weather */}
                        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                            <h2 className="text-lg font-semibold mb-2">Weather Forecast</h2>
                            <p className="text-sm text-gray-500 mb-2">Lagos, Nigeria</p>
                            <div className="text-4xl font-bold text-yellow-500">28°C</div>
                            <p className="text-sm text-gray-600">Partly Cloudy</p>
                            <div className="flex justify-between mt-4 text-xs text-gray-500">
                                <div>🌤 Tomorrow</div>
                                <div>🌦 Wed</div>
                                <div>☀️ Thu</div>
                            </div>
                        </div>

                        {/* Farming Tips */}
                        <div className="bg-white p-4 rounded-xl shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-lg font-semibold">Farming Tips</h2>
                                <a href="#" className="text-green-600 text-sm">View All</a>
                            </div>
                            <div className="text-sm text-gray-600">
                                <div className="bg-green-50 p-2 rounded-md mb-2">
                                    <div className="flex items-center gap-2 text-green-700"><Leaf size={16} /> <strong>Seasonal Planting Guide</strong></div>
                                    October is ideal for planting tomatoes, peppers, and leafy greens in Southern Nigeria.
                                </div>
                                <div className="bg-blue-50 p-2 rounded-md">
                                    <div className="flex items-center gap-2 text-blue-700"><Droplet size={16} /> <strong>Water Management</strong></div>
                                    Consider drip irrigation to reduce water waste and increase yield.
                                </div>
                            </div>
                        </div>

                        {/* Logistics Tracker */}
                        <div className="bg-white p-4 rounded-xl shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-lg font-semibold">Logistics Tracker</h2>
                                <a href="#" className="text-green-600 text-sm">View All</a>
                            </div>
                            <div className="text-sm text-gray-700">
                                <p><strong>#ORD-7651 to Lagos Foods Ltd</strong></p>
                                <p className="text-xs text-gray-500 mb-1">Cassava (50kg)</p>
                                <div className="w-full h-2 bg-gray-200 rounded-full">
                                    <div className="h-2 bg-green-500 rounded-full w-2/3"></div>
                                </div>
                                <p className="text-xs text-green-600 mt-1">Picked up  •  In transit</p>

                                <p className="mt-4"><strong>#ORD-7645 to Abuja Market</strong></p>
                                <p className="text-xs text-gray-500 mb-1">Mixed Vegetables (100kg)</p>
                                <div className="w-full h-2 bg-gray-200 rounded-full">
                                    <div className="h-2 bg-green-500 rounded-full w-1/3"></div>
                                </div>
                                <p className="text-xs text-green-600 mt-1">Picked up</p>
                            </div>
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
