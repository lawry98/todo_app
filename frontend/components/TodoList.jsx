import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, fetchTodos }) => {
  return (
    <ul className="space-y-4">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} fetchTodos={fetchTodos} />
        ))
      ) : (
        <p className="text-center text-gray-500 text-lg">
          🎉 No tasks to display. Add one to get started!
        </p>
      )}
    </ul>
  );
};

export default TodoList;
