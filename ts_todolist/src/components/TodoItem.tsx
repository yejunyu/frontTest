import Todo from "../types";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}
const TodoItem = ({ todo, toggleTodo, deleteTodo }: TodoItemProps) => {
  return (
    <li>
      <span
        className={`${
          todo.complete ? "line-through decoration-red-500" : ""
        } mr-6`}
      >
        {todo.text}
      </span>
      <button
        className="border-2 border-lime-500"
        onClick={() => toggleTodo(todo.id)}
      >
        Toggle
      </button>
      <button
        className="border-2 border-lime-500"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
