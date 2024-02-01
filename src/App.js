import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import ShowItem from "./components/ShowItem";

const App = () => {
  return (
    <div className="font-serif">
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/shows/:id",
        element: <ShowItem />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
