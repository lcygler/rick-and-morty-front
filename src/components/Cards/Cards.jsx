// import Card from "../Card/Card";
import { Button, Card } from "../index";
import style from "./Cards.module.css";

const Cards = ({ characters, onClose }) => {
  const clearAll = () => {
    if (window.confirm("Are you sure you want to clear all characters?")) {
      onClose(null);
    } else {
      return null;
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

      <Button onClick={clearAll} text="Clear All" />
    </div>
  );
};

export default Cards;
