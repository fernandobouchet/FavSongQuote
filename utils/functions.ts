const getFormattedDate = (isoDate: Date) => {
  const date = new Date(isoDate);

  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
};

export { getFormattedDate };
