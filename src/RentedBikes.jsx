import React from 'react';
import { Link } from 'react-router';
import BikeCard from './BikeCard.jsx';

function RentedBikes({ products, onReturn }) {

  

  let rentedBikes = [];
  for(let i = 0; i < products.length; i++){
    if(products[i].isRented == true){
      rentedBikes.push(products[i]);
    }
  }

  if (rentedBikes.length == 0) {
    return (
      <div className="no-products">
        <h3>No bikes rented</h3>
      </div>
    );
  }

  

  let totalPricePerHour = 0;
  for(let i = 0; i < rentedBikes.length; i++){
    totalPricePerHour = totalPricePerHour + rentedBikes[i].pricePerHour;
  }

  return (
    <div className="product-container">
      <h2>Rented Bikes</h2>
      <p className="total-info">Total Price Per Hour: ₹{totalPricePerHour}</p>
      <div className="product-grid">
        {rentedBikes.map((bike) => {
          return (
            <div key={bike.id}>
              <BikeCard bike={bike} onRent={() => {}} onReturn={onReturn} />
              <Link to={"/bikes/" + bike.id}>
                <button className="view-detail-btn">View Details</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RentedBikes;
