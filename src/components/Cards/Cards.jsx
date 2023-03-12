import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = (props) => {
  const { characters, onClose } = props;

  const clearAll = () => {
    if (window.confirm("Are you sure you want to clear all characters?")) {
      onClose(null);
    }
  };

  if (characters.length === 0) {
    return <div className={style.banner}></div>;
  }

  return (
    <div className={style.container}>
      <div className={style.cardsContainer}>
        {characters.map(({ id, name, species, gender, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              onClose={onClose}
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

export default Cards;
