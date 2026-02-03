import React from "react";

const Pagination = ({ currentPage, totalPage, setCurrentPage }) => {
  return (
    <div className="flex items-center justify-center my-10 gap-2">
      <button
        disabled={currentPage === 0}
        onClick={() => setCurrentPage(currentPage - 1)}
        className=" btn"
      >
        Previous
      </button>
      {[...Array(totalPage).keys()].map((page) => (
        <button
          key={page}
          className={`btn rounded-lg ${currentPage === page && "bg-secondary"}`}
          onClick={() => setCurrentPage(page)}
        >
          {page + 1}
        </button>
      ))}
      <button
        disabled={currentPage === totalPage - 1}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="btn"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
