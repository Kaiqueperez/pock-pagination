import React from "react";
import { pageNumberGenerate } from "../../utils/pageNumbersGenerate";

export const Pagination = ({ postsPerPage, totalPost, paginate }) => {
  const allPages = Math.ceil(totalPost / postsPerPage);
  const pageNumbers = pageNumberGenerate(allPages);

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
