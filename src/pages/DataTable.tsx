import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { LiaTrashAlt } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import { AllStaffs, Staff } from "../Data/dummyData";
import { StaffEditModal } from "../components/export_components";
import { IoIosArrowForward } from "react-icons/io";
const DataTable = () => {
  const [staffs, setStaffs] = useState<Staff[]>(AllStaffs);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [editingStaff, setEditingStaff] = useState<Staff | null>(null); // Track staff being edited

  // Delete customer
  const handleDelete = (id: number) => {
    setStaffs(staffs.filter((staff) => staff.id !== id));
  };

  // Edit customer (placeholder)
  const handleEdit = (staff: Staff) => {
    setEditingStaff(staff);
  };
  //save edited staff
  const handleSave = (updatedStaff: Staff) => {
    setStaffs(
      staffs.map((staff) =>
        staff.id === updatedStaff.id ? updatedStaff : staff
      )
    );
    setEditingStaff(null);
  };

  //close modal without saving
  const handleClose = () => {
    setEditingStaff(null);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(handler);
  }, [search]);

  //number of row
  const rowsPerPage = 10;

  // State to track the current page
  const [currentPage, setCurrentPage] = useState(0);
  //filter customer
  const filteredStaffs: Staff[] = staffs.filter(
    (customer) =>
      customer.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      customer.position.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      customer.office.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      customer.startDate
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase()) ||
      customer.age === Number(debouncedSearch) ||
      customer.salary === Number(debouncedSearch)
  );

  // Calculate total number of pages based on filtered products
  const totalPages = Math.ceil(filteredStaffs.length / rowsPerPage);

  // Determine products to display
  const startIndex = currentPage * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedStaff = filteredStaffs.slice(startIndex, endIndex);

  const tHeadStyles: string =
    "px-6 py-3 text-left text-sm font-bold text-textColor";
  const tBodyStyles: string = "px-6 py-4 text-[16px] text-gray";
  return (
    <div className="min-h-screen flex flex-col p-5 gap-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-textColor text-xl">Data Table</h1>
        <h1 className="text-gray/50 text-sm">
          Table \
          <NavLink
            to={"/data-table"}
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-textColor"
            }>
            {" "}
            data table
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
      <div className="overflow-y-auto bg-bgColor rounded-lg py-5  ">
      
        {displayedStaff.length === 0 ? (
          <div className="flex justify-center">
            {" "}
            <h1 className="text-center text-primary">No data available</h1>
          </div>
        ) : (
          <table className="lg:w-full ">
            {/* table head */}
            <thead>
              <tr className="border-b border-gray-300 hover:bg-gray-100 transition-all">
                <th className={tHeadStyles}>Name</th>
                <th className={tHeadStyles}>Position</th>
                <th className={tHeadStyles}>Office</th>
                <th className={tHeadStyles}>Age</th>
                <th className={tHeadStyles}>Start date</th>
                <th className={tHeadStyles}>Salary</th>
                <th className={tHeadStyles}>Action</th>
              </tr>
            </thead>
            {/* table body */}
            <tbody>
              {displayedStaff.map((staff) => (
                <tr
                  key={staff.id}
                  className="border-b border-gray-300 hover:bg-gray-100 transition-all odd:bg-gray-100">
                  <td className={tBodyStyles}>{staff.name}</td>
                  <td
                    className={`${tBodyStyles}  ${
                      staff.active === true ? "text-green" : "text-gray/50"
                    }`}>
                    {staff.position}
                  </td>
                  <td className={tBodyStyles}>{staff.office}</td>

                  <td className={tBodyStyles}>{staff.age}</td>
                  <td className={tBodyStyles}>{staff.startDate}</td>
                  <td className={tBodyStyles}>${staff.salary}</td>
                  <td className={`${tBodyStyles} flex gap-5 cursor-pointer`}>
                    <div className="bg-blue-100 p-2 rounded cursor-pointer">
                      {" "}
                      <CiEdit
                        onClick={() => handleEdit(staff)}
                        className="text-lightBlue text-sm hover:text-darkBlue "
                      />
                    </div>
                    <div className="bg-red-100 p-2 rounded cursor-pointer">
                      <LiaTrashAlt
                        onClick={() => handleDelete(staff.id)}
                        className="text-lightRed text-sm hover:text-darkRed"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {/* Pagination Buttons */}
        <div className="flex  justify-center gap-4 mt-4">
          {/* Generate buttons dynamically based on total pages */}
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`px-4 py-2 rounded-lg font-semibold ${
                currentPage === index
                  ? "bg-primary text-white cursor-not-allowed"
                  : "text-secondary hover:bg-accents"
              }`}>
              {index + 1}
            </button>
          ))}

          {/* Next Button */}
          {displayedStaff.length > 0 && (
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
              }
              className={`px-4 py-2 rounded-lg font-semibold border border-accents ${
                currentPage >= totalPages - 1
                  ? "bg-accents cursor-not-allowed"
                  : "text-secondary hover:bg-accents"
              }`}
              disabled={currentPage >= rowsPerPage - 1}>
              <IoIosArrowForward />
            </button>
          )}
        </div>
      </div>
      {/* Edit Modal */}
      {editingStaff && (
        <StaffEditModal
          staff={editingStaff}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default DataTable;
