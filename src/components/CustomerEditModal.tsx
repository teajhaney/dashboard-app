import { useState } from "react";
import { Customer } from "../Data/dummyData";

// Edit Modal Component
interface CustomerEditModalProps {
  customer: Customer;
  onSave: (updatedCustomer: Customer) => void;
  onClose: () => void;
}

const CustomerEditModal = ({
  customer,
  onSave,
  onClose,
}: CustomerEditModalProps) => {
  const [formData, setFormData] = useState<Customer>({ ...customer });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "order" || name === "spent" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-primary/30 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Edit Customer</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border border-gray rounded-md">
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Order
            </label>
            <input
              type="number"
              step="1"
              name="orders"
              value={formData.orders}
              onChange={handleChange}
              className="w-full p-2 border border-gray rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Spent
            </label>
            <input
              type="number"
              step="0.01"
              name="spent"
              value={formData.spent}
              onChange={handleChange}
              className="w-full p-2 border border-gray rounded-md"
            />
          </div>
          <div className="flex space-x-2">
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-md ">
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray/50 rounded-md ">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerEditModal;
