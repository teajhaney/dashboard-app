import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { LiaTrashAlt } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import { allCustomers, Customer } from "../Data/dummyData";
import { CustomerEditModal } from "../components/export_components";
// import { IoIosAddCircleOutline } from "react-icons/io";

const BasicTable = () => {
  const [customers, setCustomers] = useState<Customer[]>(allCustomers);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null); // Track customer being edited

  // Delete customer
  const handleDelete = (id: number) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };
  // Open edit modal
  const handleEdit = (customer: Customer) => {
    setEditingCustomer(customer);
  };

  // Save edited customer
  //   const handleSave = (updatedCustomer: Customer) => {
  //     setCustomers(
  //       customers.map((customer) =>
  //         customer.id === updatedCustomer.id ? updatedCustomer : customer
  //       )
  //     );
  //     setEditingCustomer(null); // Close modal

  //   };
  const handleSave = (updatedCustomer: Customer) => {
    setCustomers(
      customers.map((customer) =>
        customer.id === updatedCustomer.id ? updatedCustomer : customer
      )
    );
    setEditingCustomer(null);
  };

  // Close modal without saving
  const handleClose = () => {
    setEditingCustomer(null);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(handler);
  }, [search]);

  //filter customer
  const filteredCustomers: Customer[] = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      customer.email.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      customer.status.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      customer.orders === Number(debouncedSearch) ||
      customer.spent === Number(debouncedSearch)
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
            className="h-8 w-52 rounded border border-gray  focus:outline-primary text-sm px-2"
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
                    onClick={() => handleEdit(customer)}
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
      {/* Edit Modal */}
      {editingCustomer && (
        <CustomerEditModal
          customer={editingCustomer}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default BasicTable;
