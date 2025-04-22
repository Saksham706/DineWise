import React, { useState, useEffect } from 'react';
import './Orders.css';
import { toast } from "react-toastify";
import axios from 'axios';
import { assets } from "../../assets/assets";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      toast.error("Failed to fetch orders");
      console.error("Fetch error:", error);
    }
  };

  const statusHandler = async (event,orderId) =>{
    const response = await axios.post(url+'/api/order/status',{
      orderId,
      status:event.target.value
    })
    if (response.data.success) {
      await fetchAllOrders();
      
    }
    
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="Parcel Icon" />
            <div>
              <p className="order-item-food">
                {order.items.map((item, itemIndex) =>
                  itemIndex === order.items.length - 1
                    ? `${item.name} x ${item.quantity}`
                    : `${item.name} x ${item.quantity}, `
                )}
              </p>
              <p className="order-item-name">{order.address.firstName+" "+ order.address.lastName}</p>
              <div className="order-item-address">
                <p>Special Request from Customer: {order.address.request}</p>
                <p>Date: {order.address.date}</p>
                <p>Time: {order.address.time}</p>
              </div>
              <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            <p>Items : {order.items.length}</p>
            <p>Rs{order.amount}</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} >
              <option value="Food Proccessing">Food Proccessing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
