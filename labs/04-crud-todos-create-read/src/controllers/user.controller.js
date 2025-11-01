import mongoose from "mongoose";
import { User } from "../models/user.model.js";
import { asyncHandler } from "../services/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  // if username and password any some is empty or not.
  // if ([username, password].some((field) => field.trim()) === "") {
  if (!(username || email))
    throw new ApiError(401, "Username or Email atleast one Provide");

  // If user exists already or not before registering it.
  // Read Operation
  const existingUser = await User.findOne({ username });

  if (!existingUser) throw new ApiError(401, "Unauthorized");

  // if not found then Create an account for user on DB.
  const user = await User.create({
    username,
    password,
  });
  
  if (!user) throw new ApiError(501, "Account Creation Failed at Database");
  // Getting id from DB after newly created account of user , exclusively password
  const createdUser = await User.findById(user._id).select("-password");
  // if not created SOMEHOW then Error
  if (!createdUser)
    throw new ApiError(501, "Failed to Get the ID of Created user");

  return res
    .status(201)
    .json(
      new ApiResponse(
        "Created User Account in DB and Returning it successfully",
        true
      )
    );
});

export { registerUser };
