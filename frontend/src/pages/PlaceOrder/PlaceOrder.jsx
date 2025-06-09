import React, { useContext, useEffect, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url, userId } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    date: '',
    time: '',
    request: ''
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();

    // Prepare order items with quantity
    const orderItems = food_list
      .filter((item) => cartItems[item._id])
      .map((item) => ({
        ...item,
        quantity: cartItems[item._id],
      }));

    // Calculate total amount including tax
    const subtotal = getTotalCartAmount();
    const tax = Math.round(subtotal * 0.05);
    const totalAmount = subtotal + tax;

    const orderData = {
      userId: userId || token, // Adjust depending on where userId is stored
      address: data,
      items: orderItems,
      amount: totalAmount,
    };

    try {
      const response = await axios.post(url + '/api/order/place', orderData, { headers: { token } });

      if (response.data.success) {
        toast.success('Your order has been placed');
        // Navigate to verification page with orderId
        navigate(`/verify?success=true&orderId=${response.data.orderId}`);
      } else {
        toast.error('Failed to place order');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while placing your order');
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/cart');
    } else if (getTotalCartAmount() === 0) {
      navigate('/cart');
    }
  }, [token, getTotalCartAmount, navigate]);

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Your Information</p>
        <div className="multi-fields">
          <input
            required
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            placeholder="First Name"
          />
          <input
            required
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="multi-fields">
          <input
            required
            name="date"
            onChange={onChangeHandler}
            value={data.date}
            type="date"
            placeholder="Date"
          />
          <input
            required
            name="time"
            onChange={onChangeHandler}
            value={data.time}
            type="time"
            placeholder="Time"
          />
        </div>
        <input
          name="request"
          onChange={onChangeHandler}
          value={data.request}
          type="text"
          placeholder="Special Request (Optional)"
        />
        <input
          required
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          type="text"
          placeholder="Phone"
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Tax</p>
              <p>Rs.{getTotalCartAmount() === 0 ? 0 : Math.round(getTotalCartAmount() * 0.05)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                Rs.
                {getTotalCartAmount() === 0
                  ? 0
                  : getTotalCartAmount() + Math.round(getTotalCartAmount() * 0.05)}
              </b>
            </div>
            <hr />
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
