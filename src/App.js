import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Homepage from "./pages/Homepage";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Main from "./components/Main/Main";

import { useRef } from "react";
import { RefsProvider } from "./RefsContext";
const App = () => {
  const productSection = useRef();
  const aboutSection = useRef();
  const blogSection = useRef();
  const contactSection = useRef();

  const refs = { productSection, aboutSection, blogSection, contactSection };

  return (
    <RefsProvider refs={refs}>
      <div>
        <Homepage />
      </div>
    </RefsProvider>
  );
};

const appRouter = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/products",
        element: <Main />,
      },
      {
        path: "/aboutus",
        element: <Main />,
      },
      {
        path: "/blog",
        element: <Main />,
      },
      {
        path: "/contactus",
        element: <Main />,
      },
      { path: "/:Category", element: <ProductList /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
