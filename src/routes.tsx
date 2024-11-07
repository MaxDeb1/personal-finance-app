import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./pages/(dashboard)/page";
import Transactions from "./pages/(dashboard)/transactions/page";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
    ],
  },
]);
