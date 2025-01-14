import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProductProvider } from "./context/ProductContext";
import ProductGrid from "./components/ProductGrid";
import SearchBar from "./components/SearchBar";
import FilterSidebar from "./components/FilterSidebar";
import Pagination from "./components/Pagination";

function App() {
  return (
    <ProductProvider>
      <Container fluid style={{ backgroundColor: "#f8f9fa", paddingTop: "30px" }}>
        <h1 className="text-center my-4" style={{ fontFamily: "Arial, sans-serif", color: "#007bff" }}>
          Product Listing
        </h1>
        <Row className="mx-0">
          <Col md={3} className="p-3">
            <div className="shadow-sm p-4 rounded" style={{ backgroundColor: "#fff" }}>
              <FilterSidebar /> {/* Sidebar for category filters */}
            </div>
          </Col>
          <Col md={9} className="p-3">
            <div className="shadow-sm p-4 rounded" style={{ backgroundColor: "#fff" }}>
              <SearchBar /> {/* Search bar to filter by product name */}
            </div>
            {/* Add margin-bottom to create space between search bar and product grid */}
            <div className="mt-4">
              <ProductGrid /> {/* Display the filtered and paginated product grid */}
            </div>
            <div className="d-flex justify-content-center mt-4">
              <Pagination /> {/* Pagination for navigating between product pages */}
            </div>
          </Col>
        </Row>
      </Container>
    </ProductProvider>
  );
}

export default App;
