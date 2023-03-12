const validateUsername = (username) => {
  if (!username) return "Username field is empty";
  else {
    if (
      /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{3})+$/.test(username) &&
      username.length <= 35
    )
      return "";
    else return "Invalid username";
  }
};

const validatePassword = (password) => {
  if (!password) return "Password field is empty";
  else {
    if (/^(?=.*[0-9])(?=.{6,10})/.test(password)) return "";
    else
      return "Password must contain at least 1 number \nand be between 6 and 10 characters long";
  }
};

export { validateUsername, validatePassword };
