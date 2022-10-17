export const paginateArray = (array, pageSize, pageNumber) => {
  const arrayToBePrinted = array.slice(
    (pageNumber - 1) * pageSize,
    pageNumber * pageSize
  );

  console.log(arrayToBePrinted);

  return arrayToBePrinted;
};
