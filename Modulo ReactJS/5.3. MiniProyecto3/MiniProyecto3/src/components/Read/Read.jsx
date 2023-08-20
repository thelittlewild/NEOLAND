import React from "react";
import "./Read.css";
import Author from "./Author";
import Books from "./Books";

const Read = ({ read }) => {
  return (
    <>
      <p>Currently reading:</p>
      <Author read={read} />
      <p>To Read:</p>
      <Books otherBooks={read.otherBooks} />
    </>
  );
};

export default Read;
