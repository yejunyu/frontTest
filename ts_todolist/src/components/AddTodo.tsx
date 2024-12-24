import { useState } from "react";

interface AddTodoProps {
  handler: (text: string) => void;
}

const AddTodo = ({ handler }: AddTodoProps) => {
  const [text, setText] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (text.trim()) {
      handler(text);
      setText("");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add Todo"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
