import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  if (characters.length === 0) {
    return <div className={style.banner}></div>;
  }

  return (
    <div className={style.container}>
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
  );
}
