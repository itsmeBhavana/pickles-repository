import React, { useState } from "react";
import axios from "axios";
import "./VendorDashboard.css";
import { useNavigate } from "react-router-dom";

const VendorDashboard = () => {
  const navigate = useNavigate();
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

  const handleLogout = () => {
    // Optionally make an API call to the backend to clear cookies
    navigate("/login"); // Redirect to login page
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
    <div className="dashboard-container">
      <div>
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
      <form onSubmit={handleSubmit} className="dashboard-form">
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="form-group">
          <label>Quantity (gm)</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="form-group">
          <label>Price (Rs)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="form-group">
          <label>Image Url</label>
          <input
            name="imageUrl"
            type="text"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Add Pickle
        </button>
      </form>
      {message && <p className="submit-message">{message}</p>}
    </div>
  );
};

export default VendorDashboard;
