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
//tables
export interface Customer {
  id: number;
  name: string;
  email: string;
  status: "Active" | "Inactive";
  orders: number;
  spent: number;
}

export const allCustomers: Customer[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
    orders: 12,
    spent: 250.75,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    status: "Inactive",
    orders: 8,
    spent: 180.5,
  },
  {
    id: 3,
    name: "Alice Brown",
    email: "alice@example.com",
    status: "Active",
    orders: 15,
    spent: 320.0,
  },
  {
    id: 4,
    name: "Bob Johnson",
    email: "bob@example.com",
    status: "Active",
    orders: 10,
    spent: 210.3,
  },
  {
    id: 5,
    name: "Emma Wilson",
    email: "emma@example.com",
    status: "Inactive",
    orders: 5,
    spent: 100.9,
  },
  {
    id: 6,
    name: "Liam Garcia",
    email: "liam@example.com",
    status: "Active",
    orders: 20,
    spent: 450.25,
  },
  {
    id: 7,
    name: "Olivia Martinez",
    email: "olivia@example.com",
    status: "Inactive",
    orders: 6,
    spent: 120.0,
  },
  {
    id: 8,
    name: "Sophia Taylor",
    email: "sophia@example.com",
    status: "Active",
    orders: 13,
    spent: 290.4,
  },
  {
    id: 9,
    name: "William Anderson",
    email: "william@example.com",
    status: "Inactive",
    orders: 7,
    spent: 150.6,
  },
  {
    id: 10,
    name: "James Thomas",
    email: "james@example.com",
    status: "Active",
    orders: 18,
    spent: 390.75,
  },
];
