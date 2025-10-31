import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const user = await User.create({
      username,
      password,
    });

    const createdUser = await User.findById(user._id).select("-password");

    if (!createdUser) {
      return res.status(500).json({ message: "Something went wrong while registering the user" });
    }

    return res.status(201).json(createdUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { registerUser };