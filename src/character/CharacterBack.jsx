import React from "react";
import "./character.css";

const CharacterBack = (props) => {
  return (
    <div
      className="character-card"
      onClick={() => props.flipCard(props.num)}
      key={props.num}
    >
      <img className="card-img" src={props.characters.image} alt="" />
      <div className="info-bar">
        <h2>No. Episodes: {props.characters.episode.length}</h2>
        <h3>Location: {props.characters.location.name}</h3>
        <h3>Origin: {props.characters.origin.name}</h3>
      </div>
    </div>
  );
};

export default CharacterBack;
