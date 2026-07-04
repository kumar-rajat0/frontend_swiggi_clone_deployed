
import { useEffect, useState } from "react"
import axios from 'axios'

function ApiCalling(){
  const[allrestaurants,setAllRestaurants] =  useState([])
useEffect(()=>{
    const Api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.69230&lng=76.98600&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  async function calling(){
      let resp =await axios.get(Api)
    // console.log(resp.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants )
    setAllRestaurants(resp.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }
  calling()
},[])
    return allrestaurants;

}
export default ApiCalling