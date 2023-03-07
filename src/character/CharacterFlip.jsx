import React, { useState } from "react";

import CharacterFront from "./CharacterFront";
import CharacterBack from "./CharacterBack";

let CharacterFlip = (props) => {
  let [flip, setFlip] = useState(true); //BOOLEAN TO DETERMINE WHICH SIDE OF THE CARD IS DISPLAYED

  let toggle = () => {
    setFlip((prevFlip) => !prevFlip); //SWITCHES THE BOOLEAN OF EACH CARD
  };

  return (
    <div>
      {flip ? ( //IF THE FLIP BOOLEAN IS TRUE, DISPLAY THE FRONT OF THE CARD
        <CharacterFront
          characters={props.characters}
          flipCard={toggle}
          num={props.num}
        />
      ) : (
        //IF THE FLIP BOOLEAN IS FALSE, DISPLAY THE BACK OF THE CARD
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
