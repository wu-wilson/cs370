export const checkEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email)) {
    return "valid";
  } else {
    return "*Please enter a valid email address";
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
