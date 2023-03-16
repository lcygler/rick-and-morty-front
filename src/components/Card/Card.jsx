import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ id, name, species, gender, image, onClose }) => {
  return (
    <div className={style.cardContainer}>
      <button
        className={style.closeButton}
        onClick={() => onClose(id)}
      ></button>

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

export default Card;
