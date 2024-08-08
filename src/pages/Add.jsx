import React from "react";
import { useState } from "react";

const Add = () => {
  const [restaurant, setRestaurant] = useState({
    title: "",
    description: "",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const handSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await fetch("http://localhost:5000/restaurant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(restaurant),
      });
      if (response.ok) {
        alert("Restaurant added successfully");
        setRestaurant({ title: "", description: "", img: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div>
        <h1 className="text-2xl text-center mb-4">Add Restaurant</h1>
      </div>
      <form onSubmit={handSubmit} className="space-y-4">
        <label className="input input-bordered flex items-center gap-2">
          Restaurant Name
          <input
            type="text"
            className="grow p-2 border border-gray-300 rounded"
            placeholder="Restaurant Name"
            name="title"
            onChange={handleChange}
            value={restaurant.title}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Restaurant Type
          <input
            type="text"
            className="grow p-2 border border-gray-300 rounded"
            placeholder="Restaurant Type"
            name="description"
            onChange={handleChange}
            value={restaurant.description}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Restaurant ImageUrl
          <input
            type="text"
            className="grow p-2 border border-gray-300 rounded"
            placeholder="Restaurant ImageUrl"
            name="img"
            onChange={handleChange}
            value={restaurant.img}
          />
        </label>
        {restaurant.img && (
          <div className="flex justify-center mt-4">
            <img
              src={restaurant.img}
              alt="Restaurant Preview"
              className="max-w-full h-auto rounded"
              style={{ maxWidth: "500px" }}
            />
          </div>
        )}
        <button
          className="btn   btn-outline btn-primary mx-auto block"
          type="submit"
        >
          Add Restaurant
        </button>
      </form>
    </div>
  );
};

export default Add;
