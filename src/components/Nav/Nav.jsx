import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";

export default function Nav({ onSearch }) {
  return (
    <div className={style.container}>
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
}
