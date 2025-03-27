import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import { DashboardProvider } from "./provider/DasboardProvider.tsx";
import {
  NotFoundPage,
  Ecommerce,
  BasicTable,
  DataTable,
  LineChart,
  BarChart,
  PieChart,
} from "./pages/export_pages.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Ecommerce />, errorElement: <NotFoundPage /> },

      {
        path: "/basic-table",
        element: <BasicTable />,
      },
      {
        path: "/data-table",
        element: <DataTable />,
      },
      {
        path: "/line-chart",
        element: <LineChart />,
      },

      {
        path: "/bar-chart",
        element: <BarChart />,
      },
      {
        path: "/pie-chart",
        element: <PieChart />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DashboardProvider>
      <RouterProvider router={router} />
    </DashboardProvider>
  </StrictMode>
);
