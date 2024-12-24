import React, { useState } from "react";
import axios from "axios";

const VendorDashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    quantity: "",
    price: "",
    imageUrl: "",
    category: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/pickle",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setMessage(`Pickle "${response.name}" added successfully!`);
      setFormData({
        name: "",
        description: "",
        price: "",
        imageUrl: "",
        quantity: "",
      }); // Reset form
    } catch (error) {
      console.error(error);
      setMessage("Failed to add pickle. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          >
            <option value="">Select a Category</option>
            <option value="Pickle">Pickle</option>
            <option value="Spice Powder">Spice Powder</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Pickle Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Quantity (gm)</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Price (Rs)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Image Url</label>
          <input
            name="imageUrl"
            type="text"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Pickle
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default VendorDashboard;
