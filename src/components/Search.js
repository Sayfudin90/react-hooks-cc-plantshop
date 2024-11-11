// Search.js
import React from "react";

function Search({ searchQuery, setSearchQuery }) {
  const handleChange = (event) => {
    setSearchQuery(event.target.value); // Update search query on input change
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        id="search"
        type="text"
        placeholder="Type a name to search..."
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
