import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';

import bikesData from './bikes.js';
import Filters from './Filters.jsx';
import BikeList from './BikeList.jsx';
import BikeDetail from './BikeDetail.jsx';
import RentedBikes from './RentedBikes.jsx';

function App() {
  const [bikes, setBikes] = useState(bikesData);
  const [category, setCategory] = useState('all');


  const result = bikes.filter((bike) => {
    if(category === 'all'){
      return true;
    }
    return bike.type.toLowerCase() === category.toLowerCase();
  });


  function handleRent(id) {
    let updated = bikes.map((bike) => {
      if (bike.id === id) {
        return { ...bike, isRented: true };
      }
      return bike;
    });
    setBikes(updated);
  }


  function handleReturn(id) {
    let updated = bikes.map((bike) => {
      if (bike.id === id) {
        return { ...bike, isRented: false };
      }
      return bike;
    });
    setBikes(updated);
  }


  let totalBikes = bikes.length;
  let availableBikes = bikes.filter((bike) => bike.isAvailable == true && bike.isRented == false).length;
  let rentedBikes = bikes.filter((bike) => bike.isRented == true).length;

  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2>Bike Rental Hub</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/bikes">Bikes</Link>
          <Link to="/rented">Rented</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={
          <div className="home-hero">
            <h1>Welcome to Bike Rental Hub</h1>
            <div className="stats">
              <div className="stat-card">
                <h3>Total Bikes</h3>
                <p>{totalBikes}</p>
              </div>
              <div className="stat-card">
                <h3>Available Bikes</h3>
                <p>{availableBikes}</p>
              </div>
              <div className="stat-card">
                <h3>Rented Bikes</h3>
                <p>{rentedBikes}</p>
              </div>
            </div>
            <Link to="/bikes">
              <button className="view-detail-btn">View All Bikes</button>
            </Link>
          </div>
        } />

        <Route path="/bikes" element={
          <div>
            <Filters category={category} setCategory={setCategory} />
            <BikeList products={result} onRent={handleRent} onReturn={handleReturn} />
          </div>
        } />

        <Route path="/bikes/:id" element={
          <BikeDetail bikes={bikes} onRent={handleRent} onReturn={handleReturn} />
        } />

        <Route path="/rented" element={
          <RentedBikes products={bikes} onReturn={handleReturn} />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
