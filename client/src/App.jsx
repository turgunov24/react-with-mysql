// imports
import Layout from "../src/layout";
import IndexPage from "../src/pages/index";
import ViewPage from "../src/pages/view";
import CreatePage from "../src/pages/create";
import UpdatePage from "../src/pages/update";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <IndexPage />,
        },
        {
          path: "/create",
          element: <CreatePage />,
        },
        {
          path: "/view/:id",
          element: <ViewPage />,
        },
        {
          path: "/update/:id",
          element: <UpdatePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
