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
    setFormData({
        title:'',
        message: ''
    })
  };

  return (
    <form 
  onSubmit={handleSubmit} 
  className="max-w-md mx-auto mt-10 border bg-white shadow-lg rounded-lg p-6 space-y-4"
>
  <h2 className="text-2xl font-semibold text-gray-800 text-center">Create Todo</h2>

  <input
    name="title"
    placeholder="Title"
    value={formData.title}
    onChange={handleChange}
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  />

  <input
    name="message"
    placeholder="Message"
    value={formData.message}
    onChange={handleChange}
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  />

  <button
    type="submit"
    disabled={loading}
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {loading ? "Saving..." : "Create Todo"}
  </button>
</form>

  );
};

export default UserForm;
