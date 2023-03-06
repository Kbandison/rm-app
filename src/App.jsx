import React, { useState, useEffect } from "react";
// import CharacterFront from "./character/CharacterFront";
// import CharacterBack from "./character/CharacterBack";
import CharacterFlip from "./character/CharacterFlip";
import PageButton from "./Page Button/PageButton";
import "./app.css";
import img from "./pngegg.png";

function App() {
  /********SETTING STATES********/
  let [allCharacters, setAllCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [count, setCount] = useState(1);
  // const [flip, setFlip] = useState(true);

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

  /********RETURNING DATA********/
  return (
    <div className="App">
      <header>
        <img src={img} alt="Rick and Morty" className="page-title" />
        <br />
        <br />
        <h2 className="page-count">
          CHARACTERS: Page {count} of {totalPages}
        </h2>
        <br />
      </header>
      <div className="card-area">
        {allCharacters.map((character) => {
          return (
            <CharacterFlip
              key={character.id}
              characters={character}
              num={character.id}
            />
          );
        })}
      </div>
      <h2 className="page-count">
        Page {count} of {totalPages}
      </h2>
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
