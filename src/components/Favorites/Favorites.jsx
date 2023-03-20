import { useDispatch, useSelector } from "react-redux";
import { clearFavorites } from "../../redux/actions";
import Card from "../Card/Card";
import style from "./Favorites.module.css";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavorites);

  const clearAll = () => {
    if (window.confirm("Are you sure you want to clear all favorites?")) {
      dispatch(clearFavorites());
    } else {
      return null;
    }
  };

  if (favorites.length === 0) {
    return (
      <div className={style.textContainer}>
        <h1 className={style.text1}>Hi there 👋</h1>
        <p className={style.text2}>Your favorites list is empty</p>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <div className={style.cardsContainer}>
        {favorites.map(({ id, name, species, gender, image }) => {
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
      <div className={style.clearAllContainer}>
        <button className={style.clearAllButton} onClick={clearAll}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Favorites;
