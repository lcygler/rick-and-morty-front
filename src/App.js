import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import style from "./App.module.css";
import About from "./components/About/About";
import Cards from "./components/Cards/Cards.jsx";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Nav from "./components/Nav/Nav.jsx";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);

  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    if (isNaN(id) || id < 1 || id > 826) {
      return window.alert("Invalid ID");
    }

    if (characters.find((character) => character.id === id)) {
      return window.alert("Duplicate character");
    }

    const BASE_URL = "https://be-a-rym.up.railway.app/api";
    const KEY = "3fa8a28b08d0.7e801b1fd26fde418200";

    fetch(`${BASE_URL}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("Unknown error");
        }
      });
  };

  const onClose = (id) => {
    if (id === null) {
      setCharacters([]);
    } else {
      setCharacters(characters.filter((character) => character.id !== id));
    }
  };

  return (
    <div className={style.background}>
      <Nav onSearch={onSearch} />
      <div className={style.app}>
        <Routes>
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:detailId" element={<Detail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
