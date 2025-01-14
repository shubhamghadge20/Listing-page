import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Form, Card } from "react-bootstrap";

const FilterSidebar = () => {
  const { selectedCategory, setSelectedCategory, filterProducts, searchTerm } = useContext(ProductContext);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    filterProducts(searchTerm, category);
  };

  return (
    <Card className="shadow-sm p-4 rounded" style={{ backgroundColor: "#fff", border: "none" }}>
      <Card.Body>
        <h5 className="text-center mb-4" style={{ color: "#007bff", fontWeight: "600" }}>
          Filter by Category
        </h5>
        <Form.Select
          value={selectedCategory}
          onChange={handleCategoryChange}
          style={{
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            fontSize: "1rem",
            transition: "all 0.3s ease",
          }}
          className="mb-3"
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </Form.Select>
      </Card.Body>
    </Card>
  );
};

export default FilterSidebar;
