import { createContext, useContext, useState } from "react";
import type {ReactNode} from 'react'

interface UserData {
  title: string;
  message: string;
}

interface UserContextType {
  createUser: (data: UserData) => Promise<void>;
  loading: boolean;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);

  const createUser = async (data: UserData) => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:200/api/todos/addingTodo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ createUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext)!;
};
