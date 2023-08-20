import React from "react";
import "./Languages.css";

const Languages = ({ languages }) => {
  return (
    <div>
      {languages.map((lang) => {
        return (
          <div key={lang.language}>
            <h3>{lang.language}</h3>
            <p>
              Writing: {lang.wrlevel} || Speaking: {lang.splevel}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Languages;
