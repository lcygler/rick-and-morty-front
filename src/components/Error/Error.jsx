import React from "react";
import style from "./Error.module.css";

const Error = () => {
  return (
    <div className={style.container}>
      <h1 className={style.error}>Error 404</h1>
      <p className={style.msg}>Oops! Page not found.</p>
    </div>
  );
};

export default Error;
