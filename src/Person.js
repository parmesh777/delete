import React from "react";

const person = (props) => {
  return (
    <div>
      <h2 onClick={props.click}>
        {props.name} <button>X</button>
      </h2>
    </div>
  );
};
export default person;
