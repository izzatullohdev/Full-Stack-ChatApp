import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterLayout from "./Layout/RouterLayout";
import Login from "./Components/auth/Login";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        {
          index: true,
          element: <Login />,
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
