import React, { useEffect, useState } from 'react';
import './BookTable.css'; 
import axios from 'axios';
import { toast } from 'react-toastify';

const BookTable = ({ url }) => {
  const [tables, setTables] = useState([]);

  const fetchAllBookings = async () => {
    try {
      const response = await axios.get(`${url}/api/tables/getall`);
      setTables(response.data);
    } catch (error) {
      toast.error("Failed to fetch table bookings");
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchAllBookings();
  }, []);

  return (
    <div className="order add">
      <h3>Table Bookings</h3>
      <div className="order-list">
        {tables.map((table, index) => (
          <div key={index} className="order-item">
            <div>
              <p><strong>Name:</strong> {table.name}</p>
              <p><strong>Email:</strong> {table.email}</p>
              <p><strong>Phone:</strong> {table.phone}</p>
              <p><strong>Date:</strong> {table.date}</p>
              <p><strong>Time:</strong> {table.time}</p>
              <p><strong>Special Request:</strong> {table.request || "None"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookTable;
