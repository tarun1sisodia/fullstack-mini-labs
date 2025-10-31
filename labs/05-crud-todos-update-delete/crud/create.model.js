import mongoose from "mongoose";

// Define Todo Schema (structure of a todo)
const todoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

todoSchema.pre("save", async function (next) {
  
});

// Create Todo Model
export const Todo = mongoose.model("Todo", todoSchema);
