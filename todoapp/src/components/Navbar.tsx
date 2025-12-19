import React , {useState} from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isActive , setIsActive] = useState()
  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="text-white font-bold text-xl">TodoApp</div>

          {/* Links */}
          <div className="flex space-x-4">
            <Link
              to="/create"
              className={isActive ? "bg-blue-800 text-white px-3 py-2 rounded-md font-medium"
                  : "text-white hover:bg-blue-500 px-3 py-2 rounded-md font-medium"
              }
            >
              Create Todo
            </Link>

            <Link
              to="/all-todos"
              className={isActive ? "bg-blue-800 text-white px-3 py-2 rounded-md font-medium"
                  : "text-white hover:bg-blue-500 px-3 py-2 rounded-md font-medium"
              }
            >
              All Todos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
