import React from "react";
import "./Pagination.css";

export const Pagination = ({
  moviesPerPage,
  totalMovies,
  currentPage,
  setCurrentPage,
  nextPage,
  totalPages,
}) => {
  const pageNumbers = [];
  //   console.log(totalMovies);

  //   console.log(totalMovies / moviesPerPage);

  const maxTotalPages = 20;

  const cicleCounter = totalPages > maxTotalPages ? maxTotalPages : totalPages;

  for (let i = 1; i <= cicleCounter; i++) {
    pageNumbers.push(i);
  }

  const onPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSpecificPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <nav className="pagination" role="navigation">
      <button
        className="pagination-previous"
        onClick={onPreviousPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <ul className="paginationList">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={`pagination-link ${
                number === currentPage ? "is-current" : ""
              }`}
              onClick={() => onSpecificPage(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>

      <button
        className="pagination-next"
        onClick={nextPage}
        disabled={currentPage === Math.ceil(totalMovies / moviesPerPage)}
      >
        Next
      </button>
    </nav>
  );
};
