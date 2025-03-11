import { Product, ProductsResponse } from "../types/Products";

export const fetchProducts = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;
  const response = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json() as Promise<ProductsResponse>;
};

export const fetchProductById = async (id: string) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product ${id}`);
  }
  return response.json() as Promise<Product>;
};
