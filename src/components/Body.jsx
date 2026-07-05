import { useEffect, useState } from "react";
import ApiCalling from "./ApiCalling";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";

function Body() {
  const restArr = ApiCalling(); // now SAFE

  const [allRestArray, setAllRestArray] = useState([]);

  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);

  useEffect(() => {
    if (restArr?.length) {
      setAllRestArray(restArr);
    }
  }, [restArr]);

  function handleTopRestaurant() {
    setAllRestArray(
      restArr.filter((r) => r.info.avgRating > 4.2)
    );
    setIsClicked1(true);
    setIsClicked2(false);
  }

  function handleReset() {
    setAllRestArray(restArr);
    setIsClicked1(false);
    setIsClicked2(true);
  }

  return (
    <>
      <h1 className="m-4 font-bold text-2xl b">
        Restaurants With Online Food Delivery
      </h1>

         <button onClick={handleTopRestaurant} className={isClicked1 ? "bg-amber-600 border rounded-2xl w-30 h-10 ml-20" : "border rounded-2xl w-30 h-10 ml-20"}>Rating 4.2+</button>
        <button onClick={handleReset} className={isClicked2 ? "bg-amber-600 border rounded-2xl w-30 h-10 m-1" : "border rounded-2xl w-30 h-10 m-1"}>Reset</button>

      <Search
        restArr={restArr}
        setAllRestArray={setAllRestArray}
      />

      <div className="flex flex-wrap ml-10">
        <RestaurantCard restArr={allRestArray} />
      </div>
    </>
  );
}

export default Body;