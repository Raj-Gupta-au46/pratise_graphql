export const validationSignUp = (username, password, email) => {
  const error = {};

  if (username.trim() === "") {
    error.username = "username must not be empty";
  }
  if (email.trim() === "") {
    error.email = "email must not be empty";
  } else {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailRegex)) {
      error.email = "Email must be valid";
    }
  }
  if (password === "") {
    error.password = "Password must not be empty";
  }

  return {
    error,
    valid: Object.keys(error).length < 1,
  };
};

export const validationLogin = (username, password) => {
  const error = {};

  if (username.trim() === "") {
    error.username = "username must not be empty";
  }
  if (password === "") {
    error.password = "Password must not be empty";
  }

  return {
    error,
    valid: Object.keys(error).length < 1,
  };
};
