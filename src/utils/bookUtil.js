function segregateBooksByYear(books) {
  return books.reduce((acc, book) => {
    const year = book.readOnYear;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(book);
    return acc;
  }, {});
}

const groupedByGenre = (books) =>
  books.reduce((acc, book) => {
    const genres = book.genre.split(" & "); // Split genres by '&'
    genres.forEach((genre) => {
      if (!acc[genre]) {
        acc[genre] = [];
      }
      acc[genre].push(book);
    });
    return acc;
  }, {});

export { segregateBooksByYear, groupedByGenre };
