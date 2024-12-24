import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import Todo, { TodoType } from "./types";

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [filter, setFilter] = useState<string>("all");
  function addTodo(text: string): void {
    const newItem = new Todo(Date.now().toString(), text, false);
    setTodos([...todos, newItem]);
  }

  const getFilterTodos = () => {
    if (filter === "active") {
      return todos.filter((todo) => !todo.complete);
    }
    if (filter === "completed") {
      return todos.filter((todo) => todo.complete);
    }
    return todos;
  };

  function deleteTodo(id: string): void {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function toggleTodo(id: string): void {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  }
  return (
    <div className="container flex flex-col justify-center">
      <h1 className="text-2xl font-bold">TodoList</h1>
      <AddTodo handler={addTodo} />
      <TodoList
        todos={getFilterTodos()}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
      <TodoFilter setFilter={setFilter} />
    </div>
  );
}

export default App;
