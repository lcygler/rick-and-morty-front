import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import style from "./App.module.css";
import {
  About,
  Cards,
  Detail,
  Error,
  Favorites,
  Form,
  Nav,
} from "./components/index";
import { BASE_URL, PASSWORD, USERNAME } from "./utils/consts";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const onSearch = (id) => {
    if (isNaN(id) || id < 1 || id > 826) {
      return window.alert("Invalid ID");
    }

    if (characters.find((character) => character.id === id)) {
      return window.alert("Duplicate character");
    }

    fetch(`${BASE_URL}/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          // setCharacters((oldChars) => [...oldChars, data]);
          setCharacters((oldChars) => {
            if (oldChars.find((character) => character.id === data.id)) {
              window.alert("Duplicate character");
              return oldChars;
            } else {
              return [...oldChars, data];
            }
          });
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

  const login = (userData) => {
    if (userData.username === USERNAME && userData.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    }
  };

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    if (!access) {
      navigate("/");
    }
  }, [access, navigate]);

  return (
    <div className={style.background}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      <div className={style.app}>
        <Routes>
          <Route path="/" element={<Form login={login} />} />
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:detailId" element={<Detail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
