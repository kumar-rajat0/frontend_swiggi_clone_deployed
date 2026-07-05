import { useEffect, useState } from "react";
import axios from "axios";

function useApiCalling() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await axios.get(
          "https://backend-swiggi-clone-deployed.onrender.com/api/swiggy-restaurants"
        );

        const cards = resp.data?.data?.cards || [];

        const restaurants =
          cards
            .map(
              c =>
                c?.card?.card?.gridElements?.infoWithStyle?.restaurants
            )
            .find(Boolean) || [];

        setData(restaurants);
      } catch (err) {
        console.log(err);
        setData([]);
      }
    }

    fetchData();
  }, []);

  return data;
}

export default useApiCalling;