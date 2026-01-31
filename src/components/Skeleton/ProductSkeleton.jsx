import React from 'react';

const ProductSkeleton = () => {
    return (
        <div>
            <div className="card bg-base-100 shadow-md">
                {/* Image Skeleton */}
                <div className="skeleton h-48 w-full"></div>

                <div className="card-body p-4 space-y-3">
                    {/* Title */}
                    <div className="skeleton h-4 w-3/4"></div>

                    {/* Rating */}
                    <div className="flex gap-2">
                        <div className="skeleton h-4 w-12"></div>
                        <div className="skeleton h-4 w-16"></div>
                    </div>

                    {/* Sold */}
                    <div className="skeleton h-3 w-20"></div>

                    {/* Price */}
                    <div className="skeleton h-5 w-24"></div>
                </div>
            </div>
        </div>
    );
};

export default ProductSkeleton;
