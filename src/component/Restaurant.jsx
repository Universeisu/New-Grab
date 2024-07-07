import React, { useEffect, useState } from "react";
import Card from "./Card";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);

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
    <div className="flex">
      <div className="flex flex-wrap justify-center gap-4">
        {restaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            img={restaurant.img}
            title={restaurant.title}
            description={restaurant.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
