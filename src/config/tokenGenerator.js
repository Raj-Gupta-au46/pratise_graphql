import jwt from "jsonwebtoken";

const TokenGenerator = (username, email, passwords) => {
  return jwt.sign(
    { username: username, email: email, password: passwords },
    process.env.SECRET__KEY
  );
};

export default TokenGenerator;
