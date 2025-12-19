import { useUser } from "../context/UserContext";

const AllTodos = () => {
  const { todos } = useUser();

  return (
    <div className="p-6 grid gap-4 md:grid-cols-2">
      {todos.length === 0 && (
        <p className="text-gray-500">No todos found</p>
      )}

      {todos.map((todo) => (
        <div
          key={todo._id}
          className="border rounded-lg p-4 shadow-sm bg-white"
        >
          <h2 className="text-lg font-semibold">{todo.title}</h2>
          <p className="text-gray-600 mt-2">{todo.message}</p>
        </div>
      ))}
    </div>
  );
};

export default AllTodos;
