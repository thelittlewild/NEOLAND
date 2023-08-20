import React from "react";

const Author = ({ read }) => {
  return (
    <div>
      <div>
        <img src={read.bookImage} />
      </div>
      <div>
        <h1>{read.title}</h1>
        <h2>Genre: {read.genre}</h2>
        <h2>Published: {read.dateOfPublication}</h2>
        <h2>
          {read.authorName} {read.authorSurname} ({read.authorBirthday}){" "}
        </h2>
      </div>
    </div>
  );
};

export default Author;
