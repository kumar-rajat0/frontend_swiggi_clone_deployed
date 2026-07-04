(async ()=>{
  try{
    const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.69230&lng=76.98600&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept': 'application/json, text/plain, */*',
        'Referer': 'https://www.swiggy.com/'
      }
    });
    const json = await res.json();
    const items = json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    console.log(JSON.stringify(items.slice(0,5), null, 2));
  }catch(err){
    console.error('Fetch error:', err.message || err);
  }
})();
