import bcrypt from "bcryptjs";
import bcryptjs from "bcryptjs";
import mongoose, { mongo, Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, lowercase: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect()
export const User = mongoose.model("User", userSchema);
