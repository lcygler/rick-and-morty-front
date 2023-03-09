import style from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    onSearch(searchValue);
    setSearchValue("");
  };

  return (
    <div className={style.bar}>
      <input
        className={style.searchInput}
        type="search"
        placeholder="Buscar..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button className={style.searchButton} onClick={handleSearch}></button>
    </div>
  );
}
