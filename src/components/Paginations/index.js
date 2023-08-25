import React from "react";

export const Pagination = ({ postsPerPage, totalPost, paginate }) => {
  const pageNumbers = [];

  for (let index = 1; index <= Math.ceil(totalPost / postsPerPage); index++) {
    pageNumbers.push(index);
  }

  return (
    <ul>
      {pageNumbers.map((number) => (
        <button key={number} onClick={() => paginate(number)}>
          {number}
        </button>
      ))}
    </ul>
  );
};
