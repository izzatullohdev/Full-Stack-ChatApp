import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterLayout from "./Layout/RouterLayout";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
