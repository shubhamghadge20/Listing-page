import React, { createContext, useState, useEffect } from "react";
import { fetchProducts } from "../services/api"; // Assuming you have a service to fetch products

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data);
    };
    loadProducts();
  }, []);

  const filterProducts = (search, category) => {
    let filtered = products;

    if (search) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when filtering
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <ProductContext.Provider
      value={{
        filteredProducts,
        searchTerm,
        selectedCategory,
        currentPage,
        itemsPerPage,
        totalPages,
        setSearchTerm,
        setSelectedCategory,
        setCurrentPage,
        filterProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
