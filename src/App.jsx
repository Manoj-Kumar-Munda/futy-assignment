import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Live from "./pages/Home/Live";
import Completed from "./pages/Home/Completed";
import Upcoming from "./pages/Home/Upcoming";
import SearchResult from "./pages/Home/SearchResult";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "live",
          element: <Live />,
        },
        {
          path: "completed",
          element: <Completed />,
        },
        {
          path: "search",
          element: <SearchResult />,
        },
        {
          path: "",
          element: <Upcoming />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
