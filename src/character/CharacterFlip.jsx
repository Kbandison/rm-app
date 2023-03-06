import React, { useState } from "react";

import CharacterFront from "./CharacterFront";
import CharacterBack from "./CharacterBack";

let CharacterFlip = (props) => {
  let [flip, setFlip] = useState(true);

  let toggle = () => {
    setFlip((prevFlip) => !prevFlip);
  };

  return (
    <div>
      {flip ? (
        <CharacterFront
          characters={props.characters}
          flipCard={toggle}
          num={props.num}
        />
      ) : (
        <CharacterBack
          characters={props.characters}
          flipCard={toggle}
          num={props.num}
        />
      )}
    </div>
  );
};

export default CharacterFlip;
