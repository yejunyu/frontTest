interface SetFilterProps {
  setFilter: (filter: string) => void;
}

const TodoFilter = ({ setFilter }: SetFilterProps) => {
  return (
    <div className="flex gap-3">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
    </div>
  );
};

export default TodoFilter;
