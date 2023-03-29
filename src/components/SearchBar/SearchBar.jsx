import { useState } from "react";
import style from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");

  const handleRandom = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    onSearch(randomId);
  };

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(id);
      setId("");
    }
  };

  return (
    <div className={style.container}>
      <input
        className={style.searchInput}
        type="search"
        placeholder="Search by ID..."
        value={id}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        title="1-826"
      />
      <button
        className={style.searchButton}
        onClick={() => {
          onSearch(id);
          setId("");
        }}
      ></button>
      <button className={style.randomButton} onClick={handleRandom}></button>
    </div>
  );
};

export default SearchBar;
