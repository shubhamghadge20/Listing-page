import axios from "axios";

const API_URL = "https://fakestoreapi.com/products"; // Correct API URL

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.map((product) => ({
      id: product.id,
      name: product.title, // Product title from the API
      price: product.price.toFixed(2), // Price from the API (formatted to two decimal places)
      rating: product.rating.rate.toFixed(1), // Rating from the API (formatted to one decimal place)
      image: product.image, // Image URL from the API
      category: product.category, // Category from the API
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
