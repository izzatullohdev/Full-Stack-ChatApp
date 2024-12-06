import { useRef, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef();
  function toggleShowPassword() {
    setShowPassword(!showPassword);
    inputRef.current.type = showPassword ? "password" : "text";
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <form
        onClick={handleSubmit}
        className="flex flex-col space-y-4 bg-gray-800 text-gray-800 p-5 w-[30vw] rounded"
      >
        <h1 className="text-2xl font-bold text-white text-center">Login</h1>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input type="email" name="email" id="email" className="p-2 rounded" />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="password" className="text-white">
            Password
          </label>
          <div className="w-full relative">
            <input
              type="password"
              name="password"
              id="password"
              ref={inputRef}
              className="p-2 rounded w-full"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-800"
              onClick={toggleShowPassword}
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="bg-purple-800 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
