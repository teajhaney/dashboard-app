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

//data table

export interface Staff {
  id: number;
  name: string;
  position: string;
  office: string;
  age: number;
  startDate: string;
  salary: number;
  active: boolean;
}

export const Alltaffs: Staff[] = [
  {
    id: 1,
    name: "Alice Johnson",
    position: "Manager",
    office: "New York",
    age: 35,
    startDate: "2015-06-12",
    salary: 75000,
    active: true,
  },
  {
    id: 2,
    name: "Bob Smith",
    position: "Software Engineer",
    office: "San Francisco",
    age: 28,
    startDate: "2018-09-25",
    salary: 95000,
    active: true,
  },
  {
    id: 3,
    name: "Charlie Brown",
    position: "Product Designer",
    office: "Los Angeles",
    age: 31,
    startDate: "2017-04-18",
    salary: 87000,
    active: false,
  },
  {
    id: 4,
    name: "David Wilson",
    position: "Data Analyst",
    office: "Chicago",
    age: 29,
    startDate: "2020-11-10",
    salary: 72000,
    active: true,
  },
  {
    id: 5,
    name: "Emma Davis",
    position: "HR Specialist",
    office: "Boston",
    age: 42,
    startDate: "2012-03-05",
    salary: 68000,
    active: false,
  },
  {
    id: 6,
    name: "Frank Martin",
    position: "Marketing Lead",
    office: "Seattle",
    age: 38,
    startDate: "2014-07-22",
    salary: 81000,
    active: true,
  },
  {
    id: 7,
    name: "Grace Lee",
    position: "DevOps Engineer",
    office: "Austin",
    age: 33,
    startDate: "2016-10-15",
    salary: 98000,
    active: true,
  },
  {
    id: 8,
    name: "Henry Clark",
    position: "Sales Executive",
    office: "Denver",
    age: 40,
    startDate: "2013-12-30",
    salary: 72000,
    active: false,
  },
  {
    id: 9,
    name: "Ivy Walker",
    position: "UX Researcher",
    office: "San Diego",
    age: 27,
    startDate: "2021-08-08",
    salary: 77000,
    active: true,
  },
  {
    id: 10,
    name: "Jack Robinson",
    position: "Finance Analyst",
    office: "Dallas",
    age: 36,
    startDate: "2015-02-14",
    salary: 89000,
    active: false,
  },
];
