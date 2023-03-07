import React from "react";
import "./character.css";

const CharacterFront = (props) => {
  return (
    <div
      className="character-card"
      onClick={() => props.flipCard(props.num)} //SWITCHES THE BOOLEAN OF EACH CARD BASED ON THE ID OF THE CARD
      key={props.num}
    >
      <img className="card-img" src={props.characters.image} alt="" />
      <div className="info-bar">
        <h2>Name: {props.characters.name}</h2>
        <h3>Gender: {props.characters.gender}</h3>
        <h3>Species: {props.characters.species}</h3>
        <h3>Status: {props.characters.status}</h3>
      </div>
    </div>
  );
};

export default CharacterFront;
