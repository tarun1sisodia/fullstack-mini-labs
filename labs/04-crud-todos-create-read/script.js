// DOM Elements
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// Store todos in browser's localStorage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Render todos on page load
renderTodos();

// Add new todo
addBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTodo();
});

function addTodo() {
  const text = todoInput.value.trim();
  if (text === "") return;

  const newTodo = {
    id: Date.now(), // unique ID
    text: text,
    completed: false,
  };

  todos.push(newTodo);
  saveTodos();
  renderTodos();
  todoInput.value = ""; // clear input
}

// Render all todos
function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "todo-item";

    const span = document.createElement("span");
    span.className = todo.completed ? "todo-text completed" : "todo-text";
    span.textContent = todo.text;

    const actionsDiv = document.createElement("div");
    actionsDiv.className = "todo-actions";

    // Complete Button
    const completeBtn = document.createElement("button");
    completeBtn.className = "complete-btn";
    completeBtn.textContent = todo.completed ? "Undo" : "Complete";
    completeBtn.onclick = () => toggleComplete(todo.id);

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit";
    editBtn.onclick = () => editTodo(todo.id);

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteTodo(todo.id);

    actionsDiv.append(completeBtn, editBtn, deleteBtn);
    li.append(span, actionsDiv);
    todoList.appendChild(li);
  });
}

// Toggle Complete
function toggleComplete(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  saveTodos();
  renderTodos();
}

// Edit Todo
function editTodo(id) {
  const todo = todos.find((t) => t.id === id);
  const newText = prompt("Edit your todo:", todo.text);
  if (newText !== null && newText.trim() !== "") {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText.trim() } : todo
    );
    saveTodos();
    renderTodos();
  }
}

// Delete Todo
function deleteTodo(id) {
  if (confirm("Are you sure you want to delete this?")) {
    todos = todos.filter((todo) => todo.id !== id);
    saveTodos();
    renderTodos();
  }
}

// Save to localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
