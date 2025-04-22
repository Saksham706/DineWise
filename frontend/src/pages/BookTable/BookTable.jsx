import React, { useState, useContext } from "react";
import axios from "axios";
import './BookTable.css';
import { toast } from 'react-toastify';
import { StoreContext } from "../../context/StoreContext";

const BookTable = ({ handleClose }) => {
  const { url, token } = useContext(StoreContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    phone: "",
    date: "",
    time: "",
    requests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error("Please login to book a table.");
      return;
    }
    
    try {
      const res = await axios.post(
        `${url}/api/tables/createtable`,
        {
          name: formData.name,
          email:formData.email,
          phone: formData.phone,
          date: formData.date,
          time: formData.time,
          request: formData.requests,
        },
        {
          headers: {
            token: token, 
          },
        }
      );
      toast.success("Table booked successfully!");
      handleClose();
    } catch (error) {
      console.error("Booking failed:", error.response?.data || error.message);
      toast.error("Failed to book table. Please try again.");
    }
  };

  return (
    <div className="book-table-container">
      <form className="book-table-form">
        <button type="button" className="close-btn" onClick={handleClose}>✖</button>
        <h2>Book a Table</h2>

        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />

        <div className="input-row">
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
        </div>

        <div className="input-row">
          <input type="date" name="date" onChange={handleChange} required />
          <input type="time" name="time" onChange={handleChange} required />
        </div>

        <input type="number" name="people" placeholder="Number of People" min="1" onChange={handleChange} />

        <textarea name="requests" placeholder="Special Requests (optional)" rows="3" onChange={handleChange}></textarea>

        <button onClick={handleSubmit} type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookTable;
