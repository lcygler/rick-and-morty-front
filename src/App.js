import "./App.module.css";
import style from "./App.module.css";
import Nav from "./components/Nav/Nav.jsx";
import Cards from "./components/Cards/Cards.jsx";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    if (isNaN(id) || id < 1 || id > 826) {
      window.alert("Invalid ID");
      return;
    }

    const BASE_URL = "https://be-a-rym.up.railway.app/api";
    const KEY = "3fa8a28b08d0.7e801b1fd26fde418200";

    fetch(`${BASE_URL}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (
          data.name &&
          !characters.find((character) => character.id === data.id)
        ) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("Duplicate character");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className={style.app}>
      <div className={style.nav}>
        <Nav onSearch={onSearch} />
      </div>

      <div className={style.cards}>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  );
}

export default App;
