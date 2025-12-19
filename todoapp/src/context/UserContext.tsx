import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface UserData {
  title: string;
  message: string;
}

interface Todo extends UserData {
  _id: string;
}

interface UserContextType {
  createUser: (data: UserData) => Promise<void>;
  fetchTodos: () => Promise<void>;
  todos: Todo[];
  loading: boolean;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);

  // ✅ Create Todo
  const createUser = async (data: UserData) => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:200/api/todos/addingTodo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message);
        return;
      }

      fetchTodos(); // auto refresh list after create
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Fetch All Todos
  const fetchTodos = async () => {
    try {
      const res = await fetch("http://localhost:200/api/todos/allTodos");
      const result = await res.json();
      setTodos(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <UserContext.Provider
      value={{ createUser, fetchTodos, todos, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used inside UserProvider");
  }
  return context;
};
