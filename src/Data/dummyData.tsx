import { RiHome9Line } from "react-icons/ri";
import { FiTable } from "react-icons/fi";
export const dashboardHeaders = [
  {
    title: "Dashboard",
    icon: <RiHome9Line />,
    links: [
      {
        name: "Project",
        path: "/",
      },
      {
        name: "Ecommerce",
        path: "/Ecommerce",
      },
    ],
  },
  {
    title: "Table",
    icon: <FiTable />,
    links: [
      {
        name: "Basic Table",
        path: "/basic-table",
      },
      {
        name: "Data Table",
        path: "/data-table",
      },
    ],
  },
  {
    title: "Chart",
    icon: <FiTable />,
    links: [
      {
        name: "Line chart",
        path: "/line-chart",
      },
      {
        name: "Area chart",
        path: "/area-chart",
      },
      {
        name: "Bar chart",
        path: "/bar-chart",
      },
      {
        name: "Pie chart",
        path: "/pie-chart",
      },
    ],
  },
];
