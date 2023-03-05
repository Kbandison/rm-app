import React, { useState, useEffect } from "react";
import CharacterFront from "./character/CharacterFront";
import CharacterBack from "./character/CharacterBack";
import PageButton from "./Page Button/PageButton";
import "./app.css";

function App() {
  /********SETTING STATES********/
  let [allCharacters, setAllCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [count, setCount] = useState(1);
  const [flip, setFlip] = useState(true);

  /********FETCHING DATA********/
  useEffect(() => {
    async function getAllCharacters() {
      let response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${count}`
      );
      let data = await response.json();
      setAllCharacters(data.results);
      setTotalPages(data.info.pages);
    }

    getAllCharacters();
  }, [count]);

  /********SETTING NEXT AND PREVIOUS BUTTONS********/
  let next = () => {
    setCount((prevCount) => prevCount + 1);
  };

  let prev = () => {
    setCount((prevCount) => prevCount - 1);
  };

  /********SETTING FLIP********/

  allCharacters = allCharacters.map((character) => {
    return {
      ...character,
      type: flip,
    };
  });

  let toggle = (event) => {
    setAllCharacters((prevCharacters) => {
      return prevCharacters.map((character) => {
        if (character.id === event) {
          return { ...character, type: setFlip(!flip) };
        } else {
          return character;
        }
      });
    });
    // console.log(event);
  };
  // console.log(allCharacters);

  /********RETURNING DATA********/
  return (
    <div className="App">
      <h1>Rick And Morty: Characters</h1>
      <br />
      <br />
      <br />
      <h2>
        Page {count} of {totalPages}
      </h2>
      {allCharacters.map((character) => {
        if (character.type === true) {
          return (
            <CharacterFront
              key={character.id}
              characters={character}
              flipCard={toggle}
              num={character.id}
            />
          );
        } else {
          return (
            <CharacterBack
              key={character.id}
              characters={character}
              flipCard={toggle}
              num={character.id}
            />
          );
        }
      })}

      <PageButton
        nextPage={next}
        prevPage={prev}
        end={totalPages}
        count={count}
      />
    </div>
  );
}

export default App;
