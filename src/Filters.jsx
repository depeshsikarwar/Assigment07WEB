import React from 'react';

function Filters({ category, setCategory }) {

  function handleChange(e){
    setCategory(e.target.value);
  }

  return (
    <div className="filters">
      <select value={category} onChange={handleChange}>
        <option value="all">All Types</option>
        <option value="Scooter">Scooter</option>
        <option value="Bike">Bike</option>
        <option value="Electric">Electric</option>
      </select>
    </div>
  );
}

export default Filters;
