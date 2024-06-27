import React, { useEffect, useState } from "react";
import Card from "./Card";

const Restaurants = () => {


 
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
 
};

export default Restaurants;
