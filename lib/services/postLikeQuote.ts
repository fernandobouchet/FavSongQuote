const postLikeQuote = async (quoteId: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HOME_URL}/api/like/${quoteId}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    if (res.ok) {
      console.log("Success!");
      const { data } = await res.json();
      return data;
    } else {
      console.log("Oops! Error.");
    }
  } catch (error) {
    console.log(error);
  }
};

export { postLikeQuote };
