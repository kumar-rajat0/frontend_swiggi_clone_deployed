import React from "react"
function Search({restArr,setAllRestArray}){

    function handleSearch(searchedText){
        setAllRestArray(restArr.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchedText.toLowerCase())))
    }
    return(
        <>
        <input className="border rounded mx-22 mt-3 p-2" placeholder="Search Here..."  onChange={(e)=>handleSearch(e.target.value)} type="text"/>
        </>
    )
}
export default Search