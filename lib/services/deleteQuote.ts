const deleteQuote = async (quoteId: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HOME_URL}/api/quotes/${quoteId}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    if (res.ok) {
      console.log("Success!");
      return true;
    } else {
      console.log("Oops! Error.");
    }
  } catch (error) {
    console.log(error);
  }
};

export { deleteQuote };
