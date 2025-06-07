import React, { useState } from "react";
import data from "./Data"; 

function Pagination() {
 
    const [currentPage, setCurrentPage] = useState(1);
  
    // Extract the current page data
    const currentPageData = data.filter((item) => item.pageNo === currentPage);
  
    // Total number of pages (assuming all entries have the same totalPage value)
    const totalPages = data[0]?.totalPage || 0;
  
    // Handle page change
    const handlePageChange = (page) => {
      if (page > 0 && page <= totalPages) {
        setCurrentPage(page);
      }
    };
  
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Pagination Example with API Data</h1>
  
        {/* Display current page data */}
        {currentPageData.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px auto",
              width: "300px",
            }}
          >
            <p><strong>Message:</strong> {item.message}</p>
            <p><strong>User:</strong> {item.user}</p>
          </div>
        ))}
  
        {/* Pagination Controls */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {[...Array(totalPages).keys()].map((n) => (
            <button
              key={n}
              onClick={() => handlePageChange(n + 1)}
              style={{
                padding: "5px 10px",
                backgroundColor: currentPage === n + 1 ? "lightblue" : "white",
                border: "1px solid #ccc",
              }}
            >
              {n + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
 
  )
}

export default Pagination
