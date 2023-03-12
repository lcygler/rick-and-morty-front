import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";

const Nav = (props) => {
  const { onSearch, logout } = props;
  return (
    <div className={style.container}>
      <div className={style.searchContainer}>
        <SearchBar onSearch={onSearch} />
      </div>
      <div className={style.linkContainer}>
        <Link to="/home" className={style.link}>
          <span>Home</span>
        </Link>
        <Link to="/about" className={style.link}>
          <span>About</span>
        </Link>
        <span className={style.link} onClick={logout}>
          Logout
        </span>
      </div>
    </div>
  );
};

export default Nav;
