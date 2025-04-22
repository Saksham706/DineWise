import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { restaurantData } from "../../data/data";
import "./RestaurantDetail.css";
import BookTable from "../BookTable/BookTable";

const RestaurantDetail = () => {
  const { id } = useParams();
  const restaurant = restaurantData.find((rest) => rest.id.toString() === id);
  const [currentImage, setCurrentImage] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  if (!restaurant) {
    return <h2>Restaurant not found</h2>;
  }

  return (
    <div className="restaurant-detail-container">
      {/* Popup for Booking Table */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <BookTable handleClose={()=> setShowPopup(false)} />
          </div>
        </div>
      )}

      {/* Restaurant Details model */}
      <div className="restaurant-content">
        <div className="image-gallery">
          <img
            src={restaurant.images[currentImage]}
            alt="Restaurant View"
            className="main-image"
          />
          <div className="thumbnail-container">
            {restaurant.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Thumbnail"
                className={`thumbnail ${index === currentImage ? "active" : ""}`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>

        <div className="restaurant-info">
          <h1>{restaurant.name}</h1>
          <p><strong>Address:</strong> {restaurant.address}</p>
          <div className="about-section">
            <h2>About</h2>
            <p>{restaurant.description}</p>
          </div>
          <div className="reviews">
            <h2>Customer Reviews</h2>
            {restaurant.reviews.length > 0 ? (
              restaurant.reviews.map((review, index) => (
                <div key={index} className="review">
                  <p><strong>{review.user}:</strong> {review.comment}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
          <div className="buttons">
            <button className="book-table" onClick={() => setShowPopup(true)}>
              Book Table
            </button>
            <Link to="/home" className="view-menu">
              View Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
