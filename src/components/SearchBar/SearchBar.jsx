import style from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleRandomClick = () => {
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
      />
      <button
        className={style.searchButton}
        onClick={() => {
          onSearch(id);
          setId("");
        }}
      ></button>
      <button
        className={style.randomButton}
        onClick={handleRandomClick}
      ></button>
    </div>
  );
}
