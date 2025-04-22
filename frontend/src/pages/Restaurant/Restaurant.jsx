import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Restaurant.css";
import RestaurantCard from "./RestaurantCard";
import { restaurantData } from "../../data/data";

import AppDownload from "../../components/AppDownload/AppDownload";

const Restaurant = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRestaurants = restaurantData.filter((restaurant) =>
    restaurant.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="restaurant-container">
      <div className="header1">
        <h2>Find Your Favorite Restaurant</h2>
        <p>Explore top-rated restaurants in your city</p>
      </div>

      {/*Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter city name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.id}`} 
              key={restaurant.id} 
              className="restaurant-link"
            >
              <RestaurantCard restaurant={restaurant} />
            </Link>
          ))
        ) : (
          <p className="no-results">No restaurants found in "{searchTerm}" 😞</p>
        )}
      </div>
      <AppDownload />
    </div>
  );
};

export default Restaurant;
