import React from "react";
import "./Restaurant.css";
const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <img src={restaurant.img} alt={restaurant.name} className="restaurant-img" />
      <div className="restaurant-details">
        <h3>{restaurant.name}</h3>
        <p>{restaurant.description}</p>
        <p><strong>Rating:</strong> ⭐ {restaurant.rating}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
