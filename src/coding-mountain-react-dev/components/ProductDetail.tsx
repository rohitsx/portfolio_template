import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductById } from "../api/productApi";
import StarRating from "./StarRating";
import { Product } from "../types/Products";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    if (!id) return;

    const getProduct = async () => {
      try {
        setLoading(true);
        const data = await fetchProductById(id);
        setProduct(data);
        setSelectedImage(data.images[0] || data.thumbnail);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to fetch product details",
        );
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center py-8">
        <div className="text-red-500 mb-4">
          Error: {error || "Product not found"}
        </div>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Products
        </button>
      </div>
    );
  }

  const discountedPrice = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 overflow-y-auto h-full">
      <button
        onClick={() => navigate("/")}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
      >
        <svg
          className="w-4 h-4 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        Back to Products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Images */}
        <div>
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/400"; // Fallback image
              }}
            />
          </div>

          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`aspect-square rounded cursor-pointer overflow-hidden border-2 ${
                    image === selectedImage
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`${product.title} - view ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/100"; // Fallback image for thumbnails
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              {product.title}
            </h1>
            <div className="flex items-center mt-2">
              <StarRating rating={product.rating} />
              <span className="ml-2 text-sm text-gray-500">
                • {product.stock} in stock
              </span>
            </div>

            <div className="mt-4">
              <span className="text-2xl font-bold text-gray-800">
                ${discountedPrice}
              </span>
              {product.discountPercentage > 0 && (
                <span className="ml-2 text-lg text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
              )}
              {product.discountPercentage > 0 && (
                <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">
                  Save {product.discountPercentage.toFixed(0)}%
                </span>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-sm font-medium text-gray-500">Brand</span>
              <p className="mt-1">{product.brand}</p>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-500">
                Category
              </span>
              <p className="mt-1">{product.category}</p>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-500">
                Availability
              </span>
              <p className="mt-1">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    product.availabilityStatus === "In Stock"
                      ? "bg-green-100 text-green-800"
                      : product.availabilityStatus === "Low Stock"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {product.availabilityStatus}
                </span>
              </p>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-500">
                Minimum Order
              </span>
              <p className="mt-1">{product.minimumOrderQuantity} units</p>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-500">
                Description
              </span>
              <p className="mt-1 text-gray-700">{product.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Product Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-medium mb-3">Specifications</h3>
            <div className="space-y-2">
              <div className="flex">
                <span className="text-sm text-gray-500 w-1/3">SKU</span>
                <span className="text-sm">{product.sku}</span>
              </div>
              <div className="flex">
                <span className="text-sm text-gray-500 w-1/3">Weight</span>
                <span className="text-sm">{product.weight} oz</span>
              </div>
              <div className="flex">
                <span className="text-sm text-gray-500 w-1/3">Dimensions</span>
                <span className="text-sm">
                  {product.dimensions.width}" × {product.dimensions.height}" ×{" "}
                  {product.dimensions.depth}"
                </span>
              </div>
              <div className="flex">
                <span className="text-sm text-gray-500 w-1/3">Tags</span>
                <div className="flex flex-wrap">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-200 px-2 py-1 rounded mr-1 mb-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-medium mb-3">Shipping & Returns</h3>
            <div className="space-y-2">
              <div className="flex">
                <span className="text-sm text-gray-500 w-1/3">Warranty</span>
                <span className="text-sm">{product.warrantyInformation}</span>
              </div>
              <div className="flex">
                <span className="text-sm text-gray-500 w-1/3">Shipping</span>
                <span className="text-sm">{product.shippingInformation}</span>
              </div>
              <div className="flex">
                <span className="text-sm text-gray-500 w-1/3">Returns</span>
                <span className="text-sm">{product.returnPolicy}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>

        {product.reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet</p>
        ) : (
          <div className="space-y-4">
            {product.reviews.map((review, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <StarRating rating={review.rating} />
                    <h4 className="ml-2 font-medium">{review.reviewerName}</h4>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="mt-2 text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
