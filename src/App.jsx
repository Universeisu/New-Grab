import React from 'react';
import Header from './component/Header';
import Search from './component/Search';
import Restaurant from './component/Restaurant';
import { useEffect, useState } from "react";
function App() {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurant] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/restaurant")
        .then((res) => res.json())
        .then((response) => {
          setRestaurants(response);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, []);
  return (
    <div>
      <Header />
      <Search 
       restaurants={restaurants}
       setFilteredRestaurant={setFilteredRestaurant}
      />
      <Restaurant restaurants={filteredRestaurants}/>
    </div>
  );
}

export default App;
