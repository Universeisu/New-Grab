import React from "react";
import { useState, useEffect } from "react";

const Search = ({ restaurants, setFilteredRestaurants }) => {
  const [keyword, setKeyword] = useState("");

  const handleChange = async (e) => {
    setKeyword(e.target.value);
    if (e.target.value === "") {
      setFilteredRestaurants(restaurants);
      return;
    }
    const result = restaurants.filter((restaurant) => {
      return (
        restaurant.title.toLowerCase().includes(keyword.toLowerCase()) ||
        restaurant.description.toLowerCase().includes(keyword.toLowerCase())
      );
    });
    console.log(result);
    setFilteredRestaurants(result);
  };
};



export default Search;
