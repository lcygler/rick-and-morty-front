import { useState } from "react";
import style from "./Form.module.css";
import { validatePassword, validateUsername } from "./validation";

const Form = (props) => {
  const { login } = props;

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });

    if (property === "username") {
      setErrors({ ...errors, username: validateUsername(value) });
    } else {
      setErrors({ ...errors, password: validatePassword(value) });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(form);
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
          value={form.username}
          onChange={handleChange}
          className={style.input}
          title="test@gmail.com"
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
          value={form.password}
          onChange={handleChange}
          className={style.input}
          title="123456"
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
