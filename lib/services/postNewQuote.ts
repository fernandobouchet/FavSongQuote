const postNewQuote = async (values: newQuote) => {
  try {
    const res = await fetch(`api/quotes`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "content-type": "application/json",
      },
    });
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

export { postNewQuote };
