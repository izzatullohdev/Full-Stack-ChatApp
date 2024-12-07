import { useRef, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { showToast } from "../../utils/ErrorMessage";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [username, setUsername] = useState("");
  const [toast, setToast] = useState({ message: "", visible: false });
  const inputRef = useRef();
  const inputRef2 = useRef();
  function toggleShowPassword() {
    setShowPassword(!showPassword);
    inputRef.current.type = showPassword ? "password" : "text";
  }
  function toggleShowConfirmPassword() {
    setShowConfirmPassword(!showConfirmPassword);
    inputRef2.current.type = showConfirmPassword ? "password" : "text";
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (e.type !== "submit") return;
    if (emailValue === "" || passwordValue === "") {
      showToast(setToast, `Email va parolni kiriting `, 3000);
      return;
    }
    // checking password and confirm password
    if (passwordValue !== confirmPasswordValue) {
      showToast(setToast, `Parollar bir xil emas `, 3000);
      return;
    }
    // object with email and password
    const data = {
      email: emailValue,
      password: passwordValue,
    };
    console.log(data);
  }
  //
  return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <div>
        {toast.visible && (
          <div className="bg-red-500 text-white p-4 rounded absolute left-[50%] translate-x-[-50%] top-10">
            {toast.message} &#128517;
          </div>
        )}
      </div>
      <form
        onClick={handleSubmit}
        className="flex flex-col space-y-4 bg-gray-800 text-gray-800 p-5 w-[30vw] rounded"
      >
        <h1 className="text-2xl font-bold text-white text-center">Register</h1>
        {/* email  */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="p-2 rounded"
            placeholder="Email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>
        {/* username */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="username " className="text-white">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="p-2 rounded"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {/* password */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="password" className="text-white">
            Password
          </label>
          <div className="w-full relative">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              ref={inputRef}
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
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
        {/* confirm password */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="confirmPassword" className="text-white">
            Confirm Password
          </label>
          <div className="w-full relative">
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPasswordValue}
              ref={inputRef2}
              onChange={(e) => setConfirmPasswordValue(e.target.value)}
              className="p-2 rounded w-full"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-800"
              onClick={toggleShowConfirmPassword}
            >
              {showConfirmPassword ? <IoEyeOff /> : <IoEye />}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="bg-purple-800 text-white font-bold py-2 px-4 rounded"
        >
          Register
        </button>
        <p className="text-white text-center">
          {" Do you have an account? "}
          <a href="/register" className="text-purple-800">
            Login
          </a>
        </p>
        {/* open the google, github , facebook, linkedin login */}
        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            className="bg-gray-800 text-white  font-bold rounded"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/google-logo.png"
              alt=""
            />
          </button>
          <button
            type="submit"
            className="bg-gray-800 text-white font-bold  rounded"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png"
              alt=""
            />
          </button>
          <button>
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png"
              alt=""
            />
          </button>
          <button>
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png"
              alt=""
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
