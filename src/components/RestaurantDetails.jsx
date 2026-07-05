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
        const API = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.69230&lng=76.98600&restaurantId=${id}`;

        const resp = await axios.get(API);

        const cards = resp.data?.data?.cards || [];

        let items = [];

        // 🔥 SAFE PARSING (works in Chrome + Firefox + Mobile)
        cards.forEach((card) => {
          const regular =
            card?.groupedCard?.cardGroupMap?.REGULAR?.cards;

          if (regular && Array.isArray(regular)) {
            regular.forEach((r) => {
              if (r?.card?.card?.itemCards) {
                items.push(...r.card.card.itemCards);
              }
            });
          }

          // fallback case
          if (card?.card?.card?.itemCards) {
            items.push(...card.card.card.itemCards);
          }
        });

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
        List of items available at restaurant
      </h1>

      {menuItems.length === 0 ? (
        <h2 className="text-center mt-10">Loading / No Items Found</h2>
      ) : (
        menuItems.map((foodItem) => (
          <div
            key={foodItem.card.info.id}
            className="flex w-3/4 mx-auto mb-10 border-b-4 p-4"
          >
            {/* LEFT SIDE TEXT */}
            <div className="flex flex-col w-3/4">
              <h1 className="font-bold text-lg">
                {foodItem.card.info.name}
              </h1>

              <h1>Rs: {foodItem.card.info.price / 100}</h1>

              <h1>{foodItem.card.info.category}</h1>
            </div>

            {/* IMAGE */}
            <img
              className="w-52 h-44 rounded-md border shadow-lg border-gray-100"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${foodItem.card.info.imageId}`}
              alt=""
            />

            {/* ADD BUTTON */}
            <button
              className="border bg-green-300 h-8 relative top-16 right-5 focus:bg-red-800 px-2"
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