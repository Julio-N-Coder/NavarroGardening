import { createBrowserRouter, RouterProvider } from "react-router";
import { Container, createRoot } from "react-dom/client";
import "./main.css";
import Index from "./pages/Index";
import About from "./pages/about/about";
import Contact from "./pages/contact-me/Contact";
import Sent from "./pages/sent/Sent";
import container from "./container";
import NotFound from "./pages/not-found/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: container,
    children: [
      { index: true, Component: Index },
      { path: "/about", Component: About },
      { path: "/contact-me", Component: Contact },
      { path: "/sent", Component: Sent },
      { path: "*", Component: NotFound },
    ],
  },
]);

const root = document.getElementById("root") as Container;

createRoot(root).render(<RouterProvider router={router} />);
