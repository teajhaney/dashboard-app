import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { LiaTrashAlt } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import { allCustomers, Customer } from "../Data/dummyData";

const BasicTable = () => {
  const [customers, setCustomers] = useState<Customer[]>(allCustomers);
  const [search, setSearch] = useState("");
  const [debaounedSearch, setDebaouncedSearch] = useState("");

  // Delete customer
  const handleDelete = (id: number) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  // Edit customer (placeholder)
  const handleEdit = (id: number) => {
    console.log(id);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebaouncedSearch(search);
    }, 500);
    return () => clearTimeout(handler);
  }, [search]);

  //filter customer
  const filteredCustomers: Customer[] = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(debaounedSearch.toLowerCase()) ||
      customer.email.toLowerCase().includes(debaounedSearch.toLowerCase()) ||
      customer.status.toLowerCase().includes(debaounedSearch.toLowerCase()) ||
      customer.orders === Number(debaounedSearch) ||
      customer.spent === Number(debaounedSearch)
  );

  const tHeadStyles: string =
    "px-6 py-3 text-left text-sm font-medium text-textColor";
  const tBodyStyles: string = "px-6 py-4 text-sm text-gray";
  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-textColor text-xl">Basic Table</h1>
        <h1 className="text-gray/50 text-sm">
          Table \
          <NavLink
            to={"/basic-table"}
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-textColor"
            }>
            {" "}
            Basic table
          </NavLink>
        </h1>

        <div className="flex items-center gap-2">
          <h1 className="text-primary">Search</h1>
          <input
            type="text"
            value={search}
            placeholder="search.."
            onChange={(e) => setSearch(e.target.value)}
            className="h-8 w-52 rounded border border-gray  focus:outline-primary text-sm my-2"
          />
        </div>
      </div>
      <div className="overflow-x-auto ">
        <table className="w-full bg-bgColor rounded-lg">
          {/* table head */}
          <thead>
            <tr className="border-b border-gray-300 hover:bg-gray-100 transition-all">
              <th className={tHeadStyles}>S/N</th>
              <th className={tHeadStyles}>Name</th>
              <th className={tHeadStyles}>Email</th>
              <th className={tHeadStyles}>Status</th>
              <th className={tHeadStyles}>Order</th>
              <th className={tHeadStyles}>Spent</th>
              <th className={tHeadStyles}>Action</th>
            </tr>
          </thead>
          {/* table body */}
          <tbody>
            {filteredCustomers.map((customer, index) => (
              <tr
                key={customer.id}
                className="border-b border-gray-300 hover:bg-gray-100 transition-all">
                <td className={tBodyStyles}>{index + 1}</td>
                <td className={tBodyStyles}>{customer.name}</td>
                <td className={tBodyStyles}>{customer.email}</td>
                <td
                  className={`${tBodyStyles}font-semibold ${
                    customer.status === "Active"
                      ? "text-green"
                      : "text-lightRed"
                  }`}>
                  {customer.status}
                </td>
                <td className={tBodyStyles}>{customer.orders}</td>
                <td className={tBodyStyles}>${customer.spent.toFixed(2)}</td>
                <td className={`${tBodyStyles} flex gap-5 cursor-pointer`}>
                  <CiEdit
                    onClick={() => handleEdit(customer.id)}
                    className="text-lightBlue hover:text-darkBlue"
                  />
                  <LiaTrashAlt
                    onClick={() => handleDelete(customer.id)}
                    className="text-lightRed hover:text-darkRed"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BasicTable;
