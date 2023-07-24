import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Welcome to my personal website!"
        ],
        autoStart: true,
        loop: true,
        // deleteSpeed: 150,
        delay: 105,
      }}
    />
  );
}

export default Type;
