import mongoose, { Schema } from "mongoose";

const loginSchema = new Schema(
  {
    Email: String,
    password : String,
      }
);

const Email = mongoose.models.login || Emailmongoose.model("login",loginSchema);

export default login;