import React from "react";

const TodoItem = ({ todo, fetchTodos }) => {
  const markComplete = async () => {
    const endpoint = todo.isDone ? `/notdone/${todo._id}` : `/complete/${todo._id}`;
    try {
      await fetch(`http://localhost:3000${endpoint}`, { method: "POST" });
      fetchTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodo = async () => {
    try {
      await fetch(`http://localhost:3000/todos/${todo._id}`, { method: "DELETE" });
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div
      className={`flex flex-col justify-between items-start p-4 border rounded-md shadow-md ${
        todo.isDone ? "bg-gray-700" : "bg-gray-800"
      }`}
    >
      <div>
        <h2
          className={`text-lg font-semibold ${
            todo.isDone ? "line-through text-gray-500" : "text-gray-200"
          }`}
        >
          {todo.title}
        </h2>
        <p className="text-sm text-gray-400">{todo.description}</p>
      </div>
      <div className="flex flex-col gap-3 mt-4">
        <button
          onClick={markComplete}
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
        >
          {todo.isDone ? "Mark as not done?" : "Mark as done?"}
        </button>
        <button
          onClick={deleteTodo}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
