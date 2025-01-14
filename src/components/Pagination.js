import React, { useContext } from "react";
import { Pagination as BootstrapPagination } from "react-bootstrap";
import { ProductContext } from "../context/ProductContext"; // Import context

const Pagination = () => {
  const { totalPages, currentPage, setCurrentPage } = useContext(ProductContext);

  const handlePageClick = (page) => {
    setCurrentPage(page); // Update the page number
  };

  return (
    <BootstrapPagination className="justify-content-center mt-4" style={{ fontSize: "1.1rem" }}>
      {/* Previous button */}
      <BootstrapPagination.Prev
        onClick={() => currentPage > 1 && handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        style={{ borderRadius: "50%", padding: "10px 15px" }}
      />
      
      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => (
        <BootstrapPagination.Item
          key={index}
          active={index + 1 === currentPage}
          onClick={() => handlePageClick(index + 1)}
          style={{
            borderRadius: "50%",
            margin: "0 5px",
            transition: "background-color 0.3s ease",
            padding: "10px 15px",
          }}
          className={`${
            index + 1 === currentPage ? "bg-primary text-white" : "bg-light"
          }`}
        >
          {index + 1}
        </BootstrapPagination.Item>
      ))}

      {/* Next button */}
      <BootstrapPagination.Next
        onClick={() => currentPage < totalPages && handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{ borderRadius: "50%", padding: "10px 15px" }}
      />
    </BootstrapPagination>
  );
};

export default Pagination;
