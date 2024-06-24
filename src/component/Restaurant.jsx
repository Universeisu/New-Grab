import React from "react";
import Card from "./Card";
import { useEffect,useState } from "react";

const restaurantData = 

function Restaurant() {
  return (
    <div className="flex flex-wrap justify-center">
      {restaurantData.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
}

export default Restaurant;
