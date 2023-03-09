import "./App.module.css";
import style from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import characters from "./data.js";

function App() {
  return (
    <div className={style.app}>
      <div className={style.nav}>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>

      <div className={style.cardsContainer}>
        <Cards characters={characters} />
      </div>
    </div>
  );
}

export default App;
