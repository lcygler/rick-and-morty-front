import { useState } from "react";
import style from "./Form.module.css";
import { validatePassword, validateUsername } from "./validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });

    if (property === "username") {
      setErrors({ ...errors, username: validateUsername(value) });
    } else {
      setErrors({ ...errors, password: validatePassword(value) });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.usernameContainer}>
        <label htmlFor="username" className={style.label}>
          Username:
        </label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          className={style.input}
          placeholder="test@gmail.com"
        />
        <div className={style.errorContainer}>
          <span className={errors.username ? style.error : style.success}>
            {errors.username}
          </span>
        </div>
      </div>
      <div className={style.passwordContainer}>
        <label htmlFor="password" className={style.label}>
          Password:
        </label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          className={style.input}
          placeholder="123456"
        />
        <div className={style.errorContainer}>
          <span className={errors.password ? style.error : style.success}>
            {errors.password}
          </span>
        </div>
      </div>
      <div className={style.loginButtonContainer}>
        <button type="submit" className={style.loginButton}>
          Login
        </button>
      </div>
    </form>
  );
};

export default Form;
