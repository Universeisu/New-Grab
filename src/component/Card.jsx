import React from "react";
import Swal from "sweetalert2";
import { useAuthContext } from "../context/AuthContext";
import RestuarantService from "../services/restaurant.service";

const Card = ({ id, imageUrl, name, type }) => {
  const { user } = useAuthContext();

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await RestuarantService.deleteRestaurant(id);
          Swal.fire(
            "Deleted!",
            `Restaurant id=${id} has been deleted.`,
            "success"
          ).then(() => {
            window.location.reload();
          });
        } catch (err) {
          Swal.fire(
            "Error!",
            `Error deleting restaurant: ${err.message}`,
            "error"
          );
        }
      }
    });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl h-96 mx-4 mb-4">
      <figure>
        <img src={imageUrl} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{type}</p>

        {user &&
          (user.roles.includes("ROLES_MODERATOR") ||
            user.roles.includes("ROLES_ADMIN")) && (
            <div className="card-actions justify-end">
              {user.roles.includes("ROLES_ADMIN") && (
                <button
                  className="btn btn-error"
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </button>
              )}
              <a href={`/edit/${id}`} className="btn btn-warning">
                Edit
              </a>
            </div>
          )}
      </div>
    </div>
  );
};

export default Card;