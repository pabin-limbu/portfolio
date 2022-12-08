import React from "react";
import "./index.scss";

function AnimatedLetters({ letterClass, strArray, idx }) {
  //params:class to be applied, letter array, index starting point.

  console.log(strArray);
  console.log(idx);

  return (
    <span>
      {strArray.map((char, i) => {
        return (
          <span key={char + i} className={`${letterClass} _${i + idx}`}>
            {char}
          </span>
        );
      })}
    </span>
  );
}

export default AnimatedLetters;
