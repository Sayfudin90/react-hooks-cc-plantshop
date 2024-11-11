// PlantCard.js
import React from "react";

function PlantCard({ plant, toggleStockStatus }) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price.toFixed(2)}</p>
      <button className={plant.soldOut ? "out-of-stock" : "in-stock"} onClick={() => toggleStockStatus(plant.id)}>
        {plant.soldOut ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
