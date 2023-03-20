import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite } from "../../redux/actions";
import style from "./Card.module.css";

const Card = ({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  addFavorite,
  removeFavorite,
  myFavorites,
}) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({
        id,
        name,
        species,
        gender,
        image,
        onClose,
        addFavorite,
        removeFavorite,
      });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <div className={style.cardContainer}>
      <div className={style.buttonContainer}>
        {isFav ? (
          <button className={style.favButton} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={style.favButton} onClick={handleFavorite}>
            🤍
          </button>
        )}

        <button
          className={style.closeButton}
          onClick={() => onClose(id)}
        ></button>
      </div>

      <div className={style.imageContainer}>
        <img className={style.image} src={image} alt="" />
        <Link to={`/detail/${id}`}>
          <p className={style.name}>{name}</p>
        </Link>
      </div>

      <div className={style.infoContainer}>
        <p className={style.gender}>{gender}</p>
        <p className={style.species}>{species}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
