export const pageNumberGenerate = (totalPages) => {
  const pageNumbers = [];

  for (let index = 1; index <= totalPages; index++) {
    pageNumbers.push(index);
  }
  return pageNumbers;
};
