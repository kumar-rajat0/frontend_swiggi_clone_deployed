(async ()=>{
  try{
    const id = '148045';
    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.69230&lng=76.98600&restaurantId=${id}&submitAction=ENTER`;
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept': 'application/json, text/plain, */*',
        'Referer': 'https://www.swiggy.com/'
      }
    });
    const text = await res.text();
    console.log(text.slice(0,20000));
  }catch(err){
    console.error('Fetch error:', err.message || err);
  }
})();
