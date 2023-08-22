import React from "react";

const More = ({ languages, habilities, volunteer }) => {
  return (
    <div>
      <div>
        <div key={languages.language}>
          <h4>Languages</h4>
          <p>{languages.language}</p>
          <p>Writing: {languages.wrlevel}</p>
          <p>Speaking: {languages.splevel}</p>
        </div>
        <h4>Skills</h4>
        <ul>
          {habilities.map((hability) => {
            return (
              <li key={hability}>
                <p>{hability}</p>
              </li>
            );
          })}
        </ul>
        <h4>Volunteer</h4>
        {volunteer.map((hasVolunteer) => {
          return (
            <div key={hasVolunteer.volunteer}>
              <h4>{hasVolunteer.name}</h4>
              <p>{hasVolunteer.where}</p>
              <p>{hasVolunteer.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default More;
