function getDeals(){
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=0&steamRating=0&desc=0&output=json&steamworks=0&sortBy=Deal%20Rating&AAA=0&pageSize=60&exact=0&upperPrice=50&pageNumber=0&onSale=0&metacritic=0&storeID%5B0%5D=1%2C2%2C3",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": CS_API_KEY,
            "X-RapidAPI-Host": "cheapshark-game-deals.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}


$('#deals').click(function(e) {
   const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=0&steamRating=0&desc=0&output=json&steamworks=0&sortBy=Deal%20Rating&AAA=0&pageSize=60&exact=0&upperPrice=50&pageNumber=0&onSale=0&metacritic=0&storeID%5B0%5D=1%2C2%2C3",
      "method": "GET",
      "headers": {
         "X-RapidAPI-Key": CS_API_KEY,
         "X-RapidAPI-Host": "cheapshark-game-deals.p.rapidapi.com"
      }
   };

   $.ajax(settings).done(function (response) {
      console.log(response);
   });
});

function displayGame(data) {
   const title = data.title[0]
   const titleH5 = document.getElementById('title');
}


