import { useState } from "react";
import { useUser } from "../context/UserContext";

const UserForm = () => {
  const { createUser, loading } = useUser();

  const [formData, setFormData] = useState({
    title: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createUser(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="title" onChange={handleChange} />
      <input name="message" placeholder="message" onChange={handleChange} />

      <button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Create User"}
      </button>
    </form>
  );
};

export default UserForm;
