import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext"; // Import ProductContext
import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { filteredProducts, currentPage, itemsPerPage } = useContext(ProductContext);

  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Row className="g-4">
      {/* Display message if no products found */}
      {displayedProducts.length === 0 ? (
        <Col xs={12} className="text-center my-5">
          <h4 style={{ color: '#6c757d', fontSize: '1.2rem' }}>No products found!</h4>
          <p style={{ fontSize: '1rem', color: '#6c757d' }}>Try adjusting your filters or search terms.</p>
        </Col>
      ) : (
        displayedProducts.map((product) => (
          <Col
            xs={12}   // 1 column on extra small screens (mobile)
            sm={6}    // 2 columns on small screens (tablet)
            md={4}    // 3 columns on medium screens (tablet and up)
            lg={4}    // 3 columns on large screens (desktop)
            key={product.id}
            className="mb-4 d-flex justify-content-center" // 'mb-4' adds margin-bottom between cards
          >
            <ProductCard product={product} />
          </Col>
        ))
      )}
    </Row>
  );
};

export default ProductGrid;
