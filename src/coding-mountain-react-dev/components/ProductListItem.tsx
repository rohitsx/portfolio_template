import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../types/Products";
import StarRating from "./StarRating";

interface ProductListItemProps {
  product: Product;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const discountedPrice = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <Link
      to={`coding-mountain-react-dev/products/${product.id}`}
      className="block"
    >
      <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 h-full">
        <div className="h-40 overflow-hidden bg-gray-100">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/150"; // Fallback image if thumbnail fails to load
            }}
          />
        </div>
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-800 truncate">
            {product.title}
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            {product.brand} • {product.category}
          </p>

          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-sm font-bold text-gray-800">
                ${discountedPrice}
              </span>
              {product.discountPercentage > 0 && (
                <span className="ml-2 text-xs text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                product.availabilityStatus === "In Stock"
                  ? "bg-green-100 text-green-800"
                  : product.availabilityStatus === "Low Stock"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
              }`}
            >
              {product.availabilityStatus}
            </span>
          </div>

          <div className="mt-2">
            <StarRating rating={product.rating} />
          </div>

          <div className="mt-2 flex justify-between text-xs text-gray-600">
            <span>Stock: {product.stock}</span>
            <span>Min Order: {product.minimumOrderQuantity}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductListItem;
