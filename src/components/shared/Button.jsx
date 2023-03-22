import React from "react";
import style from "./Button.module.css";

const Button = ({ onClick, text }) => {
  return (
    <div className={style.buttonContainer}>
      <button className={style.button} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
