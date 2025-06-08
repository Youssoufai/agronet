'use client';

import { Leaf, Handshake, ShoppingCart } from 'lucide-react';

export default function WhyChooseAgronet() {
    const features = [
        {
            icon: <Leaf className="w-8 h-8 text-white" />,
            title: 'Access to Quality Raw Materials',
            description:
                'Source directly from verified farmers for the freshest, highest quality agricultural products at competitive prices.',
        },
        {
            icon: <Handshake className="w-8 h-8 text-white" />,
            title: 'Empowering Local Farmers',
            description:
                'Help farmers sell directly to businesses, cutting out middlemen and increasing their profits and sustainability.',
        },
        {
            icon: <ShoppingCart className="w-8 h-8 text-white" />,
            title: 'Affordable Food for Everyone',
            description:
                'By shortening the supply chain, we help reduce costs, making healthy food more accessible to communities.',
        },
    ];

    return (
        <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Agronet?</h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Our platform connects farmers directly with businesses, creating a sustainable ecosystem that benefits everyone.
                </p>

                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
                        >
                            <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mb-4 mx-auto">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
