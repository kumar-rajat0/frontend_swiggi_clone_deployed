import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

function RestaurantDetails() {
  const [menuItems, setMenuItems] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    async function calling() {
      try {
        const API = `https://backend-swiggi-clone-deployed.onrender.com/api/swiggy-menu/${id}`;

        const resp = await axios.get(API);

        const cards = resp.data?.data?.cards;

        const items =
          cards
            ?.find((c) => c?.groupedCard?.cardGroupMap?.REGULAR)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards
            ?.flatMap((c) => c?.card?.card?.itemCards || []);

        setMenuItems(items || []);
      } catch (err) {
        console.log("Menu API error:", err);
      }
    }

    calling();
  }, [id]);

  function handleAddItem(foodItem) {
    dispatch(addItem(foodItem));
  }

  return (
    <div>
      <h1 className="text-center font-bold text-2xl">
        List of items available at restaurant
      </h1>

      {menuItems.map((foodItem, index) => {
        return (
          <div
            key={index}
            className="flex w-3/4 mx-auto mb-10 border-b-4 p-4"
          >
            <div className="flex flex-col w-3/4">
              <h1>{foodItem?.card?.info?.name}</h1>
              <h1>Rs: {foodItem?.card?.info?.price / 100}</h1>
              <h1>{foodItem?.card?.info?.category}</h1>
            </div>

            <img
              className="w-52 h-44 rounded-md border shadow-lg"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${foodItem?.card?.info?.imageId}`}
              alt=""
            />

            <button
              className="border bg-green-300 h-8 relative top-16 right-5"
              onClick={() => handleAddItem(foodItem)}
            >
              Add +
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default RestaurantDetails;