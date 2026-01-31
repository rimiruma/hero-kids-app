
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const {
    title,
    image,
    price,
    discount,
    reviews,
    sold,
    ratings,
  } = product;

  const discountedPrice = discount
    ? price - (price * discount) / 100
    : price;

  return (
    <div className="card bg-base-100 shadow-lg w-80">
      {/* Image */}
      <figure className="p-4">
        <Image width={200} height={180} className="w-full h-48 object-cover rounded-md" src={image} alt="" unoptimized />
      </figure>

      {/* Content */}
      <div className="card-body p-4">
        <h2 className="card-title text-sm line-clamp-2">
          {title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm">
          <FaStar className="text-yellow-400" />
          <span>{ratings}</span>
          <span className="text-gray-400">
            ({reviews} reviews)
          </span>
        </div>

        {/* Sold */}
        <p className="text-xs text-gray-500">
          {sold} sold
        </p>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            ৳{discountedPrice}
          </span>

          {discount && (
            <span className="text-sm line-through text-gray-400">
              ৳{price}
            </span>
          )}
          
        </div>
           <div>
            <button className="btn btn-primary w-full">Add to Cart</button>
        </div>
           <div>
            <button className='btn btn-primary btn-outline w-full'>View Details</button>
        </div>
        
      </div>
     
    </div>
  );
};

export default ProductCard;
