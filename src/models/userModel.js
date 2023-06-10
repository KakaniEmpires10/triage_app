import { Schema, models, model } from "mongoose";

const userSchema = new Schema(
  {
    avatar: String,
    email: {
      type: String,
      unique: [true, "Email is already exist"],
      lowercase: true,
    },
    name: {
      type: String,
      lowercase: true,
    },
    password: {
      type: String,
    },
    telephone: {
      type: Number,
    },
    gender: {
      type: String,
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
  },
  { timestamps: true }
);

const User = models.user || model("user", userSchema);

export default User;
