import React, { useState, useEffect } from "react";
// import CharacterFront from "./character/CharacterFront";
// import CharacterBack from "./character/CharacterBack";
import CharacterFlip from "./character/CharacterFlip";
import PageButton from "./Page Button/PageButton";
import "./app.css";
import img from "./pngegg.png";

function App() {
  /********SETTING STATES********/
  let [allCharacters, setAllCharacters] = useState([]); //SETTING ALL CHARACTERS TO AN EMPTY ARRAY, WHICH WILL BE REPLACED BY THE CHARACTER DATA FROM THE API
  const [totalPages, setTotalPages] = useState(0); //SETTING THE TOTAL PAGES TO 0 AS A PLACEHOLDER, WHICH WILL BE REPLACED BY TOTAL PAGES IN THE API
  const [count, setCount] = useState(1); //SETTING THE COUNT TO 1, SO THAT THE PAGE STARTS AT 1

  /********FETCHING DATA********/
  useEffect(() => {
    async function getAllCharacters() {
      let response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${count}` //FETCHING DATA FROM THE API, AND SETTING THE PAGE TO THE COUNT STATE
      );
      let data = await response.json();
      setAllCharacters(data.results); //SET ALL CHARACTERS TO THE RESULTS OF THE API
      setTotalPages(data.info.pages); //SET TOTAL PAGES TO GET THE TOATL NUMBER OF PAGES
    }

    getAllCharacters();
  }, [count]); //SETTING THE COUNT AS A DEPENDENCY, SO THAT THE PAGE WILL CHANGE WHEN THE COUNT CHANGES

  /********SETTING NEXT AND PREVIOUS BUTTONS********/
  let next = () => {
    setCount((prevCount) => prevCount + 1); //SETTING THE COUNT TO INCREASE BY 1
  };

  let prev = () => {
    setCount((prevCount) => prevCount - 1); //SETTING THE COUNT TO DECREASE BY 1
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
