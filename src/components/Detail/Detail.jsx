import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BASE_URL, KEY } from "../../utils/consts";
import style from "./Detail.module.css";

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`${BASE_URL}/character/${detailId}?key=${KEY}`).then((response) => {
      setCharacter(response.data);
    });
  }, [detailId]);

  return (
    <div className={style.container}>
      {character.name ? (
        <>
          <div className={style.textContainer}>
            <h2 className={style.name}>{character.name}</h2>
            <p className={style.text}>Status: {character.status}</p>
            <p className={style.text}>Species: {character.species}</p>
            <p className={style.text}>Gender: {character.gender}</p>
            <p className={style.text}>Origin: {character.origin?.name}</p>
            <Link to="/home" className={style.link}>
              <button className={style.backButton}></button>
            </Link>
          </div>
          <div className={style.imageContainer}>
            <img src={character.image} alt="img" className={style.image} />
          </div>
        </>
      ) : (
        <h3 className={style.loading}>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;
