import { books } from "./books";

import Book from "./Book";

const Booklist = () => {
  return books.map((book) => {
    return <Book {...book} key={book.id} />;
  });
};

export default Booklist;
