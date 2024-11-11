// PlantList.js
import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, toggleStockStatus }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          toggleStockStatus={toggleStockStatus}
        />
      ))}
    </ul>
  );
}

export default PlantList;
