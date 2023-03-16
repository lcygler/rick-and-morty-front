const validateUsername = (username) => {
  if (!username) return "Username field is empty";
  else if (username.length > 35)
    return "Username must have less than 35 characters";
  else if (!/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{3})+$/.test(username))
    return "Invalid username";
  else return "";
};

const validatePassword = (password) => {
  if (!password) return "Password field is empty";
  else if (!/^(?=.*[0-9]).{6,10}$/.test(password))
    return "Password must contain at least 1 number \nand be between 6 and 10 characters long";
  else return "";
};

export { validateUsername, validatePassword };
