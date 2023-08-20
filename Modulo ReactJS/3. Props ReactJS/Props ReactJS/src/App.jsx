import { useState } from "react";
import "./App.css";
import React from "react";
import { Title, Subtitle, Image, Paragraph } from "./components";

const App = () => {
  return (
    <>
      <div>
        <Title text="Hidden Love" />
        <Subtitle text="Subtítulo" />
        <Image
          src="https://res.cloudinary.com/drt000pht/image/upload/v1692328740/tumblr_79b79c53b82023e504aa6fdc8d873c52_b08c0c26_540_fw2w2i.gif"
          alt="Hidden Love"
          width="500px"
          height="500px"
        />
        <Paragraph text="Este es un párrafo de ejemplo" />
      </div>
      <div>
        <Title text="Hidden Love" />
        <Subtitle text="Subtítulo" />
        <Image
          src="https://res.cloudinary.com/drt000pht/image/upload/v1692328740/tumblr_79b79c53b82023e504aa6fdc8d873c52_b08c0c26_540_fw2w2i.gif"
          alt="Hidden Love"
          width="500px"
          height="500px"
        />
        <Paragraph text="Este es un párrafo de ejemplo" />
      </div>
    </>
  );
};

export default App;
