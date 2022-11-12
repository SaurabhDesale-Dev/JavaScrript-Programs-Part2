fetch("https://api.quotable.io/random")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let quoteAuthor = data.author;
    let quote = data.content;
    console.log(`Quote: ${quote}----- by ${quoteAuthor}`);
  })
  .catch();

  