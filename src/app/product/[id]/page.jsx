import { getSingleProduct } from '@/server/product';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductDetails = async ({ params }) => {
    const { id } = await params;
    console.log(id);
    const product = await getSingleProduct(id);
    console.log(product);
    const {
        title,
        image,
        price,
        discount,
        rating,
        reviews,
        sold,
        info,
        description,
    } = product;

    const discountedPrice = price - (price * discount) / 100;

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-lg p-6">

                {/* Image Section */}
                <div className="rounded-xl overflow-hidden border">
                    <Image
                        src={image}
                        alt={title}
                        width={600}
                        height={600}
                        className="w-full h-[420px] object-cover"
                        priority
                    />
                </div>

                {/* Content Section */}
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold text-gray-800">{title}</h1>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1 text-yellow-500">
                            {Array.from({ length: 5 }, (_, i) => (
                                <FaStar
                                    key={i}
                                    className={i < Math.round(rating) ? "" : "opacity-30"}
                                />
                            ))}
                        </div>
                        <span className='text-sm text-gray-600'>
                            ({reviews} reviews) • {sold}
                        </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-4">
                        <span className="text-3xl font-bold text-green-600">
                            ৳{discountedPrice}
                        </span>
                        {discount > 0 && (
                            <>
                                <span className="line-through text-gray-400">
                                    ৳{price}
                                </span>
                                <span className="text-red-500 font-semibold">
                                    {discount}% OFF
                                </span>
                            </>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-4">
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                            Add to Cart
                        </button>
                        {/* Description */}
                        <div className="text-gray-700 leading-relaxed mt-8 space-y-4">
                            {description?.split("/n/n").map((para, idx) => (
                                <p key={idx}>{para}</p>
                            ))}
                        </div>
                        {/* key Features */}
                        <div className='mt-6'>
                            <h3 className='font-semibold mb-2'>key Features</h3>
                            <ul>
                                {info?.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
