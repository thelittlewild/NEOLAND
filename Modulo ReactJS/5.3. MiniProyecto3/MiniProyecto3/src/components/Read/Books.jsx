import React from "react";

const Books = ({ otherBooks }) => {
  return (
    <ul>
      {otherBooks.map((book) => {
        return <li key={book.info}>{book.info}</li>;
      })}
    </ul>
  );
};

export default Books;
