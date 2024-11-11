import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // Fetch plant data from the backend and update the state
    fetch("http://localhost:6001/plants")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Add this to log the fetched data
        setPlants(data);
      })
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);
  

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} setPlants={setPlants} />
    </div>
  );
}

export default App;
