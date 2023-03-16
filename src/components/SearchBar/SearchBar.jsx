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

  return (
    <div className={style.container}>
      <input
        className={style.searchInput}
        type="search"
        placeholder="Search..."
        value={id}
        onChange={handleChange}
        title="Enter ID (1-826)"
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
