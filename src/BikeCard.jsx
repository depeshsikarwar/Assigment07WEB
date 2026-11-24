import React from 'react';

function BikeCard({ bike, onRent, onReturn }) {


  let engineDisplay;
  if(bike.engineCC == 0){
    engineDisplay = "Electric ⚡";
  } else {
    engineDisplay = bike.engineCC + " cc";
  }

  return (
    <div className="product-card" key={bike.id}>
      <div className="product-content">
        <h2>{bike.name}</h2>
        <span>{bike.brand}</span>
        <p className="department">{bike.type}</p>
        <p>₹{bike.pricePerHour}/hr</p>
        <p>{bike.location}</p>
        <p>{engineDisplay}</p>

        {bike.isAvailable ? (
          <span className="badge available">Available</span>
        ) : (
          <span className="badge maintenance">Under Maintenance</span>
        )}

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

export default BikeCard;
