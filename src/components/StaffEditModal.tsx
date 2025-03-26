import { useState } from "react";
import { Staff } from "../Data/dummyData";

// Edit Modal Component
interface StaffEditModalProps {
  staff: Staff;
  onSave: (updatedCustomer: Staff) => void;
  onClose: () => void;
}

const StaffEditModal = ({ staff, onSave, onClose }: StaffEditModalProps) => {
  const [formData, setFormData] = useState<Staff>({ ...staff });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "age" || name === "salary" ? Number(value) : value,
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
              Position
            </label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full p-2 border border-gray rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Office
            </label>
            <input
              type="text"
              name="office"
              value={formData.office}
              onChange={handleChange}
              className="w-full p-2 border border-gray rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-2 border border-gray rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Start date
            </label>
            <input
              type="text"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Salary
            </label>
            <input
              type="number"
              step="0.01"
              name="salary"
              value={formData.salary}
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

export default StaffEditModal;
