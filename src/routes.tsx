import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);
