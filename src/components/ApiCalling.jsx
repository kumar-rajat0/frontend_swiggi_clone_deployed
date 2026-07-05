import { useEffect, useState } from "react";
import axios from "axios";

function ApiCalling() {
  const [allrestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    const Api =
      "https://backend-swiggi-clone-deployed.onrender.com/api/swiggy-restaurants";

    async function calling() {
      try {
        let resp = await axios.get(Api);

        const cards = resp.data?.data?.cards;

        const restaurants = cards?.find((c) => {
          return c?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        })?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setAllRestaurants(restaurants || []);
      } catch (err) {
        console.log("API error:", err);
      }
    }

    calling();
  }, []);

  return allrestaurants;
}

export default ApiCalling;