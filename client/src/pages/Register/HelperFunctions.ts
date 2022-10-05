export const checkEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email)) {
    return "valid";
  } else {
    return "*Please enter a valid email address";
  }
};

export const checkUsername = (username: string) => {
  // Check length
  if (username.length < 6 || username.length > 16) {
    return "*Username must be betweeen 6 and 30 characters";
  }
  // Check valid characters
  else if (username.match(/[^0-9a-z]/i)) {
    return "*Username can only consist of numbers and digits";
  } else {
    return "valid";
  }
};

export const checkPassword = (password: string) => {
  // Check length
  if (password.length < 8 || password.length > 16) {
    return "*Password must be between 8 and 16 characters";
  }
  // Check capital letters
  else if (!password.match(/[A-Z]/)) {
    return "*Password must contain at least one capital letter";
  }
  // Check special character
  else if (!/[#%$!]/.test(password)) {
    return "*Password must contain at least one special character: #, %, $, or !";
  } else {
    return "valid";
  }
};
