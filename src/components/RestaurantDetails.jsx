import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RestaurantDetails() {
  const [menuItems, setMenuItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchMenu() {
      try {
        const API = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.69230&lng=76.98600&restaurantId=${id}`;

        const resp = await axios.get(API);

        const cards = resp.data?.data?.cards || [];

        // 🔥 SAFE SEARCH (no fixed index)
        const regularCard = cards.find(
          (c) => c?.groupedCard?.cardGroupMap?.REGULAR
        );

        const itemCards =
          regularCard?.groupedCard?.cardGroupMap?.REGULAR?.cards
            ?.flatMap((c) => c?.card?.card?.itemCards || []) || [];

        setMenuItems(itemCards);
      } catch (err) {
        console.log("Menu error:", err);
        setMenuItems([]);
      }
    }

    fetchMenu();
  }, [id]);

  return (
    <div>
      <h1 className="text-center font-bold text-2xl">
        Menu Items
      </h1>

      {menuItems.length === 0 ? (
        <h2 className="text-center mt-10">No menu found</h2>
      ) : (
        menuItems.map((foodItem) => (
          <div key={foodItem.card.info.id}>
            <h2>{foodItem.card.info.name}</h2>
          </div>
        ))
      )}
    </div>
  );
}

export default RestaurantDetails;