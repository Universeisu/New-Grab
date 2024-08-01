import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Restaurant from "./component/Restaurant";
import "./App.css";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    // Fetch restaurants from an API or a static file
    fetch("http://localhost:3000/restaurant")
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data);
        setFilteredRestaurants(data);
      })
      .catch((error) => console.error("Error fetching restaurants:", error));
  }, []);

  return (
    <div className="container mx-auto">
      <Header />
      <Search
        restaurants={restaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <Restaurant restaurants={filteredRestaurants} />
    </div>
  );
}

export default App;
