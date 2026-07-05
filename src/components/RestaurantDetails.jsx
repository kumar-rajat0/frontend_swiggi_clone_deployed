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

       const cards =
  resp.data?.data?.cards ||
  resp.data?.cards ||
  [];

        let items = [];

        const findItems = (obj) => {
          if (!obj) return;

          if (obj?.itemCards && Array.isArray(obj.itemCards)) {
            items.push(...obj.itemCards);
          }

          if (typeof obj === "object") {
            Object.values(obj).forEach(findItems);
          }
        };

        cards.forEach((card) => findItems(card));

        setMenuItems(items);
      } catch (err) {
        console.log("Menu API error:", err);
        setMenuItems([]);
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
        Restaurant Menu
      </h1>

      {menuItems.length === 0 ? (
        <h2 className="text-center mt-10">Loading / No Items Found</h2>
      ) : (
        menuItems.map((foodItem) => (
          <div
            key={foodItem?.card?.info?.id}
            className="flex w-3/4 mx-auto mb-10 border-b-4 p-4"
          >
            <div className="flex flex-col w-3/4">
              <h1 className="font-bold text-lg">
                {foodItem?.card?.info?.name}
              </h1>

              <h1>
                Rs: {(foodItem?.card?.info?.price || 0) / 100}
              </h1>

              <h1>{foodItem?.card?.info?.category}</h1>
            </div>

            <button
              className="border bg-green-300 px-3"
              onClick={() => handleAddItem(foodItem)}
            >
              Add +
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default RestaurantDetails;