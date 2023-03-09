import style from "./Card.module.css";

export default function Card({ id, name, species, gender, image, onClose }) {
  return (
    <div className={style.cardContainer}>
      <button
        className={style.closeButton}
        onClick={() => onClose(id)}
      ></button>

      <div className={style.imageContainer}>
        <img className={style.image} src={image} alt="" />
        <p className={style.name}>{name}</p>
      </div>

      <div className={style.propsContainer}>
        <p className={style.gender}>{gender}</p>
        <p className={style.species}>{species}</p>
      </div>
    </div>
  );
}
