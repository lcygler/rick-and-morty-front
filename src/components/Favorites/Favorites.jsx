import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFavorites,
  filterCards,
  orderCards,
  resetCards,
} from "../../redux/actions";
import { Button, Card } from "../index";
import style from "./Favorites.module.css";

const Favorites = () => {
  const dispatch = useDispatch();
  const filterSelect = useRef(null);
  const orderSelect = useRef(null);
  const myFavorites = useSelector((state) => state.myFavorites);
  const allCharacters = useSelector((state) => state.allCharacters);

  const clearAll = () => {
    if (window.confirm("Are you sure you want to clear all favorites?")) {
      dispatch(clearFavorites());
    } else {
      return null;
    }
  };

  const handleOrderChange = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilterChange = (event) => {
    dispatch(filterCards(event.target.value));
  };

  const handleReset = () => {
    dispatch(resetCards());
    filterSelect.current.value = "All";
    orderSelect.current.value = "Default";
  };

  return (
    <div className={style.container}>
      <div className={style.selectContainer}>
        <div className={style.filterContainer}>
          <label htmlFor="filterSelect" className={style.filterLabel}>
            Filter by gender:
          </label>
          <select
            ref={filterSelect}
            name="filterSelect"
            onChange={handleFilterChange}
            className={style.select}
          >
            <option value="All" selected></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        <div className={style.orderContainer}>
          <label htmlFor="orderSelect" className={style.orderLabel}>
            Order by ID:
          </label>
          <select
            ref={orderSelect}
            name="orderSelect"
            onChange={handleOrderChange}
            className={style.select}
          >
            <option value="Default" selected></option>
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>
        </div>
        <button
          value="reset"
          onClick={handleReset}
          className={style.resetButton}
        >
          Reset filters
        </button>
      </div>
      {allCharacters.length === 0 && (
        <div className={style.textContainer}>
          <h1 className={style.text1}>Hi there 👋</h1>
          <p className={style.text2}>Your favorites list is empty</p>
        </div>
      )}

      {myFavorites.length !== 0 && (
        <>
          <div className={style.cardsContainer}>
            {myFavorites.map(({ id, name, species, gender, image }) => {
              return (
                <Card
                  key={id}
                  id={id}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
                />
              );
            })}
          </div>

          <Button onClick={clearAll} text="Clear All" />
        </>
      )}

      {allCharacters.length !== 0 && myFavorites.length === 0 && (
        <>
          <div className={style.textContainer}>
            <h1 className={style.text1}>Hi there 👋</h1>
            <p className={style.text2}>No favorites with this gender</p>
          </div>

          <Button onClick={clearAll} text="Clear All" />
        </>
      )}
    </div>
  );
};

export default Favorites;
