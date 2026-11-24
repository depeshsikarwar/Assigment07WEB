import React, { useState } from 'react';
import { useParams, Link } from 'react-router';

function BikeDetail({ bikes, onRent, onReturn }) {
  const { id } = useParams();
  const [hours, setHours] = useState(1);

  

  let bike = null;
  for(let i = 0; i < bikes.length; i++){
    if(bikes[i].id == id){
      bike = bikes[i];
      break;
    }
  }

  if (bike == null) {
    return (
      <div>
        <h2>Bike not found</h2>
        <Link to="/bikes"><button>Back to Bikes</button></Link>
      </div>
    );
  }

  let engineDisplay;
  if(bike.engineCC == 0){
    engineDisplay = "Electric ⚡";
  } else {
    engineDisplay = bike.engineCC + " cc";
  }

  let totalRent = bike.pricePerHour * hours;

  function decreaseHours() {
    if (hours > 1) {
      setHours(hours - 1);
    }
  }

  function increaseHours() {
    if (hours < 12) {
      setHours(hours + 1);
    }
  }

  return (
    <div className="employee-detail">
      <Link to="/bikes">
        <button>Back to Bikes</button>
      </Link>

      <div className="detail-card">
        <h2>{bike.name}</h2>
        <p><strong>Brand:</strong> {bike.brand}</p>
        <p><strong>Type:</strong> {bike.type}</p>
        <p><strong>Engine:</strong> {engineDisplay}</p>
        <p><strong>Price Per Hour:</strong> ₹{bike.pricePerHour}</p>
        <p><strong>Location:</strong> {bike.location}</p>

        {bike.isAvailable ? (
          <span className="badge available">Available</span>
        ) : (
          <span className="badge maintenance">Under Maintenance</span>
        )}

        <div className="hours-counter">
          <h3>Rental Hours</h3>
          <div className="counter-controls">
            <button onClick={decreaseHours}>−</button>
            <span>{hours}</span>
            <button onClick={increaseHours}>+</button>
          </div>
          <p className="total-rent"><strong>Total Rent:</strong> ₹{totalRent}</p>
        </div>

        <div className="card-actions">
          {!bike.isAvailable ? (
            <p className="maintenance-text">Under Maintenance</p>
          ) : bike.isRented ? (
            <button onClick={() => onReturn(bike.id)}>Return</button>
          ) : (
            <button onClick={() => onRent(bike.id)}>Rent</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default BikeDetail;
