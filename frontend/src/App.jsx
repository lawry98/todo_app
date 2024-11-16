import React, { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos");
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 text-gray-200 p-6 sm:p-12 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-gray-800 rounded-xl shadow-lg p-10">
        <header className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white">Manage your tasks</h1>
          </div>
        </header>
        <TodoForm fetchTodos={fetchTodos} />
        <hr className="my-8 border-gray-700" />
        <TodoList todos={todos} fetchTodos={fetchTodos} />
      </div>
    </section>
  );
};

export default App;
