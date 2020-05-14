import React from "react";

export const Pagination = ({
  currentPage,
  maxItemsPerPage,
  maxItems,
  setCurrentPage
}) => {
  let maxPaginationItems = Math.ceil(maxItems / maxItemsPerPage);
  const handleClick = (event, index) => {
    event.preventDefault();
    setCurrentPage(index);
  };
  return (
    <div className="mt-3">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {Array(maxPaginationItems)
            .fill(null)
            .map((value, index) => {
              return (
                <li
                  className={
                    currentPage === index ? "page-item active" : "page-item"
                  }
                  key={index}
                >
                  <a
                    onClick={event => handleClick(event, index)}
                    className="page-link"
                    href="#"
                  >
                    {index + 1}
                  </a>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
};
