import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router";
import Home from "./Component/Home/Home.jsx";
import Header from "./Component/Header/Header";
import About from "./Component/About/About.jsx";
import Blog from "./Component/Blog/Blog.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import Banner from "./Component/Banner/Banner.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/header",
        element: <Header></Header>
      },
      {
        path: "/banner",
        element: <Banner></Banner>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>
);
