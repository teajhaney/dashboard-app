import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import {
  ProjectPage,
  NotFoundPage,
  EcommercePage,
} from "./pages/export_pages.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <ProjectPage />, errorElement: <NotFoundPage /> },
      {
        path: "/Ecommerce-page",
        element: <EcommercePage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
