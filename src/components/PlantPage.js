// PlantPage.js
import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter plants based on the search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase()) // Case insensitive search
  );

  const handleNewPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  const toggleStockStatus = (id) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === id ? { ...plant, soldOut: !plant.soldOut } : plant
      )
    );
  };

  return (
    <main>
      <NewPlantForm onSubmit={handleNewPlant} />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PlantList plants={filteredPlants} toggleStockStatus={toggleStockStatus} />
    </main>
  );
}

export default PlantPage;
