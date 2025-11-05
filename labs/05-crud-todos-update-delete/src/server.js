import { app } from "./app.js";
import dotenv from "dotenv";
import { Todo } from "./crud/create.model.js";

dotenv.config();

app.listen(3000 || process.env.PORT, () => {
  console.log(`Running at http://localhost:${process.env.PORT}/`);
});

app.get("/", (req, res) => {
  res.send("Takes Time but worked Finally");
});
app.post("/todos", async (req, res) => {
  try {
    const { text } = req.body; // get text from request body

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const newTodo = new Todo({ text });
    await newTodo.save();

    res.status(201).json({
      message: "Todo created!",
      todo: newTodo,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find(); // find all todos
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
