import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1>H27TECH</h1>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
