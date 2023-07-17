import mongoose from "mongoose";
import { model } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    email: String,
    password: String,
    token: String,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
