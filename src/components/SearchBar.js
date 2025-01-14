import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa"; // Importing an icon

const SearchBar = () => {
  const { searchTerm, setSearchTerm, filterProducts, selectedCategory } = useContext(ProductContext);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterProducts(value, selectedCategory);
  };

  return (
    <InputGroup className="mb-4" style={{ maxWidth: "600px", margin: "auto" }}>
      <InputGroup.Text id="basic-addon1" style={{ backgroundColor: "#007bff", border: "none", color: "white" }}>
        <FaSearch />
      </InputGroup.Text>
      <Form.Control
        type="text"
        placeholder="Search Products"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
          borderRadius: "0", // Removed border-radius to make it a rectangle
          paddingLeft: "40px", // Space for the icon inside the input
          fontSize: "16px", // Increased font size for readability
          borderColor: "#007bff", // Matching border color
        }}
      />
    </InputGroup>
  );
};

export default SearchBar;
