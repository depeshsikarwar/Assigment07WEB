import React from 'react';
import { Link } from 'react-router';
import BikeCard from './BikeCard.jsx';

function BikeList({ products, onRent, onReturn }) {

 

  if (products.length == 0) {
    return (
      <div className="no-products">
        <h3>No Bikes Found</h3>
      </div>
    );
  }

  return (
    <div className="product-container">
      <div className="product-grid">
        {products.map((bike) => {
          return (
            <div key={bike.id}>
              <BikeCard bike={bike} onRent={onRent} onReturn={onReturn} />
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

export default BikeList;
